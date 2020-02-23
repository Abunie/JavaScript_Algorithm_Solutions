/**
 * @param {number} num
 * @return {string}
 */
var numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var intToRoman = function(num) {
    var s ="";
    for (let i = 0; i < 13; i++) {
        while(num>=values[i]){
            s= s.concat(numerals[i])
            num= num - values[i]      
        }
      }
    return s;
    
};