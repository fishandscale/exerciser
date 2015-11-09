/**
 * 
 */
"use strict";


function Timer( counter_element, up_element, down_element, display_element) {
	var timerId;
	var restMin = 0;
	var counter_element = counter_element;
	var up_element = up_element;
	var down_element = down_element;
	var display_element = display_element;
	return {
		
		modify : function(min) {
			if ( isNaN(min)  || min === undefined ){
				min = 0;
			}
			restMin = counter_element.val();
			if (isNaN(restMin) || restMin === undefined || restMin == ""){
				restMin = 0;
			}
			var neuer_wert = parseInt(restMin,10) + min;
			if ( neuer_wert < 0 ){
				neuer_wert = 0;
			}
			$(counter_element).val(neuer_wert);
		},
		start : function(){
			//down_element.attr("disabled", "disabled");
			//up_element.attr("disabled", "disabled");
			var aktueller_wert = counter_element.val();
			if (isNaN(aktueller_wert) || aktueller_wert === undefined || aktueller_wert == ""){
				aktueller_wert = 0;
			}
			// Prüfe, ob noch ein Timer läuft, wenn ja, dann beenden
			if ( !(timerId === undefined)){
				clearTimeout(timerId);
			}
			
			countdown2(0,0,aktueller_wert,0);
		},
		stop : function(){
			//down_element.removeAttr("disabled");
			//up_element.removeAttr("disabled");
			//$("#start").text("continue");
			clearTimeout(timerId);
		}
		
		
	};
	function countdown(time){
		 
		  //time brauchen wir später noch
		  var t = time;
		 
		  //Tage berechnen
		  var d = Math.floor(t/(60*60*24)) % 24; 
		 
		  // Stunden berechnen
		  var h = Math.floor(t/(60*60)) % 24;
		 
		 
		  // Minuten berechnen
		  // Sekunden durch 60 ergibt Minuten
		  // Minuten gehen von 0-59
		  //also Modulo 60 rechnen
		  var m = Math.floor(t/60) %60;
		 
		  // Sekunden berechnen
		  var s = t %60;
		 
		  //Zeiten formatieren
		  d = (d >  0) ? d+"d ":"";
		  h = (h < 10) ? "0"+h : h;
		  m = (m < 10) ? "0"+m : m;
		  s = (s < 10) ? "0"+s : s;
		 
		  // Ausgabestring generieren
		  var strZeit =d + h + ":" + m + ":" + s;
		 
		  // Falls der Countdown noch nicht zurückgezählt ist
		  if(time > 0)
		  {
			
			
		    //Countdown-Funktion erneut aufrufen
		    //diesmal mit einer Sekunde weniger
		    //timerId = window.setTimeout('countdown('+ --time+',\''+id+'\')',1000);
			timerId = window.setTimeout(function(){countdown(--time);},1000);
		  }
		  else
		  {
		    //führe eine funktion aus oder refresh die seite
		    //dieser Teil hier wird genau einmal ausgeführt und zwar 
		    //wenn die Zeit um ist.
			 strZeit = "Fertig";
		  }
		  display_element.html(strZeit);
		  
	}
	//Helfer Funktion erlaubt Counter auch ohne Timestamp
	//countdown2(Tage,Stunden,Minuten,Sekunden)
	function countdown2 (d,h,m,s){
		  countdown(d*60*60*24+h*60*60+m*60+s);
	}
}

