---
layout: post
title: "Acertando data e hora no Linux"
date: '2013-02-14T15:23:00.000-08:00'
description: "Acertando data e hora no Linux"
main-class: 'linux'
tags:
- Linux
- Dicas
image: "http://1.bp.blogspot.com/-Op3Z0qsucTw/UR1xeXW-AmI/AAAAAAAAA_Y/7Flzb5TbgvE/s72-c/date.png"
twitter_text: "Acertando data e hora no Linux"
introduction: "Acertando data e hora no Linux"
---
![Blog Linux](http://1.bp.blogspot.com/-Op3Z0qsucTw/UR1xeXW-AmI/AAAAAAAAA_Y/7Flzb5TbgvE/s320/date.png "Blog Linux")
Para acertar data/hora no Linux, basta:
{% highlight bash %}
# date MMddhhmmyyyy
{% endhighlight %}
As letras significam:
MM: mêsdd: diahh: horamm: minutoyyyy: ano 
Não se usa mais o "clock -w"
Para maiore informações deve-sempre usar o man ou o help:
{% highlight bash %}
$ man date
$ date --help
{% endhighlight %}
