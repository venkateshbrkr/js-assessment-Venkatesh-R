exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0],arr[1],arr.punctuation);
  },

  speak: function(fn, obj) {     
      return fn.call(obj);
  },

  functionFunction: function(str) {
    var concatfn = function(suffix){
      return str + ', ' +suffix;
    };
    return concatfn;
  },

  makeClosures: function(arr, fn) {
   return arr.map(function(item){
        return (function(item){
          return function(){
            return fn(item);
          }
        })(item);
      });
  },

  partial: function(fn, str1, str2) {
    var part = function(punctuation){
       return fn(str1,str2,punctuation);
     };
     return part;
  },

  useArguments: function() {
    var sum =0;
    for (var i = 0; i < arguments.length; i++) {
       sum += arguments[i];
     }
     return sum;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
     fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {   
   var args = Array.prototype.slice.call(arguments, 1, arguments.length);
  return function () {
       var moreArgs = args.concat(Array.prototype.slice.call(arguments));
       return fn.apply(null, moreArgs);
     };
  },

  curryIt: function(fn) {
    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);
        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;
        if (allArgumentsProvided) {
          return fn.apply(null, accumulatedArguments);
        } else {
          return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
        }
      };
    }
    return getArgumentAccumulator([], fn.length);
  }  
};
