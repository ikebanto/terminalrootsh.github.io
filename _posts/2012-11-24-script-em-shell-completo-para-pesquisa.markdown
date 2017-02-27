---
layout: post
title: Script em Shell (completo) para pesquisa
date: '2012-11-24T13:37:00.000-08:00'
description: Script em Shell (completo) para pesquisa
main-class: 'bash'
tags:
- Shell Script
image: http://2.bp.blogspot.com/-_kw03sm3n0Q/ULE9Cb5J7lI/AAAAAAAAAsc/p5xbzMLCcYA/s72-c/Captura_de_tela.png
twitter_text: Script em Shell (completo) para pesquisa
introduction: Script em Shell (completo) para pesquisa
---
![Blog Linux](http://2.bp.blogspot.com/-_kw03sm3n0Q/ULE9Cb5J7lI/AAAAAAAAAsc/p5xbzMLCcYA/s400/Captura_de_tela.png "Blog Linux")
Olá galera, fiz um script, pra passar o tempo, de Pesquisa(completo).Segue PasteBin e código no blog para análise e também estudo, a única coisa diferente das que vêm sendo abordadas aqui no blog é o surgimento do case.Não utilizei comentários pra não ficar muito grande, mas é tão simples e o código tão limpo que dá pra ter uma noção como o case funciona.Segue:
PasteBin(procura):<iframe src="http://pastebin.com/raw/Z4ALGCbs" style="border:none;width:100%;"><iframe>
Código(procura):
{% highlight bash %}
#!/bin/bash
# procura - script que faz pesquisas completas de arquivos e/ou diretórios
# Autor: Marcos da Boa Morte
# Endereço Web - http://marcospinguim.blogspot.com
# Facebook - fb.com/terminalroot
echo "1 PESQUISAR POR NOME"
echo "2 PESQUISAR POR TAMANHO"
echo "3 PESQUISAR POR ALTERADOS NOS ÚLTIMOS DIAS"
echo "4 PESQUISAR POR ACESSADOS NOS ÚLTIMOS DIAS"
echo "5 CONSULTAR O MANUAL DE find"
echo "6 SAIR"
 echo -n "Por favor faça sua escolha: "
 read INPUT
 
 if [ $INPUT != 5 ] &amp;&amp; [ $INPUT != 6 ] ; then
  echo -n "Informe a PASTA que deseja pesquisar(ex.:/home/usuario/Downloads/): "
  read PASTA
 fi 
 
 case $INPUT in
 1)
  echo "A) Pesquisar por nome 'EXATO COM A EXTENSÃO'"
  echo "B) Pesquisar por arquivo ou diretório que 'CONTÉM A PALAVRA': "
  echo "C) Voltar pro MENU anterior: "
  read FIND
  
  if [ $FIND = "" ] ; then
   $FIND=/home/$USER
 fi
  
  case $FIND in
   1|a|A) 
   
    echo -n "Informe o NOME EXATO do arquivo ou diretório: "
    read nome
    find $PASTA -name $nome
   ;;
   2|b|B)
   
    echo -n "Informe A PALAVRA que está arquivo ou diretório: "
    read nome
    find $PASTA -name *$nome* 
    
  
  ;;
  3|c|C)
  clear
  sleep 0
  $0
   
  ;;
  *)
  exit 0
   ;;
   esac    
 ;;
 2)
  echo -n "Informe o TAMANHO MÍNIMO do arquivo, escreva o k(kilobytes) no final, ex.:(300k): "
  read tamanho
  find /home/marcos/Downloads -size $tamanho
 ;;
 3)
  echo -n "Informe a quantidade de dias que se passaram: "
  read data
  find /home/marcos/Downloads -ctime $data
 ;; 
 4)
  echo -n "Informe a quantidade dos últimos dias: "
  read qtde
  find /home/marcos/Downloads -used $qtde
 
 ;; 
 5)
  man find
 ;;
 
 6|q|Q)
 exit 0
 
 ;;
 *)
 clear
 echo "Por favor utilize uma das opções 1, 2, 3, 4 ou 5"
 sleep 2
 $0
 
 ;;
 esac 
{% endhighlight %}
