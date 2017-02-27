---
layout: post
title: 'Shell: Extrair os números do CPF formatado'
date: '2014-10-05T06:13:00.002-07:00'
description: 'Shell: Extrair os números do CPF formatado'
main-class: 'misc'
tags: 
image: http://2.bp.blogspot.com/-PKtojZWpKC8/U9w1-TXvi2I/AAAAAAAAAao/2yJQaLRLngY/s72-c/crunchbang_penguin_by_falldown_aka_chris-d4nj851.png
twitter_text: 'Shell: Extrair os números do CPF formatado'
introduction: 'Shell: Extrair os números do CPF formatado'
---
![Blog Linux](http://2.bp.blogspot.com/-PKtojZWpKC8/U9w1-TXvi2I/AAAAAAAAAao/2yJQaLRLngY/s320/crunchbang_penguin_by_falldown_aka_chris-d4nj851.png "Blog Linux")
O tr é um comando muito versátil, especialmente útil para apagar caracteres indesejados.
Digamos que você peça ao usuário para digitar o número do CPF. Esse  número poderá vir das mais diferentes formas, com espaços, hífens,  pontos, ponto-e-vírgula e sabe mais o que que a criatividade da pessoa  pode produzir.Para preservar sua sanidade, tudo o que você quer são os números,  ignorando toda a pontuação, espaços e outros caracteres. Com o tr é  fácil.
$ echo 123.456.789-00 | tr -d 0-9 ..-
A opção -d apaga coisas e o 0-9 representa os números de zero a nove.  Ah, note que não é necessário o uso de colchetes ao redor “[0-9]“, como  muita gente costuma fazer.
Mas este comando apagou os números e deixou a pontuação, quando o  desejado é o justamente o contrário. Então basta usar a opção -c, que  inverte o sentido da expressão, fazendo o tr apagar tudo exceto os números:
$ echo 123.456.789-00 | tr -c -d 0-9 12345678900
Via: Codare
