---
layout: post
title: 'Shell Script: Enviando dados via Terminal para um formulário web'
date: '2015-07-12T18:32:00.000-07:00'
description: 'Shell Script: Enviando dados via Terminal para um formulário web'
main-class: 'bash'
tags:
- Shell Script
- Web Hacker
- Terminal
- Comandos
image: http://1.bp.blogspot.com/-IxSc9OYbmrw/VaMUHJEFffI/AAAAAAAABec/cAkp0-UyK5c/s72-c/curl-post-shell.png
twitter_text: 'Shell Script: Enviando dados via Terminal para um formulário web'
introduction: 'Shell Script: Enviando dados via Terminal para um formulário web'
---
![Blog Linux](http://1.bp.blogspot.com/-IxSc9OYbmrw/VaMUHJEFffI/AAAAAAAABec/cAkp0-UyK5c/s400/curl-post-shell.png "Blog Linux")
COMO ENVIAR DADOS PARA FORMULÁRIO COM CURL VIA POST PELO TERMINAL COM SHELL SCRIPT
 Curl é uma ferramenta para transferir dados de ou para um servidor, usando um dos protocolos suportados (DICT, o FILE, FTP, FTPS, GOPHER, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, POP3, POP3S, RTMP, RTSP, SCP, SFTP, SMTP, SMTPS, TELNET e TFTP). O comando é projetado para funcionar sem interação do usuário.
 Curl oferece um busload cheio de truques úteis como suporte a proxy, autenticação de usuário, upload FTP, HTTP post, conexões SSL, cookies, transferência e muito mais. Como você verá abaixo, o número de recursos vai fazer a sua cabeça girar!
 
 SYNOPSIS
 
$ curl [options] [URL...] 
 Verifique se o curl está instalado:
 
{% highlight bash %}
$ which curl
{% endhighlight %}
 Se retornar isso: /usr/bin/curl é porque está instalado, mas se não retornar nada, é porque não está instalado e você pode instalá-lo, pelo apt-get:
 
{% highlight bash %}
$ su
{% endhighlight %}
{% highlight bash %}
# apt-get install curl
{% endhighlight %}
Se sua distro tiver o sudo instalado e configurado para seu usuário, utilize-o então, ou se form outra distro que não possui apt-get, tente com o gerenciador de pacotes correspondente, ou se caso desejar, baixe o pacote e compile-o:
Clique aqui para baixar o curl 
 Para mais informações detalhadas:
 
{% highlight bash %}
$ man curl
{% endhighlight %}
ou
{% highlight bash %}
$ man curlcurl --help
{% endhighlight %}
Como enviar dados para formulário com curl via post pelo terminal com Shell Script:
 Este teste foi feito em localhost com o Apache e o PHP devidamente instalados, mas se você possui um endereço na web, utilize-o!
 Eu criei o arquivo formulario.php na raíz do meu localhost, o arquivo possui o seguinte código:
<?php
 if(isset($_POST['enviar'])){
  if($_POST['enviar'] != ''){
   
   shell_exec('echo Nome: '.$_POST['nome'].' - Senha: '.$_POST['senha'].' >> banco.txt');
   die('Dados salvos com sucesso!');
  }else{
   die('erro');
  }
 }
?>
 
    
  Formulario  
 
   
   
   Nome: 
   Senha: 
   
  
 
 Verifique que eu fiz um página HTML básica e pus uma condição de envio de formulário. Outra coisa, eu utilizo o shell_exec (PHP para executar Shell) para criar um novo arquivo banco.txt e salvar os dados enviados, mas você pode fazer do jeito que quiser: MySQL, fopen(),...
 Devidamente criada a página que irá receber os dados, vamos mandar os dados via Shell pelo Terminal.
 O -F indica o input HTML, e depois indicamos a URL, o &amp;&amp; echo é só pra pular linha mesmo, abra o terminal e envie o comando abaixo:
{% highlight bash %}
$ curl -F 'nome=TerminalRoot' -F 'senha=gnu123' -F 'enviar=ok' http://127.0.0.1/formulario.php &amp;&amp; echo
{% endhighlight %}
 Pronto, depois é verificar lá na pasta do servidor se há o arquivo banco.txt e verificar se os dados estão lá
{% highlight bash %}
$ cat /var/www/html/banco.txt
{% endhighlight %} 
 
Qualquer coisa é só comentar! :)
