// Variable Declarations
// 'let' and 'const' are two relatively new types of variable declaration in JavaScript.
// As we mentioned earlier, 'let' is similar to 'var' in some respects, but allows users to avoid some of the common "gotchas" that users run into in JavaScript.
// 'const' is an augmentation of 'let' in that it prevents re-assignment to a variable.
// With TypeScript being a superset of JavaScript, the language naturally supports 'let' and 'const'. 
// Here we'll elaborate more on these new declarations and why they're preferable to 'var'.
// If you've used JavaScript offhandedly, the next section might be a good way to refresh your memory.\
// If you're intimately familiar with all the quirks of 'var' declarations in JavaScript, you might find it easier to skip ahead.

// var declarations
// Declaring a variable in JavaScript has always traditionally been done with the 'var' keyword.
var a = 10;
// As you might've figured out, we just declared a variable named 'a' with the value '10'.
// We can also declare a variable inside of a function:
function f1() {
    var message = "Hello World!";
    return message;
}
// and we can also access those same variables within other functions:
function f2() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}
var g = f2();
g(); // returns '11'
// In this above example, 'g' captured the variable 'a' declared in 'f2'.
// At any point that 'g' gets called, the value of 'a' will be tied to the value of 'a' in 'f2'.
// Even if 'g' is called once 'f2' is done running, it will be able to access and modify 'a'.
function f3() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;

    function g() {
        return a;
    }
}
f3(); // returns '2'

// Scoping rules
// 'var' declarations have some odd scoping rules for those used to other languages.
// Take the following example:
function f4(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
f4(true); // return '10'
f4(false); // return 'undefined'
// Some readers might do a double-take at this example. 
// The variable 'x' was declared within the 'if' block, and yet we were able to access it from outside that block.
// That's because 'var' declarations are accessible anywhere within their containing function, module, namespace, or global scope - all which we'll go over later on - regardless of the containing block.
// Some people call this 'var'-scoping or function-scoping.
// Parameters are also function scoped. 