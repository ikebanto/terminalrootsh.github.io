---
layout: post
title: Como mudar a imagem de fundo da tela de login(GDM3) do Debian 6
date: '2013-02-11T16:45:00.000-08:00'
description: Como mudar a imagem de fundo da tela de login(GDM3) do Debian 6
main-class: 'debian'
tags:
- Debian
image: http://2.bp.blogspot.com/-dN9W1wau50s/URmQIruECPI/AAAAAAAAA-k/HpNCU0yfwl8/s72-c/spacemachine-gdm-preview.png
twitter_text: Como mudar a imagem de fundo da tela de login(GDM3) do Debian 6
introduction: Como mudar a imagem de fundo da tela de login(GDM3) do Debian 6
---
![Blog Linux](http://2.bp.blogspot.com/-dN9W1wau50s/URmQIruECPI/AAAAAAAAA-k/HpNCU0yfwl8/s320/spacemachine-gdm-preview.png "Blog Linux")
1- Abra o arquivo /usr/share/gdm/greeter-config/20_debian
# vi /usr/share/gdm/greeter-config/20_debian
2- Descomente(Tire o sinal de sustenido "#" da frente) das linhas que contém:
/desktop/gnome/background/picture_filename /usr/share/images/desktop-base/login-background.svg
/desktop/gnome/interface/gtk_theme  Clearlooks
3-Na linha "/desktop/gnome/background/picture_filename /usr/share/images/desktop-base/login-background.svg" já descomentada, informe o caminho da sua imagem:
/desktop/gnome/background/picture_filename /usr/share/images/SUA_IMAGEM.png 
4-Pra deixar tudo dentro dos conformes, rode o comando abaixo:
# dpkg-reconfigure gdm3
Encerre a sessão e veja se tudo deu certo!
