---
layout: post
title: "'Slackware: conceitos básicos de slapt-get'"
date: '2016-05-15T06:56:00.001-07:00'
description: "'Slackware: conceitos básicos de slapt-get'"
main-class: 'misc'
tags:
- Slackware
- Distros
image: "https://3.bp.blogspot.com/-X1RtkVAKbO4/Vzh_Bikf9fI/AAAAAAAAAnU/78jsu2hA3NYBYLul6rHorOf0-G2QQ6ZZQCLcB/s72-c/slackware-slapt-get.jpg"
twitter_text: "'Slackware: conceitos básicos de slapt-get'"
introduction: "'Slackware: conceitos básicos de slapt-get'"
---
![Blog Linux](https://3.bp.blogspot.com/-X1RtkVAKbO4/Vzh_Bikf9fI/AAAAAAAAAnU/78jsu2hA3NYBYLul6rHorOf0-G2QQ6ZZQCLcB/s640/slackware-slapt-get.jpg "Blog Linux")
slapt-get é um sistema baseado no APT para gerenciamento de pacotes da distribuição Slackware GNU/Linux . Ele foi escrito por Jason Woodward no ano de 2003 e tem como objetivo fornecer os mesmos recursos que a versão original do software apt-get do Debian GNU/Linux .
slapt-get contém uma biblioteca em C chamado libslapt-get que permite a criação de outros ambientes de GUI, como gslapt .
Ele pode ser usado ou incluído como padrão em diversas distribuições baseadas no Slackware como Slamd64 , SLAX , GoblinX , Vector Linux , Wolvix...
Características
As características mais notáveis ​​do sistema são:
 ✷Slackware utiliza ferramentas nativas como installpkg ou updatepkg.
 ✷Ele suporta múltiplas fontes de pacotes.
 ✷Armazena dados temporários na cache relativa a embalagens e atualização de fonte.
 ✷Protocolo suporta HTTP , HTTPS , FTP , FTPS , file: // e mais (por meio da libcurl ).
 ✷Continuando downloads interrompidos e verificar a integridade dos arquivos baixados mediantes MD5 .
 ✷Suporta pesquisa de pacotes por padrão POSIX e expressões regulares .
 ✷Manipulação de pacote por nome e/ou versão específica.
 ✷Obter e aplicar atualizações de software.
 ✷Atualizando de uma versão do Slackware para outro através de passos muito simples.
 ✷descrições de pacotes de amostra como tamanho, dependências, conflitos, etc.
 ✷Exclui pacotes atualizações como nome ou expressões regulares.
 ✷operação do motor para instalar, atualizar e exclusão, a comunicação de informações sobre o que vai ser feito e garantindo assim a integridade da execução da acção.
 ✷versões algoritmo de comparação para evitar alterações em versões anteriores de um pacote.
 ✷Apoiar a internacionalização pelo GNU gettext , suportando mais de 20 idiomas.
 ✷Verificação completa de integridade de dados, como escrever alterações somente se todas as fontes foram transferidas corretamente e bem apenas fazer o download de fontes que foram alteradas desde a última vez que foram atualizadas.
 
Dependências
slapt-get não fornece suporte para resolver dependências de pacotes incluídos na distribuição Slackware. No entanto, ele fornece uma estrutura para resolver dependências pacotes Slackware compatíveis, semelhante à do estilo de personalização manual dos APT . Várias fontes de pacotes e distribuições baseadas em Slackware fazem uso extensivo desse recurso.
Adicionar dependências não requer modificação do pacote em si, mas podem ser incluídas no arquivo PACKAGES.TXT, fornecido por Patrick Volkerding e Packages.gz, semelhante ao Debian . Existem vários códigos disponíveis para a criação dinâmica de um arquivo PACKAGES.TXT a partir de um grupo de pacotes. O formato de arquivo oficial irá adicionar algumas linhas por embalagem que são então processadas por slapt-get ao baixar fontes. São pacotes bastante comuns de terceiros ue incluem estas linhas para posterior extração no arquivo PACKAGES.TXT. A inclusão desta informação no arquivo não inibe o pkgtool de instalar pacotes com sucesso, mas é ignorado e descartado após a instalação.
Fontes organizadas
slapt-get funciona com repositórios oficiais do Slackware e repositórios de terceiros, CHECKSUMS.md5 e PACKAGES.TXT, revendo arquivos que fornecem o nome da ferramenta, o tamanho (tanto comprimido e não comprimido) e MD5 dos pacotes. Esses arquivos podem ser estendidos, como indicado na seção anterior, acrescentando dependências, conflitos e sugestões, bem como repositórios alternativos para um pacote. 
