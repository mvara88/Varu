var itemsPurchased=window.prompt("Please tell us the number of items purchased")

if(itemsPurchased>3)
{
	alert("you have a promo code")
}
else if(itemsPurchased==3)
{
	alert("purchase one more item and you will have a promo code ")
}
else
{
	alert("you are not eligible for a promo code")
}