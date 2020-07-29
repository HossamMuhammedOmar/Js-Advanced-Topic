// We have three benefits in js modules //
// 1 -> Maintainabilty
// 2 -> Avoid Namespacing pollution
// 3 -> Reusability

/////////=> Each module has three parts - dependencies (also called imports), code, and exports

/* 
 Dependencies (Imports):
    When one module needs another module, 
    it can import that module as a dependency.
    For example, whenever you want to create a React component,
    you need to import the react module.
    If you want to use a library like lodash, you'd need import the lodash module.
*/

/*
 Code:
    After you've established what dependencies your module needs,
    the next part is the actual code of the module.
*/

/*
 Exports:
    Exports are the "interface" to the module.
    Whatever you export from a module will be available to whoever imports that module.
*/

// imports
// import React from "react";
// import { createMemoryHistory } from "history";
// import Router from "./Router";

// // code
// class MemoryRouter extends React.Component {
//   history = createMemoryHistory(this.props);
//   render() {
//     return (
//       <Router
//         history={this.history}
//         children={this.props.children}
//       />;
//     )
//   }
// }

// // exports
// export default MemoryRouter;

function userData() {
  let users = ["hossam", "ahmed", "omar"];

  function getUser() {
    return users;
  }

  APP.getUser = getUser;
}
