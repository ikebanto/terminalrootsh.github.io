---
layout: post
title: Script em Bash para remover o iceweasel e instalar o Firefox no Debian
date: '2013-12-16T15:21:00.000-08:00'
description: Script em Bash para remover o iceweasel e instalar o Firefox no Debian
main-class: 'debian'
tags:
- Debian
- Firefox
- Iceweasel
image: http://2.bp.blogspot.com/-qeGEbicKbgI/Uq-GtaX-qFI/AAAAAAAAAF0/rBq4de8zKsM/s72-c/shell+script2.png
twitter_text: Script em Bash para remover o iceweasel e instalar o Firefox no Debian
introduction: Script em Bash para remover o iceweasel e instalar o Firefox no Debian
---
![Blog Linux](http://2.bp.blogspot.com/-qeGEbicKbgI/Uq-GtaX-qFI/AAAAAAAAAF0/rBq4de8zKsM/s320/shell+script2.png "Blog Linux")
Esse script foi criado no intuito de substituir o processo (pra quem não queira perder o tempo) do seguinte post:  
Removendo o iceweasel e instalando o Firefox ao Debian 
http://www.terminalroot.com.br/2011/10/removendo-o-iceweasel-e-instalando-o.htmlBaixe:
# wget http://linuxshell.onlinewebshop.net/downloads/rm-ice-ins-fox.sh 
Dê permisão:
# chmod +x rm-ice-ins-fox.sh 
Execute:
# ./rm-ice-ins-fox.sh  
Exemplo: Supondo que vc deseja instalar a versão 26, coloca o numero 26 logo após o comando, se vc não pôr numero nenhum, o numero padrão será o 26
# ./rm-ice-ins-fox.sh 26 
Observação: o Script irá identificar se seu Sistema é 32 ou 64 bits e fará o download do pacote adequado, vc não precisa se preocupar com isso.
Script no PasteBin:
<iframe src="http://pastebin.com/raw/svTpqn7x" style="border:none;width:100%;"><iframe> 
Script no Blog: 
#!/bin/bash
# --------------------------------------
# Script em Bash para remover o iceweasel e instalar o Firefox no Debian
# ./rm-ice-ins-fox.sh
#
# Uso: ./rm-ice-ins-fox.sh [versão]
# Exemplo:
# supondo que vc deseja instalar a versão 26, coloca o numero 26 logo após o comando, se vc não pôr numero nenhum, o numero padrão será o 26
#
# ./rm-ice-ins-fox.sh 26
#
# Obs.: o Script irá identificar se seu Sistema é 32 ou 64 bits e fará o download do pacote adequado, vc não precisa se preocupar com isso.
#
# Autor: Marcos da B. M. Oliveira ,http://www.terminalroot.com.br/
# Desde: Seg 16 Dez 2013 19:34:18 BRST 
# Versão: 1
# Licença: GPL
# -------------------------------------
# verificar se é root, se for prossegue , se não for, aborta.
if [ "$USER" = "root" ]; then
 reset
else
 echo -e "Você precisa estar logado como root.\nAbortar."; 
 exit 0
fi
# verifica que versao voce deseja instalar
[ "$1" ] &amp;&amp; versao="$1" || versao="26";
# verificar se é 32 ou 64 bits,pra baixar o pacote adequado
if [ "$(getconf LONG_BIT)" = "32" ]; then
 url="http://download-installer.cdn.mozilla.net/pub/firefox/releases/$versao.0/linux-i686/pt-BR/firefox-$versao.0.tar.bz2"
 
elif [ "$(getconf LONG_BIT)" = "64" ]; then
 url="http://download.cdn.mozilla.net/pub/mozilla.org/firefox/releases/$versao.0/linux-x86_64/pt-BR/firefox-$versao.0.tar.bz2"
fi
# baixa o pacote
wget $url
# remove o iceweasel
apt-get remove iceweasel -y
# move o tarball pra pasta adequada
mv firefox-*.tar.bz2 /usr/lib/
# posiciona-se no diretório adequado
cd /usr/lib/
# descompacta o pacote
tar -jxvf firefox-*.tar.bz2
# cria um link simbólico
ln -s /usr/lib/firefox/firefox /usr/bin/firefox
# cria um link simbólico para os plugins
ln -s /usr/lib/mozilla/plugins /usr/lib/firefox/plugins
# cria um icone no painel
echo "[Desktop Entry]
Encoding=UTF-8
Version=1.0
Type=Application
Terminal=false
Name=Firefox
Name[en_US]=Firefox
Name[pt_BR]=Firefox
Comment=Navegador web
Exec=/usr/bin/firefox
Icon=/usr/lib/firefox/browser/chrome/icons/default/default48.png
Categories=Network;WebBrowser;
StartupNotify=true
" > /usr/share/applications/firefox.desktop
# encerra a instalação
echo "Firefox instalado com sucesso e Iceweasel removido com sucesso!"
echo "Pronto."
exit 0 
