$(document).ready(function() {
	$("#convert2, #convert3, #convert4, #convert5, #square_feet, #square_meter, #square_yard, #acre, #hectare, #square_mile, #square_kilometer")
	.hide();
	$("#click2").click(function(event) {
		$("#convert2, #square_feet, #square_meter").show();
		$("#convert1, #convert3, #convert4, #convert5, #square_inch, #square_milimeter, #square_yard, #acre, #hectare, #square_mile, #square_kilometer")
		.hide();
	});
	$("#click3").click(function(event) {
		$("#convert3,#square_yard, #square_meter").show();
		$("#convert1, #convert2, #convert4, #convert5, #square_feet, #square_inch, #square_milimeter , #acre, #hectare, #square_mile, #square_kilometer")
		.hide();
    });
    $("#click4").click(function(event) {
		$("#convert4, #acre, #hectare").show();
		$("#convert1, #convert2, #convert3, #convert5, #square_inch, #square_milimeter, #square_yard, #square_feet, #square_meter, #square_mile, #square_kilometer")
		.hide();
    });
    $("#click5").click(function(event) {
		$("#convert5, #square_mile, #square_kilometer").show();
		$("#convert1, #convert2, #convert3, #convert4, #square_inch, #square_milimeter, #square_yard, #acre, #hectare, #acre, #hectare").hide();
    });
});
/*Square Inches to Square Milimeters*/
function myFunctionSquareInch(){
			var x =document.getElementById("input_number_squareInch");
			var result = Number(x.value)*(645.16);
			var y = document.getElementById("result_number_squareMilimeter");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Square Inches" + " = " + y.value + " Square Milimeters" ;
		}
/*Square Milimeters to Square Inches*/
function myInfoSquareMilimeter(){
			var x =document.getElementById("result_number_squareMilimeter");
			var result = Number(x.value)/(645.16);
			var y = document.getElementById("input_number_squareInch");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Square Milimeters" + " = " + y.value + " Square Inches" ;
		}
/*Square Feets to Square Meters*/		
function myFunctionSquareFeet(){
			var x =document.getElementById("input_number_squareFeet");
			var result = Number(x.value)*(0.09290304);
			var y = document.getElementById("result_number_squareMeter");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Square Feets" + " = " + y.value + " Square Meters" ;
		}
/*Square Meters to Square Feets*/		
function myFunctionSquareMeter(){
			var x =document.getElementById("result_number_squareMeter");
			var result = Number(x.value)/(0.09290304);
			var y = document.getElementById("input_number_squareFeet");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Square Meters" + " = " + y.value + " Square Feets" ;
		}
/*Square Yards to Square Meters*/
function myFunctionSquareYard(){
			var x =document.getElementById("input_number_squareYard");
			var result = Number(x.value)*(0.83612736);
			var y = document.getElementById("result_number_squareMeter2");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Square Yards" + " = " + y.value + " Square Meters" ;
		}
/*Square Meters to Square Yards*/
function myInfoSquareMeter(){
			var x =document.getElementById("result_number_squareMeter2");
			var result = Number(x.value)/(0.83612736);
			var y = document.getElementById("input_number_squareYard");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Square Meters" + " = " + y.value + " Square Yards" ;
		}
/*Acres to Hectares*/
function myFunctionAcre(){
			var x =document.getElementById("input_number_Acre");
			var result = Number(x.value)*(0.4046856422);
			var y = document.getElementById("result_number_Hectare");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Acres" + " = " + y.value + " Hectares" ;
		}
/*Hectares to Acres*/
function myInfoHectare(){
			var x =document.getElementById("result_number_Hectare");
			var result = Number(x.value)/(0.4046856422);
			var y = document.getElementById("input_number_Acre");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Hectares" + " = " + y.value + " Acres" ;
		}
/*Square Miles to Squares Kilometers*/
function myFunctionSquareMile(){
			var x =document.getElementById("input_number_squareMile");
			var result = Number(x.value)*(2.5899881103);
			var y = document.getElementById("result_number_squareKilometer");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Square Miles" + " = " + y.value + " Square Kilometer" ;
		}
/*Squares Kilometers tMiles*/
function myFunctionSquareKilometer(){
			var x =document.getElementById("result_number_squareKilometer");
			var result = Number(x.value)/(2.5899881103);
			var y = document.getElementById("input_number_squareMile");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Square Kilometer" + " = " + y.value + " Square Miles" ;
		}
