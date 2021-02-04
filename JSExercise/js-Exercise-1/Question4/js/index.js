let x =prompt()
        
if (isFinite(x) && x>=1){
    let c="* "; 
    let space=" "; 
    let i,j;
    let x_one,x_two,x_three;
    let check;
    if (x%2==1){
        
        check=(Math.floor(x/2 ) + 1)
    }
    else{
        check=-1
    }
    for(i=1;i<=x;i++){
        x_one="";
        x_two=""; 
        x_three="";
       
        if (i<=(x-i+1)){
            first=i;
            second=x-i+1;
        }
        else{
            first=x-i+1;
            second=i;
        }
        
        for (j=1;j<first;j++){
            x_one+=space;
   
        }
        
        for (j=first+1;j<second;j++){
                x_two+=space;
        
    
            }
        for (j=second+1;j<=x;j++){
         
            x_three+=space;
        }
      
        if (check==i ){
            console.log(x_one+c+x_three);
        }
        else{
            console.log(x_one+c+x_two+c+x_three);
        }
    }
}
else{
    alert("Please insert greate than 1");
}

