const { promises: fs } = require('fs');
const { resolve } = require('path');

(async () => {
  const distDir = resolve(__dirname, 'dist');
  const assetsDir = resolve(distDir, 'assets');
  await fs.mkdir(assetsDir, { recursive: true });

  // Copy Genesys font files
  await Promise.all([
    fs.copyFile(resolve(__dirname, 'assets', 'genesys.woff2'), resolve(assetsDir, 'genesys.woff2')),
    fs.copyFile(resolve(__dirname, 'assets', 'genesys.woff'), resolve(assetsDir, 'genesys.woff')),
    fs.writeFile(resolve(distDir, '.nojekyll'), '')
  ]);
})();
