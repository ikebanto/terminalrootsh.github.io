---
layout: post
title: Passando dados via POST com JQuery
date: '2011-11-17T04:58:00.000-08:00'
description: Passando dados via POST com JQuery
main-class: 'html'
tags:
- JavaScript-JQuery
twitter_text: Passando dados via POST com JQuery
introduction: Passando dados via POST com JQuery
---
Nesse exemplo tem o básico só para causar o entendimento mesmo.servirá para suas aplicações em que você deseja que não haja carregamento de página.Vou dividir em 3 arquivos, preste atenção nos comentários(em AZUL) para entender melhor:
1-index.php
2-carregar.js
3-dados.php
No index.php contém uma: [DIV id=FORM],[DIV id=MOSTRAR, display:none;] e os inputs com CLASSes definidas.
{% highlight html %}
   
 <input type= "Blog Linux")
  
 <input type= "Blog Linux")
   
  
 
{% endhighlight %}
No head do index.php deve existir o link pro JQuery e pro carregar.js que mostro logo abaixo:
{% highlight html %}
  
 
{% endhighlight %}
carregar.js
{% highlight js %}
/*prestar atenção na utilização dos parenteses e chaves*/ 
/*iniciamos com $ pra chamar o JQuery e dentro dele iniciamos uma função*/
$(function(){
/*se clicar na tag de class exibir, iniciamos um uma "sub-função"*/
$(".exibir").click(function(){
/*escondemos com fadeOut a tag com id form, podiamos usar tb o hide("fast ou slow"), o 10 é a velocidade a escondê-la*/ 
$("#form").fadeOut(10); 
/*definimos as variaveis e informaos as class de CSS contém um valor .val*/ 
var nome = $(".nome").val(); var exibir = $(".exibir").val(); 
/*setamos o método POST informamos o arquivo PHP que irá retornar as informaçoẽs, para isso criamos a function retorno, e passmos variavel que criamos e informamos o nome dela*/ 
$.post("dados.php", {nome: nome, exibir: exibir}, function(mostrar){ 
/*a div mostrar que estava com display none agora será exibida, pois nela estará os dados do dados.php*/ 
$("#mostrar").fadeIn(2000).html(mostrar)   }); });});
{% endhighlight %}
e o dados.php, servirá pra ver se os dados estão sendo passados corretamente.
{% highlight php %}
<?php 
extract($_POST); 
if(isset($exibir)){ 
	echo "O valor do nome é: ".$nome; 
	}else{ 
	echo "Sem valor no isset"; 
}
?>
{% endhighlight %}
Esse é o básico, mas só com isso pode-se ir "Ao infinito e Além", só depende de você essa evolução!
