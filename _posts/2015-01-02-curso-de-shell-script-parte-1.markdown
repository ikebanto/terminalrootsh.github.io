---
layout: post
title: Curso de Shell Script parte 1
date: '2015-01-02T03:54:00.000-08:00'
description: Curso de Shell Script parte 1
main-class: 'bash'
tags:
- Shell Script
image: http://2.bp.blogspot.com/-cYx3LMXO5Yc/VKaGxVIInNI/AAAAAAAABHk/zrxjpxV7Xo8/s72-c/icon175x175.png
twitter_text: Curso de Shell Script parte 1
introduction: Curso de Shell Script parte 1
---
![Blog Linux](http://2.bp.blogspot.com/-cYx3LMXO5Yc/VKaGxVIInNI/AAAAAAAABHk/zrxjpxV7Xo8/s1600/icon175x175.png "Blog Linux")
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
