
var grade=window.prompt('please enter your grade')
alert(grade)
var result

switch(grade)
{
	case 'A':
	result='you have excelled'
	break;

	case 'B':
	result='you have done good'
	break;

	case 'C':
	result='you could have done better'
	break;

	default:
	result='please enter valid input'

}

alert(result)