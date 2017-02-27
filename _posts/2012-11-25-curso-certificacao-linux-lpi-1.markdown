---
layout: post
title: 'Curso Certificação Linux LPI-1: Trabalhando com Permissões'
date: '2012-11-25T15:42:00.000-08:00'
description: 'Curso Certificação Linux LPI-1: Trabalhando com Permissões'
main-class: 'linux'
tags:
- Linux
- LPI
image: http://1.bp.blogspot.com/-sQ8f9WpJBhk/ULKrax2dFDI/AAAAAAAAAxE/dNGNyD5UNsw/s72-c/15659.gif
twitter_text: 'Curso Certificação Linux LPI-1: Trabalhando com Permissões'
introduction: 'Curso Certificação Linux LPI-1: Trabalhando com Permissões'
---
![Blog Linux](http://1.bp.blogspot.com/-sQ8f9WpJBhk/ULKrax2dFDI/AAAAAAAAAxE/dNGNyD5UNsw/s320/15659.gif "Blog Linux")
Cada arquivo no Linux tem o definido controle de acesso.Este controle é definidopor três classes:
-Permissões de usuário: Dono do arquivo(quem o criou).
-Permissões de grupo: grupo que ao qual ele pertence.
-Permissões de outros usuários: outros(não dono e outro grupo).
E para cada classe há 3 tipos de acesso:
-leitura(r)
-escrita(w)
-execução(x)
  
![Blog Linux](http://1.bp.blogspot.com/-LffPZ8DGQrU/ULKsHgku0XI/AAAAAAAAAxM/7-kLl7NLYmI/s320/1.png "Blog Linux")
![Blog Linux](http://1.bp.blogspot.com/-UhiyzbIHdY0/ULKsIX7zycI/AAAAAAAAAxU/I2-8M4TgPu4/s320/2.png "Blog Linux")
![Blog Linux](http://3.bp.blogspot.com/-hjP89SoFkBs/ULKsJS01g1I/AAAAAAAAAxc/-XjQCknc1EQ/s320/3.png "Blog Linux")
Bits especiais.
Os 3 primeiros bits da esquerda para direita são bits de atributos especiais:
-SUID (Set User ID) - afeta somente arquivos executáveis
-SGID (Set Group ID) - afeta execução de programas do grupo do dono.
-Sticky (Stick Bit) - permance na memória mesmo depois de terminado(Colado na memória).
![Blog Linux](http://1.bp.blogspot.com/-noAltA5nrNo/ULKsKDt-0aI/AAAAAAAAAxk/H5g2TPRKMaw/s320/4.png "Blog Linux")
 
![Blog Linux](http://3.bp.blogspot.com/-Qwwax0HuxPw/ULKqPOvicoI/AAAAAAAAAv8/WlCwqS-5jLI/s320/5.png "Blog Linux")
![Blog Linux](http://4.bp.blogspot.com/-YCsr5qK08HY/ULKqUNivtqI/AAAAAAAAAwI/czYE_RtV7QQ/s320/6.png "Blog Linux")
Como os bits de permissão especiais são utilizados com pouca frequência, e sob condições especiais, eles são representados pela letra (s) no lugar de (x) de execução para os bits SUID e SGID nas classes de Dono do arquivo e Grupo, e (t) no lugar de (x) para bit sticky na classe de Outros.
![Blog Linux](http://2.bp.blogspot.com/-Oo9_leUfJpY/ULKqae8AHHI/AAAAAAAAAwU/rDYzV7vck1E/s320/7.png "Blog Linux")
Quando novos arquivos são criados no sistema, eles são criados com permissões definidas gravadas no perfil de cada usuário e configuradas pelo comando umask.
O comando umask mostra a máscara das permissões quando os arquivos são criados e aceira como argumento um número de 3 dígitos para configurar as permissões.
No Linux, as permissões padrão para criação de:
-arquivos = 666 (rw-rw-rw).
-diretórios = 777 (drwxrwxrwx).
Depois de definida a máscara de criação dos arquivos, ela deverá ser subtraída das permissões padrão, exemplo:
{% highlight bash %}
$ umask 27
{% endhighlight %}
O número 27 deverá ser lido como 027, e define od bits da máscara como:
-000 para Dono do arquivo.
-010 para Grupo
-111 para Outros.
O comando chmod
chmod (abreviação de change mode, em português: alterar modo) é um comando do Unix usado para alterar permissões de arquivos e diretórios (pastas). Sua sintaxe é a seguinte:
{% highlight bash %}
$ chmod [opções] modo[,modo] arquivo1 [arquivo2 ...]
{% endhighlight %}
Para a representação das permissões através de letras, você poderá utilizar:
![Blog Linux](http://4.bp.blogspot.com/-WEKSQY-zbPA/ULKqqahuoBI/AAAAAAAAAws/qefgRW_qbFU/s320/9.png "Blog Linux")
Exemplo:
![Blog Linux](http://4.bp.blogspot.com/-Sc5bmhB55uY/ULKqvq2NwCI/AAAAAAAAAw4/cnm0JKI85Io/s320/10.png "Blog Linux")
O comando chown
O comando chown da shell de um sistema operacional do tipo Unix (como é o caso o GNU/Linux) é usado para alterar o dono de um determinado arquivo.Uso:
chown [opções] usuário arquivo
Exemplos:
{% highlight bash %}
# chown root /var/run/httpd.pid
# chown marcos:linux strace.log
# chown nobody:nogroup /tmp /var/tmp
# chown :512 /home
# chown -R usuario:grupo
{% endhighlight %}
Os comandos chattr, lsattr e ln
chattr
Esse comando modifica os atributos de arquivos/diretórios:
chattr [opção] [atributo] [arquivo/diretório]
lsattr
Comando que lista os atributos atribuídos a um arquivo/diretório:
lsattr [opção] [arquivo/diretório]
O comando ln
O comando ln permite criar links. Existem dois tipos de links suportados pelo Linux, os hard links(links físicos) e os links simbólicos. Os links simbólicos têm uma função parecida com os atalhos do Windows, eles apontam para um arquivo, mas se o arquivo é movido para outro diretório o link fica quebrado. Os hard links(links físicos) são semelhantes aos atalhos do OS/2 da IBM, eles são mais intimamente ligados ao arquivo e são alterados junto com ele. Se o arquivo muda de lugar, o link é automaticamente atualizado.
O comando ln dado sem argumentos cria um hard link, como em:
{% highlight bash %}
$ ln /home/marcos/arquivo.txt arquivo
{% endhighlight %}
Onde será criado um link chamado "arquivo" no diretório corrente, que apontará para o arquivo.txt dentro do diretório /home/marcos
Para criar um link simbólico, basta acrescentar o argumento "-s", como em:
{% highlight bash %}
$ ln -s /home/marcos/arquivo.txt arquivo
{% endhighlight %}
{% highlight bash %}
 -s : Cria um link simbólico. O padrão do comando ln são links físicos.
 -f : Força a criação de um link mesmo que este já exista.
 -i : Exibe número de identificação.
{% endhighlight %}
