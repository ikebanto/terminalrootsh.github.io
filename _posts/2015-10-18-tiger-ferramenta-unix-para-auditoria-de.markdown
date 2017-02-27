---
layout: post
title: " Tiger: Ferramenta Unix para Auditoria de Segurança e Detecção de Intrusão"
date: '2015-10-18T12:49:00.000-07:00'
description: " Tiger: Ferramenta Unix para Auditoria de Segurança e Detecção de Intrusão"
main-class: 'misc'
tags:
- Dicas
- Segurança
- Web Hacker
image: http://4.bp.blogspot.com/-bUafVpxrIvE/ViMDDDiHpRI/AAAAAAAAE1I/4jbpZu90bXU/s72-c/Tiger.png
twitter_text: " Tiger: Ferramenta Unix para Auditoria de Segurança e Detecção de Intrusão"
introduction: " Tiger: Ferramenta Unix para Auditoria de Segurança e Detecção de Intrusão"
---
![Blog Linux](http://4.bp.blogspot.com/-bUafVpxrIvE/ViMDDDiHpRI/AAAAAAAAE1I/4jbpZu90bXU/s400/Tiger.png "Blog Linux")
Tiger é uma ferramenta de auditoria de segurança Unix, que pode ser  usada tanto para auditoria quanto na forma de um sistema de detecção de  intrusão. Ele suporta múltiplas plataformas Unix, é gratuito e fornecido  sob uma licença GPL. Ao contrário de outras ferramentas, Tiger precisa  apenas de ferramentas POSIX além de inteiramente escrito em linguagem  shell. Tiger possui algumas características interessantes, incluindo um  design modular que é fácil de expandir, e sua borda dupla, além dele  pode ser usado como uma ferramenta de auditoria e uma ferramenta de  sistema de detecção de intrusões de host. Vale ressaltar que o processo  de detecção de intrusão de Software Livre está atualmente passando  muitas fases, que vão a partir de IDS de rede (com Snort), até o kernel  (LIDS, ou SNARE para Linux e Systrace para OpenBSD, por exemplo), não  mencionando verificadores de integridade de arquivos, sendo muitos  deles: aide, integrit, samhain, tripwire, etc...) e logcheckers.  Entretanto, poucos deles se concentram, totalmente, ao lado do guest de  detecção de intrusão.
Além de tudo o que foi mencionado, o utilitário Tiger complementa essas  ferramentas disponibilizadas e também fornece um framework emno qual  todos eles podem trabalhar juntos. Tiger não é um logchecker, nem se  concentra na análise de integridade. Ele faz "as outras coisas  necessárias", verifica a configuração do sistema e status. Um bom  exemplo do que Tiger pode fazer é, por exemplo, check_findeleted,  um módulo que pode determinar quais os servidores que são executados em  um sistema estão usando arquivos apagados (devido às bibliotecas terem  passado por ajustes durante um processo de upgrade, mas os serviços do  servidor não terem sido reiniciados).
Mais Informações:
http://www.nongnu.org/tiger/
http://www.darknet.org.uk/2015/08/tiger-unix-security-audit-intrusion-detection-tool/
Via:
Under Linux
