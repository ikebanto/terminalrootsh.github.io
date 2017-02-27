---
layout: post
title: "Instalando o XFCE no Debian Squeeze"
date: '2013-02-17T13:18:00.000-08:00'
description: "Instalando o XFCE no Debian Squeeze"
main-class: 'debian'
tags:
- Debian
- Dicas
- XFCE
image: "http://4.bp.blogspot.com/-yDgqwxj_02w/USFHXnBrfJI/AAAAAAAABBE/9RnC96kPTns/s72-c/xfce.png"
twitter_text: "Instalando o XFCE no Debian Squeeze"
introduction: "Instalando o XFCE no Debian Squeeze"
---
   O Gnome3 assim como Unity não está legal, o certo mesmo é pular pro XFCE, se vc já tem o Gnome2 instalado, basta vc abrir o terminal, logar-se como root e instalá-lo, segue: 
{% highlight bash %}
$ su
# apt-get install xfce4
{% endhighlight %}
   Agora, se vc não tem o Gnome2, pois o XFCE é inter-compatível com o Gnome, ou seja, se o Gnome fosse instalado juntamente com o XFCE, os programas do primeiro também seriam nativos do segundo, pois ambos são GTK+2. Ou seja, para aproveitar o máximo de desempenho do XFCE, sugiro aplicativos GTK+2.
  Instale completamente colocando no seu sistema todos os pacotes do Debian disponíveis para o XFCE, incluindo plugins: 
{% highlight bash %}
# apt-get install xfce4 xfce4-netload-plugin xfce4-appfinder xfce4-notes-plugin xfce4-artwork xfce4-panel xfce4-battery-plugin xfce4-clipman-plugin xfce4-quicklauncher-plugin xfce4-cpufreq-plugin xfce4-radio-plugin xfce4-cpugraph-plugin xfce4-screenshooter-plugin xfce4-sensors-plugin xfce4-session xfce4-diskperf-plugin xfce4-systemload-plugin xfce4-fsguard-plugin xfce4-genmon-plugin xfce4-taskmanager xfce4-goodies xfce4-terminal xfce4-icon-theme xfce4-mailwatch-plugin xfce4-utils xfce4-verve-plugin xfce4-mcs-plugins xfce4-wavelan-plugin xfce4-messenger-plugin xfce4-weather-plugin xfce4-minicmd-plugin xfce4-mixer xfce4-xfapplet-plugin xfce4-mixer-alsa xfce4-xmms-plugin xfce4-mount-plugin libxfce4util4
{% endhighlight %}
  Lembrando que é bom ter a lista de pacotes atualizada: 
{% highlight bash %}
# apt-get update
{% endhighlight %}
 Somente!
