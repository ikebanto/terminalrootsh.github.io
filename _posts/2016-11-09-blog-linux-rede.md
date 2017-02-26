---
layout: post
title: "Como Rodar Aplicativos Gráficos pela Rede no Linux"
date: '2016-11-09T16:06:00.000-08:00'
image: '/assets/img/tv/blog-linux-ssh.png'
description: "Vídeo demonstrando como rodar aplicativos gráficos pela rede no Linux"
main-class: 'tv'
color: '#cc181e'
tags:
- TerminalRootTV
twitter_text: "Como Rodar Aplicativos Gráficos pela Rede no Linux"
introduction: "Vídeo demonstrando como rodar aplicativos gráficos pela rede no Linux"
---

![Blog Linux Rede](/assets/img/tv/blog-linux-ssh.png)

Edite esse arquivo:
{% highlight bash %}
nano /etc/ssh/sshd_config
{% endhighlight %}

E coloque isso dentro:
{% highlight bash %}
X11Forwarding yes
X11DisplayOffset 10
PrintMotd yes
PrintLastLog yes
TCPKeepAlive yes
UseLogin yes
{% endhighlight %}

E depois restart o ssh:
{% highlight bash %}
/etc/init.d/ssh restart
{% endhighlight %}


Logue:
{% highlight bash %}
ssh -X user@IP
{% endhighlight %}

# Veja o vídeo

<iframe allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/c42j3B8HRG0" width="560"></iframe>
