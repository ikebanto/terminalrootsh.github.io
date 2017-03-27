function showUser(valor){

	var p1 = '<p>';
	var p2 = '</p>';
	var i1 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/';
	var i2 = '" frameborder="0" allowfullscreen></iframe>';

  		if(valor == "01"){
  			var n = '01 - Apresentação';
	  		var v = 'ScIwlstkbSA';
	  	}else if(valor == "02"){
	  		var n = '02 - Conceito';
	  		var v = 'vvp25pEgSb4';
	  	}else if(valor == "03"){
	  		var n = '03 - O Primeiro Script';
	  		var v = '2_V-lr6w1uE';
	  	}else if(valor == "04"){
	  		var n = '04 - Variáveis e Arrays';
	  		var v = 'HTc2TTnfuNc';
	  	}else if(valor == "05"){
	  		var n = '05 - Funções';
	  		var v = 'RTeV2UsXY1k';
	  	}else if(valor == "06"){
	  		var n = '06 - Condições';
	  		var v = 'LWfQpAugxeg';
	  	}else if(valor == "07"){
	  		var n = '07 - Loops';
	  		var v = 'qhECO0wdLR4';
	  	}else if(valor == "08"){
	  		var n = '08 - Fluxos de Entrada e Saída';
	  		var v = 'Zl8187gfE7c';
	  	}else if(valor == "09"){
	  		var n = '09 - Comandos';
	  		var v = 'CrE94jtvoJA';
	  	}else if(valor == "10"){
	  		var n = '10 - Matemática';
	  		var v = 'FAiEAk0AF-g';
	  	}else if(valor == "11"){
	  		var n = '11 - Como Criar Programas Gráficos e Interativos';
	  		var v = '2gUIoUWHZMg';
	  	}else if(valor == "12"){
	  		var n = '12 - Como Criar Sites com Shell Script, Bootstrap e HTML5';
	  		var v = 'vhEE7WMSvug';
	  	}else if(valor == "13"){
	  		var n = '13 - Conexão com MySQL';
	  		var v = 'VPvQLZt696g';
	  	}else if(valor == "14"){
	  		var n = '14 - Debug, Parser, profile, TTY e PS';
	  		var v = 'h9OSwaIyxBw';
	  	}else if(valor == "15"){
	  		var n = '15 - Expressões Regulares, AWK, SED e Wildcards';
	  		var v = 'CLsSTPn077k';
	  	}else if(valor == "16"){
	  		var n = '16 - Boas Práticas';
	  		var v = '2MK3CNBAAio';
	  	}else if(valor == "17"){
	  		var n = '17 - Conteúdo Adicional + Apostilas';
	  		var v = '####';
	  	}else{
	  		var n = '01 - Apresentação';
		  	var v = 'ScIwlstkbSA';
		  	//document.write("txtHint").innerHTML = '<p>'+'Vídeo de Código do Youtube'+'</p>';
		    //return;
	  	}

  
	  document.getElementById("txtHint").innerHTML = p1+n+p2+'\n'+i1+v+i2;
	  
  }
