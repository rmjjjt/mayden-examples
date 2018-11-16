const ora = require('ora');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
}, 1000);

// If you've ever used npm-check -u, you might have seen one of these before...