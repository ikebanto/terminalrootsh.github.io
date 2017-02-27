---
layout: post
title: Como comentar um bloco de código em um shell script
date: '2015-07-22T17:06:00.000-07:00'
description: Como comentar um bloco de código em um shell script
main-class: 'bash'
tags:
- Shell Script
- Dicas
- Terminal
- Comandos
image: http://4.bp.blogspot.com/-hldtMk2Mr00/VbAulAd74OI/AAAAAAAABhU/KXNHrYvyt4E/s72-c/Como%2Bcomentar%2Bum%2Bbloco%2Bde%2Bc%25C3%25B3digo%2Bem%2Bum%2Bshell%2Bscript.jpeg
twitter_text: Como comentar um bloco de código em um shell script
introduction: Como comentar um bloco de código em um shell script
---
![Blog Linux](http://4.bp.blogspot.com/-hldtMk2Mr00/VbAulAd74OI/AAAAAAAABhU/KXNHrYvyt4E/s320/Como%2Bcomentar%2Bum%2Bbloco%2Bde%2Bc%25C3%25B3digo%2Bem%2Bum%2Bshell%2Bscript.jpeg "Blog Linux")
COMO COMENTAR UM BLOCO DE CÓDIGO EM UM SHELL SCRIPT
Quando você está escrevendo um script shell, muitas vezes você quer comentar alguma parte do seu código, especialmente se você está depurando-o. Em um shell script, O "#" é considerado como um comentário até o fim da linha. Então, comentando uma única linha é fácil, ou se cansando de repeti-la. E se você quiser comentar várias linhas de código, ou um bloco de código em um shell script?
Em poucas palavras, você pode comentar um bloco de código usando a seguinte sintaxe.
  
: 
echo "code 1"
echo "code 2"
echo "code 3"
echo "code 4"
COMENTARIO 
Basicamente você cerca um bloco de código para comentar (a partir da linha 2-5 neste exemplo) com um par de
 ": '" e "COMENTARIO". 
Você pode substituir a palavra-chave "COMENTARIO" com qualquer string. 
A única exigência é que a palavra-chave de cadeia não aparecer em qualquer lugar dentro do bloco de código em si.Isso é mais conhecido como de "here document" (ou heredoc), que é um bloco de código de propósito especial usada para obter os dados de texto em um script verbatim. 
Via: http://xmodulo.com/how-to-comment-out-block-of-code-in-shell-script.html
