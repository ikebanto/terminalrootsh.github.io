---
layout: post
title: 'Shell Scripting: Leitor Feed com SED e Lynx'
date: '2013-05-12T16:22:00.001-07:00'
description: 'Shell Scripting: Leitor Feed com SED e Lynx'
main-class: 'bash'
tags:
- Shell Script
- SED
twitter_text: 'Shell Scripting: Leitor Feed com SED e Lynx'
introduction: 'Shell Scripting: Leitor Feed com SED e Lynx'
---
![Blog Linux](http://i1118.photobucket.com/albums/k610/Marcos_Oliveira/final_zpse3b9cdd0.png "Blog Linux")
Galera, esse Script serve pra pegar algumas manhas de SED, pra que ele rode é necessário ter o Lynx instalado: 
{% highlight bash %}
# apt-get install lynx
{% endhighlight %}
É simples e precisa/haverá modificações, dêem uma olhada na imagem, código no blog e PasteBin pra ver a escrita dele, baixe aqui e renomeio para noticias.sh ou o nome que vc preferir e altere as permissões de execução(como muitos já sabem):
{% highlight bash %}
$ chmod +x noticias.sh
{% endhighlight %}
 <iframe src="http://pastebin.com/raw/9KGF3JSb" style="border:none;width:100%;"><iframe>
{% highlight bash %}
#!/bin/bash
#############################################################################
# noticias.sh - Shell Script : Feed do blog www.terminalroot.com.br no terminal
# Autor: MBM
# Endereço Web - http://www.terminalroot.com.br
# Facebook - fb.com/terminalroot
##############################################################################
# Baixa o arquivo com N linhas e 800 colunas e joga pro arquivo .noticias-terminalroot.txt
lynx -dump -width=800 http://www.terminalroot.com.br.br/feeds/posts/default > .noticias-terminalroot.txt
# imprime somente as linhas que contem a string 'title' e joga pra .noticias-temp.txt
sed -n '/title/p' .noticias-terminalroot.txt > .noticias-temp.txt
#Extrair trecho que pode ou não estar na mesma linha tirando os delimitadores
#Ou seja, extrai tudo que está entre ' e joga de .noticias-temp.txt para .noticias-terminalroot.txt
sed -n '//tc;:a;//!{N;ba;};:c;s/.*.*$//;p;}' .noticias-temp.txt > .noticias-terminalroot.txt
# Coloca todas as linhas em uma só
sed ':a;$!N;s/\n//;ta;' .noticias-terminalroot.txt > .noticias-temp.txt
# troca tudo que tem ' type='text'>' por uma quebra de linha
sed "s/ type='text'>/\n/g" .noticias-temp.txt > .noticias-terminalroot.txt
# remove o arquivo .noticias-temp.txt
rm -rf .noticias-temp.txt
# Apaga as linhas em Branco
sed -i '/^$/d' .noticias-terminalroot.txt
# Insere uma quebra de linha depois da primeira linha
sed -i '1s/$/\n/' .noticias-terminalroot.txt
# Insere '((((( Notícia - ' no inicio da primeira linha 
sed -i '1s/^/-----------------------------------\nNotícias - /' .noticias-terminalroot.txt 
# e '))))))' no final da primeira linha
sed -i '1s/$/\n-----------------------------------/' .noticias-terminalroot.txt
# Apaga da linha 13 até o final
sed -i '13,$d' .noticias-terminalroot.txt
# Insere no início de cada linha, da linha 3 até a última linha a string '----> '
sed -i '3,$s/^/----> /' .noticias-terminalroot.txt
# Insere 2 quebra de linha depois da 12 linha
sed -i '12s/$/\n\n/' .noticias-terminalroot.txt
# Insere '-----------------------------------' nas linas 13 e 14
sed -i '13,14s/$/-----------------------------------/' .noticias-terminalroot.txt
# Troca o '>' por '-' da 4° linha
sed -i '4s/>/-/' .noticias-terminalroot.txt
# Exibindo as noticias
cat .noticias-terminalroot.txt 
{% endhighlight %}
