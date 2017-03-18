---
layout: post
title: "Alguns comandos GNU/Linux por categorias"
date: '2014-09-21T09:58:00.001-07:00'
image: '/assets/img/bash/comandos-linux.jpg'
description: "Uma lista completa de comandos GNU/Linux"
tags:
- Linux
- GNU
- Terminal
- Comandos
---

<div align="center">
<img src="/assets/img/bash/comandos-linux.jpg" alt="Alguns comandos GNU/Linux por categorias" title="Alguns comandos GNU/Linux por categorias" width="50%" height="50%" />
</div>

<table cols="2" style="width: 450px;"><tbody>
<tr><td colspan="2"><i><b>Comandos de Controle e Acesso</b></i></td></tr>
<tr><td><br /></td><td><br /></td></tr>
<tr valign="top"><td width="100"><b>exit </b></td><td>Terminar a sessão, ou seja, a <i>shell</i> (mais ajuda digitando <i>man sh</i> ou <i>man csh</i>)</td></tr>
<tr valign="top"><td width="100"><b>logout </b></td><td>Deslogar, ou seja, terminar a sessão actual, mas apenas na <i>C shell</i> e na <i>bash shell</i></td></tr>
<tr valign="top"><td width="100"><b>passwd </b></td><td>Mudar a <i>password</i> do nosso utilizador</td></tr>
<tr valign="top"><td width="100"><b>rlogin </b></td><td>Logar de forma segura noutro sistema <i>Unix/Linux</i></td></tr>
<tr valign="top"><td width="100"><b>ssh </b></td><td>Sessão segura, vem de <i>secure shell</i>, e permite-nos logar num servidor através do protocolo <i>ssh</i></td></tr>
<tr valign="top"><td width="100"><b>slogin </b></td><td>Versão segura do <i>rlogin</i></td></tr>
<tr valign="top"><td width="100"><b>yppasswd </b></td><td>Mudar a <i>password</i> do nosso utilizador nas páginas amarelas (<i>yellow pages</i>)</td></tr>
</tbody></table>
<table cols="2" style="width: 450px;"><tbody>
<tr><td colspan="2"><i><b>Comandos de Comunicações</b></i></td></tr>
<tr><td><br /></td><td><br /></td></tr>
<tr valign="top"><td width="100"><b>mail </b></td><td>Enviar e receber emails</td></tr>
<tr valign="top"><td width="100"><b>mesg </b></td><td>Permitir ou negar mensagens de terminal e pedidos de conversação (<i>talk requests</i>)</td></tr>
<tr valign="top"><td width="100"><b>pine </b></td><td>Outra forma de enviar e receber emails, uma ferramenta rápida e prática</td></tr>
<tr valign="top"><td width="100"><b>talk </b></td><td>Falar com outros utilizadores que estejam logados no momento</td></tr>
<tr valign="top"><td width="100"><b>write </b></td><td>Escrever para outros utilizadores que estejam logados no momento</td></tr>
</tbody></table>
<table cols="2" style="width: 450px;"><tbody>
<tr><td colspan="2"><i><b>Comandos de Ajuda e Documentação</b></i></td></tr>
<tr><td><br /></td><td><br /></td></tr>
<tr valign="top"><td width="100"><b>apropos </b></td><td>Localiza comandos por pesquisa de palavra-chave</td></tr>
<tr valign="top"><td width="100"><b>find </b></td><td>Localizar ficheiros, como por exemplo: <i>find . -name *.txt -print</i>, para pesquisa de ficheiros de texto por entre os ficheiros da directoria actual</td></tr>
<tr valign="top"><td width="100"><b>info </b></td><td>Lança o explorador de informações</td></tr>
<tr valign="top"><td width="100"><b>man </b></td><td>Manual muito completo, pesquisa informação acerca de todos os comandos que necessitemos de saber, como por exemplo <i>man find</i></td></tr>
<tr valign="top"><td width="100"><b>whatis </b></td><td>Descreve o que um determinado comando é</td></tr>
<tr valign="top"><td width="100"><b>whereis </b></td><td>Localizar a página de ajuda (<i>man page</i>), código fonte, ou ficheiros binários, de um determinado programa</td></tr>
</tbody></table>
<table cols="2" style="width: 450px;"><tbody>
<tr><td colspan="2"><i><b>Comandos de Edição de Texto</b></i></td></tr>
<tr><td><br /></td><td><br /></td></tr>
<tr valign="top"><td width="100"><b>emacs </b></td><td>Editor de texto <i>screen-oriented</i></td></tr>
<tr valign="top"><td width="100"><b>pico </b></td><td>Editor de texto <i>screen-oriented</i>, também chamado de <i>nano</i></td></tr>
<tr valign="top"><td width="100"><b>sed </b></td><td>Editor de texto <i>stream-oriented</i></td></tr>
<tr valign="top"><td width="100"><b>vi </b></td><td>Editor de texto <i>full-screen</i></td></tr>
<tr valign="top"><td width="100"><b>vim </b></td><td>Editor de texto <i>full-screen</i> melhorado (<i>vi improved</i>)</td></tr>
</tbody></table>
<table cols="2" style="width: 450px;"><tbody>
<tr><td colspan="2"><i><b>Comandos de Gestão de Ficheiros e Directorias</b></i></td></tr>
<tr><td><br /></td><td><br /></td></tr>
<tr valign="top"><td width="100"><b>cd </b></td><td>Mudar de directoria actual, como por exemplo <i>cd directoria</i>, <i>cd ..</i>, <i>cd /</i></td></tr>
<tr valign="top"><td width="100"><b>chmod </b></td><td>Mudar a protecção de um ficheiro ou directoria, como por exemplo <i>chmod 777</i>, parecido com o <i>attrib</i> do <i>MS-DOS</i></td></tr>
<tr valign="top"><td width="100"><b>chown </b></td><td>Mudar o dono ou grupo de um ficheiro ou directoria, vem de <i>change owner</i></td></tr>
<tr valign="top"><td width="100"><b>chgrp </b></td><td>Mudar o grupo de um ficheiro ou directoria</td></tr>
<tr valign="top"><td width="100"><b>cmp </b></td><td>Compara dois ficheiros</td></tr>
<tr valign="top"><td width="100"><b>comm </b></td><td>Selecciona ou rejeita linhas comuns a dois ficheiros seleccionados</td></tr>
<tr valign="top"><td width="100"><b>cp </b></td><td>Copia ficheiros, como o <i>copy</i> do <i>MS-DOS</i></td></tr>
<tr valign="top"><td width="100"><b>crypt </b></td><td>Encripta ou Desencripta ficheiros (apenas <i>CCWF</i>)</td></tr>
<tr valign="top"><td width="100"><b>diff </b></td><td>Compara o conteúdo de dois ficheiros <i>ASCII</i></td></tr>
<tr valign="top"><td width="100"><b>file </b></td><td>Determina o tipo de ficheiro</td></tr>
<tr valign="top"><td width="100"><b>grep </b></td><td>Procura um ficheiro por um padrão, sendo um filtro muito útil e usado, por exemplo um <i>cat a.txt | grep ola</i> irá mostrar-nos apenas as linhas do ficheiro a.txt que contenham a palavra “ola”</td></tr>
<tr valign="top"><td width="100"><b>gzip </b></td><td>Comprime ou expande ficheiros</td></tr>
<tr valign="top"><td width="100"><b>ln </b></td><td>Cria um <i>link</i> a um ficheiro</td></tr>
<tr valign="top"><td width="100"><b>ls </b></td><td>Lista o conteúdo de uma directoria, semelhante ao comando <i>dir</i> no <i>MS-DOS</i></td></tr>
<tr valign="top"><td width="100"><b>lsof </b></td><td>Lista os ficheiros abertos, vem de <i>list open files</i></td></tr>
<tr valign="top"><td width="100"><b>mkdir </b></td><td>Cria uma directoria, vem de <i>make directory”</i></td></tr>
<tr valign="top"><td width="100"><b>mv </b></td><td>Move ou renomeia ficheiros ou directorias</td></tr>
<tr valign="top"><td width="100"><b>pwd </b></td><td>Mostra-nos o caminho por inteiro da directoria em que nos encontramos em dado momento, ou seja a <i>pathname</i></td></tr>
<tr valign="top"><td width="100"><b>quota </b></td><td>Mostra-nos o uso do disco e os limites</td></tr>
<tr valign="top"><td width="100"><b>rm </b></td><td>Apaga ficheiros, vem de <i>remove</i>, e é semelhante ao comando <i>del</i> no <i>MS-DOS</i>, é preciso ter cuidado com o comando <i>rm *</i> pois apaga tudo sem confirmação por defeito</td></tr>
<tr valign="top"><td width="100"><b>rmdir </b></td><td>Apaga directorias, vem de <i>remove directory</i></td></tr>
<tr valign="top"><td width="100"><b>stat </b></td><td>Mostra o estado de um ficheiro, útil para saber por exemplo a hora e data do último acesso ao mesmo</td></tr>
<tr valign="top"><td width="100"><b>sync </b></td><td>Faz um <i>flush</i> aos <i>buffers</i> do sistema de ficheiros, sincroniza os dados no disco com a memória, ou seja escreve todos os dados presentes nos <i>buffers</i> da memória para o disco</td></tr>
<tr valign="top"><td width="100"><b>sort </b></td><td>Ordena, une ou 
compara texto, podendo ser usado para extrair informações dos ficheiros 
de texto ou mesmo para ordenar dados de outros comandos como por exemplo
 listar ficheiros ordenados pelo nome</td></tr>
<tr valign="top"><td width="100"><b>tar </b></td><td>Cria ou extrai arquivos, muito usado como programa de backup ou compressão de ficheiros</td></tr>
<tr valign="top"><td width="100"><b>tee </b></td><td>Copia o <i>input</i> para um <i>standard output</i> e outros ficheiros</td></tr>
<tr valign="top"><td width="100"><b>tr </b></td><td>Traduz caracteres</td></tr>
<tr valign="top"><td width="100"><b>umask </b></td><td>Muda as protecções de ficheiros por defeito</td></tr>
<tr valign="top"><td width="100"><b>uncompress </b></td><td>Restaura um ficheiro comprimido</td></tr>
<tr valign="top"><td width="100"><b>uniq </b></td><td>Reporta ou apaga linhas repetidas num ficheiro</td></tr>
<tr valign="top"><td width="100"><b>wc </b></td><td>Conta linhas, palavras e mesmo caracteres num ficheiro</td></tr>
</tbody></table>
<table cols="2" style="width: 450px;"><tbody>
<tr><td colspan="2"><i><b>Exibição ou Impressão de Ficheiros</b></i></td></tr>
<tr><td><br /></td><td><br /></td></tr>
<tr valign="top"><td width="100"><b>cat </b></td><td>Mostra o conteúdo de um ficheiro, como o comando <i>type</i> do <i>MD-DOS</i>, e é muito usado também para concatenar ficheiros, como por exemplo fazendo <i>cat a.txt b.txt &gt; c.txt” para juntar o ficheiro a.txt e b.txt num único de nome c.txt</i></td></tr>
<tr valign="top"><td width="100"><b>fold </b></td><td>Encurta, ou seja, faz um <i>fold</i> das linhas longas para caberem no dispositivo de <i>output</i></td></tr>
<tr valign="top"><td width="100"><b>head </b></td><td>Mostra as primeiras linhas de um ficheiro, como por exemplo com <i>head -10 a.txt</i>, ou usado como filtro para mostrar apenas os primeiros <i>x</i> resultados de outro comando</td></tr>
<tr valign="top"><td width="100"><b>lpq </b></td><td>Examina a <i>spooling queue</i> da impressora</td></tr>
<tr valign="top"><td width="100"><b>lpr </b></td><td>Imprime um ficheiro</td></tr>
<tr valign="top"><td width="100"><b>lprm </b></td><td>Remove <i>jobs</i> da <i>spooling queue</i> da impressora</td></tr>
<tr valign="top"><td width="100"><b>more </b></td><td>Mostra o conteúdo de um ficheiro, mas apenas um ecrã de cada vez, ou mesmo <i>output</i> de outros comandos, como por exemplo <i>ls | more</i></td></tr>
<tr valign="top"><td width="100"><b>less </b></td><td>Funciona como o <i>more</i>, mas com menos <i>features</i>, menos características e potenciais usos</td></tr>
<tr valign="top"><td width="100"><b>page </b></td><td>Funciona de forma parecida com o comando <i>more</i>, mas exibe os ecrãs de forma invertida ao comando <i>more</i></td></tr>
<tr valign="top"><td width="100"><b>pr </b></td><td>Pagina um ficheiro para posterior impressão</td></tr>
<tr valign="top"><td width="100"><b>tail </b></td><td>Funciona de forma inversa ao comando <i>head</i>, mostra-nos as últimas linhas de um ficheiro ou mesmo do <i>output</i> de outro comando, quando usado como filtro</td></tr>
<tr valign="top"><td width="100"><b>zcat </b></td><td>Mostra-nos um ficheiro comprimido</td></tr>
<tr valign="top"><td width="100"><b>xv </b></td><td>Serve para exibir, imprimir ou mesmo manipular imagens</td></tr>
<tr valign="top"><td width="100"><b>gv </b></td><td>Exibe ficheiros <i>ps</i> e <i>pdf</i></td></tr>
<tr valign="top"><td width="100"><b>xpdf</b></td><td>Exibe ficheiros <i>pdf</i>, usa o <i>gv</i></td></tr>
</tbody></table>
<table cols="2" style="width: 450px;"><tbody>
<tr><td colspan="2"><i><b>Comandos de Transferência de Ficheiros</b></i></td></tr>
<tr><td><br /></td><td><br /></td></tr>
<tr valign="top"><td width="100"><b>ftp </b></td><td>Vem de <i>file transfer protocol</i>, e permite-nos, usando o protocolo de transferência de ficheiros <i>ftp</i>, transferir ficheiros entre vários <i>hosts</i> de uma rede, como aceder a um servidor de <i>ftp</i> para enviar ou puxar ficheiros</td></tr>
<tr valign="top"><td width="100"><b>rsync </b></td><td>Sincroniza de forma rápida e flexível dados entre dois computadores</td></tr>
<tr valign="top"><td width="100"><b>scp </b></td><td>Versão segura do <i>rcp</i></td></tr>
</tbody></table>
<table cols="2" style="width: 450px;"><tbody>
<tr><td colspan="2"><i><b>Comandos de Notícias ou Rede</b></i></td></tr>
<tr><td><br /></td><td><br /></td></tr>
<tr valign="top"><td width="100"><b>netstat </b></td><td>Mostra o estado da rede</td></tr>
<tr valign="top"><td width="100"><b>rsh </b></td><td>Corre umam <i>shell</i> em outros sistemas <i>UNIX</i></td></tr>
<tr valign="top"><td width="100"><b>ssh </b></td><td>Versão segura do <i>rsh</i></td></tr>
<tr valign="top"><td width="100"><b>nmap</b></td><td>Poderoso <i>port-scan</i>, para visualizarmos portas abertas num dado <i>host</i></td></tr>
<tr valign="top"><td width="100"><b>ifconfig</b></td><td>Visualizar os <i>ips</i> da nossa máquina, entre outras funções relacionadas com <i>ips</i></td></tr>
<tr valign="top"><td width="100"><b>ping</b></td><td>Pingar um determinado <i>host</i>, ou seja, enviar pacotes <i>icmp</i> para um determinado <i>host</i> e medir tempos de resposta, entre outras coisas</td></tr>
</tbody></table>
<table cols="2" style="width: 450px;"><tbody>
<tr><td colspan="2"><i><b>Comandos de Controlo de Processos</b></i></td></tr>
<tr><td><br /></td><td><br /></td></tr>
<tr valign="top"><td width="100"><b>kill </b></td><td>Mata um processo, como por exemplo <i>kill -kill 100</i> ou <i>kill -9 100</i> ou <i>kill -9 %1</i></td></tr>
<tr valign="top"><td width="100"><b>bg </b></td><td>Coloca um processo suspenso em <i>background</i></td></tr>
<tr valign="top"><td width="100"><b>fg </b></td><td>Ao contrário do comando <i>bg</i>, o <i>fg</i> traz de volta um processo ao <i>foreground</i></td></tr>
<tr valign="top"><td width="100"><b>jobs </b></td><td>Permite-nos visualizar <i>jobs</i> em execução, quando corremos uma aplicação em <i>background</i>, poderemos ver esse <i>job</i> com este comando, e termina-lo com um comando <i>kill -9 %1</i>, se for o <i>job</i> número 1, por exemplo</td></tr>
<tr valign="top"><td width="100"><b>top </b></td><td>Lista os processos que mais <i>cpu</i> usam, útil para verificar que processos estão a provocar um uso excessivo de memória, e quanta percentagem de <i>cpu</i> cada um usa em dado momento</td></tr>
<tr valign="top"><td width="100"><b>^y </b></td><td>Suspende o processo no próximo pedido de <i>input</i></td></tr>
<tr valign="top"><td width="100"><b>^z </b></td><td>Suspende o processo actual</td></tr>
</tbody></table>
<table cols="2" style="width: 450px;"><tbody>
<tr><td colspan="2"><i><b>Comandos de Informação de Estado</b></i></td></tr>
<tr><td><br /></td><td><br /></td></tr>
<tr valign="top"><td width="100"><b>clock </b></td><td>Define a hora do processador</td></tr>
<tr valign="top"><td width="100"><b>date </b></td><td>Exibe a data e hora</td></tr>
<tr valign="top"><td width="100"><b>df </b></td><td>Exibe um resumo do espaço livre em disco</td></tr>
<tr valign="top"><td width="100"><b>du </b></td><td>Exibe um resumo do uso do espaço em disco</td></tr>
<tr valign="top"><td width="100"><b>env </b></td><td>Exibe as variáveis de ambiente</td></tr>
<tr valign="top"><td width="100"><b>finger </b></td><td>Pesquisa informações de utilizadores</td></tr>
<tr valign="top"><td width="100"><b>history </b></td><td>Lista os 
últimos comandos usados, muito útil para lembrar também de que comandos 
foram usados para fazer determinada acção no passado ou o que foi feito 
em dada altura</td></tr>
<tr valign="top"><td width="100"><b>last </b></td><td>Indica o último <i>login</i> de utilizadores</td></tr>
<tr valign="top"><td width="100"><b>lpq </b></td><td>Examina a <i>spool queue</i></td></tr>
<tr valign="top"><td width="100"><b>manpath </b></td><td>Mostra a <i>path</i> de procura para as páginas do comando <i>man</i></td></tr>
<tr valign="top"><td width="100"><b>printenv </b></td><td>Imprime as variáveis de ambiente</td></tr>
<tr valign="top"><td width="100"><b>ps </b></td><td>Lista a lista de processos em execução, útil para saber o <i>pid</i> de um processo para o mandar abaixo com o comando <i>kill</i>, entre outras coisas</td></tr>
<tr valign="top"><td width="100"><b>pwd </b></td><td>Mostra-nos o caminho por inteiro da directoria em que nos encontramos em dado momento, ou seja a <i>pathname</i></td></tr>
<tr valign="top"><td width="100"><b>set </b></td><td>Define variáveis da sessão, ou seja, da <i>shell</i>, na <i>C shell</i>, na <i>bash</i> ou na <i>ksh</i></td></tr>
<tr valign="top"><td width="100"><b>spend </b></td><td>Lista os custos <i>ACITS UNIX</i> até à data</td></tr>
<tr valign="top"><td width="100"><b>time </b></td><td>Mede o tempo de execução de programas</td></tr>
<tr valign="top"><td width="100"><b>uptime </b></td><td>Diz-nos há quanto tempo o sistema está funcional, quando foi ligado e o seu <i>uptime</i></td></tr>
<tr valign="top"><td width="100"><b>w </b></td><td>Mostra-nos quem está no sistema ou que comando cada <i>job</i> está a executar</td></tr>
<tr valign="top"><td width="100"><b>who </b></td><td>Mostra-nos quem está logado no sistema</td></tr>
<tr valign="top"><td width="100"><b>whois </b></td><td>Serviço de 
directório de domínios da Internet, permite-nos saber informações sobre 
determinados domínios na Internet, quando um domínio foi registado, 
quando expira, etc</td></tr>
<tr valign="top"><td width="100"><b>whoami </b></td><td>Diz-nos quem é o dono da <i>shell</i></td></tr>
</tbody></table>
<table cols="2" style="width: 450px;"><tbody>
<tr><td colspan="2"><i><b>Comandos de Processamento de Texto</b></i></td></tr>
<tr><td><br /></td><td><br /></td></tr>
<tr valign="top"><td width="100"><b>abiword </b></td><td>Processador de Texto <i>Open Source</i></td></tr>
<tr valign="top"><td width="100"><b>addbib </b></td><td>Cria ou modifica bases de dados bibliográficas</td></tr>
<tr valign="top"><td width="100"><b>col </b></td><td>Reverte o filtro a <i>line feeds</i></td></tr>
<tr valign="top"><td width="100"><b>diction </b></td><td>Identifica sentenças com palavras</td></tr>
<tr valign="top"><td width="100"><b>diffmk </b></td><td>Marca diferenças entre ficheiros</td></tr>
<tr valign="top"><td width="100"><b>dvips </b></td><td>Converte ficheiros <i>TeX DVI</i> em ficheiros <i>PostScript</i></td></tr>
<tr valign="top"><td width="100"><b>explain </b></td><td>Explica frases encontradas pelo programa <i>diction</i></td></tr>
<tr valign="top"><td width="100"><b>grap </b></td><td>Preprocessador <i>pic</i> para desenhar gráficos, usado em tarefas elementares de análises de dados</td></tr>
<tr valign="top"><td width="100"><b>hyphen </b></td><td>Encontra palavras com hífenes</td></tr>
<tr valign="top"><td width="100"><b>ispell </b></td><td>Verifica a ortografia de forma interactiva</td></tr>
<tr valign="top"><td width="100"><b>latex </b></td><td>Formata texto em <i>LaTeX</i>, que é baseado no <i>TeX</i></td></tr>
<tr valign="top"><td width="100"><b>pdfelatex </b></td><td>Para documentos <i>LaTeX</i> em formato <i>pdf</i></td></tr>
<tr valign="top"><td width="100"><b>latex2html </b></td><td>Converter <i>LaTeX</i> para <i>html</i></td></tr>
<tr valign="top"><td width="100"><b>lookbib </b></td><td>Encontra referências bibliográficas</td></tr>
<tr valign="top"><td width="100"><b>macref </b></td><td>Cria uma referência cruzada listando ficheiros de macros <i>nroff/troff</i></td></tr>
<tr valign="top"><td width="100"><b>ndx </b></td><td>Cria uma página de indexação para um documento</td></tr>
<tr valign="top"><td width="100"><b>neqn </b></td><td>Formata matemáticas com <i>nroff</i></td></tr>
<tr valign="top"><td width="100"><b>nroff </b></td><td>Formata texto para exibição simples</td></tr>
<tr valign="top"><td width="100"><b>pic </b></td><td>Produz simples imagens para <i>troff input</i></td></tr>
<tr valign="top"><td width="100"><b>psdit </b></td><td>Filtra um <i>output</i> <i>troff</i> para a <i>Apple LaserWriter</i></td></tr>
<tr valign="top"><td width="100"><b>ptx </b></td><td>Cria uma indexação permutada mas não em <i>CCWF</i></td></tr>
<tr valign="top"><td width="100"><b>refer </b></td><td>Insere referências de bases de dados bibliográficas</td></tr>
<tr valign="top"><td width="100"><b>roffbib </b></td><td>Faz o <i>run off</i> de uma base de dados bibliográfica</td></tr>
<tr valign="top"><td width="100"><b>sortbib </b></td><td>Ordena uma base de dados bibliográfica</td></tr>
<tr valign="top"><td width="100"><b>spell </b></td><td>Encontra erros de ortografia</td></tr>
<tr valign="top"><td width="100"><b>style </b></td><td>Analisa as características superficiais de um documento</td></tr>
<tr valign="top"><td width="100"><b>tbl </b></td><td>Formata tabelas para <i>nroff/troff</i></td></tr>
<tr valign="top"><td width="100"><b>tex </b></td><td>Formata texto</td></tr>
<tr valign="top"><td width="100"><b>tpic </b></td><td>Converte ficheiros <i>pic source</i> em comandos <i>TeX</i></td></tr>
<tr valign="top"><td width="100"><b>wget </b></td><td>Permite-nos fazer o
 download completo de páginas web, com todos os ficheiros, de forma 
fácil e não interactiva, sem exigir por isso presença do utilizador, 
respeitando também o ficheiro <i>robots.txt</i></td></tr>
</tbody></table>
<table cols="2" style="width: 450px;"><tbody>
<tr><td colspan="2"><i><b>Web</b></i></td></tr>
<tr><td><br /></td><td><br /></td></tr>
<tr valign="top"><td width="100"><b>html2ps </b></td><td>Conversor de <i>html</i> para <i>ps</i></td></tr>
<tr valign="top"><td width="100"><b>latex2html </b></td><td>Conversor de <i>LaTeX</i> para <i>html</i></td></tr>
<tr valign="top"><td width="100"><b>lynx </b></td><td>Navegador <i>web</i> baseado em modo de texto, ou seja, é um <i>web browser</i> que nos permite abrir todo o tipo de páginas visualizando apenas os textos e <i>links</i>, não vendo assim as imagens, e sendo por isso bastante rápido, mas requere prática para ser manuseado</td></tr>
<tr valign="top"><td width="100"><b>netscape </b></td><td>Navegador <i>web</i> da <i>Netscape</i></td></tr>
<tr valign="top"><td width="100"><b>sitecopy </b></td><td>Aplicação que nos permite manter facil e remotamente <i>web sites</i></td></tr>
<tr valign="top"><td width="100"><b>weblint </b></td><td>Verificador de sintaxes e de estilos <i>html</i></td></tr>
</tbody></table>

