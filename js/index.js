
var valor1= [];
var valor2= [];
var resultado =[];
var resultadoNot =[];
var cantCeros = [];
var valorInputNega =[];
jQuery(document).ready(function(){

	$(".numero").click(function(e){
        e.preventDefault();
        var a = $(this).attr("value");
        $('#'+$('#bandera').val()).val($('#'+$('#bandera').val()).val()+a);
    });

	$('input[name=inputNum]').focus(function() {
		$('#bandera').val($((this)).attr('id'));
	});

    $('input:text').bind('contextmenu', function (e) {
        e.preventDefault();
    });
    
	$('input[name=chk]').click(function(e){
		bloquear($(this));
	});

	$('#and').click(function(e){
		and();
	});
	$('#xor').click(function(e){
		xor();
	});
	$('#or').click(function(e){
		or();
	});
	$('#not').click(function(e){
		not();
	});
	$('#igual').click(function(e){
		igual();
	});
	$('#limpiar').click(function(e){
		limpiar();
	});

});

function bloquear(obj){

 id = obj.parents('div#prueba').siblings('div#prueba').find('input[name=chk]').attr('id');
 $('#'+id).removeAttr('checked','checked');
 obj.attr('checked');
 if (obj.prop('checked')) {
 	$('#not').removeAttr('disabled','disabled');
 	$('#banderaNegada').val(true);
 }else{
 	$('#not').attr('disabled','disabled');
 	$('#banderaNegada').val(false);
 }
 
}
function comparar(){
	if (valor1.length != valor2.length) {
		canCeros=Math.abs(valor1.length - valor2.length);
		for (var i = 0; i < canCeros; i++) {
			cantCeros[i] = 0;
		};
		if (valor1.length < valor2.length) {
			valor1.unshift(cantCeros.join());
			$('#primero').val(valor1.join().replace(/,/g,''));
		}else{
			valor2.unshift(cantCeros.join());
			$('#segundo').val(valor2.join().replace(/,/g,''));
		}
		
	}
	return true;
}

function and(){
	$('.operacion').attr('disabled','disabled');
	$('input[name=chk]').attr('disabled','disabled');
	$('input[name=chk]').removeAttr('checked','checked');
	
	for (var i = 0; i < $('#segundo').val().length; i++) {
		nu = $('#segundo').val().substring(i,i+1);
    	valor2[valor2.length] = parseInt(nu);
	};
	for (var i = 0; i < $('#primero').val().length; i++) {
		nu = $('#primero').val().substring(i,i+1);
		valor1[valor1.length] = parseInt(nu);
	};
	if (comparar() == true) {
		for (var i = 0; i < valor1.length; i++) {
			if (valor1[i]== 1 && valor2[i]==1) {
				resultado[resultado.length] = 1;
			}else{
				resultado[resultado.length] = 0;
			}	
		};
	};
	$('#igual').removeAttr('disabled','disabled');	
}

function xor(){
	$('.operacion').attr('disabled','disabled');
	$('input[name=chk]').attr('disabled','disabled');
	$('input[name=chk]').removeAttr('checked','checked');
	for (var i = 0; i < $('#segundo').val().length; i++) {
		nu = $('#segundo').val().substring(i,i+1);
    	valor2[valor2.length] = parseInt(nu);
	};
	for (var i = 0; i < $('#primero').val().length; i++) {
		nu = $('#primero').val().substring(i,i+1);
    	valor1[valor1.length] = parseInt(nu);
	};
	if (comparar() == true) {
		for (var i = 0; i < valor1.length; i++) {
			if (valor1[i] == valor2[i]) {
				resultado[resultado.length] = 0;
			}else{
				resultado[resultado.length] = 1;
			}	
		};
	};
	$('#igual').removeAttr('disabled','disabled');
}
function or(){
	$('.operacion').attr('disabled','disabled');
	$('input[name=chk]').attr('disabled','disabled');
	$('input[name=chk]').removeAttr('checked','checked');
	for (var i = 0; i < $('#segundo').val().length; i++) {
		nu = $('#segundo').val().substring(i,i+1);
    	valor2[valor2.length] = parseInt(nu);
	};
	for (var i = 0; i < $('#primero').val().length; i++) {
		nu = $('#primero').val().substring(i,i+1);
    	valor1[valor1.length] = parseInt(nu);
	};
	if (comparar() == true) {
		for (var i = 0; i < valor1.length; i++) {
			if (valor1[i] == 0 && valor2[i]== 0) {
				resultado[resultado.length] = 0;
			}else{
				resultado[resultado.length] = 1;
			}	
		};
	};
	$('#igual').removeAttr('disabled','disabled');
}
function not(){
	if ($('#banderaNegada').val()== 'true') {
		resultadoNot = [];
		valorInputNega = [];
		for (var i = 0; i < $('input[name=chk]:checked').parents('.input-group').find('.input').val().length; i++) {
			nu = $('input[name=chk]:checked').parents('.input-group').find('.input').val().substring(i,i+1);
	    	valorInputNega[valorInputNega.length] = parseInt(nu);
		};
		for (var i = 0; i < valorInputNega.length; i++) {
			if (valorInputNega[i]==1) {
				resultadoNot[resultadoNot.length] = 0;
			}else{
				resultadoNot[resultadoNot.length] = 1;
			}
		};
		$('input[name=chk]:checked').parents('.input-group').find('.input').val(resultadoNot.join().replace(/,/g,''));
	}else{
		resultadoNot = [];
		for (var i = 0; i < resultado.length; i++) {
			if (resultado[i]==1) {
				resultadoNot[resultadoNot.length] = 0;
			}else{
				resultadoNot[resultadoNot.length] = 1;
			}
			$('#resultado').val(resultadoNot.join().replace(/,/g,''));
		};
		$('#not').attr('disabled','disabled');
		$('.operacion').attr('disabled','disabled');
		$('#igual').attr('disabled','disabled');
		
	}
	
}
function igual(){
	$('#not').removeAttr('disabled','disabled');
	$('input[name=chk]').attr('disabled','disabled');
	$('#resultado').val(resultado.join().replace(/,/g,''));
	$('#banderaNegada').val(false);
}
function limpiar(){
	resultado = [];
	valor1 = [];
	valor2 = [];
	resultadoNot = [];
	cantCeros = []; 
	valorInputNega = []; 
	$('#primero').val('');
	$('#segundo').val('');
	$('#resultado').val('');
	$('#bandera').val('');
	$('#banderaNegada').val('');
	$('input[name=chk]').removeAttr('disabled','disabled');
	$('input[name=chk]').removeAttr('checked','checked');
	$('.operacion').removeAttr('disabled','disabled');
	$('#not').attr('disabled','disabled');
	$('#igual').attr('disabled','disabled');
	
}
function permite(e, permitidos, fieldObj, upperCase) {
			
		if(fieldObj.readOnly) return false;
		upperCase = typeof(upperCase) != 'undefined' ? upperCase : true;
		e=e||event;

		charCode = e.keyCode; // || e.keyCode;  

		if( (is_nonChar(charCode)) && e.shiftKey == 0 )
			return true;
		else
		if(charCode == '')
			charCode = e.charCode;

		if (fieldObj.value.length == fieldObj.maxLength) return false;
		
		var caracter = String.fromCharCode(charCode);		
	  	
		// Variables que definen los caracteres permitidos
		var binario 			= "01";
		var numeros 			= "0123456789";
		var caracteres			= "  abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ";
		var direcc				= "-_,().?¿";
		var cor					= "-_.@";
		var telefono			= "+-";
		var car_especiales		= ".-_()'\"/&";
		var tele				= "+-";
		var desc_auditoria		= "'#-()";
		var car_obser	    	= "'-_.,();+*:/";
		var caract_msj			= "-,.:() ?¿!*+@";

		//Los valores de las llaves del array representan los posibles valores permitidos
		var selectArray = new Array();
		selectArray['all']			= '';
		selectArray['num']			= numeros;
		selectArray['car']			= caracteres;
		selectArray['dir']			= numeros + caracteres + direcc;
		selectArray['email']		= numeros + caracteres + cor;
		selectArray['tlf']			= numeros + tele;
		selectArray['ip']			= numeros + ".";
		selectArray['fecha']  		= numeros + "/";
		selectArray['bin']  		= binario;
		
		// Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
		if ((selectArray[permitidos].indexOf(caracter) != -1) || (permitidos == 'all')){
			return(true);
		}	
		else{
			if(e.preventDefault) 
				e.preventDefault();
			else
				e.returnValue = false;
		}	
	}

function is_nonChar(charCode){
		// 8 = BackSpace, 9 = tabulador, 13 = enter, 35 = fin, 36 = inicio, 37 = flecha izquierda, 38 = flecha arriba, 
		// 39 = flecha derecha, 37 = flecha izquierda, 40 = flecha abajo 46 = delete.

		var teclas_especiales = [8, 9, 13, 35, 36, 37, 38, 39, 40, 46];
		
		for(var i in teclas_especiales) {

	    	if(charCode == teclas_especiales[i]) {
	   		return(true);
	    	}
		}
			
	}