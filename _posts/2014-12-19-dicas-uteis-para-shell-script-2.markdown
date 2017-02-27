---
layout: post
title: Dicas úteis para Shell Script 2
date: '2014-12-19T12:57:00.000-08:00'
description: Dicas úteis para Shell Script 2
main-class: 'bash'
tags:
- Shell Script
- Dicas
image: http://1.bp.blogspot.com/-FkPcIsY-8fU/Ub4bRVwYWsI/AAAAAAAAB6I/UlsSTr0GR6s/s72-c/shell+script.png
twitter_text: Dicas úteis para Shell Script 2
introduction: Dicas úteis para Shell Script 2
---
![Blog Linux](http://1.bp.blogspot.com/-FkPcIsY-8fU/Ub4bRVwYWsI/AAAAAAAAB6I/UlsSTr0GR6s/s200/shell+script.png "Blog Linux")
Digitar Script no terminal utilizando EOF (End Of File), serve para agilizar digitalização de qualquer coisa e já salvar via terminal, para finalizar, basta escrever em maiúsculo: EOF e pressionar [ENTER], pode-se usar EOS (End Of System) ou EOL (End Of Line) também e finalizar com EOS [ENTER] ou EOL [ENTER], da mesma forma ou diferente como apresentada abaixo:
{% highlight bash %}
$ cat > condicao_ternaria.sh
> #!/bin/bash
> ping -c1 www.linux.org &amp;&amp; echo 'Rede OK' || echo 'Rede Sujou.'
> EOF
{% endhighlight %}
utilizando o EOS e uma condição ternária com somente mensagens
{% highlight bash %}
$ cat > condicao_ternaria_2_so_msg.sh << EOS
> #!/bin/bash
> ping -c1 www.linux.org 2>/dev/null 1>/dev/null &amp;&amp; echo 'Rede OK' ||\ echo 'Rede Sujou.'
> EOS
{% endhighlight %}
Criando um arquivo sh instantâneo, utilizando o EOL e o comando trap
{% highlight bash %}
$ sh << EOL
> # funções tambem podem ser chamadas usando: function funcao(){}
> # trap é o mesmo CTRL+C
> function trataErro()
> {
> echo "Voce pressionou ctrl-c"
> echo "Mas nao posso terminar agora"
> }
> 
> trap trataErro SIGINT SIGTERM
> 
> for i in {1..10}
> do
> sleep 1
> echo "Dormindo"
> done
> EOL
{% endhighlight %}
Truques para tratamento de variáveis em shell script
  As variáveis do sistema servem para armazenar algum valor (como toda variável), mas existem alguns recursos interessantes e úteis no modo de usar tais variáveis. O que aprendemos em alguns tutoriais, é que para declarar uma variável do sistema, fazemos: 
 NOME="VALOR" > Aqui podemos usar valores de outras variáveis
 NOME='VALOR' > NOME terá o valor igual a VALOR
 NOME=`COMANDO` > NOME terá o valor da saída de comando
 
 Isto é o básico, agora teremos algumas coisas mais interessantes:
 1. Retirar parte final de uma string
 
 VAR="minha_foto.jpeg"
 echo ${VAR%.jpeg}
 
 Saída: minha_foto
 Como podemos ver, ".jpeg" será excluído. Indicamos o que será excluído depois do caracter '%'.
 2. Retirar da variável a parte inicial do valor dado
 
 VAR="http://www.vivaolinux.com.br"
 echo ${VAR#http://}
 
 Saída: www.vivaolinux.com.br
 Indicamos o que será excluído depois do caracter '#'
 3. Mostrar tudo depois de uma certa posição
 
 VAR="http://www.g00gle.com"
 echo ${VAR:7}
 
 Saída: www.g00gle.com
 Depois do ':' indicamos o índice. Como é em C, o primeiro índice é 0, o segundo é 2 ..., o oitavo é 7 ... etc.
 4. Mostrar entre alguns caracteres
 
 VAR="123456789"
 echo ${VAR:2:5}
 
 Saída: 34567
 Primeiro, faz-se o índice 2, que começa no caracter '3'. No índice 5, a contagem já começa no índice 2 (5 caracteres a partir do índice 2), aí morre no caracter '7'.
 5. Elimina o caracter mostrado e tudo a ESQUERDA
 
 VAR="daemonio@vivaolinux"
 echo ${VAR#*@}
 
 Saída: vivaolinux
 Bom, aqui indicamos o caracter a ser deletado e tudo a sua esquerda, depois da string "#*".
 6. Elimina o caracter mostrado e tudo a DIREITA
 Como o mundo não é feito somente de canhotos,
 
 VAR="daemonio@vivaolinux"
 echo ${VAR%@*}
 
 Saída: daemonio
 Já aqui, indicamos o caracter a ser deletado e tudo a sua direita, entre a string "%*".
 7. Excluir até um certo valor
 Esta daqui é igual ao de cima, só que podemos indicar strings ao invés de somente um caracter.
 
 EXC=":senha"
 VAR="root:senha:/bin/bash"
 echo ${VAR%%$EXC*}
 
 Saída: root
 O que será excluído tem que ficar entre "%%" e '*'.
 8. Excluir de um certo valor até o final
 Agora é ao contrário, exclui até o final.
 
 EXC="senha:"
 VAR="root:senha:/bin/bash"
 echo ${VAR##*$EXC}
 
 Saída: /bin/bash
 O que será excluído deve ficar depois do "##*".
 9. Troca-troca (de strings :-)
 Isto na verdade funfa que nem o comando sed.
 
 VAR="c1:c2:c3"
 echo ${VAR/:/x}
 
 Saída: c1xc2:c3
 Troca a primeira ocorrência de ':' por 'x', para trocar tudo:
 
 echo ${VAR//:/x}
 
 Usa-se duas barras.
 Nada impede de trocar por strings:
 
 echo ${VAR//:/-CC-}
 
 Saída: c1-CC-c2-CC-c3
 10. Mostrar o comprimento da variável:
 
 VAR="tenho 19 caracteres"
 echo ${#VAR}
 
 Saída: 19
 11. Listar nomes de variáveis
 Para listar todas as variáveis de seu sistema que contenha tal nome, faça:
 
 echo ${!va*}
 
 Mostrará todas as variáveis que começam com "va". Aí pode sair: vaca, vacuo, vassoura, etc.
 12. Um ou outro
 
 echo ${VAR:-"eu não existo"}
 
 Saída: eu não existo
 Se VAR for nula, mostra "eu não existo", se não for nula, mostra o conteúdo dela.
 
 VAR="eu existo"
 echo ${VAR:-"eu não existo"}
 
 Saída: eu existo
 Agora, VAR não é nula, por isto mostra o conteúdo dela.
 
 Fonte: http://www.vivaolinux.com.br/dica/Truques-para-tratamento-de-variaveis-em-shell-script
 
Variáveis ambientes 2 caracteres
 VariávelDescrição$0Parâmetro número 0 (nome do comando ou função)
$1
Parâmetro número 1 (da linha de comando ou função)
 …
Parâmetro número N …
 $9
Parâmetro número 9 (da linha de comando ou função)
 ${10}
Parâmetro número 10 (da linha de comando ou função)
 $
Número total de parâmetros da linha de comando ou função
 $*
Todos os parâmetros, como uma string única
 $@
Todos os parâmetros, como várias strings protegidas
 $$
Número PID do processo atual (do próprio script)
 $!
Número PID do último processo em segundo plano
 $_
Último argumento do último comando executado
 $?
Valor de retorno do último comando executado
       
