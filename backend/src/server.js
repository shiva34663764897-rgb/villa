import http from 'node:http';
import app from './app.js';

const port = Number(process.env.API_PORT || 3001);

http.createServer(app).listen(port, () => {
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    level: 'info',
    event: 'server_started',
    port
  }));
});
