const { defineConfig } = require('vite')

// Relative base so the build works on GitHub Pages whatever the repo is called.
module.exports = defineConfig({
  base: './'
})
