$(document).ready(function() {
	$("#convert2, #convert3, #convert4, #convert5").hide();
    $("#feet, #meter, #yard, #mile, #kilometer").hide();
	$("#click2").click(function(event) {
		$("#convert2, #feet, #meter").show();
		$("#convert1, #convert3, #convert4, #convert5, #inch, #milimeter, #yard, #mile, #kilometer").hide();
	});
	$("#click3").click(function(event) {
		$("#convert3, #yard, #meter").show();
		$("#convert1, #convert2, #convert4, #convert5, #inch, #milimeter, #feet, #mile, #kilometer").hide();
    });
    $("#click4").click(function(event) {
		$("#convert4 ,#mile, #kilometer").show();
		$("#convert1, #convert2, #convert3, #convert5, #feet, #meter, #yard, #inch, #milimeter").hide();
    });
});
/*Inches to Milimeters*/
function myFunctionInch(){
			var x =document.getElementById("input_number");
			var result = Number(x.value)*(25.4);
			var y = document.getElementById("result_number");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Inches" + " = " + y.value + " Milimeters" ;
		}
/*Milimeter to Inches*/
function myInfoMilimeter(){
			var x =document.getElementById("result_number");
			var result = Number(x.value)/(25.4);
			var y = document.getElementById("input_number");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Milimeters" + " = " + y.value + " Inches" ;
		}
/*Feet to Meter*/
function myFunctionFeet(){
			var x =document.getElementById("input_number_feet");
			var result = Number(x.value)*(0.3048);
			var y = document.getElementById("result_number_meter");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Feets" + " = " + y.value + " Meters" ;
		}
/*Meter to Feet*/
function myInfoMeter(){
			var x =document.getElementById("result_number_meter");
			var result = Number(x.value)/(0.3048);
			var y = document.getElementById("input_number_feet");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Meters" + " = " + y.value + " Feets" ;
		}
  /*Yard to Meter*/
function myFunctionYard(){
			var x =document.getElementById("input_number_yard");
			var result = Number(x.value)*(0.9144);
			var y = document.getElementById("result_number_meter_2");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Yards" + " = " + y.value + " Meters" ;
		}
	/*Meter to Yard*/			
function myInfoMeter2(){
			var x =document.getElementById("result_number_meter_2");
			var result = Number(x.value)/(0.9144);
			var y = document.getElementById("input_number_yard");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Meters" + " = " + y.value + " Yards" ;
		}
function myFunctionMile(){
			var x =document.getElementById("input_number_mile");
			var result = Number(x.value)*(1.609344);
			var y = document.getElementById("result_number_kilometer");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Miles" + " = " + y.value + " Kilometers" ;
		}
	/*Meter to Yard*/			
function myInfoKilometer(){
			var x =document.getElementById("result_number_kilometer");
			var result = Number(x.value)/(1.609344);
			var y = document.getElementById("input_number_mile");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Kilometers" + " = " + y.value + " Miles" ;
		}		