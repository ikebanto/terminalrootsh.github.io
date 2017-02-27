---
layout: post
title: O comando xargs
date: '2014-10-19T08:06:00.000-07:00'
description: O comando xargs
main-class: 'bash'
tags:
- Shell Script
- Comandos
twitter_text: O comando xargs
introduction: O comando xargs
---
Passando parâmetros com xargsExiste um comando, cuja função primordial é construir listas de  parâmetros e passá-la para a execução de outros programas ou instruções.  Este comando é o {% highlight bash %}
xargs
{% endhighlight %} e deve ser usado da seguinte maneira:
    xargs [comando [argumento inicial]]{% highlight bash %}
xargs
{% endhighlight %} combina o argumento inicial com os argumentos  recebidos da entrada padrão, de forma a executar o comando especificado  uma ou mais vezes.
Exemplo:
Vamos procurar em todos os arquivos abaixo de um determinado diretório uma cadeia de caracteres usando o comando {% highlight bash %}
find
{% endhighlight %} com a opção {% highlight bash %}
-type f
{% endhighlight %} para pesquisar somente os arquivos normais, desprezando diretórios,  arquivos especiais, arquivos de ligações, etc, e vamos torná-la mais  genérica recebendo o nome do diretório inicial e a cadeia a ser  pesquisada como parâmetros. Para isso fazemos:
$ cat grepr
#
# Grep recursivo
# Pesquisa a cadeia de caracteres definida em $2 a partir do diretorio $1
#
find $1 -type f -print|xargs grep -l “$2″Na execução deste script procuramos, a partir do diretório definido na variável {% highlight bash %}
$1
{% endhighlight %}, todos os arquivos que continham a cadeia definida na variável {% highlight bash %}
$2
{% endhighlight %}.
Exatamente a mesma coisa poderia ser feito se a linha do programa fosse a seguinte:
    find $1 -type f -exec grep -l "$2" {} \;O primeiro processo tem duas grandes desvantagens sobre o anterior:
 A primeira é bastante visível: o tempo de execução deste método é muito superior ao daquele, isso porque o {% highlight bash %}
grep
{% endhighlight %} será feito em cada arquivo que lhe for passado pelo {% highlight bash %}
find
{% endhighlight %}, um-a-um, ao passo que com o {% highlight bash %}
xargs
{% endhighlight %}, será passada toda, ou na pior das hipóteses, a maior parte possível, da lista de arquivos gerada pelo {% highlight bash %}
find
{% endhighlight %}; Dependendo da quantidade de arquivos encontrados que atendem ao {% highlight bash %}
find
{% endhighlight %}, poderemos ganhar aquela famosa e fatídica mensagem de erro {% highlight bash %}
Too many arguments
{% endhighlight %} indicando um estouro da pilha de execução do {% highlight bash %}
grep
{% endhighlight %}. Como foi dito no item anterior, se usarmos o {% highlight bash %}
xargs
{% endhighlight %} ele passará para o {% highlight bash %}
grep
{% endhighlight %} a maior quantidade de parâmetros possível, suficiente para não causar este erro, e caso necessário executará o {% highlight bash %}
grep
{% endhighlight %} mais de uma vez. Aê pessoal do linux que usa o {% highlight bash %}
ls
{% endhighlight %} colorido que nem porta de tinturaria: nos exemplos a seguir que envolvem esta instrução, você devem usar a opção {% highlight bash %}
--color=none
{% endhighlight %}, senão existem grandes chances dos resultados não ocorrerem como o esperado.Vamos agora analisar um exemplo que é mais ou menos o inverso deste que acabamos de ver. Desta vez, vamos fazer um script para remover todos os arquivos do diretório corrente, pertencentes a um determinado usuário.
A primeira idéia que surge é, como no caso anterior, usar um comando {% highlight bash %}
find
{% endhighlight %}, da seguinte maneira:
    find . -user cara -exec rm -f {} \;Quase estaria certo, o problema é que desta forma você removeria não só os arquivos do {% highlight bash %}
cara
{% endhighlight %} no diretório corrente, mas também de todos os outros subdiretórios “pendurados” neste. Vejamos então como fazer:
    ls -l | grep " cara " | cut -c55- | xargs rmDesta forma, o {% highlight bash %}
grep
{% endhighlight %} selecionou os arquivos que continham a cadeia {% highlight bash %}
cara
{% endhighlight %} no diretório corrente listado pelo {% highlight bash %}
ls -l
{% endhighlight %}. O comando {% highlight bash %}
cut
{% endhighlight %} pegou somente o nome dos arquivos, passando-os para a remoção pelo {% highlight bash %}
rm
{% endhighlight %} usando o comando {% highlight bash %}
xargs
{% endhighlight %} como ponte
O xargs é também uma excelente ferramenta de criação de one-liners (scripts de somente uma linha). Veja este para listar todos os donos de arquivos (inclusive seus links) “pendurados” no diretório {% highlight bash %}
/bin
{% endhighlight %} e seus subdiretórios.
$ find /bin -type f -follow | \
xargs ls -al | tr -s ‘ ‘ | cut -f3 -d’ ‘ | sort -uMuitas vezes o {% highlight bash %}
/bin
{% endhighlight %} é um link (se não me engano, no Solaris o é) e a opção {% highlight bash %}
-follows
{% endhighlight %} obriga o {% highlight bash %}
find
{% endhighlight %} a seguir o link. O comando {% highlight bash %}
xargs
{% endhighlight %} alimenta o {% highlight bash %}
ls -al
{% endhighlight %} e a seqüência de comandos seguinte é para pegar somente o 3º campo  (dono) e classificá-lo devolvendo somente uma vez cada dono (opção {% highlight bash %}
-u
{% endhighlight %} do comando {% highlight bash %}
sort
{% endhighlight %}, que equivale ao comando {% highlight bash %}
uniq
{% endhighlight %}).
 Opções do xargsVocê pode usar as opções do {% highlight bash %}
xargs
{% endhighlight %} para construir comandos extremamente poderosos.
 Opção -iPara exemplificar isso e começar a entender as principais opções  desta instrução, vamos supor que temos que remover todos as arquivos com  extensão {% highlight bash %}
.txt
{% endhighlight %} sob o diretório corrente e apresentar os seus nomes na tela. Veja o que podemos fazer:
$ find . -type f -name “*.txt” | \
xargs -i bash -c “echo removendo {}; rm {}”A opção {% highlight bash %}
-i
{% endhighlight %} do {% highlight bash %}
xargs
{% endhighlight %} troca pares de chaves {% highlight bash %}
({})
{% endhighlight %} pela cadeia que está recebendo pelo pipe {% highlight bash %}
(|)
{% endhighlight %}. Então neste caso as chaves {% highlight bash %}
({})
{% endhighlight %} serão trocadas pelos nomes dos arquivos que satifaçam ao comando {% highlight bash %}
find
{% endhighlight %}.
 Opção -nOlha só a brincadeira que vamos fazer com o {% highlight bash %}
xargs
{% endhighlight %}:
$ ls | xargs echo > arq.ls
$ cat arq.ls
arq.ls arq1 arq2 arq3
$ cat arq.ls | xargs -n1
arq.ls
arq1
arq2
arq3Quando mandamos a saída do {% highlight bash %}
ls
{% endhighlight %} para o arquivo usando o {% highlight bash %}
xargs
{% endhighlight %}, comprovamos o que foi dito anteriormente, isto é, o {% highlight bash %}
xargs
{% endhighlight %} manda tudo que é possível (o suficiente para não gerar um estouro de pilha) de uma só vez. Em seguida, usamos a opção {% highlight bash %}
-n 1
{% endhighlight %} para listar um por vez. Só para dar certeza veja o exemplo a seguir, quando listaremos dois em cada linha:
$ cat arq.ls | xargs -n 2
arq.ls arq1
arq2 arq3Mas a linha acima poderia (e deveria) ser escrita sem o uso de pipe {% highlight bash %}
(|)
{% endhighlight %}, da seguinte forma:
$ xargs -n 2 arq.ls Opção -pOutra opção legal do {% highlight bash %}
xargs
{% endhighlight %} é a {% highlight bash %}
-p
{% endhighlight %}, na qual o  sistema pergunta se você realmente deseja executar o comando. Digamos  que em um diretório você tenha arquivos com a extensão {% highlight bash %}
.bug
{% endhighlight %} e {% highlight bash %}
.ok
{% endhighlight %}, os {% highlight bash %}
.bug
{% endhighlight %} estão com problemas que após corrigidos são salvos como {% highlight bash %}
.ok
{% endhighlight %}. Dá uma olhadinha na listagem deste diretório:
$ ls dir
arq1.bug
arq1.ok
arq2.bug
arq2.ok
…
arq9.bug
arq9.okPara comparar os arquivos bons com os defeituosos, fazemos:
$ ls | xargs -p -n2 diff -c
diff -c arq1.bug arq1.ok ?…y
….
diff -c arq9.bug arq9.ok ?…y Opção -tPara finalizar, o {% highlight bash %}
xargs
{% endhighlight %} também tem a opção {% highlight bash %}
-t
{% endhighlight %},  onde vai mostrando as instruções que montou antes de executá-las. Gosto  muito desta opção para ajudar a depurar o comando que foi montado.
 ResumoEntão podemos resumir o comando de acordo com a tabela a seguir:
OpçãoAção{% highlight bash %}
-i
{% endhighlight %}Substitui o par de chaves {% highlight bash %}
({})
{% endhighlight %} pelas cadeias recebidas{% highlight bash %}
-nNum
{% endhighlight %}Manda o máximo de parâmetros recebidos, até o máximo de Num para o comando a ser executado{% highlight bash %}
-lNum
{% endhighlight %}Manda o máximo de linhas recebidas, até o máximo de Num para o comando a ser executado{% highlight bash %}
-p
{% endhighlight %}Mostra a linha de comando montada e pergunta se deseja executá-la{% highlight bash %}
-t
{% endhighlight %}Mostra a linha de comando montada antes de executá-la
