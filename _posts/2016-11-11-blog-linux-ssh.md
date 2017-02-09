---
layout: post
title: "Como Fazer Acesso Remoto Gráfico no Linux"
date: '2016-11-11T18:12:00.000-07:00'
image: 'https://2.bp.blogspot.com/-i4o-bsCptnw/WB5ZPQbkzpI/AAAAAAAAA9M/NkCutIZ6GzMNjejJWOIknNjgfqiPdFm5QCLcB/s72-c/blog-linux-ssh-x-window.png'
description: "Como Fazer Acesso Remoto Gráfico no Linux"
main-class: 'tv'
color: '#cc181e'
tags:
- TerminalRootTV
categories:
twitter_text: "Como Fazer Acesso Remoto Gráfico no Linux"
introduction: "Como Fazer Acesso Remoto Gráfico no Linux"
---

![Blog Linux NFS](https://2.bp.blogspot.com/-i4o-bsCptnw/WB5ZPQbkzpI/AAAAAAAAA9M/NkCutIZ6GzMNjejJWOIknNjgfqiPdFm5QCLcB/s320/blog-linux-ssh-x-window.png)

<iframe allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/wI7ek1ZHUxQ" width="560"></iframe>

Instalar:
{% highlight bash %}
apt-get install tightvncserver tightvnc-java xtightvncviewer
{% endhighlight %}

Configura a senha:
{% highlight bash %}
vncpasswd
{% endhighlight %}

Iniciar o VNC no servidor:
{% highlight bash %}
vncserver
{% endhighlight %}

Caso preciso, usar o nmap:
{% highlight bash %}
nmap [IP]
{% endhighlight %}

Iniciar sessão:
{% highlight bash %}
vncviewer [IP]:[porta]
{% endhighlight %}
