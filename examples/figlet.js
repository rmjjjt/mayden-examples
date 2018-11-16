const figlet = require('figlet');

figlet('KHAAAAAAAAAAAAAAAN', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});