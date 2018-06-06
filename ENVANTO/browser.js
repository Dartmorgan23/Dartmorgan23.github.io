var bs = require("browser-sync").create();

// Start the server
bs.init({server: './'});

bs.watch('index.html').on('change',bs.reload);
bs.watch('css/*.css').on('change',bs.reload);
bs.watch('js/*.js').on('change',bs.reload);