
var users=[{
	"email":"varu@gmail.com",
	"password":"varu",
	"firstname":"Varu",
	"lastname":"muni",
	"mobile":123456899
},
{
	"email":"ramya@gmail.com",
	"password":"ramya",
	"firstname":"ramya",
	"lastname":"muni",
	"mobile":123456788
}
]

//function to check user login

var checkUser=function(email,password,usersList)
{

var isUserFound=false
var isCorrectPassword=false


for(currentUser in usersList)
{

if(usersList[currentUser]["email"]==email)
{
if(usersList[currentUser]["password"]==password)
{
	isUserFound=true
	isCorrectPassword=true
	break
}
else
{
	isUserFound=true
	isCorrectPassword=false
	break
}

}

else
{
isUserFound=false
}

}//end of for loop

if(isUserFound ==true && isCorrectPassword == true) 
{
	alert("User logged in")
}
else if(isUserFound == true && isCorrectPassword ==false)
{
	alert("Incorrect password")
} 

else
{
	alert("user not found")
}

}//end of function


var myEmail=prompt("Enter your mail ID")
var myPassword=prompt("Enter your password")
checkUser(myEmail,myPassword,users)













