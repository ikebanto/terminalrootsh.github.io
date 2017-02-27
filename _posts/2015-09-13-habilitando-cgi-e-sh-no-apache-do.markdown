---
layout: post
title: Habilitando CGI e .sh no Apache do Debian Jessie
date: '2015-09-13T06:16:00.000-07:00'
description: Habilitando CGI e .sh no Apache do Debian Jessie
main-class: 'bash'
tags:
- Debian
- Shell Script
- Apache
- Dicas
image: http://1.bp.blogspot.com/-LkF8Hg4_jIo/VfVyloiTbzI/AAAAAAAAExA/0u4Vibxi83M/s72-c/gnuapache.jpg
twitter_text: Habilitando CGI e .sh no Apache do Debian Jessie
introduction: Habilitando CGI e .sh no Apache do Debian Jessie
---
![Blog Linux](http://1.bp.blogspot.com/-LkF8Hg4_jIo/VfVyloiTbzI/AAAAAAAAExA/0u4Vibxi83M/s1600/gnuapache.jpg "Blog Linux")
Iremos admitir que você já sabe instalar o Apache e já utiliza-o com PHP, HTML,... , caso não saiba pesquise na internet como instalá-los. O bom de usar CGI é que você pode executar comando do Shell Script na sua página Web.
A maioria das distribuições já possuem o módulo CGI do Apache configurado e com o suporte a ele.
{% highlight bash %}
LoadModule cgi_module /usr/lib/apache/1.3/mod_cgi.so
{% endhighlight %}
Caso deseje certificar-se de que o módulo já está carregado, basta verificar em:
Obs: Estou usando o Editor Nano, mas vc pode usar o de sua preferência.
Logue-se como root , se não possuir o sudo.
{% highlight bash %}
$ su
{% endhighlight %}
{% highlight bash %}
# nano /etc/apache2/mods-available/cgi.load
{% endhighlight %}
Certifique-se também de que já está habilitado:
{% highlight bash %}
nano /etc/apache2/mods-enabled/cgi.load
{% endhighlight %}
Se estiver comentado (#), "descomente" e salve o arquivo.
Agora vamos informar ao Apache quais os formatos que desejamos trabalhar:
{% highlight bash %}
nano /etc/apache2/mods-enabled/mime.conf
{% endhighlight %}
Procure nele a linha que possui o seguinte código:
#AddHandler cgi-script .cgi
Se estiver comentado, "descomente" e adicione o .sh no final, deixando-o assim:
AddHandler cgi-script .cgi .sh
Caso não esteja habilitado, rode esse comando para leitura de arquivos CGI:
{% highlight bash %}
a2enmod cgi
{% endhighlight %}
Por padrão no Debian Jessie há uma pasta que manda o http://localhost/cgi-bin/ para /usr/lib/cgi-bin , ou seja, se você pôr um arquivo cgi dentro de /usr/lib/cgi-bin automaticamente quando vc acessar seu http://localhost/cgi-bin/ ele irá acessar /usr/lib/cgi-bin . Mas caso vc deseje alterar o endereço, para por exemplo: http://localhost/sh/ , então vc precisa editar o arquivo 000-default.conf e adicionar uma linha do com ScriptAlias nele, assim:
{% highlight bash %}
nano /etc/apache2/sites-available/000-default.conf
{% endhighlight %}
E adicione ANTES da tag  , o seguinte código:
{% highlight bash %}
ScriptAlias /sh/ /usr/lib/cgi-bin/
{% endhighlight %}
Salve-o e depois restarte o Apache:
{% highlight bash %}
systemctl restart apache2
{% endhighlight %}
Ou só releia o arquivo de configuração:
{% highlight bash %}
service apache2 reload
{% endhighlight %}
Depois é só criar um arquivo teste, exemplo o que vou disponibilizar aqui abaixo, salvá-lo no diretório /usr/lib/cgi-bin e depois acessar o endereço http://localhost/cgi-bin/ ou http://localhost/sh/ , dependendo se vc criou alias do Document Root ou não, e ver se está tudo ok.
Após salvar o arquivo, não esqueça de dar permissão de visualização para ele:
{% highlight bash %}
chmod a+x /usr/lib/cgi-bin/teste.cgi
{% endhighlight %}
Arquivo teste.cgi:
  
 
Qualquer dúvida, é só comentar.
Abraços.
Links úteis:
http://thobias.org/doc/cgi_shell.html 
http://www.vivaolinux.com.br/dica/Habilitar-CgiShell-no-Apache2 
https://debian-handbook.info/browse/pt-BR/stable/sect.http-web-server.html 
http://httpd.apache.org/docs/current/howto/cgi.html
