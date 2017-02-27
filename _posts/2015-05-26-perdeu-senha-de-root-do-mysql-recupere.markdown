---
layout: post
title: "Perdeu a senha de root do MySQL? Recupere agora"
date: '2015-05-26T18:16:00.000-07:00'
description: "Perdeu a senha de root do MySQL? Recupere agora"
main-class: 'misc'
tags:
- Dicas
- MySQL
image: "http://1.bp.blogspot.com/-yKXZXhMvX-A/VWUaUQDTdTI/AAAAAAAABTQ/XkwsjqwD8Ko/s72-c/como-aterar-senha-do-mysql.jpg"
twitter_text: "Perdeu a senha de root do MySQL? Recupere agora"
introduction: "Perdeu a senha de root do MySQL? Recupere agora"
---
![Blog Linux](http://1.bp.blogspot.com/-yKXZXhMvX-A/VWUaUQDTdTI/AAAAAAAABTQ/XkwsjqwD8Ko/s320/como-aterar-senha-do-mysql.jpg "Blog Linux")
 Pare o MySQL:
 $ sudo service mysql stopInicie o modo seguro:
 $ sudo mysqld_safe –skip-grant-tablesAbra outro terminal e execute:
 $ mysql -u rootDepois:
 MYSQL> 
UPDATE mysql.user SET Password=PASSWORD(‘novasenha’) WHERE User=’root';Inicie o MySQL:
 $ sudo service mysql stopFim.
 Fonte: database – How to find out the MySQL root password – Stack Overflow
Via: Viva O Linux – Publicado por Xerxes Lins
