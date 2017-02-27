---
layout: post
title: "Como obter seu IP via Terminal"
date: '2015-08-02T16:23:00.000-07:00'
description: "Como obter seu IP via Terminal"
main-class: 'linux'
tags:
- Linux
- GNU
- Comandos
- Redes
image: "http://3.bp.blogspot.com/-kjLIvRZMAjs/Vb6kuj6Y5ZI/AAAAAAAABkE/jG6S8eib4hw/s72-c/como-obter-seu-ip-via-terminal.jpg"
twitter_text: "Como obter seu IP via Terminal"
introduction: "Como obter seu IP via Terminal"
---
![Blog Linux](http://3.bp.blogspot.com/-kjLIvRZMAjs/Vb6kuj6Y5ZI/AAAAAAAABkE/jG6S8eib4hw/s1600/como-obter-seu-ip-via-terminal.jpg "Blog Linux")
COMO OBTER SEU IP VIA TERMINAL
Vamos supor que a sua máquina Linux está atrás de um roteador NAT. Então, o que é visível para a sua máquina é apenas um endereço IP da LAN atribuído a sua interface LAN. Então, como você pode detectar o público (ou WAN) endereço IP atribuído ao roteador NAT, de preferência a partir de linha de comando?
Existem várias formas, primeiramente vamos mostrar usando o curl :
Você precisa ter o curl instalado, basta usar o gerenciador de pacotes apt-get , mas caso você possua outra distro , tente com o seu gerenciador de pacotes correspondente , ou então baixe-o aqui e compile::
{% highlight bash %}
$ su
# apt-get install curl
{% endhighlight %}
Uma lista de opções com o curl:
{% highlight bash %}
curl ifconfig.me
curl icanhazip.com
curl ident.me
curl ipecho.net/plain
curl whatismyip.akamai.com
curl tnx.nl/ip
curl myip.dnsomatic.com
curl ip.appspot.com
curl ip.telize.com
curl curlmyip.com
curl -s checkip.dyndns.org | sed 's/.*IP Address: \([0-9\.]*\).*/\1/g'
{% endhighlight %}
Você também pode obter utilizando uma das Funções Terminal Root , a função verip , clique aqui para instalar as Funções Terminal Root.
Outra forma é uma linha de comando bem simples:
{% highlight bash %}
$ wget "http://goo.gl/KlxZlL" -O ip.txt 2>/dev/null;cat ip.txt;rm ip.txt*;echo
{% endhighlight %}
Ou se for IP local:
{% highlight bash %}
$ hostname -i
{% endhighlight %}
Ou se for IP Público:
{% highlight bash %}
$ hostname -I
{% endhighlight %}
Existem várias outras formas, só utilizar sua criatividade e as milhares de ferramentas GNU/Linux e UNIX (sed, PIPE, cat, lynx, ifconfig ,...)
Valeu!
Baseado e melhorado de: http://xmodulo.com/how-to-find-the-public-ip-address-from-command-line.html
