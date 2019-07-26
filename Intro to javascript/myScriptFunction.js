
var generateEmail=function(name,message)
{
var composeEmail="Hi"+" "+name+"\n"+"This is my message for you"+"\n"+message
	return composeEmail
}


var myMessage=generateEmail("Varu","You are going to achieve big") 
alert(myMessage)

