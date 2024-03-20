/*FOrmat of function
  function functionName(parameter1,parameter2,parameter3)
   {
        //body of function
        return value ;
  }
*/

var dp = new Array(10).fill(null).map(() => new Array(10).fill(0));
for(var i = 0 ; i < 10 ; i++)
{
    dp[i][i] = 1 ;
    dp[i][0] = 1 ;
}
function factorial(n,r)
{
    if(r ==0  || n==r)
    {
        return dp[n][r] ;
    }
    if(dp[n][r] != 0)
    {
        return dp[n][r] ;
    }
    dp[n][r] = factorial(n-1,r-1) + factorial(n-1,r) ;
    return dp[n][r] ;
}

console.log(factorial(5,3)) ;

let Invitation = function(name){
    console.log(`Welcome! ${name} , You are invited on our event`);
}
Invitation("Denesh") ;