---
layout: post
title: Fazendo um Chat com Vídeo pelo Terminal
date: '2014-05-16T18:04:00.000-07:00'
description: Fazendo um Chat com Vídeo pelo Terminal
main-class: 'misc'
tags:
- Multimídia
- Notícias
- Terminal
image: http://3.bp.blogspot.com/-2sE9EgjkYoY/VWUY0jxVzxI/AAAAAAAABTA/qV2AgimnmIg/s72-c/terminal-video-chat.gif
twitter_text: Fazendo um Chat com Vídeo pelo Terminal
introduction: Fazendo um Chat com Vídeo pelo Terminal
---
 
![Blog Linux](http://3.bp.blogspot.com/-2sE9EgjkYoY/VWUY0jxVzxI/AAAAAAAABTA/qV2AgimnmIg/s320/terminal-video-chat.gif "Blog Linux")
Entre os mais populares aplicativos de vídeo do bate-papo aparece  p2pvc (ponto a ponto do bate-papo de vídeo), um programa muito simples  que nos permite iniciar conversas de vídeo em um terminal.
O que define p2pvc de outros é que o vídeo é exibido no próprio  terminal, usando caracteres ASCII e 256 cores possíveis no terminal.
Como a qualidade do vídeo deixa muito a desejar, com suporte para  áudio, e até mesmo pode simplesmente usá-lo para fazer chamadas de voz  sem software adicional.
Para fazer as chamadas que temos de colocar o endereço IP do computador que você deseja se conectar.
☛ Instalação☛ Dependências✔ OpenCV
✔ PortAudio
✔ ncurses☛ Download{% highlight bash %}
$ wget https://github.com/mofarrell/p2pvc/archive/master.zip
{% endhighlight %}
☛ Compilação{% highlight bash %}
# make
# ./p2pvc 127.0.0.1 -v
{% endhighlight %}
Site do projeto:
https://github.com/mofarrell/p2pvc
