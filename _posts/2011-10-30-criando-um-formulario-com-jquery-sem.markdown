---
layout: post
title: Criando um formulário com JQuery sem carregamento de página
date: '2011-10-30T13:22:00.000-07:00'
description: Criando um formulário com JQuery sem carregamento de página
main-class: 'html'
tags:
- JavaScript-JQuery
twitter_text: Criando um formulário com JQuery sem carregamento de página
introduction: Criando um formulário com JQuery sem carregamento de página
---
Olá pessoal!Neste post vou ensinar como criar um Formulário de Contato sem precisar que haja carregamento de página utilizando o framework JQuery, isso servirá para qualquer tipo de FORM que vc quiser utilizar inclusive para autenticação.Lembrando que o arquivo com os dados do form.php(o arquivo que tratará os dados vindos do formulário são somente para mostrar a recuperação dos dados, porém o mesmo ficará por sua conta, pois aqui an verdade é só pra ver como criar isso com JQuery).Segue o código abaixo.
Leia os comentários nos códigos para entender melhor.
Estilizando os campos com CSS
{% highlight css %}
#exemplo {width:400px; border:3px solid #66264a; padding:5px;} 
#exemplo h1 {color:#66264a; font-size:13px;} 
span {font-weight:bold; color:#66264a;} 
#nome, #mail, #site {width:390px; border:1px solid silver;} 
#cadastrar {width:100px; border:normal; padding:10px; margin:10px;} 
#msg {width:390px; height:150px; border:1px solid silver;} 
#retorno {padding:1px; border:1px solid green;display:none;} 
#voltar {display:none;}
{% endhighlight %}
Scripts em JavaScript/JQuery
{% highlight bash %}
        
 
   
$(function(){            
	//ao clicar na tag com esse ID iniciamos a função     
	$("#cadastrar").click(function(){            
	//escondemos essa div       
	$("#formulario").hide("slow");            
	//após enviar utilizando a Funçao BeforeSend  
	beforeSend:$("#carregando").show("slow");            
	//Criamos as variaveis  
	var mail = $("#mail").val();  
	var nome = $("#nome").val();  
	var site = $("#site").val();  
	var msg  = $("#msg").val();            
	//Enviamos as variaveis pro arquivo formail.php(aqui vc pode pôr o nome que desejar)  
	$.post("formail.php",{mail: mail, nome: nome, site: site, msg: msg}, function(pegar_retorno){            
		//ao completar esconde novamente a div de ID carregando   
		complete:$("#carregando").hide("slow");            
			//mostramos o texto da função pegar_retorno que haviamos criado   
			$("#retorno").show("slow").text(pegar_retorno)            
				//completamos o script escondendo e mostrando as tags do HTML que queremos    
				$("#voltar").show("slow").click(function(){     
				$("#retorno").hide("slow");     
				$("#formulario").show("slow");                   
				$("#voltar").hide("slow");    
			});  
		});    
	});   
}); 
{% endhighlight %}
Um arquivo com o nome formail.php, nao vou comentar nem explicar pois isso é outro post
{% highlight php %}
<?php  
sleep(2);  
if(empty($_POST['mail']) || empty($_POST['nome']) || empty($_POST['site']) || empty($_POST['msg'])){     
	echo 'Um ou mais campos estão vazios!';     
	die;  
}  
	$mail  = $_POST['mail'];  
	$nome  = $_POST['nome'];  
	$site  = $_POST['site']; 
 	$msg   = $_POST['msg']; 
  echo "Seu email: $mail, Seu nome: $nome, Seu site: $site e sua mensagem: $msg!";
?>
{% endhighlight %}
Leia, entenda, teste e comente, valeu!
