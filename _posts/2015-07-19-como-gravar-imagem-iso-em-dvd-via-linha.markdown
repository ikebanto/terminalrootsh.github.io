---
layout: post
title: Como gravar imagem ISO em DVD via linha de comando
date: '2015-07-19T16:00:00.004-07:00'
description: Como gravar imagem ISO em DVD via linha de comando
main-class: 'misc'
tags:
- Multimídia
- Terminal
image: http://1.bp.blogspot.com/-ktxEd3qifmI/VasNtXlxvtI/AAAAAAAAF3g/r4CO5ZZ-VSk/s72-c/800-cd.jpg
twitter_text: Como gravar imagem ISO em DVD via linha de comando
introduction: Como gravar imagem ISO em DVD via linha de comando
---
    
![Blog Linux](http://1.bp.blogspot.com/-ktxEd3qifmI/VasNtXlxvtI/AAAAAAAAF3g/r4CO5ZZ-VSk/s400/800-cd.jpg "Blog Linux")
Basta instalar o pacote growisofs. Para instalar utilize o gerenciador de pacotes correspondente se sua Distro. No Debian, execute:
{% highlight bash %}
$ su
# apt-get install growisofs
{% endhighlight %}
Sua sintaxe é bem simples:
{% highlight bash %}
$ growisofs -dvd-compat -speed=8 -Z /dev/cdrom=debian-8.0.0-amd64-DVD-1.iso
{% endhighlight %}
Onde /dev/cdrom é o caminho para seu drive de DVD e debian-8.0.0-amd64-DVD-1.iso é a imagem ISO a ser gravada.
Via: http://www.vivaolinux.com.br/dica/Como-gravar-imagem-ISO-em-DVD-via-linha-de-comando
