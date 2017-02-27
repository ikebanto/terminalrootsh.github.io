---
layout: post
title: "Dicas rápidas VI"
date: '2014-10-19T13:44:00.000-07:00'
description: "Dicas rápidas VI"
main-class: 'misc'
tags:
- Dicas
- Comandos
image: "http://2.bp.blogspot.com/-xAtPNrIAZmA/VDsh_jH6FUI/AAAAAAAAA2E/PFi8dPvlGH8/s72-c/new-logo-tr.png"
twitter_text: "Dicas rápidas VI"
introduction: "Dicas rápidas VI"
---
 
![Blog Linux](http://2.bp.blogspot.com/-xAtPNrIAZmA/VDsh_jH6FUI/AAAAAAAAA2E/PFi8dPvlGH8/s285/new-logo-tr.png "Blog Linux")
 
 
O editor de texto preferido de 9 entre cada 10 usuarios UNIX eh o vi. A sintaxe para executar o vi eh a seguinte: {% highlight bash %}
$ vi nome_do_arquivo 
{% endhighlight %}Uma vez carregado o vi, veja abaixo uma lista dos principais comandos:
Observacao:
Para passar para o modo comando pressione ESC.
Comandos basicos de insercao de texto: iInsere texto antes do cursoraInsere texto depois do cursorrInsere texto no início da linha onde se encontra o cursorAInsere texto no final da linha onde se encontra o cursoroAdiciona linha abaixo da linha atualOAdiciona linha acima da linha atual Ctrl + hApaga o ultimo caracter
Comandos basicos de movimentacao: Ctrl+fMove o cursor para a proxima telaCtrl+bMove o cursor para a tela anteriorHMove o cursor para a primeira linha da telaMMove o cursor para o meio da telaLMove o cursor para a ultima linha da telahMove o cursor um caracter a esquerdajMove o cursor para a proxima linhakMove o cursor para linha anteriorlMove o cursor um caracter a direitawMove o cursor para o inicio da proxima palavra (Ignora a pontuacao)WMove o cursor para o inicio da proxima palavra (Nao ignora a pontuacao)bMove o cursor para o inicio da palavra anterior (Ignora a pontuacao)BMove o cursor para o inicio da palavra anterior (Nao ignora a pontuacao0Move o cursor para o inicio da linha atual^Move o cursor para o primeiro caracter nao branco da linha atual$Move o cursor para o final da linha atualnGMove o cursor para a linha nGMove o cursor para a ultima linha do arquivo
Comandos basicos para localizar texto: /palavraBusca pela palavra ou caracter em todo o texto?palavraMove o cursor para a ocorrencia anterior da palavranRepete o ultimo comando / ou ?NRepete o ultimo comando / ou ? , na direcao reversaCtrl+gMostra o nome do arquivo, o numero da linha corrente e o total de linhas
Comandos basicos para alteracao de texto: xDeleta o caracter que esta sob o cursordwDeleta a palavra, da posicao atual do cursor ate o finalddDeleta a linha atualDDeleta a linha a partir da posicao atual do cursor ate o finalrxSubstitui o caracter sob o cursor pelo especificado em x(é opcional indicar o caracter)RxSubstitui a palavra sob o cursor pela palavra indicada em xuDesfaz a ultima modificacaoUDesfaz todas as modificacoes feitas na linha atualJUne a linha corrente a proximas:/palavra1/palavra2Substitui a primeira ocorrencia de "palavra1" por "palavra2"
Comandos para salvar o texto: :wqSalva o arquivo e sai do editor:w nome_do_arquivo Salva o arquivo corrente com o nome especificado:w! nome_do_arquivoSalva o arquivo corrente no arquivo especificado:qSai do editor:q!Sai do editor sem salvar as alteracoes realizadas
Caso voce nao goste do vi, experimente o ee (easy editor) que tambem eh muito bom.
Boa Sorte !!!
Se você possui alguma critica , duvida ou sugestão ,entre em contato pelo e-mail: edson.brandi@uol.com.br
 Via: http://www.primeirospassos.org/sessao3_4.html
