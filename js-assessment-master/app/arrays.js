exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var a = arr.indexOf(item);
     return a; 
  },

  sum: function(arr) {
    var sum =0;
    for(var i=arr.length;i--;)
    {
      sum +=arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {   
   for(var i=arr.length -1;i>=0;i--)
   {
      if(arr[i] == item)
     {
          arr.splice(i,1);
      }
   }
   return arr;
  },

  removeWithoutCopy: function(arr, item) {
for(var i=arr.length -1;i>=0;i--)
   {
      if(arr[i] == item)
     {
          arr.splice(i,1);
      }
   }
   return arr;
  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) { 
     arr.pop();   
   return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count: function(arr, item) 
  {  
   var ii = 0;
   for(var i=0;i<arr.length;i++)
   {   
    if(arr[i] === item)
    {      
       ii++;
    }
   }
   return ii;
  },

  duplicates: function(arr) {
var sorted = arr.slice().sort(); 
var dup = [];
for(var i=0;i<arr.length-1;i++)
{
if(sorted [i+1] == sorted[i])
{
  var index = dup.indexOf(sorted[i]);
  if (index <0)
  {
  dup.push(sorted[i]);
  }
}
}
return dup;
  },

  square: function(arr) {
return arr.map(function(x){
  return Math.pow(x,2);
});

  },

  findAllOccurrences: function(arr, target) {
var dup = [];
for(var i=0;i<arr.length-1;i++)
{
if(arr [i] == target)
{ 
  dup.push(i);
}
}
return dup;
  }
};
