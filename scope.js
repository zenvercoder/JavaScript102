// variable declaration with an initialization.. two separate operations
// in the first pass, the compiler is going to go through and look for all of the variable declarations it can find (including function declarations)(first pass = scope resolution, compilation phase)
// (Compiler having a conversation with scope portion of the engine.. the scope manager)
// Compiler : "Hey scope manager! I see a variable declaration for an identifier called foo. Which current scope am I in?" "The global scope."  "I want to register the foo identifier into my current scope which happens to be the global scope"
var foo = "bar";
// second pass. There is no more var anymore. we handled that in compilation phase. Now we are on Execution phase
// execution phase (second pass)
// LHS v RHS = left hand side, right hand side (of an assignment. an equal operator. foo is our LHS reference)(you can have an LHS and RHS even when we don't see an equal operator, like when you pass in a variable to a function call. It's not obvious bc you cant see an equal sign, but there is a source and there is a target)(LHS is the target. RHS is the source)
// "Hey global scope. I have an LHS reference for a variable called foo. Have you ever heard of it?"
// Scope manager: "Yes, I've heard of him. It is the variable foo"

// Compiler: "I see a function declaration with an identifier named bar. We are going to register the function into the scope of bar"
// JustInTime Compiler: "I'm going to defer registering the function into the scope of bar until it is called."
// HotSwapping (many engines like firefox will defer compilation and try to make a best guess as to how you are going to use a function, make inferences about types b/c it doesn't have enough time and information. They'll let the function run and monitor how well the guess was. "Did we guess correctly? Is it being used in the way that we think it is? If not, then let's throw away the compilation and start over (C compilers knows all the inputs, output and types)
function bar (){
    // Compiler: "Hey, scope of bar I have a new declaration to declare. His identifier is foo."
    // the function bar is now compiled" (Compiler having a conversation with scope portion of the engine.. the scope manager)
    var foo = "baz";
    // We are done with the function bar. Popping ourselves back out to the global scope
}
// Execution phase: we are inside scope of bar now. need to execute function bar.
// Compiler: "Hey scope of bar, do you have a variable called foo? I have an LHS reference for a variable called foo. Ever heard of him?"
// Scope Manager: "It's in my scope of bar definiton because I have a parameter named after that." It will hand us back a reference, we go the right hand side, there is an immediate value
// so we can execute the assignment operation foo = "baz"

// Compiler: "Hey global scope I have a declaration for a new identifier called baz. It happens to be a function declaration. Go ahead and add him to your declaration list for the global scope. Now let's recursively descend into the function baz and compile it."
// "Theres an implicit declaration b/c we have a named parameter called foo which will be treated like a local variable." There's a declaration we need to declare
// Compiler: "Which scope are we in?"
// Scope Manager: "baz."
// Compiler: "Hey scope of baz. I have a declaration for a new variable. He's called foo. I need you to register him there"
// Do we see any more declarations? No.
// Scope Manager: "Ok great, we're done."
function baz(foo){
    foo = "bam";
    bam = "yay";
}
// Execution phase
// Compiler: "Hey scope of baz. I have an LHS reference for a variable called foo. Ever heard of him?"
// Scope Manager: "It's in my definition b/c I have a parameter named after that. I have a local variable called foo that I can reference." *hands back a reference to that so we can assign a value to it. We assign bam into the foo
// Trying to execute bam = "yay"
// Compiler: "Hey scope of baz. I have an LHS reference for a variable called "bam". Ever heard of him?"
// Scope Manager: "Never heard of him. I cannot fulfill that reference for bam b/c ito's not in local scope. Let's go out one level of scope into global scope."
// Compiler: "Hey global scope. I hav an LHS reference for aa variable called "bam". Ever heard of him?"
// Scope Manager: (unfortunate response b/c we would expect global scope to say No, never heard of him) Becausee we are in non-strict mode and we have an LHS reference and we got to the global scope, the scope manager will go ahead and create a bam for us in the global scope... not the local scope, but the global scope
//  "Yes, I just created him for you because we have an LHS reference and we got to the global scope and we are in non-strict mode"
// Now we have a leaked a global variable. We tried to assign a variable that had not been declared


// First pass = compilation phase
// Second pass = execution phase
// Conversation btwn Compiler and Scope Manager (scope portion of the engine)
// LHS v RHS = left hand side v right hand side (of an assignment (an = operator))
// variable declaration w identifier
// function declaration w identifier
// Compiler: "Hey (global) scope I have a declaration for a new identifier....
// undeclared variable = we were unable to find a proper LHS in any of the scopes that we have access to

// undeclared v undefined
// undeclared is what it should have been called when there is no present declaration for the variable in any of the scopes that we have access to
// undefined... was declared but he has this empty value that we mistakenly call undeclared.
// function declaration: function keyword followed by a name followed by a block of code. an argument list and a body
