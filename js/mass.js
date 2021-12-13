$(document).ready(function() {
	$("#convert2, #convert3, #pound, #kilogram, #short_ton, #mega_gram").hide();
	$("#click2").click(function(event) {
		$("#convert2, #pound, #kilogram").show();
		$("#convert1, #convert3, #short_ton, #mega_gram, #ounce, #gram").hide();
	});
	$("#click3").click(function(event) {
		$("#convert3, #short_ton, #mega_gram").show();
		$("#convert1, #convert2, #ounce, #gram, #pound, #kilogram").hide();
    });
});
/*Ounces to Grams*/
function myFunctionOunce(){
			var x =document.getElementById("input_ounce");
			var result = Number(x.value)*(28.349523125);
			var y = document.getElementById("input_gram");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Ounces" + " = " + y.value + " Grams" ;
		}
/*Grams to Ounces*/
function myFunctionGram(){
			var x =document.getElementById("input_gram");
			var result = Number(x.value)/(28.349523125);
			var y = document.getElementById("input_ounce");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Grams" + " = " + y.value + " Ounces" ;
		}
/*Pounds to Kilograms*/
function myFunctionPound(){
			var x =document.getElementById("input_pound");
			var result = Number(x.value)*(0.45359237);
			var y = document.getElementById("input_kilogram");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Pounds" + " = " + y.value + " Kilograms" ;
		}
/*Kilograms to Pounds*/
function myFunctionKilogram(){
			var x =document.getElementById("input_kilogram");
			var result = Number(x.value)/(0.45359237);
			var y = document.getElementById("input_pound");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Kilograms" + " = " + y.value + " Pounds" ;
		}
/*Short Tons to Mega Grams (Metric Tons)*/
function myFunctionShort_ton(){
			var x =document.getElementById("input_short_ton");
			var result = Number(x.value)*(0.90718474);
			var y = document.getElementById("input_mega_gram");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Short Tons" + " = " + y.value + "Mega Grams" ;
		}
/*Mega Grams (Metric Tons) to Short Tons*/
function myFunctionMega_gram(){
			var x =document.getElementById("input_mega_gram");
			var result = Number(x.value)/(0.90718474);
			var y = document.getElementById("input_short_ton");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " Mega Grams" + " = " + y.value + "Short Tons" ;
		}