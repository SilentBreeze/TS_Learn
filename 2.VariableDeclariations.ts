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
g();