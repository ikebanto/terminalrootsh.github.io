---
layout: post
title: 'Dica rápida: Alguns macetes prontos de SED'
date: '2014-12-26T09:16:00.002-08:00'
description: 'Dica rápida: Alguns macetes prontos de SED'
main-class: 'misc'
tags:
- SED
image: http://2.bp.blogspot.com/-e9-yRYSfFaM/UZAQueYopEI/AAAAAAAABlk/CMblr_45IQE/s72-c/post-icon-sed.jpg
twitter_text: 'Dica rápida: Alguns macetes prontos de SED'
introduction: 'Dica rápida: Alguns macetes prontos de SED'
---
 
![Blog Linux](http://2.bp.blogspot.com/-e9-yRYSfFaM/UZAQueYopEI/AAAAAAAABlk/CMblr_45IQE/s320/post-icon-sed.jpg "Blog Linux")
Segue alguns prontos que eu uso pra memorizar e pôr em prática, espero que seja útil, segue abaixo(HAVERÁALTERAÇÕES E RE-POSTAGENS DESTE POST):
Descrição de todos os comandosprompt$ man sed
prompt$ pinfo sed
Ou num resumo rápido: 
Legenda:
[ARQUIVO]       arquivo ou fluxo de texto (via pipe) original a ser modificado
[TEXTO]         trecho de texto. pode ser uma palavra, uma linha,
                várias separadas por \n, ou mesmo um vazio.
[PADRÃO]        [TEXTO] contido no ESPAÇO PADRÃO
= imprime o número da linha atual do [ARQUIVO]
# inicia um comentário
! inverte a lógica do comando
; separador de comandos
, separador de faixas de endereço
{ início de bloco de comandos
} fim de bloco de comandos
s substitui um trecho de texto por outro
y traduz um caractere por outro
i insere um texto antes da linha atual 
c troca a linha atual por um texto
a anexa um texto após a linha atual
g restaura o [TEXTO] contido no ESPAÇO RESERVA (sobrescrevendo)
G restaura o [TEXTO] contido no ESPAÇO RESERVA (anexando)
h guarda o [PADRÃO] no ESPAÇO RESERVA (sobrescrevendo)
H guarda o [PADRÃO] no ESPAÇO RESERVA (anexando)
x troca os conteúdos dos ESPAÇO PADRÃO e RESERVA
p imprime o [PADRÃO]
P imprime a primeira linha do [PADRÃO]
l imprime o [PADRÃO] mostrando caracteres brancos
r inclui conteúdo de um arquivo antes da linha atual
w grava o [PADRÃO] num arquivo
: define uma marcação
b pula até uma marcação 
t pula até uma marcação, se o último s/// funcionou (condicional)
d apaga o [PADRÃO]
D apaga a primeira linha do [PADRÃO]
n vai para a próxima linha
N anexa a próxima linha no [PADRÃO]
q finaliza o Sed imediatamente
Lista de todos os comandos por categoria                   informações =
                    marcadores :
                   comentários #
            comandos de edição s i c a y
     comandos de registradores g G h H x
         comandos de impressão p P l
           comandos de arquivo r w
                 modificadores g i !
                   separadores ; -e \n
             controle de fluxo b t d D n N q
                      endereço // ,
                   limitadores {} \(\)
       registradores dinâmicos \1 \2 ... \9
A opção -i altera o mesmo arquivo sem precisar redirecinar para outro.{% highlight bash %}
$ sed -i 's/marcos/pinguim/' arquivo.txt
{% endhighlight %}A opção -e IMPRIME NA TELA SEM ALTERAR O ARQUIVO.{% highlight bash %}
$ sed -e 's/marcos/pinguim/' arquivo.txt
{% endhighlight %}Inserir no final de cada linha o ";"{% highlight bash %}
$ sed 's/$/;/' arquivo.txt > novo.txt
{% endhighlight %}Inserir no início de cada linha o "/home/"{% highlight bash %}
$ sed 's/^/\/home\//' arquivo.txt > novo.txt
{% endhighlight %}Troca a PRIMEIRA da palavra "marcos" pela palavra "pinguim" e envia as mudanças para um novo arquivo:{% highlight bash %}
$ sed 's/marcos/pinguim/' arquivo.txt > novoarquivo.txt
{% endhighlight %}Troca TODAS ocorrências da palavra "marcos" pela palavra "pinguim" e envia as mudanças para um novo arquivo:{% highlight bash %}
$ sed 's/marcos/pinguim/g' arquivo.txt > novoarquivo.txt
{% endhighlight %}Troca SOMENTE A TERCEIRA ocorrência da palavra "marcos" pela palavra "pinguim" e envia as mudanças para um novo arquivo:{% highlight bash %}
$ sed 's/marcos/pinguim/3' arquivo.txt > novoarquivo.txt
{% endhighlight %}Troca TODAS ocorrências da palavra "marcos" pela palavra "pinguim", MENOS a linha que contém a palavra 'linux' e envia as mudanças para um novo arquivo:{% highlight bash %}
$ sed '/linux/! s/marcos/pinguim/g' arquivo.txt > novoarquivo.txt
{% endhighlight %}Troca TODAS ocorrências da palavra "marcos"  ou "Marcos" pela palavra "pinguim" e envia as mudanças para um novo arquivo:{% highlight bash %}
$ sed 's/[Mm]arcos/pinguim/g' arquivo.txt > novoarquivo.txt
{% endhighlight %}Apagar as linhas que POSSUEM (independe de ser no inicio) a string "xxxx"{% highlight bash %}
$ sed '/xxxx/d' arquivo.txt > novo.txt
{% endhighlight %}Apagar as linhas que COMEÇAM(somente no início de cada linha) a string "xxxx"{% highlight bash %}
$ sed '/^xxxx/d' arquivo.txt > novo.txt
{% endhighlight %}Troca TODAS ocorrências da palavra "marcos", "eric", "camila" pela palavra "pinguim" e envia as mudanças para um novo arquivo:{% highlight bash %}
$ sed 's/marcos\|eric\|camila/pinguim/g' arquivo.txt > novoarquivo.txt
{% endhighlight %}Troca tudo que estiver ENTRE as palavras Marcos e Eric, exmplo, o texto é:"No sábado Marcos saiu de pra brincar de bicicleta com o Eric"e ficará assim:"No sábado Marcos brincou de bola com o Eric"{% highlight bash %}
$ sed -i 's/Marcos.*Eric/Marcos brincou de bola com o Eric/g' arquivo.txt
{% endhighlight %}Elimina LINHAS EM BRANCO{% highlight bash %}
$ sed -i '/^$/d' arquivo.txt
{% endhighlight %}Substituir "foo" por "bar" somente as linhas que contém "plop"{% highlight bash %}
$ sed '/plop/ s/foo/bar/g'
{% endhighlight %}Substituir "foo" por "bar" exceto as linhas que contém "plop"{% highlight bash %}
$ sed '/plop/! s/foo/bar/g'
{% endhighlight %}Inserir da Linha 2 a linha 7 o "#" no início de cada linha{% highlight bash %}
$ sed '2,7s/^/#/' arquivo.txt > novo.txt
{% endhighlight %}Inserir a palavra 'NEW' no início de cada linha, da linha 21 até a linha 28:{% highlight bash %}
$ sed -i '21,28s/^/NEW/' arquivo.txt 
{% endhighlight %}
Links para +Estudos(Fundamentais):
Alfabeto do seda    append        anexa um texto após o [BUFFER]
b    branch        pula até uma marcação
c    change        troca o [BUFFER] por um texto
d    delete        apaga o [BUFFER]
D    delete        apaga a primeira linha do [BUFFER]
e    execute       executa um comando do sistema #GNU-sed
F    filename      imprime o nome do aquivo atual #GNU-sed
g    get           copia texto do [BUFFER] pro [RESERVA] (sobrescreve)
G    get           copia texto do [BUFFER] pro [RESERVA] (anexa)
h    hold          copia texto do [RESERVA] pro [BUFFER] (sobrescreve)
H    hold          copia texto do [RESERVA] pro [BUFFER] (anexa)
i    insert        insere um texto antes do [BUFFER]
l    list          imprime o [BUFFER] mostrando caracteres invisíveis
n    next          carrega a próxima linha no [BUFFER]
N    next          anexa a próxima linha no [BUFFER]
p    print         imprime o conteúdo do [BUFFER]
P    print         imprime a primeira linha do [BUFFER]
q    quit          imprime o [BUFFER] e finaliza o Sed
Q    quit          descarta o [BUFFER] e finaliza o Sed #GNU-sed
r    read          mostra conteúdo do arquivo após o [BUFFER]
R    read          mostra uma linha do arquivo após o [BUFFER] #GNU-sed
s    substitute    substitui um trecho de texto por outro
t    tee           pula na marcação, se um s/// funcionou
T    tee           pula na marcação, se nenhum s/// funcionou #GNU-sed
v    version       aborta se a versão do sed for incompatível #GNU-sed
w    write         grava o [BUFFER] num arquivo
W    write         grava a 1ª linha do [BUFFER] num arquivo #GNU-sed
x    eXchange      troca os conteúdos do [BUFFER] e [RESERVA]
y    ?             troca caracteres
z    zap           limpa o conteúdo do [BUFFER] #GNU-sed
Nota:
   [BUFFER]  - Buffer padrão do sed (pattern space)
   [RESERVA] - Buffer reserva do sed (hold space)
http://aurelio.net/sed/
http://thobias.org/doc/sosed.html
http://pt.kioskea.net/faq/sed-478
