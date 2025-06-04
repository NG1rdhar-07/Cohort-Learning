const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to count words in a file')
  .version('0.8.0');

program
  .argument('<file>', 'file path to count words from')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err.message);
        return;
      }

      // Match all non-whitespace sequences as words
      const words = data.trim().split(/\s+/);
      const wordCount = words.filter(Boolean).length;

      console.log(`You have ${wordCount} words in this file`);
    });
  });

program.parse();
