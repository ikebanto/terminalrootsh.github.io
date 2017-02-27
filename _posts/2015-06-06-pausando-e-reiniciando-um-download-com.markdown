---
layout: post
title: Pausando e reiniciando um download com wget
date: '2015-06-06T19:40:00.000-07:00'
description: Pausando e reiniciando um download com wget
main-class: 'misc'
tags:
- Dicas
- Terminal
- Comandos
image: http://1.bp.blogspot.com/-xKcqyNhbO-U/VXOuEaVksuI/AAAAAAAABX8/5Z1v8Nx9iPE/s72-c/Linux_Debian_Redhat_SuSE.jpg
twitter_text: Pausando e reiniciando um download com wget
introduction: Pausando e reiniciando um download com wget
---
![Blog Linux](http://1.bp.blogspot.com/-xKcqyNhbO-U/VXOuEaVksuI/AAAAAAAABX8/5Z1v8Nx9iPE/s400/Linux_Debian_Redhat_SuSE.jpg "Blog Linux")
Fala linusers, precisei baixar a imagem do Arch Linux pra instalar no notebook de um amigo meu, dae tava baixando pelo wget, mas dae precisei fazer outra coisa, dae fui pesquisar na internet como pausar o wget e reiniciar o download, dae achei uma dica muito interessante no blog do Cleiton Bueno, e usei, e num é que deu certo, mas a antes fiz um teste, veja aqui como foi:
Primeiro comecei o download:
{% highlight bash %}
$ binbash@terminalroot:~$ wget http://archlinux.c3sl.ufpr.br/iso/2015.06.01/archlinux-2015.06.01-dual.iso
{% endhighlight %}
Então começou o download, dae abri uma nova aba no terminal e enviei um SIGSTOP:
{% highlight bash %}
$ pidof wget
{% endhighlight %}
Então peguei o PIDOF, a saída foi:
{% highlight bash %}
binbash@terminalroot:~$ pidof wget 
2767
{% endhighlight %}
e parei:
{% highlight bash %}
$ kill -STOP 2767
{% endhighlight %}
Na outra aba, já estava a informação da PAUSA:
{% highlight bash %}
--2015-06-06 23:12:06-- http://archlinux.c3sl.ufpr.br/iso/2015.06.01/archlinux-2015.06.01-dual.iso
Resolvendo archlinux.c3sl.ufpr.br (archlinux.c3sl.ufpr.br)... 200.236.31.1, 2801:82:80ff:8000::2
Conectando-se a archlinux.c3sl.ufpr.br (archlinux.c3sl.ufpr.br)|200.236.31.1|:80... conectado.
A requisição HTTP foi enviada, aguardando resposta... 200 OK
Tamanho: 667942912 (637M) [application/x-iso9660-image]
Salvando em: “archlinux-2015.06.01-dual.iso”
archlinux-2015.06.01-dual.iso 6%[====> ] 41,85M 860KB/s eta 16m 39s
[1]+ Parado wget http://archlinux.c3sl.ufpr.br/iso/2015.06.01/archlinux-2015.06.01-dual.iso
binbash@terminalroot:~$ 
{% endhighlight %}
Dae na mesma aba que foi pausado, retornei o download com um SIGCONT:
{% highlight bash %}
$ kill -CONT 2767
{% endhighlight %}
Então o download foi continuado, a saída ficou assim... :
{% highlight bash %}
archlinux-2015.06.01-dual.iso 7%[=====> ] 49,53M 612KB/s em 2m 3s s
2015-06-06 23:14:10 (413 KB/s) - Conexão fechada no byte 51934742. Tentando novamente.
--2015-06-06 23:14:10-- (tentativa: 2) http://archlinux.c3sl.ufpr.br/iso/2015.06.01/archlinux-2015.06.01-dual.iso
Conectando-se a archlinux.c3sl.ufpr.br (archlinux.c3sl.ufpr.br)|200.236.31.1|:80... conectado.
A requisição HTTP foi enviada, aguardando resposta... 206 Partial Content
Tamanho: 667942912 (637M), 616008170 (587M) restantes [application/x-iso9660-image]
Salvando em: “archlinux-2015.06.01-dual.iso”
archlinux-2015.06.01-dual.iso 68%[++++++====================================================> ] 490,32M 597KB/s eta 4m 5s
{% endhighlight %}
Lógico que esses dados da continuação do download foram digitados, pois não dá pra copiar o download em andamento.
E o download terminou! :)
Esse post foi baseado em:
http://cleitonbueno.com/linux-pausando-e-reiniciando-um-download-com-wget/
