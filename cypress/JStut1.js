let flag = true

if (!flag) {
 
 
    console.log('flag is false')
}

else{

    console.log('flag is true')
}



/* While LOOP */

let i = 0
while(flag==true && i<5) {

    
    console.log('flag is true while' + i)
    i++

}


// Do while scenario 
var ii = 10

do 
{

   console.log('flag is true DO WHILE LOOP')
 ii--
}


while(ii >0)

    {

       
        console.log('flag is true DOWHILE LOOP' && ii)
      ii--
    }


    //FOR LOOP - when we know how many time we have to run the loop 
//if i want to print only first 3 multiples of 2 and 5
    var x = 10
    var y =1
    var n =0
for(let i=1;i<=10;i++)
    
    {
        y = i*x
      
        if(n==3)
            break
        
        n++

        console.log(y +' is multiple of both 2 and 5' )

    }



    //ARRAY in JS

    var arr = [1,2,4,5,6,3,4,5,2]

//    var arr2  = Array(5)
    var arr2 = new Array(1,2,3,4,5,6)
    arr.pop()
    arr.push(7)
    arr.unshift(44)
   // arr2.pop()
    

    console.log(arr)
    console.log(arr2)
    console.log(arr[2])
console.log(arr2.length)

console.log(arr.indexOf(44))

console.log(arr.includes(44)) 

console.log(arr.slice(1,2))