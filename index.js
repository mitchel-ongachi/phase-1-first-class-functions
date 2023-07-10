function receivesAFunction(callback) {
    callback();
  }
  receivesAFunction(function() {
    console.log("This is a callback function");
  });

function returnsANamedFunction() {
    function namedFunction() {
      return "This is a named function";
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
      return "This is an anonymous function";
    };
  }