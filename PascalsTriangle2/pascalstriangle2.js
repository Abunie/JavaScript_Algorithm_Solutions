/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    if(rowIndex === 0){
        return [1]; }
    else{  
    /**
    Variable initializations
    */
    var n;
    var old_array;
    var new_array;
    old_array = [1];
    for (let i = 0; i < rowIndex; i++) {
       n = old_array.length;
       var new_array = [];
       new_array[0]=1;
       if (n>1){
           for (let i=1; i< n; i++){
           new_array[i]=old_array[i] + old_array[i-1];
       };
       };
       new_array[n]=1;
       old_array = new_array;
      };    
    return new_array;  
    };    
};