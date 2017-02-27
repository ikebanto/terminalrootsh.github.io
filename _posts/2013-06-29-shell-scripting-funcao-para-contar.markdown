---
layout: post
title: 'Shell Scripting: Função para contar palavra num arquivo'
date: '2013-06-29T19:07:00.002-07:00'
description: 'Shell Scripting: Função para contar palavra num arquivo'
main-class: 'linux'
tags:
- Linux
- Shell Script
- SED
image: http://2.bp.blogspot.com/-H1Jn6ZiyQDE/Uc-SiQ27ukI/AAAAAAAACFI/5kj-uQHxILQ/s72-c/shell+scripting+bash+.jpg
twitter_text: 'Shell Scripting: Função para contar palavra num arquivo'
introduction: 'Shell Scripting: Função para contar palavra num arquivo'
---
![Blog Linux](http://2.bp.blogspot.com/-H1Jn6ZiyQDE/Uc-SiQ27ukI/AAAAAAAACFI/5kj-uQHxILQ/s720/shell+scripting+bash+.jpg "Blog Linux")
Olá galera, acabei de criar essa função , serve pra contar quantas vezes uma determinada palavra aparece num texto(arquivo) modo de utilizar entre outros dados, no próprio cabeçalho do Script, cada linha explicada nos comentários.
Código-PasteBin: <iframe src="http://pastebin.com/raw/460WY6cH" style="border:none;width:100%;"><iframe>
Código-Blog:
#!/bin/bash
# ---------------------------------------------------------------
# ./contapalavra
#
# Shell Scripting: Função para contar palavra num arquivo
#
# Uso: contapalavras [palavra] [arquivo]
#
# Ex.: ./contapalavras MinhaPalavra arquivo.txt
#
# Autor: Marcos da Boa Morte, www.terminalroot.com.br
# Desde: Sáb 29 Jun 2013 22:53:28 BRT 
# Versão: 1
# Licença: GPL
# ----------------------------------------------------------------
contapalavra(){
 # Deixa todas as palavras numa única linha
 sed 's/ /\n/g' $2 | 
 
 # apaga todas as linhas em branco
 sed '/^$/d' | 
 
 # Remove caracteres que não são parte de palavras
 sed 's/[^A-Za-z0-9ÀàÁáÂâÃãÉéÊêÍíÓóÔôÕõÚúÇç_-]/ /g' | 
 
 # Ordena as palavras em ordem alfabética
 sort -n | 
 
 # exibe quantidade de vezes que aparece em cada linha a palavra X
 uniq -c | 
 
 # ordena por numeros a quantidade de uniq
 sort -n | 
 
 # exibe as linhas que contém a palavra procurada
 # n (mostra o número de cada linha; 
 # i ignora a diferença entre letras maiúsculas e letras minúsculas
 egrep -ni "$1" | 
 
 # o egrep(pós uniq) exibe [numero: palavra], então o cut retira o : e o que vem antes dele
 cut -d: -f2 | 
 
 # troca os espaços vazios por quebra de linha
 sed 's/ /\n/g' | 
 
 # remove novamente as linhas em branco
 sed '/^$/d' | 
 
 #exibe o número(que está na primeira linha)
 sed -n 1p
 
 # exibição intuitiva, caso queira.
 #echo "A palavra ($1) aparece: "$(sed -n 1p) " vezes no arquivo: "$2
}
# chama a função e passa os parâmetros para ela.
contapalavra $1 $2
