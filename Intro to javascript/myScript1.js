
var marksObtained=window.prompt('please enter the marks obtained')
if(marksObtained == undefined || marksObtained == null || marksObtained == "")
{
alert('invalid input')
}
else if(marksObtained <0 || marksObtained > 100)
{
	alert('please enter number between 0 and 100')

}
else
{
	//var isTopper=false
	var totalMarks=100
var percentMarksObtained = (marksObtained/totalMarks)*100
var result=(percentMarksObtained>90)?"you are a topper":"better luck next time"
alert(result)
	/*if(percentMarksObtained > 90)
		{
			alert('you are a topper!')
		}
		else
		{
			alert('better luck next time')
		}*/
}