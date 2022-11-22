const { readFileSync, writeFileSync } = require('fs')
//Same as const a = require
console.log('start');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second);

//if file is notpresent it will create 
writeFileSync(
    './content/result-sync.txt',
    `Here is th44e result : ${first}, ${second}`, //created result-sync.txt,else override
    {flag: 'a'} //create new line when overriding
)

console.log('done with this task')
console.log('starting the next one')