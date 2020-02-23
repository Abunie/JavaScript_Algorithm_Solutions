/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /** Fater but used more memory */
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if ((target - nums[i]) === nums[j] && (i!==j)){
                return [i,j];
            }
                
       
         }
     }
  
   
};