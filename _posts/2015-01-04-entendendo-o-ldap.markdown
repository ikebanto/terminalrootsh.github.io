---
layout: post
title: "Entendendo o LDAP"
date: '2015-01-04T12:52:00.003-08:00'
description: "Entendendo o LDAP"
main-class: 'linux'
tags:
- Linux
- Servidores
- GNU
- Redes
image: "http://4.bp.blogspot.com/-R89lvThWyTg/TwMG9YGRKqI/AAAAAAAAAUc/yYxtvrIaP2s/s72-c/architecture.png"
twitter_text: "Entendendo o LDAP"
introduction: "Entendendo o LDAP"
---
![Blog Linux](http://4.bp.blogspot.com/-R89lvThWyTg/TwMG9YGRKqI/AAAAAAAAAUc/yYxtvrIaP2s/s320/architecture.png "Blog Linux")
Lightweight Directory Access Protocol. Este é um protocolo de rede  que roda sobre o TCP/IP que permite organizar os recursos de rede de  forma hierárquica, como uma árvore de diretório, onde temos  primeiramente o diretório raiz, em seguida a rede da empresa, o  departamento e por fim o computador do funcionário e os recursos de rede  (arquivos, impressoras, etc.) compartilhados por ele. A árvore de  diretório pode ser criada de acordo com a necessidade.
 Uma das principais vantagens do LDAP é a facilidade em localizar  informações e arquivos disponibilizados. Pesquisando pelo sobrenome de  um funcionário é possível localizar dados sobre ele, como telefone,  departamento onde trabalha, projetos em que está envolvido e outras  informações incluídas no sistema, além de arquivos criados por ele ou  que lhe façam referência. Cada funcionário pode ter uma conta de acesso  no servidor LDAP, para que possa cadastrar informações sobre sí e  compartilhar arquivos.
 O LDAP oferece uma grande escalabilidade. É possível replicar  servidores (para backup ou balanceamento de carga) e incluir novos  servidores de uma forma hierárquica, interligando departamentos e  filiais de uma grande multinacional por exemplo. A organização dos  servidores neste caso é similar ao DNS: é especificado um servidor raiz e  a partir daí é possível ter vários níveis de sub-servidores, além de  mirrors do servidor principal.
 O LDAP pode ser usado em qualquer tipo de rede TCP/IP e é um padrão  aberto, permitindo que existam produtos para várias plataformas. Uma das  suítes mais usadas é o OpenLDAP (GPL), que pode ser baixado no: http://www.openldap.org
 Uma vez instalado, o OpenLDAP pode ser configurado através do arquivo sldap.conf, encontrado no diretório /etc. O servidor é o daemon sladap e o cliente o ldapsearch, que é originalmente um utilitário de modo texto mas que pode trabalhar em conjunto com vários front-ends gráficos.
 O OpenLDAP pode ser usado em conjunto com vários clientes comerciais e  permite estabelecer vários níveis de permissões e controle de acesso  para os dados compartilhados, além de suportar encriptação.
 Note que embora seja possível ter acesso à base de dados remotamente,  o LDAP não é um protocolo frequêntemente usado na Internet, apenas em  Intranets, sobretudo de grandes empresas, já que quanto maior é o número  de usuários e de documentos disponíveis, maior é sua utilidade.
Fonte: www.hardware.com.br 
