---
layout: post
title: "Financial Open Software"
date: '2012-07-02T14:45:00.000-07:00'
description: "Financial Open Software"
main-class: 'gnu'
tags:
- Software Livre
- Open Source
- GNU
- PHP
image: "http://2.bp.blogspot.com/-B_hnseQ66tY/VeOZ_6QtUQI/AAAAAAAAEwc/1ljixL5XcCQ/s72-c/financial-open-software.png"
twitter_text: "Financial Open Software"
introduction: "Financial Open Software"
---
![Blog Linux](http://2.bp.blogspot.com/-B_hnseQ66tY/VeOZ_6QtUQI/AAAAAAAAEwc/1ljixL5XcCQ/s640/financial-open-software.png "Blog Linux")
Olá galera, agora vou dar uma pequena contribuição de software, ou seja, licensiado pela Creative Commons, vocês podem melhorar/modificar esse software ou somente usá-lo.Escrito em PHP com banco MySQL, porém como é PDO, o banco também pode ser alterado.Segue um passo a passo para instalação, lógico, além dos pacotes que o acompanham, descompacte-o na pasta www do Apache, e siga os passos abaixo.
Financial Open Sotware
Software para Gerenciamento de Contas Pessoais
Clique aqui para fazer o Download do Financial Software  
1-Crie um Banco de Dados ou importe os dados para um banco já criado o arquivo financial.sql localizado na pasta temp.
2-Edite o arquivo auth.class.php localizado na pasta classes com o nome do banco de dados, usuário e senha do mysql, verifique imagem.
![Blog Linux](http://4.bp.blogspot.com/-iQfqUq-oGok/T_IRvf7WYKI/AAAAAAAAAZ0/x4ecbEg4uwI/s640/1.png "Blog Linux")
3-Caso haja algum erro aparecerá a mensagem "Sistema Indisponível, consulte o administrador para mais informações.", para saber qual erro, basta consultar o arquivo erros.txt localizado na pasta temp, no arquivo há a mensagem de erro, o arquivo, linha, dia, hora e IP em forma decrescente do erro ocorrido.
{% highlight bash %}
$ vi /var/www/financial/temp/erros.txt
{% endhighlight %}
4-Tudo ocorrendo dentro dos conformes, insira o usuario(e-mail) e a senha que por padrão são, usuario: financial@financial.com; senha: financial.Depois você deve criar um novo usuario/email, conforme imagem abaixo, lembrando que é necessário criar uma nova conta Nível:Admin, que pode gerenciar demais usuários, e depois exclua o padrao(financial@financial.com).
5-No item acima é necessário você pôr um e-mail verdadeiro para que a rotina de envio de relatórios por e-mail funcione, depois disso você deve configurar o arquivo onlymail.class.php que fica dentro da pasta classes, configurando o envio alterando o SMTP, PORTA, e-mail, senha do seu email, se for do GMail o mesmo já está pré-configurado,(Obs.: esse e-mail é o que enviará as mensagens e não o que receberá, o que receberá é o seu prório nome de login no sistema, ou seja, você pode criar uma conta de e-mail só pra isso) veja imagem.
6-Para lançar um Crédito clique em "Crédito/Débito" e depois em "Lançar Crédito", então coloque a Descrição, Tipo e Valor e clique em enviar dados conforme imagens abaixo, para Débito o procedimento é o mesmo, porém clique em "Lançar Débito" na rotina de "Crédito/Débito".
7-Para exibição de Relatório, você pode utilizar os filtros: Mês, Operação, Tipo e Datas, lembrando que se você preencher só uma data inicial, a final será a data atual, se você não preencher nada, será exibido tudo já lançado até o momento, nesse relatŕorio ja'contém os dados de saldo no cabeçalho, mas não fará cálculo de datas, se quiser o Saldo de Datas, utilize o Campo "Saldo por mês ou data" que informará o saldo entre as datas selecionadas.
8-Com o Financial você também pode pesquisar por alguma Descrição que você pôs, basta utilizar o Item Pesquisar, conforme imagem abaixo, a "Ajuda/Sobre" poderá sofrer alterações com o tempo, então me envie um e-mail: terminalroot.com.br@gmail.com.
Desfrute! 
