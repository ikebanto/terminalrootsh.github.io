---
layout: post
title: Iniciar Debian Squeeze em modo texto
date: '2015-01-11T04:05:00.002-08:00'
description: Iniciar Debian Squeeze em modo texto
main-class: 'debian'
tags:
- Debian
image: http://4.bp.blogspot.com/-TUb6D8BYylI/UR1sgbldhyI/AAAAAAAAA_I/ZELyyX-hZOE/s72-c/update-rc.d.png
twitter_text: Iniciar Debian Squeeze em modo texto
introduction: Iniciar Debian Squeeze em modo texto
---
![Blog Linux](http://4.bp.blogspot.com/-TUb6D8BYylI/UR1sgbldhyI/AAAAAAAAA_I/ZELyyX-hZOE/s320/update-rc.d.png "Blog Linux")
Dica rápida!
Para iniciar em modo texto:
{% highlight bash %}
# update-rc.d -f gdm3 remove
{% endhighlight %}
Para iniciar o gráfico separadamente: 
{% highlight bash %}
$ startx
{% endhighlight %}
Para voltar o padrão para modo gráfico
{% highlight bash %}
# update-rc.d -f gdm3 defaults
{% endhighlight %}
Somente!
