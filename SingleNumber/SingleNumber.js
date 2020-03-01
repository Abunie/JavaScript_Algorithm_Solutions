/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    a = 0
    for(let i= 0; i<nums.length; i++){
          a ^= nums[i];     
    };
 return a;
      
};