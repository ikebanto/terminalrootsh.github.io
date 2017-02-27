---
layout: post
title: Loop For e Loop While em Shell Script
date: '2015-01-02T03:51:00.003-08:00'
description: Loop For e Loop While em Shell Script
main-class: 'bash'
tags:
- Shell Script
image: http://1.bp.blogspot.com/-xAtPNrIAZmA/VDsh_jH6FUI/AAAAAAAAA2I/hd13kwJ4_9I/s72-c/new-logo-tr.png
twitter_text: Loop For e Loop While em Shell Script
introduction: Loop For e Loop While em Shell Script
---
![Blog Linux](http://1.bp.blogspot.com/-xAtPNrIAZmA/VDsh_jH6FUI/AAAAAAAAA2I/hd13kwJ4_9I/s320/new-logo-tr.png "Blog Linux")
 Uma vez eu criei um script de fazer downloads de uma pasta de imagens e percebí que nessa pasta possuia diversas imagens repetidas, porém redimensionadas e na renomeação existia a taxa de redimensionamento(Exemplo: a imagem e tal.jpg e existia cópias tal500x450.jpg), diversas 450x145...
Então percebi que um string que se repetia era o "x" seguido de um numero de 1 a 8, então precisava remover todas as imagens q tivesses x1, x2, x3...como eram mais de 1000, imagens eu escreví esse loop em Shell Script e consegui remover toas as imagens repetidas com sucesso, segue o código:
{% highlight bash %}
#!/bin/bash
for ((i=0;i<10;i++)); do
 rm -rf *x$i*
done
chmod 777 *.*
{% endhighlight %}
Segue explicações:
For
O laço for vai substituindo uma variável por um valor, e vai executando os comandos pedidos. Veja o exemplo:
{% highlight bash %}
for i in *
do
   cp $i $i.backup
   mv $i.backup /usr/backup
done
{% endhighlight %}
Primeiramente o laço for atribuiu o valor de retorno do comando “*”  (que é equivalente a um ls sem nenhum parâmetro) para a variável $i,  depois executou o bloco de comandos. Em seguida ele atribui outro valor  do comando “*” para a variável $1 e reexecutou os comandos. Isso se  repete até que não sobrem valores de retorno do comando “*”. Outro  exemplo:
{% highlight bash %}
for original in *; do
   resultado=`echo $original |
              tr '[:upper:]' '[:lower:]'`
   if [ ! -e $resultado ]; then
      mv $original $resultado
   fi
done
{% endhighlight %}
Aqui, o que ocorre é a transformação de letras maiúsculas para  minúsculas. Para cada arquivo que o laço lê, uma variável chamada  $resultado irá conter o arquivo em letras minúsculas. Para transformar  em letras minúsculas, usei o comando tr. Caso não exista um arquivo  igual e com letras minúsculas, o arquivo é renomeado para o valor da  variável $resultado, de mesmo nome, mas com letras minúsculas.
Como os exemplos ilustram, o laço for pode ser bem útil no tratamento  de múltiplos arquivos. Você pode deixá-los todos com letras minúsculas  ou maiúsculas sem precisar renomear cada um manualmente, pode organizar  dados, fazer backup, entre outras coisas.
While
O while testa continuamente uma expressão, até que ela se torne falsa. Exemplo:
{% highlight bash %}
variavel="valor"
while [ $variavel = "valor" ]; do
   comando1
   comando2
done
{% endhighlight %}
Fonte: Devin
