---
layout: post
title: Instalação Docky
date: '2014-07-20T16:25:00.000-07:00'
description: Instalação Docky
main-class: 'debian'
tags:
- Debian
- X Window
- Debian-Likes
twitter_text: Instalação Docky
introduction: Instalação Docky
---
Docky é uma barra de atalhos avançado que fica nas bordas da tela. 
 Ele fornece fácil acesso a alguns dos arquivos, pastas e aplicativos no  seu computador, monitores quais aplicativos estão em execução, detém  janelas em seu estado minimizado e muito mais.
![Blog Linux](http://wiki.go-docky.com/images/f/ff/Main_screenshot.png "Blog Linux")
 
 Docky     Versões estáveis ​​atuais  2,1 série: 2.1.4 
 Série 2.0: 2.0.13  Versão de desenvolvimento atual  2.2 série: 2.2.0  Changelog 
 Fonte Baixar   Conteúdo [hide]  1 Pacotes   1.1 Ubuntu   1,2 Fedora   1.3 Arch Linux   1.4 Sabayon Linux   2 Instalando a partir dos Fontes   2.1 Instalar Dependências  2.1.1 Ubuntu, Debian, ou sistema derivado   2.1.2 OpenSUSE   2.1.3 Fedora   2.1.4 Gentoo Linux   2.2 Instalar   2.3 Atualização   Pacotes   Ubuntu  Docky está incluído nos repositórios oficiais do Ubuntu a partir do Ubuntu 10.04 (Lucid Lynx).  Para instalar Docky no Ubuntu 10.04 (Lucid Lynx) ou posterior: 
  sudo apt-get install docky  Existem dois PPAs oficiais docky.  Um com a nossa versão borda sangramento construído a partir de um  tronco e Docky incluindo a última versão do atual Docky ramo estável. 
 O Docky Stable PPA é https://launchpad.net/ ~ docky-core / + archive / estável .  Utilize este PPA para a versão atual e estável do Docky. 
 Para usar o Docky Stable PPA, para o Ubuntu 10.04 (Lucid Lynx) e posterior: 
  sudo add-apt-repository ppa: docky-core / estáveis
   sudo apt-get update
   sudo apt-get install docky  O Docky Desenvolvimento PPA é https://launchpad.net/ ~ docky-core / + archive / ppa e, normalmente, fica atrás da fonte em cerca de um dia.  Utilize este PPA para a versão mais atual e atualizada do Docky. 
 Para usar o Docky Desenvolvimento PPA, para o Ubuntu 10.04 (Lucid Lynx) e posterior: 
  sudo add-apt-repository ppa: docky-core / ppa
   sudo apt-get update
   sudo apt-get install docky  Para atualizar Docky, se você instalou Docky como um pacote a partir dos repositórios oficiais ou um dos nossos PPAs, execute: 
  sudo apt-get update
   sudo apt-get upgrade   Fedora  Docky agora está incluído no repositório padrão do Fedora 14.  Para instalar Docky no Fedora 14 corrida: 
  su-c 'yum install docky'   Arch Linux  Docky está disponível como um pacote comunidade Arch .  Para instalar (como root): 
  pacman-S docky   Sabayon Linux  Docky está disponível na entropia.  Para instalar (como root): 
  equo instalar docky   Instalando a partir dos Fontes   Instale Dependências  Construir Docky da última fonte atualmente requer as seguintes bibliotecas de desenvolvimento: 
  * Bzr (> = 0,92)
 * Dbus-sharp-1.0
 * Dbus-sharp-glib-1.0
 * Gconf-2.0
 * Gconf-sharp-2.0
 * Gconftool-2
 * Gdk-2.0
 * Gdk-x11-2.0
 * Gio-sharp-2.0
 * Glib-2.0
 * Glib-sharp-2.0
 * Gobject-2.0
 * GTK + -2.0
 * Gtk-sharp-2.0
 * Gnome-desktop-sharp-2.0
 * Gnome-keyring-sharp-1.0
 * Mono suplementos, suplementos mono-gui, mono-suplementos-setup
 * Mono-cairo
 * Notificar afiada
 * Libtool
 * mono-gmcs
 * Rsvg-sharp-2.0
 * Wnck-sharp-1.0
 Pode haver outras dependências não listadas aqui.  Se houver, autogen.sh deve queixar-se sobre eles (fique à vontade para adicioná-los à lista!).  A construção de bzr também exige autotools e intltool. 
  Ubuntu, Debian, ou sistema derivado  Ubuntu, Debian e sistemas derivados são totalmente suportados pelo Docky. 
 Para o Ubuntu 10.04 (Lucid Lynx) e superior: 
  sudo add-apt-repository ppa: docky-core / ppa
   sudo apt-get update
   sudo apt-get install bzr libgio2.0-cil-dev
   sudo apt-get build-dep docky  Para o Ubuntu 9.10 (Karmic Koala): 
  sudo apt-get update
   sudo aptitude install automake bzr mono-gmcs libmono-cairo2.0-cil gtk-sharp2 \
       libdbus-glib1.0-cil-dev libdbus1.0-cil-dev libgtk2.0-dev libnotify0.4-cil \
       libgio2.0-cil-dev libtool intltool ca-certificates gnome-desktop-sharp2 \
       libgconf2-dev monodevelop-nunit  gio-afiada (libgio2.0-cil, libgio2.0-cil-dev), dbus-afiada e  dbus-sharp-glib (libdbus-glib1.0-cil-dev libdbus1.0-cil-dev) estão  incluídos em nosso PPA para Karmic, Lucid e Maverick. 
  OpenSUSE  OpenSUSE é totalmente suportado pelo Docky. 
 As dependências pode ser instalado com: 
  zypper em autoconf automake intltool gconf2-devel gio-sharp-devel \
      gnome-keyring-sharp-devel mono-devel dbus-sharp-glib-devel glib gtk2-devel   Fedora  Fedora não é oficialmente suportado pelos desenvolvedores docky e nós  não aceitamos os erros dos usuários que utilizam os sistemas Fedora.  A razão é que o Fedora não está seguindo as normas freedesktop.org em  áreas que Docky necessita e que eles têm o apoio sub-par para Mono. 
 As dependências pode ser instalado com: 
  su-c 'yum install mono-devel bzr bazar automake intltool gcc \ 
      GConf2-devel gtk-sharp2-devel gnome-desktop-sharp-devel \ 
      gnome-keyring-sharp-devel mono-suplementos-devel dbus-sharp-devel \ 
      dbus - sharp-glib-devel gtk + extra-devel notificar-sharp-devel '  Fedora ainda está faltando um pacote do gio-sharp-2.  Então, você precisa construí-lo a partir da fonte e instalá-lo! 
  Gentoo Linux  Há um ebuild para docky-2.0.1 fornecido na sobreposição-gnome extra.  Para docky-9999 para instalar a última versão do tronco - há uma ebuild em sobreposição gentoo-china.  Depnds Docky-9999 em gio-sharp-2, que não é fornecido diretamente por qualquer sobreposição ainda.  Ele só existe no git repo da sobreposição de dev de zero como um anexo.  Instalação: 
 Docky 2.0.1: 
  leigo-a gnome-extras
   emergem docky  Docky do bazar: 
 Obter o ebuild gio-afiada .  Adicionar a uma sobreposição de costume e mesclá-lo.  Para mais informações sobre sobreposições personalizadas siga a documentação do Gentoo. 
 Adicionar sobreposição gentoo-china e emergir docky-9999 
  leigo-a gentoo-china
   emergir = gnome-extra / docky-9999   Instalando  Uma vez que todas as dependências estão instaladas, a fonte Docky pode ser ramificada por: 
  bzr branch lp: docky  e, em seguida, construído e instalado sistema de largura por: 
  cd docky
   . / Autogen.sh
   fazer
   sudo make install  Ou, para instalar no diretório home do usuário atual: 
  cd docky
   . / Autogen.sh - prefix = $ HOME / local.
   fazer
   make install  O binário Docky, então, acabar em ~ / .local / bin / docky 
  Atualização  Se você seguiu as instruções acima para instalar a partir do código, execute: 
  bzr puxar  no diretório de origem Docky.  Em seguida, recompilar e instalar a versão atualizada, execute: 
  sudo make uninstall
  . / Autogen.sh
  fazer
  sudo make install  Projeto Skin by Adrian Sampson 
Fonte: http://wiki.go-docky.com/index.php?title=Welcome_to_the_Docky_wiki
