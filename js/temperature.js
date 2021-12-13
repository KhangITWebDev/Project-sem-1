$(document).ready(function() {
	$("#convert2, #convert3, #convert4, #convert5, #convert6").hide();
	$("#click2").click(function(event) {
		$("#convert2").show();
		$("#convert1, #convert3, #convert4, #convert5, #convert6").hide();
	});
/*	$("#result_celsius").attr("disabled" , "true");
	$("#result_fahrenheit").attr("disabled" , "true");*/
});
/*Fahrenheit to Celsius*/
function myFunction(){
			var x =document.getElementById("input_fahrenheit");
			var result = Number(x.value)*(-17.222222222);
			var y = document.getElementById("result_celsius");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Fahrenheit" + " = " + y.value + " Celsius" ;
		}
function myFunction2(){
			var x =document.getElementById("result_celsius");
			var result = Number(x.value)*(33.8);
			var y = document.getElementById("input_fahrenheit");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Celsius" + " = " + y.value + " Fahrenheit" ;
		}
/*Celsius to  Fahrenheit*/
function myInfo(){
			var x =document.getElementById("input_celsius");
			var result = Number(x.value)*(33.8);
			var y = document.getElementById("result_fahrenheit");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Celsius" + " = " + y.value + " Fahrenheit" ;
		}
function myInfo2(){
			var x =document.getElementById("result_fahrenheit");
			var result = Number(x.value)*(-17.222222222);
			var y = document.getElementById("input_celsius");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Fahrenheit" + " = " + y.value + " Celsius" ;
		}