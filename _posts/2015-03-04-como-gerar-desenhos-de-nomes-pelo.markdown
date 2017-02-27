---
layout: post
title: "Como gerar desenhos de nomes pelo terminal"
date: '2015-03-04T18:27:00.000-08:00'
description: "Como gerar desenhos de nomes pelo terminal"
main-class: 'misc'
tags:
- Terminal
- Comandos
image: "http://2.bp.blogspot.com/-YRqkTiqe16U/VWPL10VFRyI/AAAAAAAABQY/j0pIxJXM2Ow/s72-c/figlet.png"
twitter_text: "Como gerar desenhos de nomes pelo terminal"
introduction: "Como gerar desenhos de nomes pelo terminal"
---
![Blog Linux](http://2.bp.blogspot.com/-YRqkTiqe16U/VWPL10VFRyI/AAAAAAAABQY/j0pIxJXM2Ow/s640/figlet.png "Blog Linux")
Estamos falando do figlet. FIGlet é um programa para fazer grandes letras de texto comum. Basta vc  instalá-lo em seu computador e abrir um novo terminal e executar o  comando com a palavra que você deseja:
{% highlight bash %}
$ figlet Terminal Root
{% endhighlight %}
A saída será justamente a imagem desse post!
Para instalar, se for Debian e debian-likes (Ubuntu, Mint,…), basta executar:
{% highlight bash %}
$ su
{% endhighlight %}{% highlight bash %}
# apt-get install figlet
{% endhighlight %}
Se vc possuir o sudo instalado, execute com o sudo.
Caso seja outra distro, baixe:
{% highlight bash %}
$ wget ftp://ftp.figlet.org/pub/figlet/program/unix/figlet-2.2.5.tar.gz
{% endhighlight %}
Descompacte:
{% highlight bash %}
$ tar -xzvf figlet-2.2.5.tar.gz
{% endhighlight %}
e compile o código de acordo com as informações no arquivo(em inglês):
figlet-2.2.5/READMESite Oficial do Projeto: http://www.figlet.org/
