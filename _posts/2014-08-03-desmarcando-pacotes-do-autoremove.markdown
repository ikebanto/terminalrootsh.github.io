---
layout: post
title: "Desmarcando pacotes do autoremove"
date: '2014-08-03T12:31:00.001-07:00'
description: "Desmarcando pacotes do autoremove"
main-class: 'linux'
tags:
- Linux
- GNU
- Imagens
- Comandos
image: "http://4.bp.blogspot.com/-KRjS3IjNu0c/VB2qpGSwcxI/AAAAAAAAAxg/2XbbmmfayB0/s72-c/camiseta-apt-get-a-life-28888.jpg"
twitter_text: "Desmarcando pacotes do autoremove"
introduction: "Desmarcando pacotes do autoremove"
---
![Blog Linux](http://4.bp.blogspot.com/-KRjS3IjNu0c/VB2qpGSwcxI/AAAAAAAAAxg/2XbbmmfayB0/s1600/camiseta-apt-get-a-life-28888.jpg "Blog Linux")
![Blog Linux](http://3.bp.blogspot.com/-F5kV-L5nRj0/U96Ns-ceguI/AAAAAAAAAds/vM-pFo0qMjk/s1600/new.jpg "Blog Linux")
-->
Algumas vezes quando executamos o comando:
# apt-get autoremove
Ele lista pacotes ou programas que não queremos que sejam removido por gosto ou por motivo de algum erro, logo podemos desmarcar este pacote com o comando apt-mark:
# apt-mark unmarkauto pacote
Caso o número de pacotes seja grande, vc pode copiar eles do shell, por num editor de texto, organizá-los e criar um loop em Shell Script pra executar o unmark em todos os pacotes, fica de exercício.
Mais informações em:
$ man apt-mark
Até a próxima!
