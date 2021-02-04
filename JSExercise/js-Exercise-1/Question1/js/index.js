const y=prompt();
const x = "";

             for(let i = 1; i <=y; i++ ){
                 for(let j = 1; j <=y; j++){                     
                      if(i >= j ){
                         x = x.concat("*");
                     }
                 }
              x = x.concat("\n")
           }

            console.log(x)