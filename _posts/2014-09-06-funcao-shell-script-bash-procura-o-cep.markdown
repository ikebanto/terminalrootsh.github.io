---
layout: post
title: "'Função Shell Script (Bash): Procura o CEP pelo nome da rua, cidade e UF informados'"
date: '2014-09-06T19:19:00.000-07:00'
description: "'Função Shell Script (Bash): Procura o CEP pelo nome da rua, cidade e UF informados'"
main-class: 'bash'
tags:
- Shell Script
- AWK
- SED
image: "http://1.bp.blogspot.com/-6k6Mx5CNwuc/Ur9FmBGo9aI/AAAAAAAAAHM/VVA_zbTxQes/s72-c/correios-shell.jpg"
twitter_text: "'Função Shell Script (Bash): Procura o CEP pelo nome da rua, cidade e UF informados'"
introduction: "'Função Shell Script (Bash): Procura o CEP pelo nome da rua, cidade e UF informados'"
---
![Blog Linux](http://1.bp.blogspot.com/-6k6Mx5CNwuc/Ur9FmBGo9aI/AAAAAAAAAHM/VVA_zbTxQes/s1600/correios-shell.jpg "Blog Linux")
Procura o CEP pelo nome da rua, cidade e UF informados  Segue o how to que ensina como utilizá-la, que por sinal é bem simples, que também é o cabeçalho e a opção cep2rua --help
Função Shell Script (Bash): Procura o CEP pelo nome da rua, cidade e UF informados
-h (exibe ajuda, cabeçalho da função)
-e (exibe o endereço completo)
Obs.: As opções (parâmetro: -h ou --help ; -e ou --endereco)
 , se forem utilizadas, o -h não recebe complementp.
    e o -e ou --endereco , deve ser utilizado antes de 
    digitar o endereço.
Usos: cep2rua [rua cidade uf]
     cep2rua [-e] [rua cidade uf]
     cep2rua [--endereco] [rua cidade uf]
     cep2rua [-h]
     cep2rua [--help]
Exs.: cep2rua rua santana salvador ba
    cep2rua -e rua rio da ilha salvador ba
  cep2rua rua cambui londrina pr
     cep2rua rua silverio lelis sao paulo sp
    cep2rua -e jobim rio de janeiro rj
 
Autor:Marcos da B. M. Oliveira , http://www.terminalroot.com.br/
Desde: 2013-12-28
Versão: 1
Licença: GPL
Requisitos:
Código no PasteBin: 
<iframe src="http://pastebin.com/raw/5AL1fkEZ" style="border:none;width:100%;"><iframe> 
Código no Blog: 
#!/bin/bash
# ----------------------------------------------------------------------------
# Função Shell Script (Bash): Procura o CEP pelo nome da rua, cidade e UF informados
# AWK, SED, Shell Script, 
# -h (exibe ajuda, cabeçalho da função)
# -e (exibe o endereço completo)
# Obs.: As opções (parâmetro: -h ou --help ; -e ou --endereco)
# , se forem utilizadas, o -h não recebe complementp.
#    e o -e ou --endereco , deve ser utilizado antes de 
#    digitar o endereço.
#
# Usos: cep2rua [rua cidade uf]
#    cep2rua [-e] [rua cidade uf]
#    cep2rua [--endereco] [rua cidade uf]
#    cep2rua [-h]
#    cep2rua [--help]
#
# Exs.: cep2rua rua santana salvador ba
#    cep2rua -e rua rio da ilha salvador ba
#  cep2rua rua cambui londrina pr
#    cep2rua rua silverio lelis sao paulo sp
#    cep2rua -e jobim rio de janeiro rj
# 
# Autor:Marcos da B. M. Oliveira , http://www.terminalroot.com.br/
# Desde: 2013-12-28
# Versão: 1
# Licença: GPL
# Requisitos: lynx ( se vc não tiver ele instalado, instale: apt-get install lynx )
# ----------------------------------------------------------------------------
cep2rua(){
  if [ "$*" ]; then
   echo -n
  else
   echo "Sem parâmetros, digite o endereço."
   exit 0
  fi
  
  if [ "$(which lynx)" ]; then
   echo -n "";
  else
   echo -e "o lynx não está instaldo, instale com:
   apt-get install lynx
  Abortar."
    exit 0
  fi
  # variavel do que for digitado
  local endereco="$*"
  # troca os espaços em branco por '+' para efetuar pesquisa
  local endereco="$(echo $endereco | sed -e 's/ /+/g')"
  # endereço para pesquisa
  local urlendereco="http://maps.google.com/maps/api/geocode/json?address=$*&amp;sensor=false"
  # baixa o código fonte do arquivo pesquisado
  local endcom="$(lynx -source "$urlendereco" |
  # imprime só a linha que contém a palavra 'formatted_address'
  sed -n '/formatted_address/p' |
  # divide a linha anterior em duas, após o sinal de ': '
  sed 's/: /: \n/' |
  # deleta a linha que contém a string 'formatted_address'
  sed '/formatted_address/d' |
  # troca todas as ocorrências de \"(aspas duplas) e de ,(vírgula) por nada, e imprime o endereço.
  sed 's/\"\|\,//g')"
   case $1 in
    -h | --help)
     echo "Usos:
  cep2rua [rua cidade uf]
  cep2rua [-e] [rua cidade uf]
  cep2rua [--endereco] [rua cidade uf]
  cep2rua [-h]
  cep2rua [--help]
Exs.: 
  cep2rua rua santana salvador ba
  cep2rua -e rua rio da ilha salvador ba
  cep2rua rua cambui londrina pr
  cep2rua rua silverio lelis sao paulo sp
  cep2rua -e jobim rio de janeiro rj"
     shift
     exit 0
     ;;
    -e | endereco)
     echo "$endcom";
     shift
     ;;
    *)
     local cep=$(echo $endcom | tr -d -c 0123456789)
     if [ "$cep" = "" ]; then
      echo "Cep não encontrado";
     else
      echo "$(echo $cep | cut -c1-5)-$(echo $cep | cut -c6-8)"; 
     fi
     exit 0
     ;;
   esac
 
  exit 0
}
cep2rua "$@" 
