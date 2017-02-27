---
layout: post
title: Curso de Shell Script parte 2
date: '2015-01-02T03:56:00.002-08:00'
description: Curso de Shell Script parte 2
main-class: 'bash'
tags:
- Shell Script
image: http://1.bp.blogspot.com/-cYx3LMXO5Yc/VKaGxVIInNI/AAAAAAAABHo/jUGLHNh71pE/s72-c/icon175x175.png
twitter_text: Curso de Shell Script parte 2
introduction: Curso de Shell Script parte 2
---
![Blog Linux](http://1.bp.blogspot.com/-cYx3LMXO5Yc/VKaGxVIInNI/AAAAAAAABHo/jUGLHNh71pE/s1600/icon175x175.png "Blog Linux")
Para iniciarmos um script em Shell devemos ter a "Linha Mágica", assim chamada, é o identificador
do Interpretador, o Bash.
{% highlight bash %}
#!/bin/bash
{% endhighlight %}
Ao salvar o arquivo em shell(arquivo ou arquivo.sh) devemos dar a permissãod e execução:
{% highlight bash %}
# chmod +x arquivo.sh
{% endhighlight %}
Para rodar o arquivo pode-se usar(bash, sh ou ./):
{% highlight bash %}
# bash arquivo.sh
# sh arquivo.sh
# ./arquivo.sh
{% endhighlight %}
Criando variáveis:
{% highlight bash %}
nome_da_variavel="valor da variável"
{% endhighlight %}
Variáveis de Ambiente:
As variáveis de ambiente são aquelas conhecidas pelos demais processos (programas em execução). Exemplos destas variáveis são: TERM,HOME, PATH, EDITOR, etc.
Para verificar todas as variáveis de ambiente basta digitarmos no terminal o comando:
{% highlight bash %}
export -p
{% endhighlight %}
Qualquer variável pode se tornar uma variável de ambiente. Para isto, ela deve ser "exportada", com o comando export:
{% highlight bash %}
# export [variável]
# export [svariável]=[valor]
{% endhighlight %}
Para visualizar todas as variáveis basta digitar no terminal:
{% highlight bash %}
# set
ou 
# env
{% endhighlight %}
Uma importante variável de ambiente é PATH que ajuda o shell a encontrar os comandos que o usuário executa. Todo comando executado é, na realidade, um arquivo. Estes arquivos são chamados executáveis e estão armazenados em vários diretórios como /bin ou /usr/bin. O valor da variável PATH é uma lista de diretórios em que o shell procura toda vez que executamos um comando cujo arquivo não é encontrado no diretório corrente. Assim, não precisamos alterar o diretório de trabalho todas vez que necessitamos executar um comando que se encontra em outro diretório. Basta acrescentar o diretório que contém tal comando à variável PATH. Os nomes dos diretórios na variável são separados pelo caractere dois-pontos (:).
Caso o usuário marcos queira adicionar um outro diretório, digamos /home/marcos/bin à variável PATH, deve proceder como mostrado a seguir:
{% highlight bash %}
$ export PATH=$PATH:/home/marcos/bin   # adiciona o diretório
$ echo $PATH                         # verifica
/bin:/usr/bin:/usr/local/bin:/home/marcos/bin
{% endhighlight %}
Existem também as variáveis especiais que são nativas do sistema:
Variável Descrição   $0 Parâmetro número 0 (nome do comando ou função)  $1 Parâmetro número 1 (da linha de comando ou função)  … Parâmetro número N …  $9 Parâmetro número 9 (da linha de comando ou função)  ${10} Parâmetro número 10 (da linha de comando ou função)  $# Número total de parâmetros da linha de comando ou função  $* Todos os parâmetros, como uma string única  $@ Todos os parâmetros, como várias strings protegidas  $$ Número PID do processo atual (do próprio script)  $! Número PID do último processo em segundo plano  $_ Último argumento do último comando executado  $? Valor de retorno do último comando executado
O if, ao contrário do que ocorre em muitas outras linguagens, testa o retorno de um comando, não uma expressão.
Por exemplo:
{% highlight bash %}
if test 5 -lt 7
then
echo '5 é menor que 7'
fi
{% endhighlight %}
Porém, é possível posicionar a expressão entre colchetes, de forma a tornar o if mais parecido com o que acontece em outras linguagens:
{% highlight bash %}
if [ 5 -lt 7 ]
then
echo '5 é menor que 7'
fi
{% endhighlight %}
O “-lt” significa “less than“, ou seja, “menor que“, equivalendo ao operador "
Outros possíveis operadores são:
Comparação Numérica
-lt: É menor que (LessThan)
-gt: É maior que (GreaterThan)
-le: É menor igual (LessEqual)
-ge: É maior igual (GreaterEqual)
-eq: É igual (EQual)
-ne: É diferente (NotEqual)
Comparação de Strings
=: É igual
!=: É diferente
-n: É não nula (não vazia)
-z: É nula (vazia)
Operadores Lógicos
!: NÃO lógico (NOT)
-a: E lógico (AND)
-o: OU lógico (OR)
Testes em arquivos
-b: É um dispositivo de bloco
-c: É um dispositivo de caractere
-d: É um diretório
-e: O arquivo existe
-f: É um arquivo normal
-g: O bit SGID está ativado
-G: O grupo do arquivo é o do usuário atual
-k: O sticky-bit está ativado
-L: O arquivo é um link simbólico
-O: O dono do arquivo é o usuário atual
-p: O arquivo é um named pipe
-r: O arquivo tem permissão de leitura
-s: O tamanho do arquivo é maior que zero
-S: O arquivo é um socket
-t: O descritor de arquivos N é um terminal
-u: O bit SUID está ativado
-w: O arquivo tem permissão de escrita
-x: O arquivo tem permissão de execução
-nt: O arquivo é mais recente (NewerThan)
-ot: O arquivo é mais antigo (OlderThan)
-ef: O arquivo é o mesmo (EqualFile)
Utilizando o CASE:
{% highlight bash %}
echo "Digite um número"
read x
case "$x" in 
1)
echo "Você digitou o número 1"
;;
2)
echo "Você digitou o número 2"
;;
*)
echo "Você digitou outro número"
esac
{% endhighlight %}
O loop FOR:
{% highlight bash %}
for ((i = 0; i < 10; i++) do     echo $i done
{% endhighlight %}
O loop WHILE:
{% highlight bash %}
i=0
while [ $i -lt 10 ]
do
echo $i
i=$((i+1))
done
{% endhighlight %}
O BREAK:
{% highlight bash %}
i=0
while true
do
if [ $i -ge 10 ]
then
break
fi
i=$((i+1))
done
{% endhighlight %}
O comando continue para a execução da iteração corrente e vai para a próxima iteração, mesmo que haja mais comandos no bloco de repetição.
Entrada/Saída:
Existem três dispositivos principais, que sempre estão abertos, que merecem destaque:
stdin (standard input): entrada padrão. Corresponde, em geral, ao teclado;
stdout (standard output): saída padrão. Corresponde, em geral, à tela do terminal;
stderr (standard error): saída padrão de erros. Corresponde, em geral, à tela do terminal, também.
Esses três dispositivos estão em /dev e estão sempre disponíveis. Quem programa em C, sabe muito bem disso, pois já deve ter usado stdin, stdout e stderr junto com fprintf, fread, fwrite e semelhantes; esses três dispositivos comportam-se como arquivos comuns, sempre abertos e que não devem ser fechados.
Experimentem dar um cat em /dev/stdin para ver o que o que você digitar será repetido, entrada + saida.
Utilizando Pipelines:
Pipeline ou Pipe é um recurso do shell que nos permite conectar vários comandos usando um pipe, onde a saída do primeiro comando é enviada diretamente à entrada do segundo e assim por diante no caso de haver mais de dois comandos conectados por pipes.
No nosso caso, queremos enviar a saída do comando ls para a entrada do comando sort. O símbolo "|" (barra vertical) é usado para criar um pipe, ex.:
{% highlight bash %}
# ls | sort -r 
{% endhighlight %}
É importante observar que o redirecionamento e o uso de pipes são características do shell e não dos comandos em si. É o shell quem provê a sintaxe dos símbolos "" e "|". Logo, se você criar um programa que utilize entrada de dados via stdin, poderá usar redirecionamento para especificar uma entrada para o seu programa.
Expansões:
Expansões são caracteres, ou uma sequência deles, que expressa outro significado. O intuito disso é facilitar e padronizar comandos.
~: path à home do usuário corrente
~user: path à home do usuário “user”
Definindo Funções
Sintaxe:
{% highlight bash %}
function nome_da_funcao()
{
[comandos]
}
{% endhighlight %}
Para chamar a função:
{% highlight bash %}
nome_da_funcao
# caso haja parâmetros
nome_da_funcao param1 param2 ...
{% endhighlight %}
Para retornar valor (status) numa função, usa-se o comando return.
Exemplo:
{% highlight bash %}
#!/bin/bash
function retorna()
{
echo "sou um valor"
return 42
}
valor=$(retorna)
echo $?
echo $valor
{% endhighlight %}
Expressões Regulares em Bash
Expressões regulares em shell podem ser usadas em comparações (if’s), por exemplo. Em if’s, usa-se o operador “=~” para realizar comparações usando ER’s:
{% highlight bash %}
s="bash"
if [[ "$s" =~ ^b ]]
then
echo 'começa com b'
fi
{% endhighlight %}
Expressões Matemáticas
O bash não trabalha com expressões matemáticas tão facilmente. Existe o comando “let”, que permite realizar expressões matemáticas, mas é mais comum se usar a sintaxe semelhante ao C, utilizando dois parênteses:
{% highlight bash %}
$ a=$((1 + 1))
$ ((i++))
$ x=$((x*2))
...
{% endhighlight %}
O Arquivo .bashrc
Na home dos usuários (~), é comum haver o arquivo .bashrc (o ponto no início indica que o arquivo é oculto). Esse arquivo é sempre executado quando se abre um shell. Nele, constam diversas configurações, como definição de variáveis de ambientes, definição de aliases etc. Você pode editar esse arquivo (ou criá-lo, caso não exista):
{% highlight bash %}
# vim ~/.bashrc
{% endhighlight %}
É possível usar outros editores, não apenas o vim.
Aliases (Apelidos)
Algumas vezes usamos comandos que necessitam de várias opções e argumentos. Para amenizar o trabalho de digitarmos repetidamente estes comandos o bash oferece um recurso chamado alias com o qual podemos definir sinônimos ou “apelidos” para um comando. Um alias pode ser definido na linha de comando da seguinte forma:
alias nome=comando
Observe que não pode haver espaços em branco antes ou depois do “=”.
Esta sintaxe indica que nome é um “alias” (apelido) para comando. Toda vez que digitarmos o comando “nome”, o bash o substituirá por “comando”.
Exemplo:
{% highlight bash %}
# alias lf='ls -F'
{% endhighlight %}
Isso fará o shell executar “ls -F” toda vez que usarmos “lf” na linha de comando. Ou seja, o que o alias faz na verdade é substituir a palavra “lf” por “ls -F”. Observe neste exemplo, existe um espaço em branco entre ls e -F. Sempre que houver espaços em branco na definição de um campo, todo o campo deve ser digitado entre aspas simples (‘) ou duplas (“).É possível definir aliases em seu .bashrc, para que eles estejam sempre disponíveis na sua sessão.
Fonte: O Gordo e rberaldo
