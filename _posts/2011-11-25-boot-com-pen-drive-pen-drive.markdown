---
layout: post
title: "Boot com Pen Drive (Pen Drive Inicializável)"
date: '2011-11-25T13:40:00.000-08:00'
description: "Boot com Pen Drive (Pen Drive Inicializável)"
main-class: 'linux'
tags:
- Linux
image: "http://1.bp.blogspot.com/-aGFhGi3Xtsk/TtALT2ChwtI/AAAAAAAAARk/05koT9KDdZs/s72-c/unetbootin.png"
twitter_text: "Boot com Pen Drive (Pen Drive Inicializável)"
introduction: "Boot com Pen Drive (Pen Drive Inicializável)"
---
![Blog Linux](http://1.bp.blogspot.com/-aGFhGi3Xtsk/TtALT2ChwtI/AAAAAAAAARk/05koT9KDdZs/s320/unetbootin.png "Blog Linux")
Hoje eu precisei instalar o Linux Mint no meu Notebook e com eu já estava cansado de comprar mídia de CD e DVD, então decidi instalar a partir de um pen drive.Eu já uso o Debian no Meu Desktop e ainda tenho o Backtrack na Máquina virtual e também tenho o Android no Smart, então prossegui para remover o Debian que também estava no meu Notebook e baixei a ISO do Linux Mint e prosseguir da seguinte forma:
1-Instalei via apt-get o Unetbootin (aplicativo pra fazer o Pen Drive inicializável, imagem do topo deste post).
{% highlight bash %}
# su
# apt-get install unetbootin
{% endhighlight %}
2-Meu pen drive estava cheio de coisa e aparentemente com alguns problemas, então resolvi formatá-lo pelo terminal, assim que você encaixa o Pen Drive no seu PC automaticamente o Debian Squeeze monta ele, então para formatá-lo você precisa desmontá-lo, mas antes deve saber qual o endereço da partição no seu HD, para isso execute no terminal o seguinte comando:
{% highlight bash %}
# fdisk -l
{% endhighlight %}
3-Geralmente ele é a partição:
{% highlight bash %}
# /dev/sdf
{% endhighlight %}
4-Então desmonte:
{% highlight bash %}
# umount /dev/sdf
{% endhighlight %}
5-Agora formate com o seguinte comando:
{% highlight bash %}
# mkfs.vfat -n NOME_QUE _VC_DESEJA_PRO_PEN_DRIVE /dev/sdf -I
{% endhighlight %}
6-Após finalizar a formatação, montei novamente o Pen Drive, pois é necessário para gravação dos dados pelo Unebootin, para isso criei uma pasta pra montar dentro dele, pra evitar alguns conflitos:
{% highlight bash %}
# mkdir /media/pendrive
# mount /dev/sdf /media/pendrive
{% endhighlight %}
7-Fui em Aplicativos > Sistema > Unetbootin e abrí o programa, ele pedirá a senha de root pra rodar.
8-Selecionei [Imagem de ISO] e nos 3 pontinhos (...) ao lado dessa linha, apontei pro caminho do meu PC onde estava a ISO do Linux Mint, então cliquei em OK e aguardei a finalização(as vezes fica parado nos 40% informando estar copiando, mas acompanhei pelo tamanho dos dados do Pen Drive e cada segundo era alterado aumentando, ou seja, se acontecer isso contigo, não aborte a instalação, aguarde até o final).
Dae então configurei o Setup da BIOS pra "Bootar" pelo Pen Drive(USB) e instalei o Linux Mint no meu Notebook(que por sinal é uma distro muito boa), e agora tou usando de boa e até gerando esse post nele(risos).
Beleza, é isso aqui, comentem e compartilhem!
