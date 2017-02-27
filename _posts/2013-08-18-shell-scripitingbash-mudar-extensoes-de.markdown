---
layout: post
title: "'Shell Scripiting(Bash): Mudar extensões de múltiplos arquivos'"
date: '2013-08-18T18:37:00.000-07:00'
description: "'Shell Scripiting(Bash): Mudar extensões de múltiplos arquivos'"
main-class: 'bash'
tags:
- Shell Script
image: "http://3.bp.blogspot.com/-woP3euaZsNI/UhF1KXTYUQI/AAAAAAAACXg/XMnUNB9Lx3g/s72-c/shell+script.png"
twitter_text: "'Shell Scripiting(Bash): Mudar extensões de múltiplos arquivos'"
introduction: "'Shell Scripiting(Bash): Mudar extensões de múltiplos arquivos'"
---
![Blog Linux](http://3.bp.blogspot.com/-woP3euaZsNI/UhF1KXTYUQI/AAAAAAAACXg/XMnUNB9Lx3g/s320/shell+script.png "Blog Linux")
 Olá galera, eu tentei usar o comando rename, mas tive alguns problemas.Esse comando consiste em renomear as extensões nos arquivos, não testei com o exemplo abaixo, mas em outros formatos, não obtive êxito, exemplo do rename:$ rename .htm .html *.htm
O comando acima irá substituir todos os arquivos terminados em .htm por .html.
 Como não obtive êxito com o comando rename, decidi eu mesmo criar um script que fizesse tal mudança na extensão com segurança, eis então o script como ficou:
 
 chgtxt.sh (PasteBin)
<iframe src="http://pastebin.com/raw/8CwJ76YR" style="border:none;width:100%;"><iframe>
 
 chgtxt.sh (CodeBlog)
 
 
#!/bin/bash
# ----------------------------------------------------------------------------
# Shell Scripiting(Bash): Mudar extensões de múltiplos arquivos
# Altera o formato de várias extensões de uma só vez
# Uso: ./chgext.sh [formato-antigo] [formato-novo]
# Ex.:(alterar todos as extensões .jpeg para .jpg)
#
#./chgext.sh jpeg jpg
#
# Autor: Marcos da Boa Morte , www.terminalroot.com.br
# Desde: Dom 18 Ago 2013 22:19:26 BRT 
# Versão: 1
# Licença: GPL
# ----------------------------------------------------------------------------
for file in *.$1; do
 mv "$file" "${file/$1/$2}"
done
 
 
Documentação do comando rename:
http://linuxcommand.org/man_pages/rename1.html
