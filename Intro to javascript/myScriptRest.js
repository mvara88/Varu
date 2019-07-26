
let finalArray=[]

 let storeUserAddress = (userId,...userAddress) =>
 {

 	console.log(userId);
 	console.log(userAddress);

let customAddress={userId:userId,address:userAddress}

finalArray.push(customAddress)

return finalArray;

 }


let firstAddress={
	"city":"chennai",
	"country":"India",
}


let secondAddress={
	"city":"Madras",
	"country":"India",
}


 console.log(storeUserAddress("Ramya",firstAddress,secondAddress))