const fs = require('fs');


// fs.writeFile('log.txt', `${process.argv[2]}`, (err) =>

//     err? console.log(err) : console.log('Commit Logged')

// )

fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>

err? console.log(err) : console.log('Commit Logged')
);

