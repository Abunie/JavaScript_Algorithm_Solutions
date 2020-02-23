/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x>= -2147483648 && x<= 2147483647){
        // var num_string = x.toString();
        var num_string_arr = x.toString().split("");
        var n = num_string_arr.length;
        var new_num_str ="";
        if (x>0){
            for (let i = n-1; i>=0 ; i--) {
                new_num_str = new_num_str.concat(num_string_arr[i]);
            }
            
            if(Number(new_num_str)>= -2147483648 && Number(new_num_str)<= 2147483647){
              return Number(new_num_str);    
            }else{
                return 0;
            }
              
        }else{
            new_num_str = new_num_str.concat(num_string_arr[0]);
            for (let i = n-1; i>=1 ; i--) {
                new_num_str = new_num_str.concat(num_string_arr[i]);
            }
            if(Number(new_num_str)>= -2147483648 && Number(new_num_str)<= 2147483647){
              return Number(new_num_str);    
            }else{
                return 0;
            }
        }
            
    }else{
        return 0;
    }
        
    
};