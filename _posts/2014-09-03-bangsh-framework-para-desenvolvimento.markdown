---
layout: post
title: Bang.sh - Framework para desenvolvimento de aplicações em Shell Script
date: '2014-09-02T20:20:00.000-07:00'
description: Bang.sh - Framework para desenvolvimento de aplicações em Shell Script
main-class: 'bash'
tags:
- Shell Script
- Dicas
image: http://2.bp.blogspot.com/-hGgmwI6aZzc/VAaIbZTQg-I/AAAAAAAAAqg/PhDq-tASqGs/s72-c/optimizing-shell-scripts.jpg
twitter_text: Bang.sh - Framework para desenvolvimento de aplicações em Shell Script
introduction: Bang.sh - Framework para desenvolvimento de aplicações em Shell Script
---
![Blog Linux](http://2.bp.blogspot.com/-hGgmwI6aZzc/VAaIbZTQg-I/AAAAAAAAAqg/PhDq-tASqGs/s320/optimizing-shell-scripts.jpg "Blog Linux")
Iniciar uma aplicações em bash script geralmente é uma tarefa chata. Tem que parsear argumentos, tratar valores, etc. Eu iniciei um projeto para criar um framework para desenvolvimento de aplicações escritas em Shell Script.
Com o framework, quero tentar trazer uma forma mais organizada de se programar em Shell Script. Muitos dos scripts que são vistos por aí, acabam sendo códigos mal identados e confusos.
O framework está disponível num repositório no GitHub. Se você se sentir a vontade, pode contribuir ! Todas contribuições são bem vindas. Se algum bug for encontrado, reporte, por favor! Assim poderemos tornar o framework mais estável e útil.
O uso dele é bem simples. Por hora, ainda não faz muitas coisas, mas já quebra o galho !
A funcionalidade mais importante dele agora é o parseador de parâmetros. Vamos fazer um exemplo:
#!/bin/sh
# app.sh
source ./bang.sh
# Help flag
bang_addflag --help "Show this help"
bang_addalias --help -h
# Message
bang_addopt --msg "Message to be printed!"
bang_addalias --msg -m
# Output
bang_addflag --stderr "Redirects the message to stderr"
bang_required_args "--msg"
bang_init "$@"
if bang_hasflag --help; then
 bang_show_usage
else
 bang_check_required_args
 msg="Your message is: $(bang_getopt --msg)"
 cmd="echo"
 bang_hasflag --stderr &amp;&amp; cmd="print_e"
 $cmd "$msg"
fi
No script acima são adicionadas 3 argumentos ao arquivo: --help ou -h, --msg ou -m e --strderr. Veja agora o output segundo a combinação de alguns parâmetros:
Sem argumentos, o programa deve verificar pelos argumentos requeridos
$ ./app.sh
The program was aborted due an error:
 Option '--msg' is required and was not specified
Mostrando o texto de ajuda automaticamente montado
$ ./app.sh -h # ou ./app.sh --help
Showing script usage:
Options:
--msg|-m  (Required) Message to be printed!
Flags:
--help|-h Show this help
--stderr Redirects the message to stderr
Imprime a mensagem no STDOUT
$ ./app.sh --msg "Hello World" # ou ./app.sh -m "Hello World"
Your message is: Hello World
Imprime a mensagem no STDERR
$ ./app.sh --msg "Hello World" --stderr 1>/dev/null
Your message is: Hello World
Além destas, há outras funções úteis, como o bang_raise_error que dispara um erro (e mostra no STDERR) formatado com um padrão e dá exit 2.
bang_raise_error "Mensagem de erro"
Há também a função para imprimir no STDERR.
print_e "Mensagem que irá para para o STDERR"
Funções úteis como o in_array e key_exists para se trabalhar com arrays.
A=(A B C)
in_array "B" "A" &amp;&amp; echo "B está em \$A"
declare -A A=(["name"]="Gustavo Dutra")
key_exists "name" "A" &amp;&amp; echo "name é chave de \$A"
Por enquanto é isto! Bons scripts! Qualquer dúvida, pode comentar aqui !
Via: http://gustavodutra.com
