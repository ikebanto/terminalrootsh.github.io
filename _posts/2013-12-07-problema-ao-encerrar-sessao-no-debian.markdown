---
layout: post
title: "Problema ao encerrar sessão no Debian Wheezy"
date: '2013-12-07T06:35:00.001-08:00'
description: "Problema ao encerrar sessão no Debian Wheezy"
main-class: 'debian'
tags:
- Debian
- Dicas
image: "http://1.bp.blogspot.com/-WOGj-NuXTXs/UqMxPxu3suI/AAAAAAAACmo/R14gB2Na_Rs/s72-c/Mo4Ux.png"
twitter_text: "Problema ao encerrar sessão no Debian Wheezy"
introduction: "Problema ao encerrar sessão no Debian Wheezy"
---
![Blog Linux](http://1.bp.blogspot.com/-WOGj-NuXTXs/UqMxPxu3suI/AAAAAAAACmo/R14gB2Na_Rs/s320/Mo4Ux.png "Blog Linux")
Bom galera pra quem tem uma placa de vídeo que não funcionou bem no Debian Wheezy, provavelmente o drive genérico ainda está em desenvolvimento e o Debian não instalará sem sua autorização o drive proprietário, então, você precisa instalar o drive não livre pra rodar direitinho a placa, basta:
1- Adicionar o repositório nonfree na sua sources.list: 
# vi /etc/apt/sources.list 
1.1- Insira na ultima linha, mas verifique antes se essa linha já existe no seu repositório, se não, insira: 
{% highlight bash %}
deb http://ftp.debian.org/debian/ wheezy-updates main contrib non-free 
{% endhighlight %}
2-Atualizar sua lista: 
# apt-get update 
3- Instalar os firmwares não livre, seram automáticos: 
# apt-get install firmware-linux-nonfree 
Reboot a máquina, e pronto!  Para qualquer problema verifique {% highlight bash %}
$ cat /var/log/Xorg.log
{% endhighlight %} e posta aqui o comentário da linha [EE] referente a placa.
