#Scope

* Where to look for things. Where was the variable declared? Looking for lexical identifiers. Other important thing: who is doing the looking? 
* Compiler looks for blocks of scope. The smallest unit of scope is the function. Find declaration of variables and put it into the appropriate scope slot. Code Will get passed through once by the compiler, then a few micro seconds later a second pass through = ex

* First pass = compilation phase
* Second pass = execution phase
* Conversation btwn Compiler and Scope Manager (scope portion of the engine)
* LHS v RHS = left hand side v right hand side (of an assignment (an = operator))
* variable declaration w identifier
* function declaration w identifier
* Compiler: "Hey (global) scope I have a declaration for a new identifier....
* function declaration = function keyword followed by a name followed by a block of code. an argument list and a body
* Compiler: "Hey scope of _____, I have an LHS reference for a variable called _______. Ever heard of him?"
