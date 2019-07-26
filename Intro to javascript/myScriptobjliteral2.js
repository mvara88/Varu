
let actualPrice=5000
let discountPercent=10

let priceList=
{
actualPrice,
discountPercent,
calculatePrice()
{
	return actualPrice-((actualPrice*discountPercent)/100)
}

}

console.log(priceList)

console.log(priceList.calculatePrice())