---
layout: post
title: 'Curso Certificação Linux LPI-1: Filtros de Texto'
date: '2012-11-11T02:47:00.000-08:00'
description: 'Curso Certificação Linux LPI-1: Filtros de Texto'
main-class: 'linux'
tags:
- Linux
- LPI
- SED
image: http://4.bp.blogspot.com/-laLaqqtTIis/UJ-B5LPMGHI/AAAAAAAAAjc/05e-9wCjtGQ/s72-c/filtros.png
twitter_text: 'Curso Certificação Linux LPI-1: Filtros de Texto'
introduction: 'Curso Certificação Linux LPI-1: Filtros de Texto'
---
![Blog Linux](http://4.bp.blogspot.com/-laLaqqtTIis/UJ-B5LPMGHI/AAAAAAAAAjc/05e-9wCjtGQ/s400/filtros.png "Blog Linux")
 Filtragem de textos             
A filtragem de textos é o processo de executar algumas conversões no texto de um fluxo de entrada de texto antes de enviá-lo para um fluxo de saída. Embora tanto a entrada como a saída possam vir de um arquivo, nos ambientes UNIX® e Linux, a filtragem é, na maioria das vezes, feita através da criação de uma pipeline de comandos, na qual a saída de um comando é canalizada ou redirecionada para ser usada como a entrada para o próximo. Canais e redirecionadores são abordados mais detalhadamente no artigo sobre fluxos, canais e redirecionadores. Porém, por enquanto, vamos dar uma olhada nos canais e redirecionamentos de saída básicos usando os operadores | e >. Fluxos 
Um fluxo é nada mais que uma sequência de bytes que pode ser lida ou escrita através do uso de funções da biblioteca, as quais escondem os detalhes de um dispositivo subjacente do aplicativo. O mesmo programa pode ler ou escrever em um terminal, arquivo ou soquete de rede em uma direção independente de dispositivo através do uso de fluxos. Ambientes modernos de programação e shells usam três fluxos padrão de E/S: 
stdin é o fluxo de entrada padrão, que fornece a entrada para os comandos.stdout é o fluxo de saída padrão, que exibe a saída dos comandos.stderr é o fluxo de erro padrão, que exibe a saída de erros dos comandos.Canalizando com | 
A entrada pode vir de parâmetros que você fornece aos comandos e a saída pode ser exibida em seu terminal. Muitos comandos de processamento de texto (filtros) podem receber entradas tanto de um fluxo de entrada padrão quanto de um arquivo. Para usar a saída de um comando, command1, como entrada para um filtro, command2, você deve conectar os comandos usando o operador de canal (I). A  1 mostra como canalizar a saída de {% highlight bash %}
echo
{% endhighlight %} para classificar uma pequena lista de palavras.
 1. Canalizando saídas de echo para entradas de classificação
{% highlight bash %}
$ echo -e "apple\npear\nbanana"|sortapple banana pear 
{% endhighlight %}
Qualquer comando pode ter opções e argumentos. Também é possível usar | para redirecionar a saída do segundo comando na pipeline para um terceiro comando, e assim por diante. Construir longas pipelines de comandos, em que cada uma tenha uma capacidade limitada, é um modo comum de executar tarefas no Linux e no UNIX. Às vezes, você verá um hífen (-) no lugar do nome do arquivo como um argumento para um comando, indicando que a entrada deve vir do stdin e não de um arquivo. 
Redirecionamento de saída com > 
Embora você possa criar uma pipeline com muitos comandos e visualizar a saída no seu terminal, às vezes, você desejará salvar a saída em um arquivo. Isso é feito com o operador de redirecionamento de saída (>). 
Durante o resto desta seção, usaremos pequenos arquivos, assim, vamos então criar um diretório chamado lpi103-2 e fazer cd nesse diretório. Usaremos então o > para redirecionar a saída do comando {% highlight bash %}
echo
{% endhighlight %} para um arquivo chamado text1. Tudo isso é exibido na  2. Observe que a saída não é exibida no terminal, pois foi redirecionada para um arquivo. 
 2. Redirecionando a saída de um comando para um arquivo
{% highlight bash %}
$ mkdir lpi103-2$ cd lpi103-2$ echo -e "1 apple\n2 pear\n3 banana" > text1            
{% endhighlight %}
Agora que já temos algumas ferramentas básicas para canalizar e redirecionar, vamos dar uma olhada em alguns comandos e filtros de processamento de texto comuns do Linux e do UNIX. Esta seção apresenta alguns dos recursos básicos; consulte a man page apropriada para mais informações sobre estes comandos. 
Cat, od e split  
Agora que você já criou o arquivo text1, você pode querer verificar o que há nele. Use o comando {% highlight bash %}
cat
{% endhighlight %} (abreviação de concatenate) para exibir o conteúdo de um arquivo no stdout. A  3 verifica o conteúdo do arquivo criado acima. 
 3. Exibindo conteúdos de arquivos com o comando cat
{% highlight bash %}
$ cat text11 apple 2 pear 3 banana 
{% endhighlight %}
O comando {% highlight bash %}
cat
{% endhighlight %} recebe a entrada a partir do stdin, caso você não especifique um nome de arquivo (ou se você especifica - como o nome do arquivo). Vamos usar isso junto com o redirecionamento de saída para criar outro arquivo de texto, como exibido na  4. 
 4. Criando um arquivo de texto com o comando cat
{% highlight bash %}
$ cat >text29       plum 3       banana 10      apple             
{% endhighlight %}
Muitos filtros pequenosOutro exemplo de um filtro pequeno é o comando {% highlight bash %}
tac
{% endhighlight %}. O nome é o contrário de {% highlight bash %}
cat
{% endhighlight %}, assim como a função, que também é oposta a do comando {% highlight bash %}
cat
{% endhighlight %}, exibindo o arquivo na ordem inversa. Tente você mesmo executar
{% highlight bash %}
tac text2 text1
{% endhighlight %} 
. Na  4, {% highlight bash %}
cat
{% endhighlight %} continua lendo a partir do stdin até o fim do arquivo. Usa a combinação Ctrl-d (segure Ctrl e pressione d) parar indicar o fim do arquivo. Esta é a mesma combinação de teclas para sair do bash shell. Use a tecla tab para alinhar os nomes das frutas em uma coluna. 
Você lembra que cat é uma abreviação de concatenate? É possível usar o comando {% highlight bash %}
cat
{% endhighlight %} para concatenar vários arquivos para exibição. A  5 exibe os dois arquivos que acabamos de criar.
 5. Concatenando dois arquivos com o comando cat
{% highlight bash %}
$ cat text*1 apple 2 pear 3 banana 9       plum 3       banana 10      apple 
{% endhighlight %}
Ao exibir esses dois arquivos de texto usando o comando {% highlight bash %}
cat
{% endhighlight %}, você irá notar diferenças de alinhamento. Para descobrir o motivo dessa diferença, é necessário verificar os caracteres de controle do arquivo. Estes são colocados em prática na saída de exibição de texto, em vez de terem alguma representação do próprio caractere de controle exibida, assim, é necessário fazer dump no arquivo em um formato que permita localizar e interpretar esses caracteres especiais. As utilidades de texto GNU incluem um comando voltado para esse propósito, o comando {% highlight bash %}
od
{% endhighlight %} (ou Octal Dump). 
Há muitas opções para o comando {% highlight bash %}
od
{% endhighlight %}, como, por exemplo, a opção {% highlight bash %}
-A
{% endhighlight %}, que controla a base dos deslocamentos de arquivo, e a opção {% highlight bash %}
-t
{% endhighlight %}, que controla a forma dos conteúdos do arquivo exibidos. A base pode ser especificada como o, (octal, que é o padrão), d (decimal), x (hexadecimal) ou n (sem deslocamentos exibidos). É possível exibir a saída como octal, hex, decimal, ponto flutuante, ASCII com escapes de barra invertida ou caracteres nomeados (nl for nova linha, ht para tabulação horizontal, etc.). A  6 exibe alguns dos formatos disponíveis para fazer dump do arquivo de exemplo text2. 
 6. Fazendo dump de arquivos com o comando od
{% highlight bash %}
$ od text20000000 004471 066160 066565 031412 061011 067141 067141 005141 0000020 030061 060411 070160 062554 000012 0000031 $ od -A d -t c text20000000   9  \t   p   l   u   m  \n   3  \t   b   a   n   a   n   a  \n 0000016   1   0  \t   a   p   p   l   e  \n 0000025 $ od -A n -t a text2   9  ht   p   l   u   m  nl   3  ht   b   a   n   a   n   a  nl    1   0  ht   a   p   p   l   e  nl 
{% endhighlight %}
Observações:
A opção {% highlight bash %}
-A
{% endhighlight %} do comando {% highlight bash %}
cat
{% endhighlight %} fornece uma maneira alternativa para ver onde estão os seus finais de linhas e as suas tabulações. Consulte a man page para obter mais informações. Caso você use espaços ao invés de tabulações em seu arquivo text2, consulte Expand, unexpand, e tr, mais adiante neste artigo, para ver como alternar entre tabulações e espaços em um arquivo.Caso tiver um plano de fundo como mainframe, você pode ter interesse na utilidade hexdump, que faz parte de um conjunto de utilidades diferente. Como isso não é abordado aqui, consulte as man pages.Os nossos arquivos de exemplo são muito pequenos, porém, às vezes, você trabalhará com arquivos grandes, os quais deverão ser divididos em partes menores. Por exemplo, você pode querer dividir um arquivo grande em partes do tamanho de CDs, de modo que seja possível gravar os arquivos em CDs para enviar os mesmos pelo correio para alguém que possa criar um DVD para você. O comando {% highlight bash %}
split
{% endhighlight %} fará isso de modo que o comando {% highlight bash %}
cat
{% endhighlight %} possa ser usado para recriar o arquivo facilmente. Como padrão, os arquivos resultantes do comando {% highlight bash %}
split
{% endhighlight %} têm um prefixo 'x' em seus nomes, seguido de um sufixo 'aa', 'ab', 'ac', ..., 'ba', 'bb', etc. Há opções que permitem alterar esse padrão. Também é possível controlar o tamanho dos arquivos de saída e se o arquivo resultante contém linhas inteiras ou somente contagens de bytes.
A  7 ilustra a divisão dos nossos dois arquivos de texto com prefixos diferentes para os arquivos de saída. Nós dividimos o arquivo text1 em arquivos contendo no máximo duas linhas, e o text2 em arquivos contendo no máximo 18 bytes. Usamos então o comando {% highlight bash %}
cat
{% endhighlight %} para exibir individualmente algumas das partes, assim como para exibir um arquivo completo usando globbing, abordado no artigo gerenciamento básico de arquivos
 7. Dividindo e recombinando com os comandos split e cat
{% highlight bash %}
$ split -l 2 text1$ split -b 17 text2 y$ cat yaa9       plum 3       banana 1$ cat yab0       apple $ cat y* x*9       plum 3       banana 10      apple 1 apple 2 pear 3 banana 
{% endhighlight %}
Observe que o arquivo dividido nomeado como yaa não acabou com um caractere de linha nova, assim, o nosso prompt foi deslocado após usarmos o comando {% highlight bash %}
cat
{% endhighlight %} para exibi-lo. 
Wc, head e tail  
O comando {% highlight bash %}
Cat
{% endhighlight %} exibe todo o arquivo. Isso funciona bem com arquivos pequenos, porém, vamos supor que estamos trabalhando com um arquivo grande. Primeiramente, você pode usar o comando {% highlight bash %}
wc
{% endhighlight %} (Word Count) para ver o quão grande é o arquivo. O comando {% highlight bash %}
wc
{% endhighlight %} exibe o número de linhas, palavras e bytes em um arquivo. Também é possível descobrir o número de bytes usando {% highlight bash %}
ls -l
{% endhighlight %}. A  8 exibe a  de diretório de formato longo para os nossos dois arquivos de texto, assim como a saída do comando {% highlight bash %}
wc
{% endhighlight %}. 
 8. Usando o comando wc com arquivos de texto
{% highlight bash %}
    $ ls -l text* -rw-rw-r--. 1 marcos marcos 24 2009-08-11 14:02 text1 -rw-rw-r--. 1 marcos marcos 25 2009-08-11 14:27 text2 $ wc text*  3  6 24 text1  3  6 25 text2  6 12 49 total 
{% endhighlight %}
Há opções que permitem controlar a saída de {% highlight bash %}
wc
{% endhighlight %} ou exibir outras informações, como, por exemplo, o comprimento máximo das linhas. Consulte a man page para obter mais detalhes. 
Dois comandos permitem exibir a primeira (head) ou última (tail) parte de um arquivo. Esses comandos são {% highlight bash %}
head
{% endhighlight %} e {% highlight bash %}
tail
{% endhighlight %}. Eles podem ser usados como filtros, ou podem tomar um nome de arquivo como um argumento. Como padrão, eles exibem as primeiras (ou últimas) 10 linhas do arquivo ou fluxo. A  9 usa o comando {% highlight bash %}
dmesg
{% endhighlight %} para exibir mensagens de inicialização, em conjunto com os comandos {% highlight bash %}
wc
{% endhighlight %}, {% highlight bash %}
tail
{% endhighlight %} e {% highlight bash %}
head
{% endhighlight %}, para descobrir que há 791 mensagens, exibir as últimas 10 linhas destas mesmas e, finalmente, exibir as seis mensagens começando 15 a partir do final. Algumas linhas foram truncadas nesta saída (indicadas por ...). 
 9. Usando wc, head e tail para exibir mensagens de boot
{% highlight bash %}
$ dmesg|wc    791    5554   40186 $ dmesg | tailinput: HID 04b3:310b as /devices/pci0000:00/0000:00:1a.0/usb3/3-2/3-2.4/3-2.4:1.0/input/i nput12 generic-usb 0003:04B3:310B.0009: input,hidraw1: USB HID v1.00 Mouse [HID 04b3:310b] on us b-0000:00:1a.0-2.4/input0 usb 3-2.4: USB disconnect, address 11 usb 3-2.4: new low speed USB device using uhci_hcd and address 12 usb 3-2.4: New USB device found, idVendor=04b3, idProduct=310b usb 3-2.4: New USB device strings: Mfr=0, Product=0, SerialNumber=0 usb 3-2.4: configuration #1 chosen from 1 choice input: HID 04b3:310b as /devices/pci0000:00/0000:00:1a.0/usb3/3-2/3-2.4/3-2.4:1.0/input/i nput13 generic-usb 0003:04B3:310B.000A: input,hidraw1: USB HID v1.00 Mouse [HID 04b3:310b] on us b-0000:00:1a.0-2.4/input0 usb 3-2.4: USB disconnect, address 12 $ dmesg | tail -n15 | head -n 6usb 3-2.4: USB disconnect, address 10 usb 3-2.4: new low speed USB device using uhci_hcd and address 11 usb 3-2.4: New USB device found, idVendor=04b3, idProduct=310b usb 3-2.4: New USB device strings: Mfr=0, Product=0, SerialNumber=0 usb 3-2.4: configuration #1 chosen from 1 choice input: HID 04b3:310b as /devices/pci0000:00/0000:00:1a.0/usb3/3-2/3-2.4/3-2.4:1.0/input/i nput12 
{% endhighlight %}
Outro uso comum de {% highlight bash %}
tail
{% endhighlight %} é seguir um arquivo usando a opção {% highlight bash %}
-f
{% endhighlight %}, normalmente com uma contagem de linha de 1. Você pode usar essa opção quando um processo de segundo plano está gerando saída em um arquivo e você deseja verificar como está o andamento. Neste modo, o comando {% highlight bash %}
tail
{% endhighlight %} será executado até que você o cancele (usando Ctrl-c), exibindo as linhas conforme elas são escritas no arquivo. 
Expand, unexpand e tr  
Quando criamos os nossos arquivos text1 e text2, criamos o text2 com tabulações. Às vezes, você desejará trocar as tabulações por espaços, e vice-versa. Isso é feito com os comandos {% highlight bash %}
expand
{% endhighlight %} e {% highlight bash %}
unexpand
{% endhighlight %}. Em ambos os comandos, a opção {% highlight bash %}
-t
{% endhighlight %} permite que você defina as tabulações. Um valor único define tabulações repetidas neste intervalo. A  10 exibe como expandir as tabulações no arquivo text2 para espaços simples, assim como outra cuidadosa sequência de {% highlight bash %}
expand
{% endhighlight %} e {% highlight bash %}
unexpand
{% endhighlight %}, que desalinha o texto em text2. 
 10. Usando expand e unexpand
{% highlight bash %}
$ expand -t 1 text29 plum 3 banana 10 apple $ expand -t8 text2|unexpand -a -t2|expand -t39           plum 3           banana 10       apple 
{% endhighlight %}
Infelizmente, não é possível usar {% highlight bash %}
unexpand
{% endhighlight %} para substituir os espaços em text1 por tabulações, pois {% highlight bash %}
unexpand
{% endhighlight %} necessita de pelo menos dois espaços para converter em tabulações. No entanto, é possível usar o comando {% highlight bash %}
tr
{% endhighlight %}, que converte caracteres em um conjunto (set1) para caracteres correspondentes em outro conjunto (set2). A  11 mostra como usar o comando {% highlight bash %}
tr
{% endhighlight %} para converter espaços em tabulações. Uma vez que {% highlight bash %}
tr
{% endhighlight %} é meramente um filtro, gera-se entrada a partir do mesmo usando o comando {% highlight bash %}
cat
{% endhighlight %}. Este exemplo também ilustra o uso de - para representar a entrada padrão para o comando {% highlight bash %}
cat
{% endhighlight %}, assim, podemos concatenar a saída de {% highlight bash %}
tr
{% endhighlight %} e o arquivo text2. 
 11. Usando o comando tr
{% highlight bash %}
$ cat text1 |tr ' ' '\t'|cat - text21       apple 2       pear 3       banana 9       plum 3       banana 10      apple 
{% endhighlight %}
Caso você não tenha certeza do que está acontecendo nos dois últimos exemplos, tente usar o comando {% highlight bash %}
od
{% endhighlight %} para terminar cada estágio da pipeline de uma vez, por exemplo,
{% highlight bash %}
cat text1 |tr ' ' '\t' | od -tc
{% endhighlight %}
<div class= "Blog Linux")
Pr, nl e fmt 
O comando {% highlight bash %}
pr
{% endhighlight %} é usado para formatar arquivos para impressão. O cabeçalho padrão inclui o nome do arquivo, data e hora de criação do arquivo, junto com um número de página e duas linhas de rodapé em branco. Quando a saída é criada a partir de múltiplos arquivos ou do fluxo de entrada padrão, a data e a hora atuais são usadas no lugar do nome do arquivo e sua data de criação. É possível imprimir arquivos lado a lado em colunas e controlar muitos aspectos da formatação através das opções. Como de costume, consulte a man page para obter mais detalhes. 
O comando {% highlight bash %}
nl
{% endhighlight %} numera as linhas, o que pode ser conveniente ao imprimir os arquivos. Também é possível numerar as linhas com a opção {% highlight bash %}
-n
{% endhighlight %} do comando {% highlight bash %}
cat
{% endhighlight %}. A  12 mostra como imprimir um arquivo de texto e, em seguida, como numerar o arquivo text2 e imprimi-lo lado a lado com o text1. 
 12. Numerando e formatando para impressão.
{% highlight bash %}
$ pr text1 | head  2009-08-11 14:02                      text1                       Page 1   1 apple 2 pear 3 banana   $ nl text2 | pr -m - text1 | head  2009-08-11 15:36                                                  Page 1        1  9       plum                        1 apple      2  3       banana                      2 pear      3  10      apple                       3 banana   
{% endhighlight %}
Outro comando útil para formatar o texto é {% highlight bash %}
fmt
{% endhighlight %}, que formata o texto de modo que o mesmo fique dentro das margens. É possível tanto juntar várias linhas curtas como dividir longas. Na  13, nós criamos o arquivo text3 com uma única e longa linha de texto, usando variantes do recurso histórico {% highlight bash %}
!#:*
{% endhighlight %} para não termos que digitar nossa sentença quatro vezes. Também criamos um arquivo text4 com uma palavra por linha. A seguir, usamos o comando {% highlight bash %}
cat
{% endhighlight %} para exibi-los de modo não formatado, incluindo um caractere '$' para sinalizar os finais de linha. Finalmente, usamos o comando {% highlight bash %}
fmt
{% endhighlight %} para formatá-los com uma largura máxima de 60 caracteres. Mais uma vez, consulta a man page para mais detalhes sobre opções adicionais. 
 13. Formatando com um comprimento máximo de linha
{% highlight bash %}
$ echo "This is a sentence. " !#:* !#:1->text3echo "This is a sentence. " "This is a sentence. " "This is a sentence. ">text3 $ echo -e "This\nis\nanother\nsentence.">text4$ cat -et text3 text4This is a sentence.  This is a sentence.  This is a sentence. $ This$ is$ another$ sentence.$ $ fmt -w 60 text3 text4This is a sentence.  This is a sentence.  This is a sentence. This is another sentence. 
{% endhighlight %}
Sort e uniq 
O comando {% highlight bash %}
sort
{% endhighlight %} classifica a entrada usando a sequência de intercalação do código do idioma (LC_COLLATE) do sistema. O comando {% highlight bash %}
sort
{% endhighlight %} também pode mesclar arquivos já classificados e verificar se um arquivo está ou não classificado. 
A  14 ilustra o uso do comando {% highlight bash %}
sort
{% endhighlight %} para classificar os nossos dois arquivos de texto após a conversão dos espaços em branco para tabulações no arquivo text1. Uma vez que a ordem de classificação é por caractere, você poderá se surpreender com os resultados. Felizmente, o comando {% highlight bash %}
sort
{% endhighlight %} pode classificar tanto de acordo com valores numéricos quanto de acordo com valores de caractere. É possível definir essa escolha para todo o registro ou para cada campo. A menos que você especifique um separador de campo diferente, os campos são delimitados por espaços em branco ou tabulações. O segundo exemplo da  14 exibe a classificação numérica do primeiro arquivo e a classificação por seqüência de intercalação (alfabética) do segundo. O uso da opção {% highlight bash %}
-u
{% endhighlight %} para eliminar linhas duplicadas e manter somente as linhas únicas também é ilustrado. 
 14. Classificação numérica e por caractere.
{% highlight bash %}
$ cat text1 | tr ' ' '\t' | sort - text210      apple 1       apple 2       pear 3       banana 3       banana 9       plum $ cat text1|tr ' ' '\t'|sort -u -k1n -k2 - text21       apple 2       pear 3       banana 9       plum 10      apple 
{% endhighlight %}
Observe que ainda há duas linhas contendo a fruta "apple", pois o teste de singularidade é feito em todas as duas chaves de classificação, k1n e k2 em nosso caso. Pense em como alterar ou adicionar etapas à pipeline acima para eliminar a segunda ocorrência de 'apple'. 
Outro comando, chamado {% highlight bash %}
uniq
{% endhighlight %}, fornece outro modo de controlar a eliminação das linhas duplicadas. O comando {% highlight bash %}
uniq
{% endhighlight %} normalmente opera em arquivos classificados. Ele remove as linhas idênticas e consecutivas de qualquer arquivo, classificado ou não. O comando {% highlight bash %}
uniq
{% endhighlight %} também pode ignorar alguns campos. A  15 classifica os nossos dois arquivos de texto usando o segundo campo (fruit name) e, a seguir, elimina as linhas idênticas, começando no segundo campo (ou seja, nós ignoramos o primeiro campo ao fazer os testes com o comando {% highlight bash %}
uniq
{% endhighlight %}). 
 15. Usando o comando uniq
{% highlight bash %}
$ cat text1|tr ' ' '\t'|sort -k2 - text2|uniq -f110      apple 3       banana 2       pear 9       plum 
{% endhighlight %}
Nossa classificação foi por sequência de intercalação, assim, o comando {% highlight bash %}
uniq
{% endhighlight %} nos fornece a linha "10 apple", em vez de "1 apple". Para ver como alterar isso, tente adicionar uma classificação numérica no campo-chave 1. 
Cut, paste e join 
Agora, vamos dar uma olhada em mais três comandos para lidar com campos em dados textuais. Estes comandos são especialmente úteis para lidar com dados tabulares. O primeiro é o comando {% highlight bash %}
cut
{% endhighlight %}, que extrai campos de arquivos de texto. O delimitador de campo padrão é o caractere de tabulação. A  16 usa o comando {% highlight bash %}
cut
{% endhighlight %} para separar duas colunas do arquivo text2 e, a seguir, usa um espaço como delimitador de saída, que é uma maneira incomum de converter a tabulação de cada linha em um espaço. 
 16. Usando o comando cut
{% highlight bash %}
$ cut -f1-2 --output-delimiter=' ' text29 plum 3 banana 10 apple 
{% endhighlight %}
O comando {% highlight bash %}
paste
{% endhighlight %} cola linhas de dois ou mais arquivos lado a lado, semelhante ao modo que o comando {% highlight bash %}
pr
{% endhighlight %} mescla arquivos usando sua opção {% highlight bash %}
-m
{% endhighlight %}. A  17 exibe os resultados da colagem de dois ou mais arquivos de texto. 
 17. Colando arquivos
{% highlight bash %}
$ paste text1 text21 apple 9       plum 2 pear  3       banana 3 banana        10      apple 
{% endhighlight %}
Estes exemplos apresentam colagens simples, porém o comando {% highlight bash %}
paste
{% endhighlight %} pode colar dados a partir de um ou mais arquivos de várias outras maneiras. Consulte a man page para obter mais detalhes. 
Nosso último comando para a manipulação de campos é o {% highlight bash %}
join
{% endhighlight %}, que junta arquivos com base em um campo correspondente. Os arquivos devem estar classificados no campo de junção. Uma vez que o arquivo text2 não está classificado em ordem numérica, podemos classificá-lo e, então, o comando join irá juntar as duas linhas com um campo de junção correspondente (o campo com valor 3, neste caso). 
 18. Juntando arquivos com campos de junção.
{% highlight bash %}
$ sort -n text2|join -j 1 text1 -3 banana banana join: file 2 is not in sorted order 
{% endhighlight %}
Mas o que deu errado? Lembre-se do que aprendeu sobre classificação numérica e por caractere na seção Sort e uniq. A junção é executada com base em caracteres correspondentes de acordo com a sequência de intercalação do código do idioma. Ela não funciona em campos numéricos, a não ser que os campos tenham todos o mesmo comprimento. 
Usamos a opção {% highlight bash %}
-j1
{% endhighlight %} para juntar com base no campo 1 de cada arquivo. O campo a ser usado para a junção pode ser especificado separadamente para cada arquivo. É possível, por exemplo, fazer a junção com base no campo 3 de um arquivo e no campo 10 de outro arquivo. 
Vamos criar um novo arquivo, chamado text5, classificando o arquivo text1 com base no segundo campo (fruit name) e substituindo os espaços por tabulações.  Em seguida, se classificarmos o arquivo text2 no segundo campo e fizermos a junção com o text5 usando o segundo campo de cada arquivo como campo de junção, deveremos ter duas correspondências (apple e banana). Essa junção é ilustrada na  19. 
 19. Juntando arquivos com campos de junção.
{% highlight bash %}
$ sort -k2 text1|tr ' ' '\t'>text5$ sort -k2 text2 | join -1 2 -2 2 text5 -apple 1 10 banana 3 3 
{% endhighlight %}
Sed               
Sed é o stream editor. Há muitos artigos do developerWorks, assim como muitos livros e capítulos de livros, sobre o sed . O Sed é muito poderoso e as tarefas que ele pode realizar são limitadas somente pela sua imaginação. Esta pequena introdução deve abrir o seu apetite para com o sed, porém sem intenções de ser completa ou extensiva. 
Tal como acontece com muitos dos comandos de texto que aprendemos até agora, o sed pode funcionar como um filtro e receber a sua entrada a partir de um arquivo. A saída é para o fluxo de saída padrão. O sed carrega linhas da entrada no espaço padrão, aplica os comandos de edição do sed aos conteúdos do espaço padrão e, em seguida, escreve o espaço padrão para a saída padrão. O sed pode combinar muitas linhas no espaço padrão, e isso pode escrever para um arquivo, escrever somente a saída selecionada ou não escrever.
O sed usa a sintaxe de expressão regular para procurar e substituir o texto seletivamente no espaço padrão, assim com controlar quais linhas de texto devem ser operadas por conjuntos de comandos de edição. Expressões regulares são abordadas com mais detalhes no artigo sobre procurando arquivos de texto em expressões regulares  (que você encontra na . Um buffer de espera fornece armazenamento temporário para o texto. O buffer de espera pode substituir o espaço padrão, ser adicionado ao espaço padrão, ou ser alternado com o espaço padrão. O sed tem um conjunto de comandos limitados, mas que, quando combinados com sintaxe de expressões regulares e o buffer de espera, resultam em incríveis capacidades. Um conjunto de comandos do sed é, normalmente, chamado sed script. A  20 exibe três sed scripts simples. No primeiro, usamos o comando {% highlight bash %}
s
{% endhighlight %} (substitute) para substituir uma maiúscula por uma minúscula 'a' em cada linha. Este exemplo substitui somente o primeiro 'a', assim, no segundo exemplo, adicionamos o sinalizador 'g' (global), fazendo com que o sed altere todas as ocorrências. No terceiro script, introduzimos o comando {% highlight bash %}
d
{% endhighlight %} (delete) para deletar uma linha. No nosso exemplo, usamos um endereço de 2 para indicar que somente a linha 2 deve ser deletada. Separamos os comandos usando um ponto-e-vírgula (;) e usamos a mesma substituição global que usamos no segundo script para substituir 'a' por 'A'. 
 20. Iniciando sed scripts
{% highlight bash %}
$ sed 's/a/A/' text11 Apple 2 peAr 3 bAnana $ sed 's/a/A/g' text11 Apple 2 peAr 3 bAnAnA $ sed '2d;$s/a/A/g' text11 apple 3 bAnAnA 
{% endhighlight %}
Além de operar em linhas individuais, o sed pode operar em um intervalo de linhas. O começo e o fim do intervalo são separados por uma vírgula (,) e podem ser especificados como um número de linha, uma expressão regular ou um sinal de dólar ($) para o final do arquivo. Dado um endereço ou vários endereços, é possível agrupar vários comandos entre chaves, { e }, para que estes operem somente nas linhas selecionadas pelo intervalo. A  21 ilustra duas maneiras de ter a nossa substituição global aplicada somente às duas últimas linhas do nosso arquivo. Também ilustra o uso da opção {% highlight bash %}
-e
{% endhighlight %} para adicionar múltiplos comandos ao script.
 21. Endereços sed.
{% highlight bash %}
$ sed -e '2,${' -e 's/a/A/g' -e '}' text11 apple 2 peAr 3 bAnAnA $ sed -e '/pear/,/bana/{' -e 's/a/A/g' -e '}' text11 apple 2 peAr 3 bAnAnA 
{% endhighlight %}
Sed scripts também podem ser armazenados em arquivos. De fato, você provavelmente vai querer fazer isso com scripts frequentemente usados. Lembre-se que usamos o comando {% highlight bash %}
tr
{% endhighlight %} para substituir espaços em branco por tabulações no arquivo text1. Agora, vamos fazer isso com um sed script armazenado em um arquivo. Vamos usar o comando {% highlight bash %}
echo
{% endhighlight %} para criar o arquivo. Os resultados são exibidos na  22.
 22. Um sed de uma linha
{% highlight bash %}
$ echo -e "s/ /\t/g">sedtab$ cat sedtabs/ /    /g $ sed -f sedtab text11       apple 2       pear 3       banana 
{% endhighlight %}
Nosso último exemplo de sed usa o comando {% highlight bash %}
=
{% endhighlight %} para imprimir números de linha e então filtrar a saída resultante, novamente através do sed, imitando o efeito do comando {% highlight bash %}
nl
{% endhighlight %} para numerar linhas. A  23 usa o comando {% highlight bash %}
=
{% endhighlight %} para imprimir números de linha, a seguir, usa o comando {% highlight bash %}
N
{% endhighlight %} para ler uma segunda linha de entrada no espaço padrão e, finalmente, remove o caractere de nova linha (\n) entre as duas linhas no espaço padrão. 
 23. Numerando linhas com sed
{% highlight bash %}
$ sed '=' text21 9       plum 2 3       banana 3 10      apple $ sed '=' text2|sed 'N;s/\n//'19      plum 23      banana 310     apple 
{% endhighlight %}
Não é bem o que queríamos! O que realmente gostaríamos é de ter os nossos números alinhados em uma coluna com algum espaço antes das linhas do arquivo. Na  24, inserimos várias linhas de comando (observe o prompt secundário >). Estude os exemplos e consulte a explicação abaixo. 
 24. Numerando linhas com sed - segundo round
{% highlight bash %}
$ cat text1 text2 text1 text2>text6$ ht=$(echo -en  "Blog Linux")
 s/^.*\(......\)\n/\1$ht/"     1  1 apple      2  2 pear      3  3 banana      4  9       plum      5  3       banana      6  10      apple      7  1 apple      8  2 pear      9  3 banana     10  9       plum     11  3       banana     12  10      apple 
{% endhighlight %}
Aqui vão os passos que seguimos: 
Primeiro, usamos o comando {% highlight bash %}
cat
{% endhighlight %} para criar um arquivo de doze linhas a partir de duas cópias dos nossos arquivos text1 e text2. Não há nada de divertido em formatar números em colunas se não temos números de dígitos diferentes. O bash shell usa a tecla tab para a conclusão de comandos, assim, é útil ter um caractere de tabulação cativo que você possa utilizar quando necessitar de uma tabulação real. Usamos o comando {% highlight bash %}
echo
{% endhighlight %} para fazer isso e salvar o caractere na variável shell 'ht'. Criamos um fluxo contendo números de linha seguidos de linhas de dados, como fizemos anteriormente, e o filtramos através de uma segunda cópia do sed.Lemos uma segunda linha no espaço padrão.Prefixamos nosso número de linha no começo do espaço padrão (marcado por ^) com seis espaços em branco.A seguir, substituímos toda a linha para a nova linha com os últimos seis caracteres antes da nova linha mais um caractere de tabulação. Isso alinha os nossos números de linha nas primeiras seis colunas da linha de saída. Observe que a parte esquerda do comando 's' usa '\(' e '\)' para marcar os caracteres que queremos usar na parte direita. Na parte direita, referimos o primeiro conjunto marcado (e somente tal conjunto neste exemplo) como \1. Observe que nosso comando está entre aspas duplas ("), de modo que a substituição vai ocorrer para $ht. A Versão 4 do sed contém documentação em formato {% highlight bash %}
info
{% endhighlight %} e inclui excelentes exemplos. Estes não estão inclusos na antiga versão 3.02. O GNU sed aceita o comando {% highlight bash %}
sed --version
{% endhighlight %} para exibir a versão.
Extraído com adaptação do original:
https://www.ibm.com/developerworks/br/linux/
