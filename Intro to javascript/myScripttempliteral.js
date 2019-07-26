
let generatMessage=(firstName,lastName,message)  =>
{
//var myMessage=`Hi ${firstName} \n 
//This is the message for you - ${message}`

var myMessage2=`Hi ${firstName+" "+lastName} \n 
This is the message for you : ${message}`

var myMessage3=`HI girl \n
\${Be yourself always!}`

console.log(myMessage3)

return myMessage2;

}

//console.log(generatMessage("Ramya","Muni","Welcome"))


console.log(generatMessage("Ramya","Muni","Helloooo"))