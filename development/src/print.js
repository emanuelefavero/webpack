export default function printMe() {
  // Intentional error to check webpack source map (open dev tool and check the console, it will output the exact line of code that caused the error)
  cnsole.log('I get called from print.js!')
}
