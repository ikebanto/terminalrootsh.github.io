---
layout: post
title: Como instalar o Android
date: '2011-11-15T15:54:00.000-08:00'
description: Como instalar o Android
main-class: 'misc'
tags:
- Dicas
- Android
image: http://4.bp.blogspot.com/-a79kT0yawZQ/TsL6j3ifEJI/AAAAAAAAAOI/6wYCJ3tsgkg/s72-c/android.png
twitter_text: Como instalar o Android
introduction: Como instalar o Android
---
![Blog Linux](http://4.bp.blogspot.com/-a79kT0yawZQ/TsL6j3ifEJI/AAAAAAAAAOI/6wYCJ3tsgkg/s200/android.png "Blog Linux")
 Nesse tutorial vou documentar como instalar o Android no Linux (Debian Squeeze 6) com sistema nativo e dentro da máquina virtual: Virtual Box.
Primeiramente temos que ter a máquina virtual, abra o terminal e como root, execute
o comando:{% highlight bash %}
# su
# apt-get install virtualbox
{% endhighlight %}
Caso você não tenha o Virtual Box em seu repositório, faça:
{% highlight bash %}
# gedit /etc/apt/source.list
{% endhighlight %}
Cole essa código numa nova linha do arquivo que se abriu.
{% highlight bash %}
deb http://download.virtualbox.org/virtualbox/debian squeeze contrib
{% endhighlight %}
Salve e feche o arquivo e no terminal execute esse comando pra adicionar essa chave, e depois atualize o apt-get e tente instalar agora o Virtual Box
{% highlight bash %}
# wget -q http://download.virtualbox.org/virtualbox/debian/oracle_vbox.asc -O- | apt-key add -
# apt-get update
# apt-get install virtualbox
{% endhighlight %}
Pra abrir o virtualbox, digite virtualbox no terminal
{% highlight bash %}
# virtualbox
{% endhighlight %}
Se quiser criar um Ícone no painel, abra o gedit, cole esse arquivo abaixo, pegue um icone do virtual box na internet em formato PNG com o nome virtualbox.png, crie uma pasta com o nome virtualbox dentro de /opt e cole a imagem dentro dela.O código abaixo você deve salvar dentro da pasta /usr/share/applications/ o nome tem de ser virtualbox.desktop , ele vai ficar em Aplicativos >> Desenvolvimento no painel do Gnome.
{% highlight bash %}
[Desktop Entry
Encoding=UTF-8
Name=Virtual Box
Comment=Máquina Virtual - Virtual Box
Exec=virtualbox
Icon=/opt/virtualbox/virtualbox.png
Terminal=false
Type=Application
Categories=GNOME;Application;Development;
StartupNotify=true
{% endhighlight %}
Mais atualização de Repositórios do apt-get, Clique Aqui, lá selecione sua distro, versão, país...e gere os repositórios que desejar.
Ok, agora vamos instalar o Android.Primeiramente você precisa baixar o ISO do OS, baixe nesse endereço: http://www.android-x86.org/download , selecionei a opção: android-x86-1.6-r2.iso , clique em View e o download será iniciado.
Abra o Virtual Box, clique em "Novo" e crie uma nova máquina virtual, como Linux-Outros, configure-a em armazenamento para iniciar pelo ISO que vc baixou, direcionado pro local do seu PC onde está salvo o ISO, configure tb Rede, Video 
64MB, Memória como 256, HD...e depois clique em Iniciar a Máquina Virtual.
A primeira tela será essa, selecione o último item(Installation - Install Android-x86 to harddisk):
![Blog Linux](http://1.bp.blogspot.com/-A6WS69jhf3k/TsL6ObDrVdI/AAAAAAAAANo/UleTFNd27U4/s400/1.gif "Blog Linux")
Nesse item, clique em "Create/Modify partitions" e aperte ENTER.
![Blog Linux](http://3.bp.blogspot.com/-0AoBcWSPNnE/TsL6VthgPaI/AAAAAAAAAN0/UhKE8wpE4lU/s400/3.gif "Blog Linux")
Nesta parte selecione [ New ] no rodapé da tela e aperte ENTER.
![Blog Linux](http://4.bp.blogspot.com/-KgKSUYK8TUA/TsL6ag85dKI/AAAAAAAAAOA/rvjhl-q9K2Y/s400/4.gif "Blog Linux")
Selecione [Primary] e aperte ENTER.
![Blog Linux](http://3.bp.blogspot.com/-CbowxCcwI6E/TsL6xHJ-hyI/AAAAAAAAAOU/1JiteLGDIkY/s400/5.gif "Blog Linux")
Mostrará o tamanho que vc deseja e selecionou na criação da sua Máquina Virtual, aperte ENTER.
![Blog Linux](http://2.bp.blogspot.com/-eU5AuVDjseQ/TsL62b6si2I/AAAAAAAAAOg/2Ii_Smc_AmU/s400/6.gif "Blog Linux")
Deixe ela como Bootável clicando em [Bootable] e aperte ENTER.
![Blog Linux](http://3.bp.blogspot.com/-mJeDfGTU0M4/TsL66XZxg2I/AAAAAAAAAOs/aL89ZHEGg2k/s400/7.gif "Blog Linux")
Depois escreva as mudanças no disco clicando em [Write] e aperte ENTER.
![Blog Linux](http://2.bp.blogspot.com/-5elTSUdC204/TsL6_cxsoaI/AAAAAAAAAO4/GMusmT9m07A/s400/8.gif "Blog Linux")
Você será perguntado se realmente deseja fazer isso, escreva "yes" sem aspas e aperte ENTER.
![Blog Linux](http://1.bp.blogspot.com/-p_KBocQvkJY/TsL7FZMTOcI/AAAAAAAAAPE/j1meaZt6SNE/s400/9.gif "Blog Linux")
Agora clique em [Quit] e selcione o formato da partição, nesse caso usei ext3 e selecione "ok" e aperte ENTER.
![Blog Linux](http://3.bp.blogspot.com/-s1JvjvYCQvg/TsL7KEFWNII/AAAAAAAAAPQ/P94n0AepZPc/s400/92.gif "Blog Linux")
Pra finalizar você será perguntado se deseja instalar o GRUB, selecione "yes" e aperte ENTER.
![Blog Linux](http://2.bp.blogspot.com/-qKmtTe2sWLw/TsL7hyhyVAI/AAAAAAAAAPc/hB2WHRRuVy0/s400/94.gif "Blog Linux")
Agora vc será perguntado se deseje Iniciar o Android ou Rebootar, LEMBRANDO que você precisa alterar o local do ISO na sua máquina nativa se não ele será bootado de novo no ISO, só recortar e colar em outro canto, pronto ta aê, desfrute o Android no seu PC.
![Blog Linux](http://1.bp.blogspot.com/-6dS2_fiUC9I/TsL7svhKhsI/AAAAAAAAAPo/0uMHjA0gK1o/s400/ok.gif "Blog Linux")
