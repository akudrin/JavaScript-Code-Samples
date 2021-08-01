
#!/usr/bin/env node
var phantom = require('phantom'); var program = require('commander');
program
   .version ('0.0.1')
   .option ('-s, --source [website]', 'Source website')
   .option ('-f, --file [filename]', 'Filename')
   .parse(process.argv);
phantom.create(function (ph) { ph.createPage(function (page) {
page.open(program.source, function (status) { console.log("opened " + program.source, status); page.render(program.file, function() {
        ph.exit();
      });
}); });
});
