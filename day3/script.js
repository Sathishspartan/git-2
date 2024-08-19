/*function arithmetic()
{
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
}
arithmetic(10,20);*/

/*function arithmetic(a,b)
{
    return[a+b,a-b,a*b]
}
console.log(arithmetic(10,20));*/
var a=[];
function odd(arr)
{
    for(var i=0;i<=arr.length-1;i=i+1)
    {
        if(arr[i]%2!=0)
        {
            a.push(arr[i])
        }
        }
return a
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));

