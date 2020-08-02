// Excution Context
/*
One strategy for writing software is to break our code up into separate pieces.
Though these “pieces” have many different names (functions, modules, packages, etc),
they all exist for a single purpose - to break apart and manage the complexity in our applications.
Now instead of thinking like someone authoring code,
think in terms of the JavaScript engine whose job is to interpret code.
Can we use that same strategy, separating code into pieces,
to manage the complexity of interpreting code just like we did in order to write it?
Turns out we can and these “pieces” are called Execution Contexts.
Just like functions/modules/packages allow you to manage the complexity of writing code,
Execution Contexts allow the JavaScript engine to manage the complexity of interpreting and running your code.
So now that we know the purpose of Execution Contexts,
the next questions we need to answer are how do they get created and what do they consist of?
*/

/*
The first Execution Context that gets created when the JavaScript engine runs your code is called the “Global Execution Context”.
 Initially this Execution Context will consist of two things - a global object and a variable called this. 
 this will reference the global object which will be window if you’re running JavaScript in the browser or global if you’re running it in a Node environment.
*/

// lets adding A few variable and function and see what happens
let name = "Hossam";
let email = "hossamomar9876@gmail.com";

function getUser() {
  return {
    name: name,
    email: email,
  };
}

// https://ui.dev/post-images/global-variables-in-creation-phase.png
