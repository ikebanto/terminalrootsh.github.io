---
layout: post
title: "Microsoft bloqueou a instalação de Linux no Surface RT"
date: 2017-01-21 11:35:53
image: '/assets/img/noticias/ms_loves_linux.png'
description: "O Windows RT foi uma experiência da Microsoft que nunca teve o sucesso que a empresa esperava."
main-class: 'linux'
color:
tags:
- linux
- noticias
categories:
twitter_text: "Microsoft bloqueou a instalação de Linux no Surface RT"
introduction: "O Windows RT foi uma experiência da Microsoft que nunca teve o sucesso que a empresa esperava."
---

![Microsoft loves Linux](/assets/img/noticias/ms_loves_linux.png)

O Windows RT foi uma experiência da Microsoft que nunca teve o sucesso que a empresa esperava. Esta versão do Windows, dedicada a tablets e a dispositivos mais pequenos, apenas teve expressão no Surface RT, e mesmo aí foi reduzida.

A Microsoft acabou por deixar de dar o suporte necessário e a maioria dos utilizadores deste hardware optou por sistemas operativos alternativos. Mas a Microsoft quer acabar com essa possibilidade e por isso bloqueou a instalação de Linux nestas suas máquinas.

As [atualizações](https://technet.microsoft.com/en-us/library/security/ms16-094.aspx) do Windows RT têm sido muito reduzidas nos últimos tempos. Muitos julgavam que a Microsoft iria dar continuidade a este seu sistema operativo, aproximando-o do Windows 10, mas a verdade é que isso não aconteceu.

Uma nova actualização, lançada recentemente veio tratar uma falha que estava a ser explorada por muitos para ter nos Surface RT outros sistemas operativos que não o Windows RT. A Microsoft detalha-a na forma de uma falha de segurança, mas a verdade é que era deste modo que o Linux podia correr no Surface RT.

> A security feature bypass vulnerability exists when Windows Secure Boot improperly applies an affected policy. An attacker who successfully exploited this vulnerability could disable code integrity checks, allowing test-signed executables and drivers to be loaded on a target device. In addition, an attacker could bypass the Secure Boot Integrity Validation for BitLocker and the Device Encryption security features.

Uma das formas que a Microsoft encontrou de controlar este desejo, que surgiu desde o início, era através da verificação, no bootloader, de que o sistema operativo a ser executado estava assinado pela empresa.

Ao explorarem esta falha, qualquer utilizador poderia contornar esta verificação e assim ter a correr um sistema não Windows. O Linux era o mais usado, mas agora poderá estar bloqueado.

É natural que a comunidade comece agora a procurar encontrar uma forma de contornar este bloqueio do bootloader, arranjando novamente forma de se conseguir correr o Linux no Surface RT.
