---
layout: post
title: "SteamOS disponível para download, baseado no Debian 7.1 e não no Ubuntu"
date: '2013-12-14T03:52:00.004-08:00'
description: "SteamOS disponível para download, baseado no Debian 7.1 e não no Ubuntu"
main-class: 'misc'
tags:
- Notícias
- Games
image: "http://3.bp.blogspot.com/-jR9BAkxJ_jU/UqxFOe32HMI/AAAAAAAAADo/5QLq2BSiUow/s72-c/steam-os-1050x591.jpg"
twitter_text: "SteamOS disponível para download, baseado no Debian 7.1 e não no Ubuntu"
introduction: "SteamOS disponível para download, baseado no Debian 7.1 e não no Ubuntu"
---
![Blog Linux](http://3.bp.blogspot.com/-jR9BAkxJ_jU/UqxFOe32HMI/AAAAAAAAADo/5QLq2BSiUow/s320/steam-os-1050x591.jpg "Blog Linux")
Você pode baixar SteamOS neste link
Valve Software fez as imagens disponíveis para SteamOS , é a distribuição de jogo baseado GNU/Linux. Valve também liberou mais informações sobre o sistema operacional. Ao contrário da crença de populares, SteamOS não é baseado no Ubuntu , é baseado em Debian Wheezy 7.1 . SteamOS é usa o Gnome como ambiente de desktop padrão.
É uma decisão bastante razoável considerando própria luta do Ubuntu com o desenvolvimento de tecnologias de in-house como Mir e muitos outros. Pode haver outras questões como Linux Mint fundador disse recentemente em uma entrevista que a Canonical está usando licenciamento binário para restringir o que pode derivado e não pode fazer . Valve é uma empresa muito maior do que a Canonical e certamente não vai confiar em uma empresa que não é conhecido por ter bom relacionamento com a comunidade de software livre.
Como instalar o SteamOS
Se você é capaz de baixar SteamOS ( olhando para a enorme quantidade de tráfego que o site está recebendo ), então existem duas maneiras de instalá-lo. Basta ter em mente que ele vai formatar tudo nessa máquina para ser muito cuidadoso , não é como instalar o Debian em seu sistema. Desde que nós ainda não vimos o processo de instalação não temos certeza se haverá qualquer opção de particionamento. Então é melhor ter um sistema dedicado para testes.
Método 1 :
O método mais fácil é uma baseada em imagem de instalação usando CloneZilla . Você terá que criar um sistema de Restaurar stick USB para executar esta instalação. A imagem aqui fornecidas requer pelo menos um disco de 1TB .
 Formatar um de 4GB ou maior stick USB com o sistema de arquivos FAT32. Use " SYSRESTORE ", como o nome da partição
 Descompacte o conteúdo do SYSRESTORE.zip a este stick USB para criar stick USB Restaurar o Sistema
 Coloque Restauração do sistema stick USB em sua máquina de destino. Inicie sua máquina e dizer a BIOS para arrancar a vara . (geralmente algo como F8 , F11 ou F12 vai abrir o menu de inicialização do BIOS ) .
 Certifique-se de selecionar a entrada de UEFI , pode parecer algo como " UEFI : Patriot Memory PMAP "
 Selecione " Restaurar todo o disco " no menu GRUB.
 Restauração do sistema prosseguirá automaticamente.
método 2
 Descompacte o arquivo Installer.zip a um , formatado em FAT32 stick USB em branco.
 Coloque o stick USB em sua máquina de destino. Inicie sua máquina e dizer a BIOS para arrancar. (geralmente algo como F8 , F11 , F12 ou fará com que o menu de inicialização do BIOS) .
 Certifique-se de selecionar a entrada de UEFI , pode parecer algo como " UEFI : Patriot Memory PMAP "
 Escolha " Automated Install" no menu seguinte.
 O resto da instalação é automática e vai reparticionar a unidade e instalar .
 Depois de concluída a instalação, efetuar logon no sistema resultante ( usando a sessão Gnome) com o predefinido conta "Steam" . A senha é "Steam" . Execute Steam, aceitar o EULA , e deixá-lo inicializar . Logoff da conta de Steam
 Faça logon com a conta de "desktop" . A senha é "desktop"
 A partir de uma janela de terminal , execute ~ / post_logon.sh . Isto irá solicitar uma senha - digite " desktop" . Este script irá executar as personalizações de pós- instalação, excluir -se , em seguida, reinicie para o utilitário de captura de partição de recuperação.
 Confirmar " y " para continuar ea partição de recuperação será criado. Quando ele for concluído , reinicie em seus recém- instalados
Você pode baixar SteamOS neste link
Fonte: http://www.muktware.com/2013/12/steam-os-available-download-based-debian-7-1-ubuntu/17572
