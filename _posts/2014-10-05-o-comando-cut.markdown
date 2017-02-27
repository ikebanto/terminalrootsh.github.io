---
layout: post
title: "O comando cut"
date: '2014-10-05T06:10:00.000-07:00'
description: "O comando cut"
main-class: 'bash'
tags:
- Shell Script
- Dicas
- Comandos
image: "http://2.bp.blogspot.com/-3US9qvS2J8c/U-YklzT3CQI/AAAAAAAAAgc/WRFW1IdaJ3o/s72-c/crunchbang-logo300.png"
twitter_text: "O comando cut"
introduction: "O comando cut"
---
![Blog Linux](http://2.bp.blogspot.com/-3US9qvS2J8c/U-YklzT3CQI/AAAAAAAAAgc/WRFW1IdaJ3o/s320/crunchbang-logo300.png "Blog Linux")
O cut usado em sistemas operacionais UNIX, recebe uma entrada de um arquivo via canalização "|" e extrai campos específicos.
ExemplosO comando abaixo extrai o campo 1 (field) do arquivo /etc/passwd cujo delimitador de campo é ":" (delimiter).
cat /etc/passwd | cut -d: -f1 
o comando abaixo "corta" do campo 1 até o 3
echo 123456 | cut -c1-3 
O comando abaixo "corta" do campo 3 até o final "-"
echo 123456 | cut -c3- 
O comando abaixo indica o delimitador de campo -d":" como sendo ":" e  "corta" no campo 1 do arquivo /etc/passwd que contém a lista de  usuários de um sistema linux.
cat /etc/passwd | cut -d":" -f1 
É possível ordenar a saída com o comando sort
cat /etc/passwd | cut -d":" -f1  | sort 
Extrair o último caractere da linha
Com o comando cut é fácil extrair o primeiro, segundo ou qualquer  outro caractere da linha. Porém, é preciso saber a posição exata deste  caractere para informá-la ao cut.
$ echo abcdef | cut -c 1 a $ echo abcdef | cut -c 2 b $ echo abcdef | cut -c 3 c
E se você quiser extrair o último caractere, independente do tamanho da linha em questão?
A primeira solução é saber qual a posição exata deste último  caractere. Supondo que a linha está guardada em uma variável, use o  modificador # para obter o tamanho do conteúdo da variável, ou seja, o  tamanho da linha.
$ linha="abcdef" $ echo ${#linha} 6
Agora sim, você pode usar esse truque para obter o último caractere:
$ echo $linha | cut -c ${#linha} f
Há ainda uma outra solução, que envolve pensar diferente. Em vez de  contornar a limitação do cut apelando para a expansão de variáveis do  shell, que tal modificar nosso problema para que ele se enquadre nas  possibilidades do cut?
O problema: extrair o último caractere.O cut: sabe extrair o primeiro caractere.Solução: tem como fazer o último caractere ser o primeiro?O comando rev inverte a linha, fazendo com que o último caractere seja o primeiro, e vice-versa:
$ echo abcdef | rev fedcba
Agora sim, já que nossa linha-problema foi modificada para satisfazer o cut, podemos usá-lo normalmente:
$ echo abcdef | rev | cut -c 1 
Outro modo de encontrar o comprimento: 
$ comprimento=$(echo abcdef | wc -L) 
$ echo abcdef | cut -c $comprimento 
6
Via: Wikipedia e Codare
