$(document).ready(function() {
	$("#convert2, #convert3, #convert4, #convert5, #convert6, #convert7, #convert8, #convert9").hide();
	$("#click2").click(function(event) {
		$("#convert2").show();
		$("#convert1, #convert3, #convert4, #convert5, #convert6, #convert7, #convert8, #convert9").hide();
	});
	$("#click3").click(function(event) {
		$("#convert3").show();
		$("#convert1, #convert2, #convert4, #convert5, #convert6, #convert7, #convert8, #convert9").hide();
    });
    $("#click4").click(function(event) {
		$("#convert4").show();
		$("#convert1, #convert2, #convert3, #convert5, #convert6, #convert7, #convert8, #convert9").hide();
    });
    $("#click5").click(function(event) {
		$("#convert5").show();
		$("#convert1, #convert2, #convert3, #convert4, #convert6, #convert7, #convert8, #convert9").hide();
    });
    $("#click6").click(function(event) {
		$("#convert6").show();
		$("#convert1, #convert2, #convert3, #convert4, #convert5, #convert7, #convert8, #convert9").hide();
    });
    $("#click7").click(function(event) {
		$("#convert7").show();
		$("#convert1, #convert2, #convert3, #convert4, #convert5, #convert6, #convert8, #convert9").hide();
    });
    $("#click8").click(function(event) {
		$("#convert8").show();
		$("#convert1, #convert2, #convert3, #convert4, #convert5, #convert7, #convert6, #convert9").hide();
    });
    $("#click9").click(function(event) {
		$("#convert9").show();
		$("#convert1, #convert2, #convert3, #convert4, #convert5, #convert7, #convert8, #convert6").hide();
    });
});
/*VND - USD*/
function myVND(){
			var x =document.getElementById("VND");
			var result = Number(x.value)*(0.0000432176);
			var y = document.getElementById("USD_VND");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " VND" + " = " + y.value + " USD" ;
		}
/*USD - VND*/
function myUSD_VND(){
			var x =document.getElementById("USD_VND");
			var result = Number(x.value)*(23138.71);
			var y = document.getElementById("VND");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " USD" + " = " + y.value + " VND" ;
		}
/*USD -  GBP*/
function myUSD(){
			var x =document.getElementById("USD");
			var result = Number(x.value)*(0.768999);
			var y = document.getElementById("GBP_USD");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " USD" + " = " + y.value + " GBP" ;
		}
/*GBP - USD*/
function myGBP_USD(){
			var x =document.getElementById("GBP_USD");
			var result = Number(x.value)*(1.3003918081);
			var y = document.getElementById("USD");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " GBP" + " = " + y.value + " USD" ;
		}
/**/
function myUSD_2(){
			var x =document.getElementById("USD_2");
			var result = Number(x.value)*(0.768999);
			var y = document.getElementById("GBP_USD_2");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " USD" + " = " + y.value + " GBP" ;
		}
/**/
function myGBP_USD_2(){
			var x =document.getElementById("GBP_USD_2");
			var result = Number(x.value)*(1.3003918081);
			var y = document.getElementById("USD_2");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " GBP" + " = " + y.value + " USD" ;
		}
function myVND_GBP(){
			var x =document.getElementById("VND_GBP");
			var result = Number(x.value)*(0.0000332285);
			var y = document.getElementById("GBP_VND");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " VND" + " = " + y.value + " GBP" ;
		}
function myGBP_VND(){
			var x =document.getElementById("GBP_VND");
			var result = Number(x.value)*(30209.04);
			var y = document.getElementById("VND_GBP");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " GBP" + " = " + y.value + " VND" ;
		}
function myUSD_EUR(){
			var x =document.getElementById("USD_EUR");
			var result = Number(x.value)*(0.901132);
			var y = document.getElementById("EUR_USD");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " USD" + " = " + y.value + " EUR" ;
		}
function myEUR_USD(){
			var x =document.getElementById("EUR_USD");
			var result = Number(x.value)*(1.1097153358);
			var y = document.getElementById("USD_EUR");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " EUR" + " = " + y.value + " USD" ;
		}
function myUSD_EUR_2(){
			var x =document.getElementById("USD_EUR_2");
			var result = Number(x.value)*(0.901132);
			var y = document.getElementById("EUR_USD_2");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " USD" + " = " + y.value + " EUR" ;
		}
function myEUR_USD_2(){
			var x =document.getElementById("EUR_USD_2");
			var result = Number(x.value)*(1.1097153358);
			var y = document.getElementById("USD_EUR_2");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " EUR" + " = " + y.value + " USD" ;
		}

function myVND_EUR(){
			var x =document.getElementById("VND_EUR");
			var result = Number(x.value)*(0.000039);
			var y = document.getElementById("EUR_VND");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " VND" + " = " + y.value + " EUR" ;
		}
function myEUR_VND(){
			var x =document.getElementById("EUR_VND");
			var result = Number(x.value)*(25752.00);
			var y = document.getElementById("VND_EUR");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " EUR" + " = " + y.value + " VND" ;
		}
function myEUR_GBP(){
			var x =document.getElementById("EUR_GBP");
			var result = Number(x.value)*(0.8533699835);
			var y = document.getElementById("GBP_EUR");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " EUR" + " = " + y.value + " GBP" ;
		}
function myGBP_EUR(){
			var x =document.getElementById("GBP_EUR");
			var result = Number(x.value)*(1.1718246708);
			var y = document.getElementById("EUR_GBP");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " GBP" + " = " + y.value + " EUR" ;
		}
function myEUR_GBP_2(){
			var x =document.getElementById("EUR_GBP_2");
			var result = Number(x.value)*(0.8533699835);
			var y = document.getElementById("GBP_EUR_2");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " EUR" + " = " + y.value + " GBP" ;
		}
function myGBP_EUR_2(){
			var x =document.getElementById("GBP_EUR_2");
			var result = Number(x.value)*(1.1718246708);
			var y = document.getElementById("EUR_GBP_2");
			y.value = result;
			document.getElementById("result").innerHTML= x.value + " GBP" + " = " + y.value + " EUR" ;
		}				

