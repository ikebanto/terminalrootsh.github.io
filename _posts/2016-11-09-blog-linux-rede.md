---
layout: post
title: "Como Rodar Aplicativos Gráficos pela Rede no Linux"
date: '2016-11-09T16:06:00.000-08:00'
image: 'https://1.bp.blogspot.com/-vUSYSOrxhZo/WB5Z3s7ZBfI/AAAAAAAAA9Q/IOfnlCFN3XYnWL-jtgZz5DRScGJfYTAVQCLcB/s72-c/blog-linux-ssh.png'
description: "Como Rodar Aplicativos Gráficos pela Rede no Linux"
main-class: 'tv'
color: '#cc181e'
description: "Como utilizar o SSH para rodar aplicações gráficas via rede."
main-class: 'tv'
color: '#D6BA32'
tags:
- TerminalRootTV
categories:
twitter_text: "Como Rodar Aplicativos Gráficos pela Rede no Linux"
introduction: "Como Rodar Aplicativos Gráficos pela Rede no Linux"
---

![Blog Linux Rede](https://1.bp.blogspot.com/-vUSYSOrxhZo/WB5Z3s7ZBfI/AAAAAAAAA9Q/IOfnlCFN3XYnWL-jtgZz5DRScGJfYTAVQCLcB/s320/blog-linux-ssh.png)

<iframe allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/c42j3B8HRG0" width="560"></iframe>

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
