---
layout: post
title: 'Curso Certificação Linux LPI-1: Shell Script Noções Fundamentais.'
date: '2012-09-09T12:52:00.000-07:00'
description: 'Curso Certificação Linux LPI-1: Shell Script Noções Fundamentais.'
main-class: 'linux'
tags:
- Linux
- LPI
image: http://1.bp.blogspot.com/-dZJHH2Atcpo/UEzyBdGs6RI/AAAAAAAAAfA/Q_WWmQk1Xvw/s72-c/a.png
twitter_text: 'Curso Certificação Linux LPI-1: Shell Script Noções Fundamentais.'
introduction: 'Curso Certificação Linux LPI-1: Shell Script Noções Fundamentais.'
---
![Blog Linux](http://1.bp.blogspot.com/-dZJHH2Atcpo/UEzyBdGs6RI/AAAAAAAAAfA/Q_WWmQk1Xvw/s400/a.png "Blog Linux")
Vamos inciar um curso de Shell Script aqui e pra começar do início devemos aprender alguns comandos Linux, não todos, porque são tantos que parecem infinitos(risos), mas vou citar os principais e os que eu mais uso.
Shell script é uma linguagem de script usada em vários sistemas operativos (operacionais), com diferentes dialetos, dependendo do interpretador de comandos utilizado. Um exemplo de interpretador de comandos é o bash, usado na grande maioria das distribuições GNU/Linux.Linux possui o Case Sensitive, ou seja, diferencia Maiúsculas de minúsculas.
Essa linguagem foi a primeira Linguagem de Programação que eu aprendi, ela é bme simples e útil para agilizar sua tarefas, então, vamos aos comandos, pra iniciar é necessário que pelo próprio Bash podemos aprender os comandos, utilizando: man COMANDO ou COMANDO --help.
{% highlight bash %}
# ls - mostra arquivos e diretórios de um determinado Diretório (ls -a, também mostra arquivos ocultos), (ls -l, mostra as permissões)...
# mkdir - cria um diretório, ex.: mkdir teste esse comando cria o diretório, pasta, de nome: teste).
# cp - copia arquivos, cp [origem] [destino], ex.: cp /home/meuusuario/arquivo.x /home/meuusuario/Desktop (copia o arquivo.x da pasta meuusuario para Desktop), -R # # serve pra copiar diretórios e seus sub-diretórios (-R = recursivamente)...
# mv - move ou renomeia um arquivo
# rm - deleta arquivos, ex.: rm /home/meusuario/arquivo.x (rm -rf, deleta recursivamente de maneira forçada, serve para diretórios)
# rmdir - remove diretórios (uso pouco esse, prefiro usar: rm -rf)
# clear - limpa a tela (uso pouco também)
# exit - sai do usuario logado, se não for root, sai do terminal.
# df - mostra o espaço usado na partição (df -H, mostra o espaço em GB, uso mais esse)
# vim - abre o vim (breve falaremos mais sobre esse editor, talvez a próxima parte deste curso)
# find - procura arquivos ou diretório, ex.: (find /home -name arquivo.x 2 > /dev/null) a opção 2 /dev/null, vc joga para o vazio as mensagens de falta de permissão # para entrar naquele determinado diretório, ou seja, em /dev ficam os dispositivos do sistema o stdin é a entrada o stout é a saída (name - busca por nome, type - # # busca por tipo, size - busca pelo tamanho do arquivo, mtime - busca por data de modificação)...
# last - mostra os logs no sistema (last -a, uso muito, utilize o man  ou --help para mais informações)...
# last– Mostra todas informações referente as entradas (login) e saídas (logout) de usuários do sistema.
# last -apara exibir estas informações mostrando o nome da maquina de onde foi efetuado os logins.
# last -d - para exibir estas informações mostrando oendereço IPda maquina de onde foi efetuado os logins.
# last reboot -para exibir um registro de todas as reinicializações efetuadas no sistema.
# lastlog– Exibe informações referente ao último login de cada usuário cadastrado no sistema. Caso nenhum argumento seja passado, o comandolastlogexibe todas as # informações armazenadas no arquivo “/var/log/lastlog” de todos os usuários do sistema.
# lastlog -u fulano para exibir informações referentes apenas ao último login do usuário fulano.
# lastlog -t 5 - para exibir a lista dos usuários que logaram no sistema nos últimos 5 dias informando o dia e a hora do último acesso de cada um desses usuários.
# pwd - mostra o diretório em que estamos.
# chmod - altera as permissões do arquivo , ex: chmod u+r, g+r, o+r arquivo, ex.: chmod 775 [arquivo ou diretório]
permissão de arquivos -> r (read) ; w (write) ; x (executa).
u -> dono
g -> grupo
a -> todos
sinais -> + (acrescenta permissões) ; - (retira permissões) ; = (iguala permissões).
ele lista as permissões do arquivo : 0(nenhuma permissão=-);1(execução=x);2(gravação=w);3(execução e gravação=xw);4(leitura=r);5(leitura e execução=rx);
6(gravação e leitura=wr);7(execução gravação e leitura=rwx).
q - para sair do man (quit).
# touch - cria um arquivo, ex.: touch teste.txt (cria o arquivo teste.txt em branco)
# echo  - printa algo, se vc fier: echo Oi mundo > teste.txt, ele coloca Oi mundo na primeira linha, se não existir o arquivo ele tb cria o arquivo.
# cat   - mostra o conteúdo do arquivo (utilize tb os comandos: more e less), se você usar: cat teste.txt >> teste2.txt (isso adicionará o conteúdo do teste.txt dentro do teste2.txt, sem apagá-lo, a partir da ultima linha do texte2.txt, se vc usar só '>' em vez de '>>' vc altera o teste.txt para ser teste2.txt)
# split - inversos de cat, divide arquivos, ex.: split -b 1 teste2.txt novo , (dividi o arquivo teste2.txt em diversos arquivos de 1 byte, se tiver 10bytes serão 10 arquivo: novoa, novob, novoc...)
# fdisk -l - lista as partições do HD
# mount - monta um dispositivo ou partição, ex.: mount /dev/sda3 /mnt/pasta (monta a partição sda3 dentro da pasta /mnt/pasta)
# umount - desmonta um dispositivo ou partição, ex.: umount /mnt/pasta
# head - visualiza as 10 primeiras linhas de um arquivo o (-n é usado para informar qnts linhas vc deseja ler, ex.: -n 20).
# tail arquivo.txt - inverso do head,lê um arquivo começando da ultima as 10 ultimas linhas(muito usado pra verificar logs).
# ps - lista os processo, ex.: ps -U marcos (lista os processos para o usuário marcos).
# kill - mata um processo
{% endhighlight %}
+ comandos
{% highlight bash %}
# killall - mata todos os processos de tal aplicativo, ex.: killall firefox (mata o firefox, firefox-bin...)
# pidof - numero de processo de um PID ,exemplo: pidof httpd , retornará os PID do Apache
# who - mostra quem está logado na máquina(whoami , mostra quem eu sou).
# free - mostra a utilização da memória, a opção -m mostra a quantidade em Mb.
# su - troca ed usuário no terminal sem fazer logoff , ex: $ su root -> deve-se colocar a senha(password) do usuario root.
# pwd - mostra em que diretório estamos
# time - mostra quanto tempo gasto para execução de um comando (time ls -l)
# date - mostra a data(SS MM DD) a hora (hh:mm:ss) a localidade e o ano.
 date 0627002412010 - alterará a data para jun 27 00:24 2010 ,ou seja (MMDDhhmmAAAA)
MM=mês em dois dígitos;DD=dia em dois dígitos;hh=hora em dois digitos;mm=minutos em dois digitos;AAAA=ano em 4 dígitos.
# cal - para exibir o calendário (para exibir do ano inteiro deve-se colocar o anos na frente do comando, ex: cal 2010)
# adduser  - criar novo usuario (2x Entre new Unix password:) é criada uma pasta em /etc/passwd/ ,as linhas tem enradas:
root:x:0:0:root:/bin/bash (significa nome do usuario:a senha ou token de senha(criptografada geralmente em /etc/shadow):userid:groupid:nome verdadeiro:diretorio e se é usuario do shell) caso retire a entrada, o usuario nao poderá logar, útil para criação de email.userid deve-se usar acima de 500 para nao confudir com os do sistema.
# chown - altera o dono do arquivo, ex: chown usuario.grupo arquivo.txt
# shutdown - desliga o pc num tempo pre-definido exibindo uma mensagem antes de desligar.
# ln - cria links, ex.: ln -s /home/usuario/Documentos/ link (cria o link para a pasta Documentos, ln -s [diretório ou arquivo] link )
# reboot - reinicia o computador
# uptime - mostra quanto tempo já está logado no Linux
# wc [arquivo] - conta linhas,palavras e letras(nessa ordem) de um arquivo.
# tar - compacta (-cf Create Files)  e descompacta (-xf Xtract Files), ex.: tar -cf arquivo_a_ser_criado.tar [arquivo ou diretório]
[/nome_do_usuario_a_ser_criado]
{% endhighlight %}
E por fim...
{% highlight bash %}
# bash - EXECUTA UM ARQUIVO Shell Script(pode -se usar também o './arquivo' ou sh ).
{% endhighlight %}
Bom existem inúmeros outros comandos, se quiser saber mais, consulte esse Livro On Line do Google Livros CLASSIC SHELL SCRIPT, foi o mais completo que eu vi até hoje, até a próxima parte do Curso, onde aprederemos os módulos básicos do Shell.
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
Atalhos da linha de comando
Atalho Descrição Tecla Similar  Ctrl+A Move o cursor para o início da linha Home  Ctrl+B Move o cursor uma posição à esquerda ←  Ctrl+C Envia sinal EOF() para o sistema 
  Ctrl+D Apaga um caractere à direita Delete  Ctrl+E Move o cursor para o fim da linha End  Ctrl+F Move o cursor uma posição à direita →  Ctrl+H Apaga um caractere à esquerda Backspace  Ctrl+I Completa arquivos e comandos Tab  Ctrl+J Quebra a linha Enter  Ctrl+K Recorta do cursor até o fim da linha 
  Ctrl+L Limpa a tela (igual ao comando clear) 
  Ctrl+N Próximo comando 
  Ctrl+P Comando anterior 
  Ctrl+Q Destrava a shell (veja Ctrl+S) 
  Ctrl+R Procura no histórico de comandos 
  Ctrl+S Trava a shell (veja Ctrl+Q) 
  Ctrl+T Troca dois caracteres de lugar 
  Ctrl+U Recorta a linha inteira 
  Ctrl+V Insere caractere literal 
  Ctrl+W Recorta a palavra à esquerda 
  Ctrl+X Move o cursor para o início/fim da linha (2x) Home/End  Ctrl+Y Cola o trecho recortado 
Fonte: Aurelio.net Canivete Suíço do Shell
Pra quem já conhece o blog, percebeu que foi reunido 3 posts nesse aqui, mas essa é a idéia, reforçar o aprendizado, segue os links:
 Curso de Shell Script parte 1
Curso de Shell Script parte 2
Atalhos da linha de comando
