---
layout: post
title: "'Shell Scripting: Como renomear um diretório com dados de um arquivo'"
date: '2013-06-16T13:46:00.000-07:00'
description: "'Shell Scripting: Como renomear um diretório com dados de um arquivo'"
main-class: 'bash'
tags:
- Shell Script
image: "http://1.bp.blogspot.com/-FkPcIsY-8fU/Ub4bRVwYWsI/AAAAAAAAB6I/UlsSTr0GR6s/s72-c/shell+script.png"
twitter_text: "'Shell Scripting: Como renomear um diretório com dados de um arquivo'"
introduction: "'Shell Scripting: Como renomear um diretório com dados de um arquivo'"
---
![Blog Linux](http://1.bp.blogspot.com/-FkPcIsY-8fU/Ub4bRVwYWsI/AAAAAAAAB6I/UlsSTr0GR6s/s320/shell+script.png "Blog Linux")
Olá galera, tive um problema hoje, seguinte: baixei um disco da internet, onde as músicas vieram somente com os números, mas sem o nome das mesmas, pois os nomes vieram num arquivo TXT exemplo: 
 Pasta com as músicas:
   
![Blog Linux](http://1.bp.blogspot.com/-yIVAP2aYPw4/Ub4dQd_R6DI/AAAAAAAAB6Y/A7YTk9e9eIE/s320/Captura_de_tela.png "Blog Linux")
 
 
 Então, criei um Script em Shell que pega a 1° linha do txt e renomea o primeiro arquivo do diretório, depois pega a 2° e renomea a segunda música do diretório...e assim por diante:
 Arquivo em TXT:
 {% highlight bash %}
01-Alceu Valença-Estação Da luz
02-Alceu Valença-Como Dois Animais
03-Alceu Valença-Tropicana
04-Alceu Valença-Petrolina Juazeiro
05-Alceu Valença-Anunciação
06-Alceu Valença-Coração Bobo
07-Alceu Valença-Solidão
08-Alceu Valença-Pelas Ruas Que Andei
09-Alceu Valença-Essa Menina
10-Alceu Valença-Cabelo No Pente
11-Alceu Valença-Leque Moleque
12-Alceu Valença-Girassol
13-Alceu Valença-O Ovo e a Galinha
14-Alceu Valença-Cantiga Do Sapo
15-Alceu Valença-Romance Da Bela Inês
16-Alceu Valença-Descida da Ladeira
17-Alceu Valença-Meu Forró Meu Canto
18-Alceu Valença-Rima Com Rima
19-Alceu Valença-Vou Pra Campinas
20-Alceu Valença-Eu Quero Ver Você Dizer Que Eu Sou Ruim
 
{% endhighlight %}
 
 Levando em conta que no diretório também existiam outros arquivos que não eram música, ou seja, no formato JPG(Capa do disco) e o próprio arquivo com as músicas(faixas.txt), então o Script também deve ter a tarefa de NÃO renomeá-los. Com esse algoritmo na cabeça, criei o seguinte: 
 ✍ Primeiramente, como as músicas são em MP3, precisava que no arquivo final existisse o .mp3, então inclui uma linha que põe o '.mp3' a palavra no final de cada linha:
 {% highlight bash %}
sed -i 's/$/.mp3/' faixas.txt
{% endhighlight %}
 
 ✍ Conta a quantidade de arquivos no formato MP3 no diretório, onde 'max' seria a variável que me daria a quantidade dos arquivos:
 {% highlight bash %}
max=$(ls *.mp3 | wc -l)
{% endhighlight %}
 
 ✍ Cria um diretório temporário:
 {% highlight bash %}
mkdir .temp
{% endhighlight %}
 
 ✍ Lista os arquivos em MP3 e a saída joga para um TXT na pasta temporária:
 {% highlight bash %}
ls *.mp3 > .temp/lista_antiga_dos_arquivos.txt
{% endhighlight %}
   
 ✍ Um loop onde a sequencia(seq) iria do 1 ao 'max': 
 {% highlight bash %}
 for i in $(seq 1 $max)
 do
  #comandos
 done
 
{% endhighlight %}
 
 Dentro do loop criado acima, coloque tais comandos:
 
 ♛ Lê a linha da lista criada com o 'ls' e joga um linha do loop para um outro arquivo, ainda na pasta temporária
 {% highlight bash %}
sed "$i!d" .temp/lista_antiga_dos_arquivos.txt > .temp/uma_das_musicas_lista_VELHA.txt
{% endhighlight %}
 
 ♛ Armazena a linha(nome antigo, ex.: 01.mp3) numa variável:
 {% highlight bash %}
velho=$(cat .temp/uma_das_musicas_lista_VELHA.txt)
{% endhighlight %}
 
 ♛ Agora lê a lista das faixas(COM OS NOMES QUE DESEJA-SE RENOMEAR) e também joga num outro arquivo temporário:
 {% highlight bash %}
sed "$i!d" faixas.txt > .temp/uma_das_musicas_lista_NOVA.txt
{% endhighlight %}
 
 ♛ Armazena a linha(NOME NOVO DA MÚSICA) numa variável:
 {% highlight bash %}
novo=$(cat .temp/uma_das_musicas_lista_NOVA.txt)
{% endhighlight %}
 
 ♛ Finalmente substitímos o nome dos arquivo(RENOMEAMOS)
 {% highlight bash %}
mv "$velho" "$novo"
{% endhighlight %}
 
 ♛ Imprime o novo nome só para acompanhar a renomeação:
 {% highlight bash %}
echo "$novo"
{% endhighlight %}
 
 ✍ E por fim, FORA DO LOOP, removemos a pasta temporária:
 {% highlight bash %}
rm -rf .temp
{% endhighlight %}
 
 Veirifique o código completo do Script:
 
 PasteBin:
  
 
 Codigo:
{% highlight bash %}
#!/bin/bash
# www.terminalroot.com.br
sed -i 's/$/.mp3/' faixas.txt
max=$(ls *.mp3 | wc -l)
mkdir .temp
ls *.mp3 > .temp/lista_antiga_dos_arquivos.txt
for i in $(seq 1 $max)
 do 
  sed "$i!d" .temp/lista_antiga_dos_arquivos.txt > .temp/uma_das_musicas_lista_VELHA.txt
  velho=$(cat .temp/uma_das_musicas_lista_VELHA.txt)
  sed "$i!d" faixas.txt > .temp/uma_das_musicas_lista_NOVA.txt
  novo=$(cat .temp/uma_das_musicas_lista_NOVA.txt)
  mv "$velho" "$novo"
  echo $novo
  
 done
 
rm -rf .temp
{% endhighlight %}
 
 Por fim a pasta ficou assim:
    
![Blog Linux](http://1.bp.blogspot.com/-McEhnKVvK0o/Ub4dQgFAElI/AAAAAAAAB6c/L_zFWNWN0Bk/s320/Captura_de_tela-1.png "Blog Linux")
 
 Valeu!
 
 
 
