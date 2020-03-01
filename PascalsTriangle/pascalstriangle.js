/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    if(numRows === 0){
        return []; }
    else{
        
    
    /**
    Variable initializations
    */
    var n;
    var old_array;
    var final_array;
    var new_array;
    
    old_array = [1];
    final_array = [[1]];
    for (let i = 0; i < numRows-1; i++) {
       n = old_array.length;
       var new_array = [];
       new_array[0]=1;
       if (n>1){
           for (let i=1; i< n; i++){
           new_array[i]=old_array[i] + old_array[i-1];
       };
       };
       new_array[n]=1;
       final_array.push(new_array);
       old_array = new_array;
      };
    
    return final_array;  
    };
};