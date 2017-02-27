---
layout: post
title: "Instalando o Zend Framework no Debian"
date: '2012-01-22T19:00:00.000-08:00'
description: "Instalando o Zend Framework no Debian"
main-class: 'misc'
tags:
- PHP
- Zend
image: "http://3.bp.blogspot.com/-DZoZOzkC2cM/TxzLvi_N0TI/AAAAAAAAAV8/3tDgFJPuX88/s72-c/logo-zend-framework.jpg"
twitter_text: "Instalando o Zend Framework no Debian"
introduction: "Instalando o Zend Framework no Debian"
---
![Blog Linux](http://3.bp.blogspot.com/-DZoZOzkC2cM/TxzLvi_N0TI/AAAAAAAAAV8/3tDgFJPuX88/s1600/logo-zend-framework.jpg "Blog Linux")
Chega de criar classe sem herança, chega de sintaxe e código feio, chega de Programação Orientada a Objetos misturada com Estruturada e principalmente chega de header.php, content.php e footer.php, quer ser realmente um programador PHP?Instale, aprenda e use o Zend Framework, o melhor!
Segue 10 "toscos" passos pra usar o Zend na sua máquina, o que na verdade pode se resumir em baixar e descompactar!
1-Baixe o Zend
{% highlight bash %}
$ wget http://framework.zend.com/releases/ZendFramework-1.11.11/ZendFramework-1.11.11.tar.gz
{% endhighlight %}
2-Mova-o para o diretório padrão
{% highlight bash %}
# mv ZendFramework-1.11.11.tar.gz /usr/share/php5/
{% endhighlight %}
3-Entre no diretório e descompacte-o
{% highlight bash %}
# cd /usr/share/php5/
# tar -xzvf ZendFramework-1.11.11.tar.gz
{% endhighlight %}
4-Renomeie a pasta que você descompactou para libzend-framework-php
{% highlight bash %}
# mv ZendFramework-1.11.11/ libzend-framework-php
{% endhighlight %}
5-Edite o arquivo php.ini e altere o include_path, depois precisa descomentar(tirar o ';'(ponto e virgula do início))
{% highlight bash %}
# vi /etc/php5/apache2/php.ini
{% endhighlight %}
troque isso:
{% highlight bash %}
;include_path = ".:/usr/share/php
{% endhighlight %}
por isso:
{% highlight bash %}
include_path = ".:/usr/share/php:/usr/share/php5/libzend-framework-php"
{% endhighlight %}
6-Reinicie o Apache
{% highlight bash %}
# /etc/init.d/apache2 restart
{% endhighlight %}
7-Crie um alias para execução do Zend
{% highlight bash %}
# alias zf=/usr/share/php5/libzend-framework-php/bin/zf.sh
{% endhighlight %}
8-Verifique se já está funcionando verificando a versão:
{% highlight bash %}
$ zf show version
{% endhighlight %}
vai retornar isso:
{% highlight bash %}
Zend Framework Version: 1.11.11
{% endhighlight %}
9-Crie o básico do básico para vê se funciona mesmo
{% highlight bash %}
$ zf create project /var/www/hello
{% endhighlight %}
vai aparecer isso:
{% highlight bash %}
Creating project at /var/www/hello
Note: This command created a web project, for more information setting up your VHOST, please see docs/README
Testing Note: PHPUnit was not found in your include_path, therefore no testing actions will be created.
{% endhighlight %}
10-Acesse-o no seguinte endereço com seu navegador
{% highlight bash %}
http://localhost/hello/application/views/scripts/index/index.phtml
{% endhighlight %}
e finalmente aparecerá essa paǵina
Pronto!
