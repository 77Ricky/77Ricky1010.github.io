


function calculate(a,b,n){
	switch(n)
	{
		case "+":return a+b;
		case "-":return a-b;
		case "*":return a*b;
		case "/":return a/b;
	}

}
function onClickCal(){

	var nNum1=document.getElementById('num1'),
		nNum2=document.getElementById('num2'),
		nCal=document.getElementById('Cal'),
		nResult=document.getElementById('result'),
		a=parseInt(nNum1.value),
		b=parseInt(nNum2.value),
		n=nCal.value,
		result;
		result=calculate(a,b,n);
		nResult.innerHTML=result;
}