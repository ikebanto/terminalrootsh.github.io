---
layout: post
title: "Como instalar o PHP-GTK"
date: '2011-11-04T18:02:00.000-07:00'
description: "Como instalar o PHP-GTK"
main-class: 'misc'
tags:
- PHP-GTK
twitter_text: "Como instalar o PHP-GTK"
introduction: "Como instalar o PHP-GTK"
---
Caso seu sistema não tenha a biblioteca Gtk2 instalada, você poderá baixar a versão estática, que contém toda a biblioteca Gtk2 compilada, bem como suas dependências, disponível nos pacotes a seguir. Os pacotes acompanham estes componentes:
<span style= "Blog Linux")
<span style= "Blog Linux")
<span style= "Blog Linux")
<span style= "Blog Linux")
 - PDO com MySql, PostgreSql, SQLite.
Obs: este link é para 32-bits.
Clique aqui para fazer download do pacote
<br style= "Blog Linux")
<span style= "Blog Linux")
<span style= "Blog Linux")
<span style= "Blog Linux")
<span style= "Blog Linux")
 Como usuário root:
{% highlight bash %}
# cd /usr/local
# tar -xzvf php-gtk2xx.tar.gz
# chmod 777 php-gtk2 -Rf
{% endhighlight %}
A partir da versão PHP-GTK2d, execute o comando abaixo:
{% highlight bash %}
# cp -R /usr/local/php-gtk2/share/gtksourceview-1.0/ /usr/share/
{% endhighlight %}
Após, vamos construir um link para facilitar a execução:
{% highlight bash %}
# ln -sf /usr/local/php-gtk2/bin/php /usr/bin/php-gtk2
# exit
{% endhighlight %}
<span style= "Blog Linux")
 escreva o seguinte programa:
{% highlight bash %}
<?php
$janela = new GtkWindow;
$janela->show_all();
Gtk::Main();
?>
{% endhighlight %}
Vá até a pasta onde vc salvou e digite:
{% highlight bash %}
# php-gtk2 
{% endhighlight %}
Obs: Se aparecer uma janela na tela, funcionou. 
Para Instalar o Glade no Debian, basta:{% highlight bash %}
# apt-get install glade
{% endhighlight %}
Pronto!fonte:PHP-GTK
