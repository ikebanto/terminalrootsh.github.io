---
layout: post
title: Como instalar o COMPIZ no Debian 8 Jessie MATE
date: '2016-05-07T17:00:00.001-07:00'
description: Como instalar o COMPIZ no Debian 8 Jessie MATE
main-class: 'debian'
tags:
- Debian
- MATE
- TerminalRootTV
image: https://1.bp.blogspot.com/-xhwBrgCPW2w/Vy5ve2pCp2I/AAAAAAAAAdQ/LkcWXqYr3iIQa0v65X2t9OPdg9rYs4cMwCLcB/s72-c/Como%2Binstalar%2Bo%2BCompiz%2Bno%2BDebian%2B8%2BJessie%2BMATE%2B.jpg
twitter_text: Como instalar o COMPIZ no Debian 8 Jessie MATE
introduction: Como instalar o COMPIZ no Debian 8 Jessie MATE
---
![Blog Linux](https://1.bp.blogspot.com/-xhwBrgCPW2w/Vy5ve2pCp2I/AAAAAAAAAdQ/LkcWXqYr3iIQa0v65X2t9OPdg9rYs4cMwCLcB/s640/Como%2Binstalar%2Bo%2BCompiz%2Bno%2BDebian%2B8%2BJessie%2BMATE%2B.jpg "Blog Linux")
<iframe allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/1DbBQzuz9BE" width="560"><iframe>  
Como o 'root' rode o comando abaixo para configurar o sources.list e gerar a chave pública:
wget -q http://download.tuxfamily.org/compiz/apt/key.pub -O- | apt-key add - &amp;&amp; echo "deb http://download.tuxfamily.org/compiz/debian $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/compiz-debian.list &amp;&amp; apt-get update
Depois também com o 'root' rode o comando abaixo para instalar os pacotes necessários:
apt-get install compiz fusion-icon compiz-mate compiz-fusion-plugins-extra compiz-fusion-plugins-unsupported -y
![Blog Linux](http://compiz-debian.tuxfamily.org/images/title.png "Blog Linux")
O que é Compiz ?Compiz foi um dos primeiros gerenciadores de janelas 3D para o servidor de janela X, onde foi usada aceleração OpenGL. O gerenciador permite que as janelas tenham efeitos visuais, como animações ao minimizar e uma área de trabalho em forma de cubo.
![Blog Linux](http://compiz-debian.tuxfamily.org/images/debian.png "Blog Linux")
Porque Compiz para Debian ?Compiz já não é fornecido pelo repositório oficial do Debian desde o lançamento do Squeeze, por causa do abandono do branch 0.8. A próxima versão 0.9 é desenvolvido pela unidade pelo Ubuntu e sempre foi muito instável em outros ambientes. Depois de pesquisar na web, alguns desenvolvedores passram a corrigir bugs, retirar os pacotes e adicionar melhorias nas diferentes aplicações. Esta nova versão foi criada no Github e funciona muito bem no Debian, é por isso que este projeto foi criado. Os pacotes para o Debian foram atualizados a partir da antiga versão 0.8.4 e desenvolvida com sucesso para arquiteturas i386 e amd64. Compiz Debian oferece pacotes tanto para o Debian stable "Jessie" quanto para o testing "Stretch".
Instale e divirta-se!      
![Blog Linux](http://compiz-debian.tuxfamily.org/images/install.png "Blog Linux")
InstalaçãoAbra seu terminal com usuário root e copie e cole os comandos abaixo.
![Blog Linux](http://compiz-debian.tuxfamily.org/images/keyring.png "Blog Linux")
RepositórioIntalando sources.list e chave pública GPG 
       wget -q  http://download.tuxfamily.org/compiz/apt/key.pub -O- | apt-key add -  &amp;&amp; echo "deb http://download.tuxfamily.org/compiz/debian  $(lsb_release -sc) main" | tee  /etc/apt/sources.list.d/compiz-debian.list &amp;&amp; apt-get update
![Blog Linux](http://compiz-debian.tuxfamily.org/images/compiz.png "Blog Linux")
CompizInstalando compiz-core, gtk-window-decorator, gerenciador de configurações e plugins principais
                                                 apt-get install compiz
      
![Blog Linux](http://compiz-debian.tuxfamily.org/images/optional-packages.png "Blog Linux")
Pacotes Opcionais
![Blog Linux](http://compiz-debian.tuxfamily.org/images/emerald.png "Blog Linux")
EmeraldInstale o decorador de janela do Compiz ( recomenado pra XFCE, LXDE )
                                                 apt-get install emerald
![Blog Linux](http://compiz-debian.tuxfamily.org/images/fusion-icon.png "Blog Linux")
Fusion IconInstale o ícone na barra de tarefas que facilitará para iniciar e desligar o Compiz e também configurá-lo.apt-get install fusion-icon
![Blog Linux](http://compiz-debian.tuxfamily.org/images/mate.png "Blog Linux")
MATEInstale mate-compat plugin para compatibilidade com o MATE Desktop
                                                 apt-get install compiz-mate
![Blog Linux](http://compiz-debian.tuxfamily.org/images/plugins-extra.png "Blog Linux")
PluginsInstale plugins extraapt-get install compiz-fusion-plugins-extra
![Blog Linux](http://compiz-debian.tuxfamily.org/images/plugins-exp.png "Blog Linux")
Instale plugins não suportados e experimentais no seu sistemaapt-get install compiz-fusion-plugins-unsupported
           
![Blog Linux](http://compiz-debian.tuxfamily.org/images/octocat.png "Blog Linux")
Problemas ou Bugs ?Acesse o projeto no Github .
CLIQUE NA IMAGEM ABAIXO PARA ACESSAR O PROJETO OFICIAL 
![Blog Linux](https://3.bp.blogspot.com/-w_I9dfTBAuM/Vy5t6KIs77I/AAAAAAAAAdE/m5eO2a2arTkfxFmpFmF05UBuHCvp_xMNgCLcB/s1600/tuxfamily.org.png "Blog Linux")
