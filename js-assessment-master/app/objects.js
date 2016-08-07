exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
     return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
var prop =[];
for(var proper in obj)
{
  if(obj.hasOwnProperty(proper))
  {
     prop.push(proper + ': '+ obj[proper]);
  }
}
return prop;
  }
};
