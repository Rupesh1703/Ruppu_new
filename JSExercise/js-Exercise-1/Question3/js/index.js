const y=prompt();
function pat(n){
 var x = '';
 for(var i=1; i<=n; i++){
     for(var k=1; k<=n-i; k++){
         x += "\t";
     }
     for(var j=1; j<=i; j++){
         x += "*\t\t";
     }
     console.log(x);
     x = "";
 }
}
pat(y)