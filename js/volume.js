$(document).ready(function() {
	$("#convert2, #convert3, #convert4, #convert5, #gallon, #liter, #cubic_feet, #cubic_yard, #cubic_meter").hide();
	$("#click2").click(function(event) {
		$("#convert2, #gallon, #liter").show();
		$("#convert1, #convert3, #convert4, #convert5, #fluid_ounce, #mililiter, #cubic_feet, #cubic_yard, #cubic_meter").hide();
	});
	$("#click3").click(function(event) {
		$("#convert3, #cubic_feet, #cubic_meter").show();
		$("#convert1, #convert2, #convert4, #convert5, #fluid_ounce, #mililiter, #gallon, #liter, #cubic_yard").hide();
    });
    $("#click4").click(function(event) {
		$("#convert4, #cubic_yard, #cubic_meter").show();
		$("#convert1, #convert2, #convert3, #convert5, #fluid_ounce, #mililiter, #gallon, #liter, #cubic_feet").hide();
    });
});
function myFunctionFluid_Ounce(){
			var x =document.getElementById("input_fluid_ounce");
			var result = Number(x.value)*(29.573529562);
			var y = document.getElementById("input_mililitter");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Fluid Ounces" + " = " + y.value + " Milliliter" ;
		}
function myFunctionMilliliter(){
			var x =document.getElementById("input_mililitter");
			var result = Number(x.value)/(29.573529562);
			var y = document.getElementById("input_fluid_ounce");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Milliliter" + " = " + y.value + " Fluid Ounces" ;
		}
function myFunctionGallon(){
			var x =document.getElementById("input_gallon");
			var result = Number(x.value)*(3.785411784);
			var y = document.getElementById("input_liter");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Gallons" + " = " + y.value + " Liter" ;
		}
function myFunctionLiter(){
			var x =document.getElementById("input_liter");
			var result = Number(x.value)/(3.785411784);
			var y = document.getElementById("input_gallon");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Liter" + " = " + y.value + " Gallons" ;
		}
function myFunctionCubic_Feet(){
			var x =document.getElementById("input_cubic_feet");
			var result = Number(x.value)*(0.0283168466);
			var y = document.getElementById("input_cubic_meter");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Cubic Feets" + " = " + y.value + " Cubic Meters" ;
		}
function myFunctionCubic_Meter(){
			var x =document.getElementById("input_cubic_meter");
			var result = Number(x.value)/(0.0283168466);
			var y = document.getElementById("input_cubic_feet");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Cubic Meters" + " = " + y.value + " Cubic Feets" ;
		}
function myFunctionCubic_Yard(){
			var x =document.getElementById("input_cubic_yard");
			var result = Number(x.value)*(0.764554858);
			var y = document.getElementById("input_cubic_meter_2");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Gallons" + " = " + y.value + " Liter" ;
		}
function myFunctionCubic_Meter_2(){
			var x =document.getElementById("input_cubic_meter_2");
			var result = Number(x.value)/(0.764554858);
			var y = document.getElementById("input_cubic_yard");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Liter" + " = " + y.value + " Gallons" ;
		}