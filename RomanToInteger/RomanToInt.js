/**
 * @param {string} s
 * @return {number}
 */
var numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", 
                 "V", "IV", "I"];
var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanToInt = function(s) {
    var split_s = s.split("");
    var n = split_s.length;
    for (let i = 0; i < 13; i++) {
        if(split_s[0]==numerals[i]){
            if(n>1){
                return values[i] + romanToInt(s.slice(1))
            }else{
                return values[i]
            }
        }else if ((split_s[0]+split_s[1]) == numerals[i]){
             if(n>2){
                return values[i] + romanToInt(s.slice(2))
            }else{
                return values[i]
            }
        
        } else{
            console.error("Not a Roman Numeral");
        } 
      }
    
};