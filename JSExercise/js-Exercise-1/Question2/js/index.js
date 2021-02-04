const y=prompt();
       const x = "";

            for(let i =0; i <y; i++ ){
                for(let j =0; j <=y; j++){
                    if(i + j >= y){
                        x = x.concat("*");
                    }else{
                        x = x.concat(" ")
                    }
                }
                x = x.concat("\n")
            }

            console.log(x)