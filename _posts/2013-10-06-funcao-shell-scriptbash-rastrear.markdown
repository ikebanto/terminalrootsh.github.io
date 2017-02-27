---
layout: post
title: "'Função Shell Script(Bash): Rastrear objetos via Correios'"
date: '2013-10-06T13:51:00.002-07:00'
description: "'Função Shell Script(Bash): Rastrear objetos via Correios'"
main-class: 'bash'
tags:
- Shell Script
- SED
image: "http://2.bp.blogspot.com/-PpNaoqKqlTs/Um2F8-TMGyI/AAAAAAAACgE/e24KsmaIQ38/s72-c/correios-shell.jpg"
twitter_text: "'Função Shell Script(Bash): Rastrear objetos via Correios'"
introduction: "'Função Shell Script(Bash): Rastrear objetos via Correios'"
---
![Blog Linux](http://2.bp.blogspot.com/-PpNaoqKqlTs/Um2F8-TMGyI/AAAAAAAACgE/e24KsmaIQ38/s320/correios-shell.jpg "Blog Linux")
Verifique o CABEÇALHO DO CÓDIGO  e os COMENTÁRIOS para entendimento do Script/Função
PasteBin:
<iframe src="http://pastebin.com/raw/90stK1VC" style="border:none;width:100%;"><iframe> 
CodeBlog:
#!/bin/bash
# --------------------------------------
# ./rastreamento.sh
#
# Função Shell Script(Bash): Rastrear objetos via Correios.
#
# Uso: ./rastreamento.sh [código da encomenda]
#
# Ex.: ./rastreamento.sh DI781874650BR
#
# Autor: Marcos da B. M. Oliveira , http://www.terminalroot.com.br/
# Desde: Dom 06 Out 2013 17:34:05 BRT 
# Licença: GPL
# --------------------------------------
rastreamento(){
url='http://websro.correios.com.br/sro_bin/txect01$.QueryList'
# imprime em amarelo
echo -e "\033[1;33m"
for codigo
 do
  # baixa a url
  lynx -source "$url?P_LINGUA=001&amp;P_TIPO=001&amp;P_COD_UNI=$codigo" |
  
  # deixa só as linhas que contém a string rowspan (que contém os dados do rastreamento), as demais são apagadas
  sed '/rowspan/!d' | 
  
  # substitui tudo entre  por espaço em branco
  sed 's// /g' |
  
  # insere o texto abaixo na primeira linha
  sed -e "1s/^/\n\nO RASTREAMENTO DO SEU OBJETO $1 É:\n\n/" |
  
  # limpa todas as tags e imprime uma linha em branco com echo
  sed -e 's/]*>//g' &amp;&amp; echo
  
  
 done
 
# finaliza a cor
echo -e "\033[0m"
}
rastreamento $1
