import { createServer } from 'vite';

let viteServer;

async function startDev() {
  viteServer = await createServer({ configFile: './vite.config.js' });
  await viteServer.listen();
  console.log(`Vite dev server running on port ${viteServer.config.server.port}`);
}

startDev();
