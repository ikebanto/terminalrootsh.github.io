---
layout: post
title: Já disponível Debian Wheezy 7.0 Release Candidate 1 (RC1)
date: '2013-02-18T15:05:00.000-08:00'
description: Já disponível Debian Wheezy 7.0 Release Candidate 1 (RC1)
main-class: 'debian'
tags:
- Debian
- Artigos
image: http://3.bp.blogspot.com/-YWnqXus4H-U/USKxvsTHgRI/AAAAAAAABBw/7-6rAJmQl3Q/s72-c/wheezy.jpg
twitter_text: Já disponível Debian Wheezy 7.0 Release Candidate 1 (RC1)
introduction: Já disponível Debian Wheezy 7.0 Release Candidate 1 (RC1)
---
![Blog Linux](http://3.bp.blogspot.com/-YWnqXus4H-U/USKxvsTHgRI/AAAAAAAABBw/7-6rAJmQl3Q/s1600/wheezy.jpg "Blog Linux")
Hoje foi lançado o primeiro RC para o Debian 7,0 aka Wheezy.
Melhorias nesta versão do instalador
 brltty: Fixar o suporte para o {% highlight bash %}
theme=dark
{% endhighlight %} de acessibilidade (# 696972). Ativar orca em gnome3 sessões também. Atenção: o prompt gdm3 não é acessível (# 694937). cdebconf: Fix exibição de mensagens de informação (por exemplo, "O modo de recuperação" no banner). Melhorar o suporte a síntese de voz. debconf: Fix título man-db enganosa para GRUB prompt (# 679327). debian-cd: Melhorar menus do GRUB utilizados durante a inicialização no modo UEFI para que eles combinam melhor com os menus syslinux equivalentes. Alterar o padrão de resolução de tela UEFI para 800 × 600 para o máximo de compatibilidade. Fix README.html geração (# 699198). debian-installer-utils: procfs Fix montagem no GNU / kFreeBSD (# 696901). 
 grub2: Melhorar o apoio para instalações EFI: fazer {% highlight bash %}
/boot/grub
{% endhighlight %} existe, e cópia {% highlight bash %}
unicode.pf2
{% endhighlight %} lá (# 696962, # 661789). Fix recursão infinita em gettext quando a tradução falha (# 611537 e muitos outros). lowmem: Ajuste limite lowmem para GNU / kFreeBSD necessário para volumes ZFS (# 696786). mountmedia: Reverter solução do kernel bug (# 694082). Problemas de carregamento de firmware deve desaparecer em conformidade. netcfg: Escreva network-manager de configuração (incluído configurações sem fio quando for o caso) se for encontrado no sistema instalado, configurar ifupdown para redes com fio de outra forma (# 682608).
![Blog Linux](http://2.bp.blogspot.com/-JbNTX7bgKSk/USKy8UCinhI/AAAAAAAABCE/dXPsFSJdsGg/s400/squeeze4wheezy.png "Blog Linux")
 oldsys-preseed: Ignorar um gateway falta com DHCP (# 687212). Use {% highlight bash %}
netcfg/disable_autoconfig
{% endhighlight %} vez de {% highlight bash %}
netcfg/disable_dhcp 
{% endhighlight %}(# 689531). preseed: lidar com URLs que consistem de um nome de máquina não qualificado e um porto (# 695908). Qcontrol: Desativar watchdog firmware TS-219p II e TS-419p II (# 693263). rootskel: Use o keymap mesmo nos consoles virtuais como o selecionado no instalador gráfico (# 606395). xorg-server: Evite cursor pula no VirtualBox (# 694598).Suporte alterações de hardware linux: Adicionar muitos motoristas para o instalador: 8021Q, adm8211, at76c50x-usb, b43legacy, bnx2fc, cxgb4, cxgb4vf, fnic, igbvf, int51x1, ISCI, iwl4965, ixgbevf, libertas_tf_usb, Micrel, mlx4_en, mwifiex_pcie, mwl8k, orinoco_usb, pata_piccolo , pch_gbe, pmcraid, prism2_usb, qlge, r8187se, r8192e_pci, r8712u, rtl8192ce, rtl8192cu, rtl8192de, rtl8192se, smsc75xx, smsc9420, smsc95xx, Tehuti, ums-eneub6250, ums-realtek, vt6656_stage, vxge (# 686605, # 689159, # 690886, # 694348, # 695437). linux: Adicionar Ralink dispositivo wifi IDs: 5362, 5392, 539b (# 694312). linux: Adicionar suporte para Lenovo Ethernet 10/100 dongle USB (# 696248).
Você pode encontrar mais informações no site http://www.debian.org.
Fonte: http://www.debian-tutorials.com
Traduzido com Google Tradutor;
