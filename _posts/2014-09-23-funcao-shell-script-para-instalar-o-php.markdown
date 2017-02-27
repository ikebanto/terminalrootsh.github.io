---
layout: post
title: Função Shell Script para instalar o PHP-GTK
date: '2014-09-23T18:22:00.001-07:00'
description: Função Shell Script para instalar o PHP-GTK
main-class: 'bash'
tags:
- Shell Script
- PHP-GTK
image: http://4.bp.blogspot.com/-sYP3rtRKiaI/VCIcrSdcdmI/AAAAAAAAAzQ/DMfYqwB5eL4/s72-c/php-gtk-terminal-root.gif
twitter_text: Função Shell Script para instalar o PHP-GTK
introduction: Função Shell Script para instalar o PHP-GTK
---
![Blog Linux](http://4.bp.blogspot.com/-sYP3rtRKiaI/VCIcrSdcdmI/AAAAAAAAAzQ/DMfYqwB5eL4/s1600/php-gtk-terminal-root.gif "Blog Linux")
Segue o código abaixo no Pastebin e no Blog.
Atenção: A FUNÇÃO É RECOMENDADA PARA 32 BITS.
Código no PasteBin:
<iframe src="http://pastebin.com/raw/dZt3gjCb" style="border:none;width:100%;"><iframe> Código no Blog:
#!/bin/bash
# --------------------------------------
# Função Shell Script para instalar o PHP-GTK
# ./PHPGTKinstalar
#
# Uso: ./PHPGTKinstalar
#
# Autor: Marcos Oliveira , http://www.terminalroot.com.br/
# Desde: Sáb 20 Set 2014 17:26:27 BRT 
# Versão: 2
# Licença: GPL
# --------------------------------------
PHPGTKinstalar(){
 reset
 if [ "$USER" = 'root' ]; then 
  echo "-------------------------------------------------------"
 else
  echo -e "Você precisa estar logado como \033[4;28mroot\033[0m\nAbortar.";
  exit 0
 fi
 url="http://master.dl.sourceforge.net/project/phpgtk2/";
 pacote="php-gtk2.tar.gz";
 # baixar pacote
 echo -ne "[OK] Baixando pacote...\n"
 wget "$url""$pacote"
 sleep 1
 # movendo para pasta ideal
 echo -ne "[OK] Movendo pacote...\n"
 mv php-gtk2.tar.gz /usr/local/
 sleep 1
 # entrando do diretório ideal
 echo -ne "[OK] Posicionado-se ao pacote...\n"
 cd /usr/local/
 sleep 1
 # desempacotando
 echo -ne "[OK] Extraindo pacote...\n"
 tar -zxf php-gtk2.tar.gz
 sleep 1
 # atribuindo permissão
 echo -ne "[OK] Alterando permissão...\n"
 chmod 777 php-gtk2 -Rf
 sleep 1
 # copiando
 echo -ne "[OK] Copiando arquivos...\n"
 cp -R /usr/local/php-gtk2/share/gtksourceview-1.0/ /usr/share/
 sleep 1
 # criando link simbólico
 echo -ne "[OK] Criando link..."
 ln -sf /usr/local/php-gtk2/bin/php /usr/bin/php-gtk2
 # gerando arquivo de teste
  echo '
<?php
$wnd = new GtkWindow();
$wnd->set_default_size(400,200);
$wnd->set_title("Instalacao realizada com sucesso!");
$wnd->connect_simple("destroy", array("gtk", "main_quit"));
$lblHello = new GtkLabel("Instalacao realizada com sucesso!");
$wnd->add($lblHello);
$wnd->show_all();
Gtk::main();
?>
' > teste_da_instalacao.php
 if [ "$(which php-gtk2)" ]; then
  php-gtk2 teste_da_instalacao.php
  exit 0
 else
  echo -e "\033[1;28m\nErro, contate: binbash@linuxmail.org\n\033[0m"
  exit 1
 fi
}
PHPGTKinstalar 
