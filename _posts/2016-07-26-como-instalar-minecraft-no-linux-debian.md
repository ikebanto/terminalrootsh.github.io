---
layout: post
title: Como Instalar o Minecraft no Debian
date: '2016-07-26T13:46:00.001-07:00'
image: '/assets/img/games/como-instalar-o-minecfraft-no-debian.png'
description: Como Instalar o Minecraft no Debian
main-class: 'tv'
tags:
- TerminalRootTV
- games
---
![Linux Minecraft](/assets/img/games/como-instalar-o-minecfraft-no-debian.png "Blog Linux Minecraft")

<iframe allowfullscreen="" frameborder="0" height="415" src="https://www.youtube.com/embed/I-4d3wYgagE" width="660"></iframe>

### Script com os links utilizados incluso

{% highlight bash %}
#!/bin/bash
# Instalar o Minecraft no Debian
# Criado por Terminal Root http://www.terminalroot.com.br/
install_minecraft(){
	# Logue-se como root
	[ $USER = 'root' ] && echo 'Iniciando a instalação...' || echo 'Você não é root' && exit; 

	# 1-Certifica que vc possui o Java instalado
	if [ $(java -version 2>&1 | sed -n 1p | cut -d'"' -f2 | cut -c3) -ge 7 ]; then
		echo "Java instalado e versão do JRE igual ou maior que 7";
		local COND=0;
	else
		echo "Java não instalado ou versão inferior a 7";
		local COND=1;
	fi

	if [ $COND = 1 ]; then
		echo "Atualizando seu sistema..."
		apt-get update && apt-get upgrade -y 2>/dev/null

		echo "Instalando o Java JRE 7"
		apt-get install openjdk-7-jre -y 2>/dev/null
	fi

	echo "Baixando o Minecraft"
	wget https://s3.amazonaws.com/Minecraft.Download/launcher/Minecraft.jar 2>/dev/null

	echo "Criando um diretório em /opt/minecraft/..."
	mkdir /opt/minecraft

	echo "Movendo o diretório para /opt/minecraft/..."
	mv Minecraft.jar /opt/minecraft/

	echo "Baixando o ícone para o Minecraft";
	wget https://goo.gl/FLHdaT 

	echo "Movendo o ícone para /opt/minecraft/..."
	mv minecraft.png /opt/minecraft/ 2>/dev/null

	echo "Criando um ícone pro Painel"
	echo -e "[Desktop Entry]\nEncoding=UTF-8\nName=Minecraft\nType=Application\nGenericName=Minecraft\nComment=Minecraft\nExec=java -jar /opt/minecraft/Minecraft.jar\nIcon=/opt/minecraft/minecraft.png\nCategories=Application;Game;Emulator;" > /usr/share/applications/minecraft.desktop
	
	echo "Ok, Minecraft Instalado com sucesso, abra o Minecraft pelo ícone no seu painel de Aplicativos!";
	
	exit 0

}
install_minecraft
{% endhighlight %}
