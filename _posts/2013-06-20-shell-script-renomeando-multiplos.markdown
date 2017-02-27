---
layout: post
title: "'Shell Script: Renomeando múltiplos arquivos'"
date: '2013-06-20T18:38:00.001-07:00'
description: "'Shell Script: Renomeando múltiplos arquivos'"
main-class: 'bash'
tags:
- Shell Script
image: "http://1.bp.blogspot.com/-FkPcIsY-8fU/Ub4bRVwYWsI/AAAAAAAAB6I/UlsSTr0GR6s/s72-c/shell+script.png"
twitter_text: "'Shell Script: Renomeando múltiplos arquivos'"
introduction: "'Shell Script: Renomeando múltiplos arquivos'"
---
Segue abaixo um Script para renomear múltiplos arquivos de uma vez só!
{% highlight bash %}
#!/bin/bash
#----------------------------------------------------------------------------
# renomear.sh
# http://www.terminalroot.com.br/
# Renomeia arquivos, sem alterar a extensão do mesmo.
# Se não passar parametro, renomeará todos com números, ex.: (1).jpg, (2).odt, ...
# Passar parametro: ./renomear WebImagens
# Se usado o parametro, resultará, ex: WebImagens(1).jpg, WebImagens(2).png,...
# Uso: ./renomear.sh [opcional/nome]
# Ex.: ./renomear.sh MeusArquivos
#
# Autor: Marcos Oliveira
# Desde: Qui 20 Jun 2013 19:25:28 BRT 
# Versão: 3
# Licença: GPL
# ----------------------------------------------------------------------------
[ -e $1 ] && param="" || param=$1
count=0
	for file in $(ls)
		do
			count=$((count+1))
			ext=$(echo $file | cut -d"." -f2)	
			[ [!-e] ] && mv -b $file "$param($count).$ext"		
	done
echo "Foram renomeados: "$(ls | wc -l) "arquivos $param($count) !"
{% endhighlight %}
Comente!
