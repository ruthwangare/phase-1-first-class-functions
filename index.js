// The receivesAFunction function
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }

  // The returnsANamedFunction function
  function returnsANamedFunction() {
    // Define a named function and return it
    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }

  // The returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      console.log("This is an anonymous function");
    };
  }
