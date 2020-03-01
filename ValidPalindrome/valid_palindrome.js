/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    return s.replace(/[\W_]+/g, '').toLowerCase() === s.replace(/[\W_]+/g, '').toLowerCase().split("").reverse().join("") ;
};