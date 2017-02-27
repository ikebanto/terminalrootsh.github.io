---
layout: post
title: Informações sobre o Cabeçalho do Shell (how-to)
date: '2014-09-21T11:23:00.000-07:00'
description: Informações sobre o Cabeçalho do Shell (how-to)
main-class: 'bash'
tags:
- Shell Script
image: http://4.bp.blogspot.com/--YWY6B8OBdA/VB8WUl2-p1I/AAAAAAAAAyo/RZ1oOzxLmiE/s72-c/shell.jpg
twitter_text: Informações sobre o Cabeçalho do Shell (how-to)
introduction: Informações sobre o Cabeçalho do Shell (how-to)
---
![Blog Linux](http://4.bp.blogspot.com/--YWY6B8OBdA/VB8WUl2-p1I/AAAAAAAAAyo/RZ1oOzxLmiE/s320/shell.jpg "Blog Linux")
O #! linha diz ao kernel (especificamente, a implementação do execve chamada de sistema) que este programa é escrito em uma linguagem interpretada; O caminho absoluto que segue identifica o intérprete. Programas compilados para código de máquina começar com uma seqüência de byte diferente - na maioria dos Unixes modernos, 7f 45 4c 46 (^ ELF?) que os identifica como tal.
shebang o caracter!
Você pode colocar um caminho absoluto para qualquer programa que você quer após o #! , enquanto que o programa em si não é um #! script. O kernel reescreve uma invocação
./script arg1 arg2 arg3 ... 
onde ./script começa com, digamos, #! /usr/bin/perl #! /usr/bin/perl , como se a linha de comando tinha sido realmente
/usr/bin/perl ./script arg1 arg2 arg3 
Ou, como você viu, você pode usar #! /bin/sh #! /bin/sh para escrever um roteiro destinado a ser interpretado por sh .
O #! linha só é processado se você chamar diretamente o script ( ./script na linha de comando); O arquivo também deve ser executável ( chmod +x script ). Se você faz sh ./script a #! linha não é necessário (e será ignorado se houver), eo arquivo não precisa ser executável. A ponto de o recurso é para que você possa invocar diretamente programas em linguagem interpretada sem ter que saber o idioma que estão escritos no (Do. grep '^#!' /usr/bin/* - você vai descobrir que um grande número programas de ações estão de fato usando este recurso.)
Aqui estão algumas regras para usar esse recurso de forma segura:
 O #! deve ser os dois primeiros caracteres no arquivo.
 O caminho após #! deve ser um caminho absoluto (começa com / ), que não contém qualquer espaço, tab, ou caracteres de nova linha.
 É bom estilo, mas não obrigatório, para colocar um espaço entre o #! ea / . Não coloque mais do que um espaço lá.
 Você não pode colocar variáveis ​​shell no #! linha, não será ampliada.
 Você pode colocar um argumento de linha de comando após o caminho absoluto, separado por um único espaço. Como o caminho absoluto, esse argumento não pode conter espaços, tabulações ou caracteres de nova linha. Às vezes, isso é necessário para fazer as coisas para trabalhar ( #! /usr/bin/awk -f ), às vezes é apenas útil ( #! /usr/bin/perl -Tw ). Infelizmente, você não pode colocar dois ou mais argumentos após o caminho absoluto.
 Algumas pessoas vão dizer que você use #! /usr/bin/env interpreter #! /usr/bin/env interpreter em vez de #! /absolute/path/to/interpreter #! /absolute/path/to/interpreter . não faça isso. Faz o comportamento do seu programa dependem do $PATH variável do usuário que chama o script. E não todos os sistemas têm env em primeiro lugar.
 Programas que precisam setuid ou setgid privilégios não podem usar #! ; eles têm que ser compilado para código de máquina. (Se você não sabe o que setuid é, não se preocupe com isso.) 
Quanto csh , ele se relaciona com sh. Tem (ou melhor, tinha, implementações modernas de sh ter pego) uma série de vantagens sobre sh para o uso interativo, mas usá-lo (ou seu descendente tcsh ) para scripting é quase sempre um erro . Se você é novo para shell script em geral, eu recomendo fortemente que você ignorá-lo e se concentrar em sh . Se você estiver usando uma csh parente como seu shell, mude para bash ou zsh , de modo que a linguagem de comando interativo será o mesmo que a linguagem de script que você está aprendendo. 
As versões recentes do Linux que permitem que o intérprete especificado para ser um script. É uma prática comum para omitir o espaço após o #! ; nenhum comentário sobre se isso é bom estilo. Veja esta pergunta e minha resposta para uma discussão sobre os prós e contras do #!/usr/bin/env  
 
KeithThompson Estou com a impressão de Linux é a única variante Unix comum que permite ao intérprete para ser um script, por isso ainda não é algo em que confiar. Desde que eu escrevi isso, eu tenho me encontrado uma situação onde #!/usr/bin/env era a coisa certa, mas continua a ser a minha opinião que é quase sempre uma má idéia 
Isso define o shell (interpretador de comandos) que você está usando para a interpretação / execução de seu script. Cada camada é um pouco diferente na forma como ele interage com o usuário e executa scripts (programas).
Quando você digita um comando no prompt do Unix, você está interagindo com o shell.
Por exemplo, #!/bin/csh refere-se ao C-shell, /bin/tcsh o t-shell, /bin/bash o shell bash, etc
Você pode dizer que o shell interativo você estiver usando o
 echo $SHELL 
de comando, ou alternativamente
 env | grep -i shell 
Você pode mudar seu shell de comandos com o chsh comando.
Este conceito estende-se a outros scripts também. Por exemplo, se você programar em Python você colocaria
 #!/usr/bin/python 
na parte superior do seu programa Python 
O valor de $SHELL não significa necessariamente dizer que você está executando no momento; normalmente diz-lhe o shell padrão. tcsh define $version e $tcsh define $BASH_VERSIONa
/bin/sh é um link para o shell padrão do usuário, que na maioria das  vezes é o bash ( /bin/bash ), mas também poderia ser outro...
Vc deve colocar #! /bin/bash no início do script justamente para que o  script "saiba" qual shell irá executá-lo, pois nem todos os shells  reconhecem os mesmos comandos.
Cabeçalho Padrão por Aurélio:
#!/bin/bash
#
# nome_completo.sh - Busca o nome completo de um usuário no Unix
#
# Site      : http://programas.com.br/nomecompleto/
# Autor     : João Silva 
# Manutenção: Maria Teixeira 
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
Outro exemplo de cabeçalho:
#!/bin/sh
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
Via: http://stackoverflow.com | http://www.hardware.com.br
