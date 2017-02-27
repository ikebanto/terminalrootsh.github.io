---
layout: post
title: "Instale as Funções Terminal Root no seu terminal"
date: '2015-07-15T17:11:00.001-07:00'
description: "Instale as Funções Terminal Root no seu terminal"
main-class: 'linux'
tags:
- Linux
- Shell Script
- AWK
- GNU
- Terminal
- terminalroot
- Comandos
- SED
image: "http://3.bp.blogspot.com/-P3GE6iioVF8/Vab0oZJjpII/AAAAAAAABfM/15nOMRtSfiI/s72-c/funcoesterminalroot.gif"
twitter_text: "Instale as Funções Terminal Root no seu terminal"
introduction: "Instale as Funções Terminal Root no seu terminal"
---
![Blog Linux](http://3.bp.blogspot.com/-P3GE6iioVF8/Vab0oZJjpII/AAAAAAAABfM/15nOMRtSfiI/s1600/funcoesterminalroot.gif "Blog Linux")
Tenha mais prática no seu Terminal! Instale as funções bash terminalroot.
 
Para instalá-las, é simples:
1 - Baixe o instalador:
$ wget https://raw.githubusercontent.com/terminalrootsh/terminalroot/master/terminalroot.sh
2 - Dê permissão de execução
$ chmod +x terminalroot.sh
3 - Rode o arquivo:
$ ./terminalroot.sh
4 - Abra um novo terminal e chame qual você deseja, exemplo:
$ terminalroot
$ cep2rua av paulista sp
$ cep 41035635
Pronto! Se quiser vc pode verificar cada uma função, analisar o código e até modificá-las. Leia o cabeçalho de cada uma delas para ter mais noção de como elas funcionam.
Créditos especias para a função terminaroot:{% highlight bash %}
--------------------------------------
terminalroot
Descrição: Gerencia as Funções Terminal Root (terminalroot)
Uso: terminalroot [OPCOES]
Opções: 
     -a ou --atualizar (efetua atualização das Funções terminalroot terminalroot)
     -v ou --verfuncoes (Ver todas as funções disponíveis)
     -d ou --deletar (remove totalmente as terminalroot do seu computador)
     -h ou --help (exibe ajuda)
Exemplo: terminalroot --atualizar
Autor: Marcos da B. M. Oliveira , www.terminalroot.com.br
Desde: Seg 22 Set 2014 22:10:39 BRT 
Versão: 1
Licença: GPL
--------------------------------------
{% endhighlight %}
