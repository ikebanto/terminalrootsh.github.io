---
layout: post
title: "Utilizando Media Queries do CSS"
date: '2011-11-23T07:12:00.000-08:00'
description: "Utilizando Media Queries do CSS"
main-class: 'html'
tags:
- CSS
image: "http://3.bp.blogspot.com/-eGwcmpOkShM/Ts0MAHi3-bI/AAAAAAAAAQs/8t__VIUCOEg/s72-c/tamanho%2B1%2Bpara%2Bcelular.png"
twitter_text: "Utilizando Media Queries do CSS"
introduction: "Utilizando Media Queries do CSS"
---
Media Queries é a utilização de Media Types com uma ou mais expressões envolvendo características de uma media para definir formatações para diversos dispositivos. O browser ou a aplicação lê as expressões definidas na query, caso o dispositivo se encaixe nestas requisições, o CSS será aplicado.
Colocando em prática, temos uma pagina em HTML 5 (pode ser HTML 4 também ou XHTML) com um link teste.css e ná pagina teste.html, teremos uma div id teste, entao queremos que quando essa página for visualizado por um Celular ou Smartphone tenha um tamanho; quando for um Tablet ou um NetBook tenha outro tamanho(maior) e quando for um PC ou uma TV tenha um novo tamanho(ainda maior), então utilizamos as Medias Queries em CSS para essa façanha, segue o arquivo teste.html e teste.css comentados em AZUL pra você entender melhor como funciona, veirifque as imagens(clique nelas para ampliar) para ver os testes que fiz diminuindo o tamanho da janela do Navegdor para verificar se realmente funciona, se a div id teste tivesse um único tamanho, o mesmo ficaria com a mesma resolução, segue:
teste.html
{% highlight bash %}
 
  
  
  Teste  
  
 
  Div Teste
 
{% endhighlight %}
E aqui o arquivo teste.css
{% highlight bash %}
@charset "utf-8";
/*teste.css*/
/* começamos com o tamanho minimo de 200 px e maximo de 250 px, infromando ter 100% dos 250px, Configurada para CELULARES E SMARTPHONES */
div#teste {
 min-width:200px; 
 max-width:250px; 
 min-height:500px; 
 border:1px solid blue; 
 background:silver; 
 width:100%;
 }
/* se a tela for maior que 600 pixels, a div teste passa a ter um valor mínimo de 600 pixels e maximo de 650 pixels - tamanho para TABLETS E NETBOOKS */
@media screen and (min-width:650px){
div#teste {
 min-width:600px; 
 max-width:650px; 
 min-height:500px; 
 width:100%;
 }
}
/* se a tela for maior que 900 pixels, a div teste passa a ter um valor mínimo de 1200 pixels - tamanho para TVs e PCs */
@media screen and (min-width:900px){
div#teste {
 min-width:1200px; 
 width:100%;
 }
}
{% endhighlight %}
Verifique as imagens pra ver como resultará:
Primeira Configuração para Celulares e Smartphones:
![Blog Linux](http://3.bp.blogspot.com/-eGwcmpOkShM/Ts0MAHi3-bI/AAAAAAAAAQs/8t__VIUCOEg/s320/tamanho%2B1%2Bpara%2Bcelular.png "Blog Linux")
Segunda Configuração para Tablets e NetBooks:
![Blog Linux](http://3.bp.blogspot.com/-JIqzeWUVeAI/Ts0Mcnct7jI/AAAAAAAAAQ4/KHASjxsRsIs/s320/passou%2Bdo%2B600%2Bpra%2Btablets%2Be%2Bnetbooks.png "Blog Linux")
Terceira Configuração para PCs e TVs:
![Blog Linux](http://3.bp.blogspot.com/-evBWyBg_uzc/Ts0MucIKKDI/AAAAAAAAARE/mf9GUiul49w/s320/tv%2Be%2Bpc.png "Blog Linux")
Verifique que usamos a propriedade @media screen and(operador booleano) para informar se o tamanho tiver no minimo tal, tais propriedade passarão a ter tais valores, lembrando que as Media Queries devem estar depois pois a leitura do código começa de cima e quem for definido por último passará ater o último valor.
ok, é isso, mini-tutorial só pra saber mesmo como funciona, espero que gostem e comentem!
