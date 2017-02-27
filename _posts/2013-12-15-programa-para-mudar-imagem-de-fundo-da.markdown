---
layout: post
title: "Programa para mudar a imagem de fundo da tela de login(GDM3) do Debian 6"
date: '2013-12-15T04:19:00.001-08:00'
description: "Programa para mudar a imagem de fundo da tela de login(GDM3) do Debian 6"
main-class: 'bash'
tags:
- Debian
- Shell Script
- PHP-GTK
- GNU
image: "http://2.bp.blogspot.com/-iwRAsvVcnBo/Uq2dLKQZcxI/AAAAAAAAAEc/jltUnWYPw24/s72-c/trocarimagemgdm3.png"
twitter_text: "Programa para mudar a imagem de fundo da tela de login(GDM3) do Debian 6"
introduction: "Programa para mudar a imagem de fundo da tela de login(GDM3) do Debian 6"
---
![Blog Linux](http://2.bp.blogspot.com/-iwRAsvVcnBo/Uq2dLKQZcxI/AAAAAAAAAEc/jltUnWYPw24/s320/trocarimagemgdm3.png "Blog Linux")
Criei um mini software para alterar a imagem de login do Debian Squeeze (talvez sirva pra alguns Debian Like que também usam GDM 3). Foi escrito em PHP-GTK. Após instalado com execução do Shell Script que está disponível neste post, basta procurá-lo em :
Aplicativos > Acessórios > Trocar Imagem do GDM 3
As telas do programa são:
1 - Tela Inicial do Programa 
![Blog Linux](http://1.bp.blogspot.com/-fNoEZ1Ej1ag/Uq2btlWWgkI/AAAAAAAAAEA/Dfu1P-LWvMA/s320/1+-+Tela+Inicial+do+Programa.png "Blog Linux")
2 - Caso a alteração da imagem seja efetuada com sucesso 
![Blog Linux](http://4.bp.blogspot.com/-SmTCemF9MRw/Uq2btgqanvI/AAAAAAAAAD4/WlIazQ-63WA/s320/2+-+Caso+a+altera%C3%A7%C3%A3o+da+imagem+seja+efetuada+com+sucesso.png "Blog Linux")
3 - Só aceita imagens e nos formatos PNG ou JPG 
![Blog Linux](http://2.bp.blogspot.com/-CHf0gL8Qmz4/Uq2bt7l9oRI/AAAAAAAAAD8/yRm1zCOYnV0/s320/3+-+S%C3%B3+aceita+imagens+e+nos+formatos+PNG+ou+JPG.png "Blog Linux")
4 - Se por acaso clicar em OK, sem escolher algum item 
![Blog Linux](http://1.bp.blogspot.com/-usUnbEqTiqs/Uq2bur24HYI/AAAAAAAAAEQ/wE4LqhUADhs/s320/4+-+Se+por+acaso+clicar+em+OK,+sem+escolher+algum+item.png "Blog Linux")
Caso tenham interesse em analisar o código, o mesmo é gravado no diretório:
/usr/opt/trocarimagemgdm3
Basta copiar o código abaixo, colar num editor de texto de sua preferência, salvar e dar a permissão para execução( chmod +x instTrocarImagem.sh), depois é só esperar o aviso da instalação efetuada com sucesso e começar a utilizá-lo.
Mais informações:  Como mudar a imagem de fundo da tela de login(GDM3) do Debian 6
Report Bugs para : binbash@linuxmail.org
Segue o código do Instalador:
<iframe src="http://pastebin.com/raw/5ZzSwBus" style="border:none;width:100%;"><iframe> Versão do Código no Blog:
#!/bin/bash
# --------------------------------------
# ./instTrocarImagem
#
# Uso: ./instTrocarImagem
#
# Autor: Marcos da B. M. Oliveira , http://www.terminalroot.com.br/
# Desde: Dom 15 Dez 2013 10:07:21 BRST 
# Versão: 1
# Licença: GPL
# --------------------------------------
if [ "$USER" != "root" ]; then
 echo "Você precisa ser root.";
 echo "Abortar.";
 exit 0
fi
# baixando o programa
wget http://linuxshell.onlinewebshop.net/downloads/trocarimagemgdm3.tar
# descompactando tar -zxvf trocarimagemgdm3.tar
# criando o tema 20_debian adequado para alteração
echo "# Use a specific background
/desktop/gnome/background/picture_filename /usr/share/images/desk.png
#/desktop/gnome/background/picture_options zoom
# Theming options
/desktop/gnome/interface/gtk_theme  Darklooks
# Greeter options
/apps/gdm/simple-greeter/logo_icon_name  debian-swirl
# Play system beeps - especially the one when the greeter is ready
/desktop/gnome/sound/event_sounds  true
# Some other possible options
#/apps/gdm/simple-greeter/banner_message_enable  true
#/apps/gdm/simple-greeter/banner_message_text  Welcome
#/apps/gdm/simple-greeter/disable_restart_buttons false
#/apps/gdm/simple-greeter/disable_user_list  false
# The lower panel doesn't work with the compositor
/apps/metacity/general/compositing_manager  false
# Prevent the power management icon from showing up
/apps/gnome-power-manager/ui/icon_policy  never" > /usr/share/gdm/greeter-config/20_debian
# copiando programa para pasta opcionais
cp -Rap trocarimagemgdm3 /opt/
# criando ícone no desktop
cp /opt/trocarimagemgdm3/trocarimagemgdm3.desktop /usr/share/applications/
# dando permissão para execução
chmod +x -R /opt/trocarimagemgdm3/
# dando permissão na pasta de imagens
chmod -R 777 /usr/share/images/
echo "Programa instalado com sucesso!"
exit 0 
