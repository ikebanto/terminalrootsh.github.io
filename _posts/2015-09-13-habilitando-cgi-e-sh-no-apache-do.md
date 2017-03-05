---
layout: post
title: "Habilitando CGI e .sh no Apache do Debian Jessie"
date: '2015-09-13T06:16:00.000-07:00'
image: '/assets/img/shell-script/gnuapache.jpg'
description: "O bom de usar CGI é que você pode executar comando do Shell Script na sua página Web."
main-class: 'bash'
tags:
- Debian
- Shell Script
- Apache
- Dicas
---

![Blog Linux](/assets/img/shell-script/gnuapache.jpg "Blog Linux")

Iremos admitir que você já sabe instalar o [Apache](http://apache.org/) e já utiliza-o com [PHP](http://php.net/), [HTML](https://www.w3.org/),...caso não saiba pesquise na internet como instalá-los. O bom de usar __CGI__ é que você pode executar comando do [Shell Script](https://cse.google.com.br/cse/publicurl?cx=004473188612396442360:qs2ekmnkweq&q=shell-script) na sua *página Web*.

A maioria das distribuições já possuem o módulo __CGI__ do __Apache__ configurado e com o suporte a ele.

{% highlight bash %}
LoadModule cgi_module /usr/lib/apache/1.3/mod_cgi.so
{% endhighlight %}

Caso deseje certificar-se de que o módulo já está carregado, basta verificar em
> Obs: Estou usando o Editor Nano, mas vc pode usar o de sua preferência.
Logue-se como root , se não possuir o sudo.

{% highlight bash %}
su
{% endhighlight %}

{% highlight bash %}
nano /etc/apache2/mods-available/cgi.load
{% endhighlight %}

Certifique-se também de que já está __habilitado__
{% highlight bash %}
nano /etc/apache2/mods-enabled/cgi.load
{% endhighlight %}

Se estiver comentado (__#__), "descomente" e salve o arquivo.

Agora vamos informar ao Apache quais os formatos que desejamos trabalhar
{% highlight bash %}
nano /etc/apache2/mods-enabled/mime.conf
{% endhighlight %}

Procure nele a linha que possui o seguinte código
> #AddHandler cgi-script .cgi

Se estiver comentado, "descomente" e adicione o .sh no final, deixando-o assim

> AddHandler cgi-script .cgi .sh

Caso não esteja habilitado, rode esse comando para leitura de arquivos CGI
{% highlight bash %}
a2enmod cgi
{% endhighlight %}

Por padrão no [Debian Jessie](https://cse.google.com.br/cse/publicurl?cx=004473188612396442360:qs2ekmnkweq&q=debian) há uma pasta que manda o __http://localhost/cgi-bin/__ para __/usr/lib/cgi-bin__ , ou seja, se você pôr um arquivo cgi dentro de __/usr/lib/cgi-bin__ automaticamente quando vc acessar seu __http://localhost/cgi-bin/__ ele irá acessar __/usr/lib/cgi-bin__. Mas caso vc deseje alterar o endereço, para por exemplo: __http://localhost/sh/__ , então vc precisa editar o arquivo __000-default.conf__ e adicionar uma linha do com __ScriptAlias__ nele, assim
{% highlight bash %}
nano /etc/apache2/sites-available/000-default.conf
{% endhighlight %}

E adicione __ANTES__ da tag o seguinte código
{% highlight bash %}
ScriptAlias /sh/ /usr/lib/cgi-bin/
{% endhighlight %}

Salve-o e depois restarte o Apache
{% highlight bash %}
systemctl restart apache2
{% endhighlight %}

Ou só releia o arquivo de configuração:
{% highlight bash %}
service apache2 reload
{% endhighlight %}

Depois é só criar um arquivo teste, exemplo o que vou disponibilizar aqui abaixo, salvá-lo no diretório __/usr/lib/cgi-bin__ e depois acessar o endereço __http://localhost/cgi-bin/__ ou __http://localhost/sh/__ , dependendo se vc criou alias do Document Root ou não, e ver se está tudo ok.

Após salvar o arquivo, não esqueça de dar permissão de visualização para ele
{% highlight bash %}
chmod a+x /usr/lib/cgi-bin/teste.cgi
{% endhighlight %}

Arquivo __teste.cgi__
{% highlight bash %}
#!/bin/bash
  
echo "content-type: text/html"
echo
echo
echo "
  <html> <head> <meta charset='utf-8' /> <title> CGI script </title> </head>
  <body>
  <h1>Algumas informações sobre a máquina que o CGI está rodando:</h1>
  "
  
echo "<h4>uptime</h4>"
echo "<pre>$(uptime)</pre>"
  
echo "<h4>uname</h4>"
echo "<pre>$(uname -a)</pre>"
  
echo "<h4>/proc/cpuinfo</h4>"
echo "<pre>$(cat /proc/cpuinfo)</pre>"
  
echo "
  </body>
  </html>
  "
{% endhighlight %}
 
# Qualquer dúvida, é só comentar.
## Abraços.
### Links úteis
http://thobias.org/doc/cgi_shell.html

http://www.vivaolinux.com.br/dica/Habilitar-CgiShell-no-Apache2

https://debian-handbook.info/browse/pt-BR/stable/sect.http-web-server.html

http://httpd.apache.org/docs/current/howto/cgi.html

