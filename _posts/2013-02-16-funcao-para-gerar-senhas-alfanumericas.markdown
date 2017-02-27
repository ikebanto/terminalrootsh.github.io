---
layout: post
title: "Função para gerar senhas alfanuméricas com Shell Scripiting"
date: '2013-02-16T18:30:00.000-08:00'
description: "Função para gerar senhas alfanuméricas com Shell Scripiting"
main-class: 'bash'
tags:
- Shell Script
image: "http://3.bp.blogspot.com/-3GPeXxsun80/USA_tP8FPqI/AAAAAAAABAg/VZE9B_b_D9A/s72-c/gerarsenha.png"
twitter_text: "Função para gerar senhas alfanuméricas com Shell Scripiting"
introduction: "Função para gerar senhas alfanuméricas com Shell Scripiting"
---
![Blog Linux](http://3.bp.blogspot.com/-3GPeXxsun80/USA_tP8FPqI/AAAAAAAABAg/VZE9B_b_D9A/s1600/gerarsenha.png "Blog Linux")
Tentei escrever o código da forma mais simples, eficaz e econômica para fazer esse script, para entender cada linha/comando é só ler os próprios comentários(#) do código, segue o mesmo no blog e no PasteBin, segue: 
Código aqui no blog: 
{% highlight bash %}
#!/bin/bash
# ----------------------------------------------------------------------------
# Autor: Marcos da Boa Morte, http://marcospinguim.blogspot.com
# Função para gerar senhas alfanuméricas com Shell Scripiting
# ./gerarsenha.sh
# Desde: Sáb Fev 16 23:05:55 BRT 2013
# Versão: 1
# Licença: GPL
# ----------------------------------------------------------------------------
gerarsenha(){
 # definimos as variaveis que gerarão a senha
 letras='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' # todas as letras minúsculas e Maiúsculas
 numeros='0123456789' # todos os números
 lista="$letras$numeros" # juntamos todas as letras mM e todos os números
 # numero de caracteres da senha
 max=10
 # conta o número de caracteres da string lista
 tamanho=${#lista}
 # criamos um loop do zero ao max
 for ((i = 0; i < $max; i++ ))
  do
   # colocamos o +1 para ser diferente de zero, para usar cut tem de ser no mínimo 1
   ordem=$((RANDOM % $tamanho + 1))
   # acumulamos o caracter randomico escolhido pelo cut na variável senha
   senha=$(echo $lista | cut -c "$ordem")
   # imprimimos a variavel senha 10 vezes(max) na mesma linha -n
   echo -n $senha
  done
 # pulamos uma linha final
 echo
}
#chamamos a função
gerarsenha 
{% endhighlight %}
Código no PasteBin: 
<iframe src="http://pastebin.com/raw/G79nFatH" style="border:none;width:100%;"><iframe>
Se você quiser ainda pode editar o .bashrc e criar uma alias para o arquivo: {% highlight bash %}
$ vi /home/$USER/.bashrc
{% endhighlight %}
no final do arquivo, adicione a linha correspondente:
alias gerarsenha=/home/$USER/CAMINHO_DO_ARQUIVO/gerarsenha.sh
Salve o arquivo, abra um novo terminal e digite o nome da variável/alias e pronto! 
Até a próxima!
