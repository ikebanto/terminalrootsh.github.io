---
layout: post
title: Resolvendo "bad interpreter" no Bash
date: '2014-09-25T16:59:00.003-07:00'
description: Resolvendo "bad interpreter" no Bash
main-class: 'bash'
tags:
- Shell Script
- Dicas
image: http://1.bp.blogspot.com/-_gUy0yQTqZM/UkjQtOlbfaI/AAAAAAAACbc/bn9SFHwydy8/s72-c/shell+script2.png
twitter_text: Resolvendo "bad interpreter" no Bash
introduction: Resolvendo "bad interpreter" no Bash
---
![Blog Linux](http://1.bp.blogspot.com/-_gUy0yQTqZM/UkjQtOlbfaI/AAAAAAAACbc/bn9SFHwydy8/s320/shell+script2.png "Blog Linux")
Ao executar um script que você pegou ou baixou da internet, muitas vezes foi um script criado num Windows, ou baixou do PasteBin, e ao executá-lo, você recebe a seguinte mensagem:
 {% highlight bash %}
$ ./script.sh
: bad interpreter: No such file or directory
{% endhighlight %} 
 
$ cat script.sh
#!/bin/bash
echo "oi" 
- Hein? Mas está tudo certo, eu tenho um /bin/bash, o que está acontecendo?
Bom, vamos ver mais de perto:
$ cat -v script.sh # 'show nonprinting'
#!/bin/bash^M
echo "oi"^M
Ahá! Tem um ^M no final das linhas atrapalhando.
- Mas o que é isso?
Muito provavelmente a origem desde script é uma maquina windows. A explicação é o caracter newline. O windows precisa de 2 caracteres para simbolizar o fim de uma linha em um arquivo texto puro, a dupla \r\n (veja link para a wikipedia), porém os *nix não precisam do \r -- que o cat gentilmente mostrou como um ^M. Este caracter a mais atrapalha o interpretador, que não recebe um /bin/bash e sim /bin/bash\r -- e isso realmente não existe.
Como resolver? Existem dois programas para este fim: unix2dos e dos2unix (as vezes aparecem como unixtodos e dostounix) que convertem os finais de linha em casos como este. Se vc abrir um arquivo texto do *nix em um bloco de texto vai ver todas as quebras de linha substituidas por um quadrado preto e todas as linhas em uma só.
Caso vc não tenha um programa conversor, pode usar o SED
 
$ sed -i 's/\r$//' script.sh
$ ./script.sh
oi
O tr também poderia ser usado, mas não é tão amigável.
 
$ tr -d '\r'  novo_script.sh
Este detalhe pode ser muito importante um dia!
Fonte: 
http://peczenyj.blogspot.com.br/2007/07/resolvendo-problemas-comuns-2-bad.html
