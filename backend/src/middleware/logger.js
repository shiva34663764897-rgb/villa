export function createLogger({ nodeEnv = 'development' } = {}) {
  const write = (level, event, meta = {}) => {
    const entry = {
      timestamp: new Date().toISOString(),
      level,
      event,
      ...meta
    };
    const line = JSON.stringify(entry);
    if (level === 'error') console.error(line);
    else if (level === 'warn') console.warn(line);
    else console.log(line);
  };

  return {
    info: (event, meta) => write('info', event, meta),
    warn: (event, meta) => write('warn', event, meta),
    error: (event, meta) => write('error', event, meta),
    environment: nodeEnv
  };
}
