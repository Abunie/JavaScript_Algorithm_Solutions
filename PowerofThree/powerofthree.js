/**
 * @param {number} n
 * @return {boolean}
 */
// 3^0 = 1, 3^1 = 3 , 3^2 =9 , 3^3 = 27
var isPowerOfThree = function(n) {
    if(n==3 || n==1){
    return true;
    }else if(n>3){
      return isPowerOfThree(n/3); 
    }else {
     return false;}
        
   };