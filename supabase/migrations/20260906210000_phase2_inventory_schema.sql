-- Phase 2: Supabase/PostgreSQL database schema
-- Scope: schema only. No data migration, seed data, API, CRM, AI, WhatsApp, or automation.
-- The application backend is the intended privileged data-access boundary.

begin;

-- PostGIS is required for plot master-plan geometry.
-- Supabase commonly installs extensions into the extensions schema.
create extension if not exists postgis with schema extensions;

-- -----------------------------------------------------------------------------
-- Enums
-- -----------------------------------------------------------------------------

do $$
begin
  if not exists (select 1 from pg_type where typname = 'property_type') then
    create type public.property_type as enum (
      'PLOT',
      'APARTMENT',
      'VILLA',
      'FARM_LAND'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'inventory_status') then
    create type public.inventory_status as enum (
      'AVAILABLE',
      'RESERVED',
      'SOLD'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'site_visit_status') then
    create type public.site_visit_status as enum (
      'REQUESTED',
      'CONFIRMED',
      'COMPLETED',
      'CANCELLED',
      'NO_SHOW',
      'RESCHEDULED'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'booking_status') then
    create type public.booking_status as enum (
      'INITIATED',
      'PENDING',
      'CONFIRMED',
      'CANCELLED',
      'COMPLETED'
    );
  end if;
end;
$$;

-- -----------------------------------------------------------------------------
-- Shared timestamp helper
-- -----------------------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- -----------------------------------------------------------------------------
-- Projects
-- -----------------------------------------------------------------------------

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  project_type text,
  status text,
  developer_name text,
  rera_number text,
  total_area numeric,
  area_unit text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint projects_total_area_check check (total_area is null or total_area > 0),
  constraint projects_rera_number_unique unique (rera_number)
);

-- PostgreSQL unique constraints already allow multiple NULLs, so the RERA
-- constraint is naturally "unique where provided".

-- -----------------------------------------------------------------------------
-- Properties / inventory
-- -----------------------------------------------------------------------------

create table public.properties (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete restrict,
  property_code text not null,
  slug text,
  property_type public.property_type not null,
  inventory_status public.inventory_status not null default 'AVAILABLE',
  title text,
  description text,
  area numeric,
  area_unit text,
  price numeric,
  currency text,
  metadata jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint properties_project_code_unique unique (project_id, property_code),
  constraint properties_area_check check (area is null or area > 0),
  constraint properties_price_check check (price is null or price >= 0)
);

-- -----------------------------------------------------------------------------
-- Apartment hierarchy
-- Project -> Tower -> Floor -> Apartment property
-- -----------------------------------------------------------------------------

create table public.towers (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete restrict,
  name text,
  code text not null,
  total_floors integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint towers_project_code_unique unique (project_id, code),
  constraint towers_total_floors_check check (total_floors is null or total_floors >= 0)
);

create table public.floors (
  id uuid primary key default gen_random_uuid(),
  tower_id uuid not null references public.towers(id) on delete restrict,
  floor_number integer not null,
  floor_label text,
  created_at timestamptz not null default now(),
  constraint floors_tower_floor_unique unique (tower_id, floor_number)
);

create table public.apartment_details (
  property_id uuid primary key references public.properties(id) on delete restrict,
  tower_id uuid not null references public.towers(id) on delete restrict,
  floor_id uuid not null references public.floors(id) on delete restrict,
  unit_number text,
  bedrooms integer,
  bathrooms numeric,
  balconies integer,
  carpet_area numeric,
  built_up_area numeric,
  facing text,
  parking_spaces integer,
  constraint apartment_bedrooms_check check (bedrooms is null or bedrooms >= 0),
  constraint apartment_bathrooms_check check (bathrooms is null or bathrooms >= 0),
  constraint apartment_balconies_check check (balconies is null or balconies >= 0),
  constraint apartment_carpet_area_check check (carpet_area is null or carpet_area > 0),
  constraint apartment_built_up_area_check check (built_up_area is null or built_up_area > 0),
  constraint apartment_parking_spaces_check check (parking_spaces is null or parking_spaces >= 0)
);

-- -----------------------------------------------------------------------------
-- Type-specific inventory details
-- -----------------------------------------------------------------------------

create table public.plot_details (
  property_id uuid primary key references public.properties(id) on delete restrict,
  plot_number text,
  plot_area numeric,
  area_unit text,
  geometry extensions.geometry(Polygon, 4326),
  centroid extensions.geometry(Point, 4326),
  label_x numeric,
  label_y numeric,
  rotation numeric,
  display_order integer,
  constraint plot_area_check check (plot_area is null or plot_area > 0),
  constraint plot_display_order_check check (display_order is null or display_order >= 0),
  constraint plot_geometry_valid_check check (geometry is null or extensions.st_isvalid(geometry)),
  constraint plot_centroid_valid_check check (centroid is null or extensions.st_isvalid(centroid))
);

create table public.villa_details (
  property_id uuid primary key references public.properties(id) on delete restrict,
  villa_type text,
  bedrooms integer,
  bathrooms numeric,
  built_up_area numeric,
  plot_area numeric,
  floors integer,
  parking_spaces integer,
  facing text,
  private_amenities jsonb,
  constraint villa_bedrooms_check check (bedrooms is null or bedrooms >= 0),
  constraint villa_bathrooms_check check (bathrooms is null or bathrooms >= 0),
  constraint villa_built_up_area_check check (built_up_area is null or built_up_area > 0),
  constraint villa_plot_area_check check (plot_area is null or plot_area > 0),
  constraint villa_floors_check check (floors is null or floors >= 0),
  constraint villa_parking_spaces_check check (parking_spaces is null or parking_spaces >= 0)
);

create table public.farm_land_details (
  property_id uuid primary key references public.properties(id) on delete restrict,
  parcel_number text,
  land_area numeric,
  area_unit text,
  soil_type text,
  water_source text,
  road_access text,
  electricity_available boolean,
  fencing boolean,
  constraint farm_land_area_check check (land_area is null or land_area > 0)
);

-- -----------------------------------------------------------------------------
-- Property media
-- -----------------------------------------------------------------------------

create table public.property_images (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete cascade,
  storage_path text not null,
  alt_text text,
  sort_order integer not null default 0,
  is_primary boolean not null default false,
  created_at timestamptz not null default now(),
  constraint property_images_sort_order_check check (sort_order >= 0)
);

create table public.property_videos (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete cascade,
  storage_path text not null,
  thumbnail_path text,
  title text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  constraint property_videos_sort_order_check check (sort_order >= 0)
);

create table public.property_floor_plans (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete cascade,
  storage_path text not null,
  title text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  constraint property_floor_plans_sort_order_check check (sort_order >= 0)
);

-- -----------------------------------------------------------------------------
-- Project information
-- -----------------------------------------------------------------------------

create table public.amenities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  icon text,
  created_at timestamptz not null default now()
);

create table public.project_amenities (
  project_id uuid not null references public.projects(id) on delete cascade,
  amenity_id uuid not null references public.amenities(id) on delete restrict,
  primary key (project_id, amenity_id)
);

create table public.project_locations (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete restrict,
  location_type text,
  address_line text,
  city text,
  district text,
  state text,
  postal_code text,
  latitude numeric,
  longitude numeric,
  map_url text,
  is_primary boolean not null default false,
  constraint project_locations_latitude_check check (latitude is null or latitude between -90 and 90),
  constraint project_locations_longitude_check check (longitude is null or longitude between -180 and 180)
);

create table public.project_landmarks (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete restrict,
  name text,
  landmark_type text,
  distance_value numeric,
  distance_unit text,
  travel_time_minutes integer,
  latitude numeric,
  longitude numeric,
  sort_order integer not null default 0,
  constraint project_landmarks_distance_check check (distance_value is null or distance_value >= 0),
  constraint project_landmarks_travel_time_check check (travel_time_minutes is null or travel_time_minutes >= 0),
  constraint project_landmarks_sort_order_check check (sort_order >= 0),
  constraint project_landmarks_latitude_check check (latitude is null or latitude between -90 and 90),
  constraint project_landmarks_longitude_check check (longitude is null or longitude between -180 and 180)
);

-- -----------------------------------------------------------------------------
-- Inventory status audit
-- -----------------------------------------------------------------------------

create table public.inventory_status_history (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete restrict,
  from_status public.inventory_status,
  to_status public.inventory_status not null,
  changed_by uuid references auth.users(id) on delete set null,
  reason text,
  created_at timestamptz not null default now(),
  constraint inventory_status_history_transition_check check (
    from_status is null or from_status <> to_status
  )
);

-- -----------------------------------------------------------------------------
-- Future CRM foundation
-- -----------------------------------------------------------------------------

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  phone text,
  email text,
  source text,
  status text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.lead_properties (
  lead_id uuid not null references public.leads(id) on delete restrict,
  property_id uuid not null references public.properties(id) on delete restrict,
  interest_type text,
  notes text,
  created_at timestamptz not null default now(),
  primary key (lead_id, property_id)
);

create table public.site_visits (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete restrict,
  property_id uuid not null references public.properties(id) on delete restrict,
  requested_at timestamptz,
  scheduled_at timestamptz,
  status public.site_visit_status not null default 'REQUESTED',
  confirmed_at timestamptz,
  confirmed_by uuid references auth.users(id) on delete set null,
  completed_at timestamptz,
  cancelled_at timestamptz,
  cancellation_reason text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete restrict,
  property_id uuid not null references public.properties(id) on delete restrict,
  status public.booking_status not null default 'INITIATED',
  booking_reference text,
  amount numeric,
  currency text,
  booked_at timestamptz,
  confirmed_at timestamptz,
  confirmed_by uuid references auth.users(id) on delete set null,
  cancelled_at timestamptz,
  cancellation_reason text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint bookings_amount_check check (amount is null or amount >= 0)
);

-- -----------------------------------------------------------------------------
-- Updated-at triggers
-- -----------------------------------------------------------------------------

create trigger projects_set_updated_at
before update on public.projects
for each row execute function public.set_updated_at();

create trigger properties_set_updated_at
before update on public.properties
for each row execute function public.set_updated_at();

create trigger towers_set_updated_at
before update on public.towers
for each row execute function public.set_updated_at();

create trigger leads_set_updated_at
before update on public.leads
for each row execute function public.set_updated_at();

create trigger site_visits_set_updated_at
before update on public.site_visits
for each row execute function public.set_updated_at();

create trigger bookings_set_updated_at
before update on public.bookings
for each row execute function public.set_updated_at();

-- -----------------------------------------------------------------------------
-- Indexes
-- Primary keys and unique constraints already create their own indexes.
-- Only additional access-path indexes are created below.
-- -----------------------------------------------------------------------------

create index properties_project_id_idx on public.properties(project_id);
create index properties_property_type_idx on public.properties(property_type);
create index properties_inventory_status_idx on public.properties(inventory_status);
create index properties_project_status_idx on public.properties(project_id, inventory_status);
create index properties_slug_idx on public.properties(slug) where slug is not null;

create index towers_project_id_idx on public.towers(project_id);
create index floors_tower_id_idx on public.floors(tower_id);

create index apartment_details_tower_id_idx on public.apartment_details(tower_id);
create index apartment_details_floor_id_idx on public.apartment_details(floor_id);

create index property_images_property_id_idx on public.property_images(property_id);
create index property_videos_property_id_idx on public.property_videos(property_id);
create index property_floor_plans_property_id_idx on public.property_floor_plans(property_id);

create index project_amenities_amenity_id_idx on public.project_amenities(amenity_id);
create index project_locations_project_id_idx on public.project_locations(project_id);
create index project_landmarks_project_id_idx on public.project_landmarks(project_id);

create index inventory_status_history_property_id_idx on public.inventory_status_history(property_id);
create index inventory_status_history_created_at_idx on public.inventory_status_history(created_at);

create index leads_phone_idx on public.leads(phone) where phone is not null;
create index leads_email_idx on public.leads(email) where email is not null;
create index leads_status_idx on public.leads(status) where status is not null;

create index lead_properties_property_id_idx on public.lead_properties(property_id);

create index site_visits_lead_id_idx on public.site_visits(lead_id);
create index site_visits_property_id_idx on public.site_visits(property_id);
create index site_visits_status_idx on public.site_visits(status);
create index site_visits_scheduled_at_idx on public.site_visits(scheduled_at) where scheduled_at is not null;

create index bookings_lead_id_idx on public.bookings(lead_id);
create index bookings_property_id_idx on public.bookings(property_id);
create index bookings_status_idx on public.bookings(status);

create index plot_details_geometry_gist_idx
  on public.plot_details using gist (geometry)
  where geometry is not null;

-- -----------------------------------------------------------------------------
-- RLS / privileges
--
-- The approved architecture keeps the browser behind the backend/API boundary.
-- Therefore anon/authenticated receive no direct table privileges at this stage.
-- RLS is enabled on every application table. The backend can use the
-- server-side service role, which is never exposed to the browser.
-- No permissive client policy is created before the application authentication
-- and CRM authorization model is finalized.
-- -----------------------------------------------------------------------------

alter table public.projects enable row level security;
alter table public.properties enable row level security;
alter table public.towers enable row level security;
alter table public.floors enable row level security;
alter table public.plot_details enable row level security;
alter table public.apartment_details enable row level security;
alter table public.villa_details enable row level security;
alter table public.farm_land_details enable row level security;
alter table public.property_images enable row level security;
alter table public.property_videos enable row level security;
alter table public.property_floor_plans enable row level security;
alter table public.amenities enable row level security;
alter table public.project_amenities enable row level security;
alter table public.project_locations enable row level security;
alter table public.project_landmarks enable row level security;
alter table public.inventory_status_history enable row level security;
alter table public.leads enable row level security;
alter table public.lead_properties enable row level security;
alter table public.site_visits enable row level security;
alter table public.bookings enable row level security;

revoke all on table
  public.projects,
  public.properties,
  public.towers,
  public.floors,
  public.plot_details,
  public.apartment_details,
  public.villa_details,
  public.farm_land_details,
  public.property_images,
  public.property_videos,
  public.property_floor_plans,
  public.amenities,
  public.project_amenities,
  public.project_locations,
  public.project_landmarks,
  public.inventory_status_history,
  public.leads,
  public.lead_properties,
  public.site_visits,
  public.bookings
from anon, authenticated;

-- Explicitly keep the migration free of public write policies. In Supabase,
-- RLS without a matching policy denies publishable-key access; service_role
-- remains the server-side privileged path.

commit;
