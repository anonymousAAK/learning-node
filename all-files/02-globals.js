// GLOBALS  - NO WINDOW !!!!


//These are global variables in  node

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)


//Print helloworld every 1 second
setInterval(() => {
  console.log('hello world')
}, 1000)
