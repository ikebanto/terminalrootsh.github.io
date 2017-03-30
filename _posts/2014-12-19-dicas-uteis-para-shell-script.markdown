---
layout: post
title: "Dicas úteis para Shell Script"
date: '2014-12-19T11:19:00.002-08:00'
image: '/assets/img/shell-script/shell-script-logo.jpg'
description: "Separei algumas dicas para Shell Script, deem uma analisada"
main-class: 'bash'
tags:
- Shell Script
---

![Dicas úteis para Shell Script](/assets/img/shell-script/shell-script-logo.jpg "Dicas úteis para Shell Script")

> Separei algumas dicas para Shell Script, deem uma analisada

→ Contar os caracteres de uma variável

{% highlight bash %}
echo ${#variavel}
{% endhighlight %}

→ Usando o comando cut
+ Mostrar somente a 3° coluna(de cada linha) do arquivo

{% highlight bash %}
cat arquivo.txt | cut -c3
{% endhighlight %}

+ Mostrar somente a 3° coluna EM DIANTE(de cada linha) do arquivo

{% highlight bash %}
cat arquivo.txt | cut -c3-
{% endhighlight %}

+ O comando abaixo extrai o campo 1 (field) do arquivo /etc/passwd cujo delimitador de campo é ":" (delimiter)(para caracteres especiais como '(' [parênteses] use uma barra-invertida antes '\(' ).

{% highlight bash %}
cat /etc/passwd | cut -d: -f1
{% endhighlight %}

+ Mostrar somente da 3° até a 6° coluna(de cada linha) do arquivo

{% highlight bash %}
cat arquivo.txt | cut -c3-6
{% endhighlight %}

+ Joga a saída(stdout) do comando cat para a entrada(stdin) do cut e a saída do cut para a entrada do sort(deixando em ordem alfabética)

{% highlight bash %}
cat arquivo.txt | cut -c3 | sort
{% endhighlight %}
→ Variáveis ​​locais e o comando define:
 Uma variável declarada como local é aquele que só é visível dentro do bloco de código em que ela aparece. Em uma função, uma variável local só tem sentido dentro desse bloco de função forma de declarar uma variável(aspas simples e colar igual(=))

{% highlight bash %}
  hello(){
  local variavel = 'teste'
  }
 
{% endhighlight %}

→ Comando Shift:
 Para trabalhar com parêmtros você pode utilizar o comando shift, que desloca parâmetros
 Exemplo de como usar o shift(arquivo ./teste.sh):

{% highlight bash %}
 #!/bin/bash
 echo $@
 shift
 echo $@
 
{% endhighlight %}

> exemplo com saida
 

{% highlight bash %}
./teste.sh param1 param2 param3
 param1 param2 param3
 param2 param3
 
{% endhighlight %}

→ A Variável RANDOM:
 gerar um número randômico(aleatório) que seja até no máximo 60

{% highlight bash %}
echo $(($RANDOM % 61))
{% endhighlight %}

→ O comando declare e o comando readonly
+ Use o comando 'declare' para definir atributos de variáveis ​​e funções.
 -r (readonly) # -i (integer/numeros)# -f (para criar funções somente leitura)

{% highlight bash %}
declare -r variavel
{% endhighlight %}

+ Use o comando readonly para fazer as variáveis ​​e funções readonly ou seja, você não pode alterar o valor de variáveis ​​.Ou, em vez de -r, usar: readonly variavel

{% highlight bash %}
readonly variavel='Isso é um teste!'
{% endhighlight %}

→ O comando case:
 O uso do 'case' tem de usar dessa forma: o case, o in, o ;;, o ) e o esac

{% highlight bash %}
 opcao="$1"
 
 case "$opcao" in
  eric)
  echo "Menino"
  ;;
  camila)
  echo "Mulher"
  ;;
  marcos)
  echo "Homem"
  ;;
 esac
 
{% endhighlight %}

→ Utilizando o bc
+ Introdução
 O bc não é exatamente uma calculadora, mas sim uma linguagem para cálculos, que lembra vagamente a linguagem C. O que significa que podemos ter construções como 'if', 'for', 'while', que um programa pode pedir informações para um usuário, e que podemos usar "programas" escritos para o 'bc' como se usássemos um shell script. 
 
+ Conhecendo o bc (modo interativo)
 
 Para chamar o bc, basta digitar numa janela de terminal, 'bc'. Para fazer um cálculo, basta digitar a expressão e dar ENTER.
 Operações definidas:
 Adição, subtração, multiplicação, divisão.
 % (resto da divisão)
 ^ (potenciação)
 sqrt(x) (raiz quadrada de x)
 last (último resultado) 
  Para sair, basta dar 'quit'.

{% highlight bash %}
bc
  bc 1.06
  Copyright 1991-1994, 1997, 1998, 2000 Free Software Foundation, Inc.
  This is free software with ABSOLUTELY NO WARRANTY.
  For details type `warranty'.
  300*500
  150000
  last + 500
  150500
  last - 1600
  148900
  last / 20
  7445
  last^4
  3072265955400625
  sqrt(last)
  55428025
  2/3
  0
  quit
  
{% endhighlight %}

  Você pode estar pensando, depois desse último resultado (2/3 = 0?), "Epa! Alguma coisa está errada!".
  Calma, não se desespere. Você precisa carregar o bc com o parâmetro '-l', que ativa uma biblioteca de operações matemáticas.

{% highlight bash %}
bc -l
  bc 1.06
  Copyright 1991-1994, 1997, 1998, 2000 Free Software Foundation, Inc.
  This is free software with ABSOLUTELY NO WARRANTY.
  For details type `warranty'.
  2/3
  .66666666666666666666
  3/5
  .60000000000000000000
  33/4589259837593
  .00000000000719070202
  3125886/2592375832
  .00120579969980216973
  
{% endhighlight %}

  Pequena curiosidade: o comando 'quit' é executado assim que ele é encontrado. Portanto, algo como
>  if (0==1) quit
>  mesmo 0==1 sendo impossível, vai fazer o 'bc' sair.
>  Tome cuidado com isso.
  
+ Conhecendo os comandos matemáticos do bc
  
Quando carregamos o bc com a opção '-l', temos alguns comandos matemáticos:

 s(x)| o seno de x (x em radianos)
 c(x)| o cosseno de x (x em radianos)
 a(x)| o inverso da tangente de x (retorna radianos).
 
> Se y = tangente de x (tg x), a(y) = x
> l(x): o logaritmo natural de x. (ln x)
> e(x): a função exponencial ( e^x ) (exp x)
  
+ Construindo funções
  
Podemos definir algumas funções extras a partir da definição matemática

> define sin(x) {return s(x)}

> define cos(x) {return c(x)}

> tg x = sen x / cos x:

> define tan(x) {return s(x)/c(x)}

> log10 x (logaritmo na base 10 de x) = ln x / ln 10:

> define l10(x) {return l(x)/l(10)}

> Conversão entre radianos e graus:

> d2r: graus para radianos

> r2d: radianos para graus

> pi = 3.14159265

> define d2r(n) { return n * (pi/180); }

> define r2d(n) { return n / (pi/180); }

> Mas é chato ficar digitando essas definições toda vez que queremos usar o 'bc'.
> Portanto, iremos criar um script que defina essas funções automaticamente.
> Crie, usando seu editor de texto preferido (vi, emacs, Gedit...) um arquivo com o seguinte

{% highlight bash %}
#!/usr/bin/bc -l
#
# Nosso arquivo de definições
# Nós vamos entender o 'define' depois.
pi = 3.14159265
define ln(n) { return l(n); }
define log(n) { return ln(n)/ln(10); }
define log2(n) { return l(n)/l(2); }
define d2r(n) { return n * (pi/180); }
define r2d(n) { return n / (pi/180); }
define sin(x) { return s(d2r(x)); }
define cos(x) { return c(d2r(x)); }
define tan(x) { return sin(x)/cos(x); } 
{% endhighlight %}
> Salve ele como 'define.bc' no seu diretório HOME.
> Mude os atributos dele, tal que ele seja executável:

{% highlight bash %}
chmod a+x define.bc
{% endhighlight %}
> Agora, chame o arquivo:

{% highlight bash %}
~/define.bc
{% endhighlight %}
> Experimente usar os comandos:

{% highlight bash %}
cos(15)
.96592582636649385821
log2(2097152)
21.000000000000000021
quit

{% endhighlight %}
> Note que ocorre um pequeno desvio nas casas decimais.

+ Conceitos para a criação de pequenos programas com o bc
  
> O comando "define". Mas afinal, o que o comando faz?

> Ele simplesmente define uma função.

> Dentro dele podemos usar os elementos acima citados, além destes:

+ auto : define uma variável local.
+ print : mostra mensagens na tela. (equivalente ao printf em C)
+ return : retorna um valor. Deve ser usada no final do programa, para retornar o resultado final dele.
+ { } (colchetes) têm o mesmo significado que na linguagem C. Eles servem para agrupar várias operações, de modo que estas sejam executadas de uma vez só.

> Como podemos notar, a linguagem é bem semelhante ao C. Porém, não há nenhum elemento parecido com o 'goto' ou o 'switch', o que a torna bem limitada.

 quit | Só deve ser usado em modo interativo. Assim que 'quit' for encontrado, o bc sai. (ver curiosidade no item 2) Em programas devemos usar 'halt'.

+ Alguns exemplos
  
> Definição recursiva do fatorial:

{% highlight bash %}
#!/usr/bin/bc -l
define f (x) {
if (x <= 1) return (1);
 return (f(x-1) * x);
}
{% endhighlight %}

###### Solução da equação do 2o grau

> (Como o bc força o retorno de apenas um valor por função, criamos 2 funções para retornar as 2 raízes da equação):

{% highlight bash %}
  #!/usr/bin/bc -l
  define delta(a,b,c) { return b^2 - 4*a*c }
  define eq2grau(a,b,c) {
   auto d;
   d = delta(a,b,c);
   if (d<0) halt;
   if (d>=0) {
    return (-b + sqrt(d))/(2*a);
   }
  }
  define eq2grau2(a,b,c) {
   d = delta(a,b,c);
   if (d<0) halt;
   if (d==0) return eq2grau(a,b,c);
   if (d>0) {
    return (-b - sqrt(d))/(2*a);
   }
  }
{% endhighlight %}
+ bc e shell scripts

> Às vezes, precisamos fazer um cálculo num shell script. O bc torna isso moleza

> $ x=$(echo "358358*5824825" | bc)

> $ echo $x

> 2087372637350

Simples, não?

A estrutura é:

> variavel=$(echo "expressão" | bc)
+ Conclusão e considerações finais
> Nesse artigo, vimos como usar os comandos básicos do programa bc, que, embora aparentemente limitado, pode quebrar um bom galho como uma calculadora programável e em shell scripts.
> Porém, ele não deve ser considerado como uma linguagem de programação completa, mas sim como uma linguagem específica para sua aplicação.
 
→ Usando o 'sleep' e o 'clear' para programas interativos

{% highlight bash %}
 sleep 1 # tempo de 1 segundo de espera na execução
 clear #(limpa a tela)
{% endhighlight %}
→ o comando 'reset' 
 É o mesmo que o clear, porém limpa a tela totalmente(a barra de rolagem fica integral)
→ Mostrar hora

{% highlight bash %}
DATA=`date +%T`
echo $DATA
{% endhighlight %}
→ O comando tput
  Envia a seqüência para mover o cursor para a linha 2, coluna 4 (no canto superior esquerdo da tela, geralmente conhecida como a "casa" posição do cursor).

{% highlight bash %}
cat arquivo.txt | tput cup 2 4
{% endhighlight %}
→ O comando diff(utilizado para para mostrar diferenças em arquivos)

{% highlight bash %}
diff hashing_site.txt hashing_sum.txt
{% endhighlight %}
→ Usando o Comando beep
+ Instalando:

{% highlight bash %}
apt-get install beep
{% endhighlight %}
+ Opções de uso

{% highlight bash %}
beep -l 5000
{% endhighlight %}

-f frequênciaDefine a frequencia, muda o tom do som, permitindo realizar combinações muito interessantes
{% highlight bash %}
beep -l 2000 -f 100
{% endhighlight %}

-r repetiçõesDefine o numero de repetições
{% highlight bash %}
beep -l 800 -f 100 -r 5
{% endhighlight %}

-d tempo - Determina o tempo (delay) de espera de repetição entre um som e outro, usado junto com a opção -r
{% highlight bash %}
beep -l 500 -r 5 -d 1000
{% endhighlight %}

-n - Usa uma linha de comando do beep para realizar vários sons diferentes
{% highlight bash %}
beep -l 700 -f 1 -n -l 700 -f 10 -n -l 700 -f 100
{% endhighlight %}

-s - Essa opção trata do processamento de entrada e saída de dados. A opção -s conta as linhas que foram redirecionadas para o beep por meio do pipe (|)
{% highlight bash %}
cat zonebin.txt | beep -s -f 500
{% endhighlight %}

-c - Essa opção trata do processamento de entrada e saída de dados, contando os caracteres que forem redirecionados pelo pipe
{% highlight bash %}
echo zonebin | beep -c -f 100 -l 900
{% endhighlight %}

→ Passando argumentos para funções

{% highlight bash %}
#!/bin/bash
ola(){
echo "Olá $1, vamos ser terminalroot." ; 
}
ola Marcos
echo '$* ou $@(argumentos da função) =' $* 'ou' $@ ', $#(número de parâmetros para função) = '$# ', $0 = '$0
 
{% endhighlight %}

> Nota adicional para funções:
> ao invés de criar vários aliases no .bashrc melhor criar funções em um diretório, exemplo: 

- a) edite seu .bashrc somente uma vez incluindo uma linha

{% highlight bash %}
echo 'alias minhasfuncoes="/home/$USER/minhasfuncoes.sh"' >> /home/$USER/.bashrc
{% endhighlight %}

- b) Crie o arquivo minhasfuncoes.sh no seu /home com o seguinte código:

{% highlight bash %}
echo '#!/bin/bash' > funcoesbosta.sh && echo '/home/$USER/funcoes/./$1' >> minhasfuncoes.sh
{% endhighlight %}

- c) Crie uma pasta 'funcoes' na sua home para salvar sua funções lá:

{% highlight bash %}
mkdir /home/$USER/funcoes
{% endhighlight %}

- d) Crie sua funções sem o .sh e jogue na pasta '/home/$USER/funcoes'
 + Exemplos:
  
> ♠ Função bobmarley(): 

{% highlight bash %}
echo '#!/bin/bash' > /home/$USER/funcoes/bobmarley && echo 'bobmarley(){ echo "Músico jamaicano!";}' >> /home/$USER/funcoes/bobmarley && echo 'bobmarley' >> /home/$USER/funcoes/bobmarley
{% endhighlight %}
> ♠ Função malcomx(): 

{% highlight bash %}
echo '#!/bin/bash' > /home/$USER/funcoes/malcomx && echo 'malcomx(){ echo "Líder Revolucionário!";}' >> /home/$USER/funcoes/malcomx && echo 'malcomx' >> /home/$USER/funcoes/malcomx
{% endhighlight %}

> ♠ (...)

- e) Depois torne tudo executável, dando as devidas permissões:

{% highlight bash %}
chmod +x /home/$USER/minhasfuncoes.sh && chmod -R +x /home/$USER/funcoes/
{% endhighlight %}

- f) Agora basta abrir o novo terminal e chamar a função desejada para executar o desejado:

{% highlight bash %}
minhasfuncoes bobmarley
Músico jamaicano!
 
{% endhighlight %}

- outra função,
 

{% highlight bash %}
minhasfuncoes malcomx
Líder Revolucionário!
 
{% endhighlight %}

###### Ainda há como torná-las de leitura automática sem precisar chamar a minhasfuncoes, assim como as FunçõesZZ do Aurélio.
#### → O comando exit:

 + A declaração de saída é usado para sair do script shell com um status de N.
 + Use a declaração de saída para indicar o término shell script bem ou mal sucedidas.
 + O valor de N pode ser utilizado por outros comandos ou scripts shell para levar a sua própria ação.
 + Se N for omitido, o estado de saída é o valor do último comando foi executado.
 + Use a declaração de saída para terminar script shell em um erro.
 + Se N é definido para 0 significa saída shell normal. Criar um script shell chamado exitcmd.sh:
 + Cada comando Linux executado pelo script shell ou usuário, tem um status de saída.
 + O status de saída é um número inteiro.
 + As Linux homem páginas de estatísticas de estado da saída de cada comando.
 + 0 estado de saída significa que o comando foi bem sucedido sem erros.
 + A não-zero (1-255 valores) saída de comando, o estatuto foi falha.
 + Você pode usar variáveis ​​shell especial chamado? para obter o status de saída do comando anteriormente executado.Para imprimir? variável usar o comando echo
  
{% highlight bash %}
#!/bin/bash
echo "Isto é um teste."
# Terminar nosso script shell com mensagem de sucesso
exit 0 
{% endhighlight %}

+ Para visualizar existe data de status do comando, digite:

{% highlight bash %}
echo $?
{% endhighlight %}
+ De acordo com a página man ls - estado de saída é 0 se OK, 1 se problemas menores, se dois sérios problemas.  

{% highlight bash %}
echo $?
date # executar o comando data
echo $? # imprime status de saída
foobar123 # não é um comando válido
echo $? # imprime status de saída
{% endhighlight %}

#### → O comando seq

Ele é praticamente o loop for, mostra uma sequência de tal número até outro número.No exemplo abaixo, contará do número 2 até o número 8
{% highlight bash %}
seq 2 8
{% endhighlight %}

###### mesmo que:
 

{% highlight bash %}
 for i in {2..8}
 do
  echo $i
 done 
{% endhighlight %}

######  ou até mesmo(os dois aninhados):
 

{% highlight bash %}
 for i in $(seq 2 8)
 do
 echo $i
 done
 {% endhighlight %}
###### → O comando let
Ele praticamente é um 'incrementador', se vc digitar isso num terminal, verá que ele incrementar +1 na variável j

{% highlight bash %}
echo $j
  $
let j++
echo $j
1
let j++
echo $j
2
  
{% endhighlight %}
###### → Operações básicas com vetores/arrays
Se há um recurso muito útil na programação, certamente é a possibilidade de agruparmos várias variáveis de um mesmo tipo em uma só. São o que chamamos de vetor, ou matriz - em inglês se diz array.

{% highlight bash %}
vetor=(eric camila marcos débora)
echo ${vetor[3]}
débora
echo ${vetor[0]}
eric
  
{% endhighlight %}

###### → O comando unset(serve para apagar: variáveis, vetores/arrays e funções)
###### → Zenity: interface gráfica para scripts

## Mais infos e fontes:
 
https://help.gnome.org/users/zenity/stable/

http://funcoeszz.net/http://bash.cyberciti.biz/guide/Main_Page

http://www.vivaolinux.com.br/

http://www.dicas-l.com.br/

http://pt.wikipedia.org/wiki/Cut_%28Unix%29

http://renanbirck.blogspot.com/

