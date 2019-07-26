
var userToFind=window.prompt("enter the name of the user who you want to find")

var usersList=["Varu","Ramya","Mals","Anu"]

for(i=0;i<=usersList.length;i++)
{
	if(usersList[i]==userToFind)
	{
		alert("user is found at position "+(Number(i)+1))
		break;
	}
	else
	{

	}
}