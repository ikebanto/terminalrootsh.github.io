---
layout: post
title: Informações sobre o Cabeçalho do Shell (how-to)
date: '2014-09-21T11:23:00.000-07:00'
description: Informações sobre o Cabeçalho do Shell (how-to)
main-class: 'bash'
color: '#c2003a'
author: Marcos Oliveira
tags:
- Shell Script
modified_time: '2014-09-21T11:23:00.352-07:00'
thumbnail: http://4.bp.blogspot.com/--YWY6B8OBdA/VB8WUl2-p1I/AAAAAAAAAyo/RZ1oOzxLmiE/s72-c/shell.jpg
twitter_text: Informações sobre o Cabeçalho do Shell (how-to)
introduction: Informações sobre o Cabeçalho do Shell (how-to)
---


<div class="separator" style="clear: both; text-align: center;"><a href="http://4.bp.blogspot.com/--YWY6B8OBdA/VB8WUl2-p1I/AAAAAAAAAyo/RZ1oOzxLmiE/s1600/shell.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/--YWY6B8OBdA/VB8WUl2-p1I/AAAAAAAAAyo/RZ1oOzxLmiE/s320/shell.jpg" height="200" width="168" /></a></div><b><span style="font-size: small;">O <span style="color: blue;">#!</span> linha diz ao kernel (especificamente, a implementação do <span style="color: blue;">execve</span> chamada de sistema) que este programa é escrito em uma linguagem interpretada; O caminho absoluto que segue identifica o intérprete. Programas compilados para código de máquina começar com uma seqüência de byte diferente - na maioria dos <span style="color: blue;">Unixes</span> modernos, <span style="color: blue;">7f 45 4c 46 (^ ELF?)</span> que os identifica como tal.

<a href="http://en.wikipedia.org/wiki/Shebang_%28Unix%29" target="_blank">shebang</a> o caracter!

Você pode colocar um caminho absoluto para qualquer programa que você quer após o <span style="color: blue;">#!</span> , enquanto que o programa em si não é um <span style="color: blue;">#!</span> script. O kernel reescreve uma invocação

<span style="color: blue;">./script arg1 arg2 arg3 ... </span>
onde <span style="color: blue;">./script</span> começa com, digamos, <span style="color: blue;"><span style="background-color: white;">#! /usr/bin/perl #! /usr/bin/perl</span></span> , como se a linha de comando tinha sido realmente

<span style="color: blue;">/usr/bin/perl ./script arg1 arg2 arg3 </span>
Ou, como você viu, você pode usar <span style="color: blue;">#! /bin/sh #! /bin/sh</span> para escrever um roteiro destinado a ser interpretado por <span style="color: blue;">sh</span> .

O <span style="color: blue;">#!</span> linha só é processado se você chamar diretamente o script (<span style="color: blue;"> ./script</span> na linha de comando); O arquivo também deve ser executável (<span style="color: blue;"> chmod +x script </span>). Se você faz sh <span style="color: blue;">./script</span> a <span style="color: blue;">#!</span> linha não é necessário (e será ignorado se houver), eo arquivo não precisa ser executável. A ponto de o recurso é para que você possa invocar diretamente programas em linguagem interpretada sem ter que saber o idioma que estão escritos no (Do. <span style="color: blue;">grep '^#!' /usr/bin/*</span> - você vai descobrir que um grande número programas de ações estão de fato usando este recurso.)

<span style="font-size: x-large;">Aqui estão algumas regras para usar esse recurso de forma segura:</span>

 O <span style="color: blue;">#!</span> deve ser os dois primeiros caracteres no arquivo.
 O caminho após <span style="color: blue;">#! </span>deve ser um caminho absoluto (começa com <span style="color: blue;">/ </span>), que não contém qualquer espaço, tab, ou caracteres de nova linha.
 É bom estilo, mas não obrigatório, para colocar um espaço entre o <span style="color: blue;">#!</span> ea <span style="color: blue;">/</span> . Não coloque mais do que um espaço lá.
 Você não pode colocar variáveis ​​shell no <span style="color: blue;">#!</span> linha, não será ampliada.
 Você pode colocar um argumento de linha de comando após o caminho absoluto, separado por um único espaço. Como o caminho absoluto, esse argumento não pode conter espaços, tabulações ou caracteres de nova linha. Às vezes, isso é necessário para fazer as coisas para trabalhar ( <span style="color: blue;">#! /usr/bin/awk -f </span>), às vezes é apenas útil ( <span style="color: blue;">#! /usr/bin/perl -Tw</span> ). Infelizmente, você não pode colocar dois ou mais argumentos após o caminho absoluto.
 Algumas pessoas vão dizer que você use <span style="color: blue;">#!</span> /usr/bin/env interpreter <span style="color: blue;">#!</span> /usr/bin/env interpreter em vez de <span style="color: blue;">#!</span> /absolute/path/to/interpreter <span style="color: blue;">#! </span>/absolute/path/to/interpreter . não faça isso. Faz o comportamento do seu programa dependem do <span style="color: blue;">$PATH</span> variável do usuário que chama o script. <span style="font-size: large;">E não todos os sistemas têm <span style="color: blue;">env</span> em primeiro lugar.</span>
 Programas que precisam <span style="color: blue;">setuid</span> ou <span style="color: blue;">setgid</span> privilégios não podem usar <span style="color: blue;">#!</span> ; eles têm que ser compilado para código de máquina. (Se você não sabe o que setuid é, não se preocupe com isso.) 

Quanto <span style="color: blue;">csh</span> , ele se relaciona com sh. Tem (ou melhor, tinha, implementações modernas de sh ter pego) uma série de vantagens sobre <span style="color: blue;">sh</span> para o uso interativo, mas usá-lo (ou seu descendente <span style="color: blue;">tcsh</span> ) para scripting é quase sempre um erro . Se você é novo para shell script em geral, eu recomendo fortemente que você ignorá-lo e se concentrar em <span style="color: blue;">sh</span> . Se você estiver usando uma csh parente como seu shell, mude para bash ou <span style="color: blue;">zsh</span> , de modo que a linguagem de comando interativo será o mesmo que a linguagem de script que você está aprendendo. </span>

<span style="font-size: small;">As versões recentes do Linux que permitem que o intérprete especificado para ser um script. É uma prática comum para omitir o espaço após o #! ; nenhum comentário sobre se isso é bom estilo. Veja esta pergunta e minha resposta para uma discussão sobre os prós e contras do #!/usr/bin/env  
 
<span style="color: blue;">KeithThompson</span> Estou com a impressão de <span style="color: blue;">Linux</span> é a única variante <span style="color: blue;">Unix</span> comum que permite ao intérprete para ser um script, por isso ainda não é algo em que confiar. Desde que eu escrevi isso, eu tenho me encontrado uma situação onde <span style="color: blue;">#!/usr/bin/env</span> <i><u>era a coisa certa</u></i>, <i><u>mas continua a ser a minha opinião que é quase sempre uma má idéia</u></i></span> 
Isso define o shell (interpretador de comandos) que você está usando para a interpretação <span style="color: blue;">/</span> execução de seu script. Cada camada é um pouco diferente na forma como ele interage com o usuário e executa scripts (programas).

Quando você digita um comando no prompt do <span style="color: blue;">Unix</span>, você está interagindo com o <span style="color: blue;">shell</span>.

Por exemplo, <span style="color: blue;">#!/bin/csh</span> refere-se ao <span style="color: blue;">C-shell, /bin/tcsh o t-shell, /bin/bash</span> o <span style="color: blue;">shell bash</span>, etc

Você pode dizer que o shell interativo você estiver usando o

 <span style="color: blue;">echo $SHELL </span>

de comando, ou alternativamente

 <span style="color: blue;">env | grep -i shell </span>

<span style="font-size: large;">Você pode mudar seu shell de comandos com o <span style="color: blue;">chsh</span> comando.</span>


Este conceito estende-se a outros scripts também. Por exemplo, se você programar em Python você colocaria

 <span style="color: blue;">#!/usr/bin/python </span>
na parte superior do seu programa <span style="color: blue;">Python </span>

O valor de <span style="color: blue;">$SHELL</span> não significa necessariamente dizer que você está executando no momento; normalmente diz-lhe o shell padrão. tcsh define <span style="color: blue;">$version</span> e <span style="color: blue;">$tcsh</span> define <span style="color: blue;">$BASH_VERSION</span>a

<span style="color: blue;">/bin/sh</span> é um link para o shell padrão do usuário, que na maioria das  vezes é o bash ( <span style="color: blue;">/bin/bash</span> ), mas também poderia ser outro...
Vc deve colocar <span style="color: blue;">#! /bin/bash</span> no início do script justamente para que o  script "saiba" qual shell irá executá-lo, pois nem todos os <span style="color: blue;">shells</span>  reconhecem os mesmos comandos.

<span style="font-size: small;">Cabeçalho Padrão por Aurélio:</span>
<span style="font-size: small;">
<div class="adp"></span>
</b>
<pre><b>#!/bin/bash
#
# nome_completo.sh - Busca o nome completo de um usuário no Unix
#
# Site      : http://programas.com.br/nomecompleto/
# Autor     : João Silva <joao@email.com.br>
# Manutenção: Maria Teixeira <maria@email.com.br>
#
#  -------------------------------------------------------------
#   Este programa recebe como parâmetro o login de um usuário e
#   procura em várias bases qual o seu nome completo, retornando
#   o resultado na saída padrão (STDOUT).
#
#   Exemplos:
#      $ ./nome_completo.sh jose
#      José Moreira
#      $ ./nome_completo.sh joseee
#      $
#
#   A ordem de procura do nome completo é seqüencial:
#
#      1. Arquivo /etc/passwd
#      2. Arquivo $HOME/.plan
#      3. Base de Usuários LDAP
#      4. Base de Usuários MySQL
#
#   Respeitando a ordem, o primeiro resultado encontrado será o
#   retornado.
#  -------------------------------------------------------------
#
#
# Histórico:
#
#    v1.0 1999-05-18, João Silva:
#       - Versão inicial procurando no /etc/passwd
#    v1.1 1999-08-02, João Silva:
#       - Adicionada pesquisa no $HOME/.plan
#       - Corrigido bug com nomes acentuados
#    v2.0 2000-04-28, Mário Rocha:
#       - Corrigidos 2.534 bugs (O João não sabe programar!)
#       - Adicionado meu nome em vários lugares hehehe
#    v2.1 2000-04-30, José Moreira:
#       - Desfeitas as "correções" do Mário (ele quebrou o programa)
#       - Retirada a frase "Mário é o Maior" de várias partes
#    v2.2 2000-05-02, José Moreira:
#       - Adicionado suporte a LDAP (que trabalheira!)
#       - Aceita nomes de usuários EM MAIÚSCULAS
#       - Retirado suporte a acentuação (estraga meu terminal)
#    v2.3 2000-05-03, José Moreira:
#       - Arrumado o suporte a LDAP (agora vai funcionar)
#    v2.4 2000-05-03, José Moreira:
#       - Arrumado o suporte a LDAP (agora é pra valer)
#    v2.5 2000-05-04, José Moreira:
#       - Retirado o suporte a LDAP (eu odeio LDAP!)
#    v3.0 2000-05-10, Maria Teixeira:
#       - Programa reescrito do zero
#       - Adicionado suporte a LDAP (funcional)
#       - Adicionado suporte a MySQL
#       - Restaurado suporte a acentuação
#    v3.1 2003-05-10, Maria Teixeira:
#       - Adicionado este comentário para comemorar 3 anos sem
#         alterações :)
#
#
# Licença: GPL.
#

</div></b></pre><b><span style="font-size: small;">

Outro exemplo de cabeçalho:</span>
<span style="font-size: small;"><div class="adp"></span>
<span style="font-size: small;">#!/bin/sh
#
# versao 0.1
#
# NOME
# backup_logico.sh
#
# DESCRICAO
# Efetua o backup completo do banco de dados utilizando a ferramenta expdp.
#
# NOTA
# Um log em /var/log/$SCRIPT.log e gerado a cada execucao deste script.
#
#
# MODIFICADO_POR (DD/MM/YYYY)
# marcos.braga 28/09/2009 - Criada funcao purgeadrci, responsavel por apagar os
# arquivos de trace.
# marcos.braga 24/09/2009 - Criada funcao eraser. Criada funcao clear_old_backup.
# Criada funcao log. Adicionado comentarios para as
# variaveis utilizadas.
# marcos.braga 21/09/2009 - Primeira versao.
#
</div>
</span>

<span style="color: #999999;"><span style="font-size: x-small;"><i>Via: http://stackoverflow.com | http://www.hardware.com.br</i></span></span></b>


