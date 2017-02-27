---
layout: post
title: "Como se transformar em Debian Sid."
date: '2013-04-09T16:23:00.000-07:00'
description: "Como se transformar em Debian Sid."
main-class: 'debian'
tags:
- Debian
- Dicas
image: "http://1.bp.blogspot.com/-Xc6ZPNNrblc/UWSh9FMli6I/AAAAAAAABY4/QkqDWZeRkbc/s72-c/debian_sid.png"
twitter_text: "Como se transformar em Debian Sid."
introduction: "Como se transformar em Debian Sid."
---
 O Debian é uma distribuição que segue um ciculo de atualização bem diferente das outras distribuições e talves ao mesmo tempo, influenciou o método de atualizações de outras grandes distribuições. O Debian segue sempre com 3 versões oficialmente lançadas para uso, o stable que é recomendadíssimo para servidores pois é mantido pela equipe de segurança e seu processo de atualização é longo, o testing que possui um processo de atualizações semanais com a disponibilização de imagens e não são gerenciadas pela equipe de segurança e o unstable, que é conhecido como Sid, cujo mantem todo o repositório atualizado de pacotes em main, contrib e non-free, sendo o mais próximo do Ubuntu, também não são gerenciadas pela equipe de segurança. O objetivo desde material é transformar o Debian em um excelente desktop, tao bom e atualizado quanto o Ubuntu.
Debian Stable
A distribuição estável (stable) contém a última versão oficialmente lançada do Debian. Esta é a versão de produção do Debian e é a recomendada pela equipe do Debian. Suas atualizações são mantidas pelo “Security Update”, e todos os CVE podem ser consultados em http://www.debian.org/security/
E isso a equipe do Debian leva muito a serio e fazem um excelente trabalho, voce pode ter certeza disso.
Debian Testing
A distribuição testing é uma distribuição gerada automaticamente. Ela é gerada da distribuição instável (unstable) por um conjunto de scripts que tentam mover pacotes que provavelmente não possuem bugs críticos ao lançamento (release-critical). Eles o fazem de modo a garantir que as dependências dos outros pacotes na testing sempre possam ser satisfeitas. Uma versão particular de um pacote se moverá para a testing quando ele satisfizer todos os seguintes critérios:
Ele precisa estar na instável (unstable) por 10, 5 ou 2 dias, dependendo da urgência do upload;Ele precisa estar compilado e atualizado em todas as arquiteturas nas quais ele foi anteriormente compilado na instável (unstable);Ele precisa ter menos bugs críticos ao lançamento (release-critical) ou o mesmo número que a versão atualmente na testing;Todas as suas dependências precisam ser satisfeitas ou pelos pacotes que já estão na testing ou pelo grupo de pacotes que serão instalados ao mesmo tempo;A operação de instalação do pacote na testing não deve quebrar qualquer outro pacote na testing.
Fonte: http://www.debian.org/devel/testing
Debian Unstable (sid)
O nome para a distribuição de desenvolvimento do Debian é sid, apelidada de unstable (instável). A maior parte do trabalho de desenvolvimento que é feito no Debian é enviada para esta distribuição. Ela nunca será lançada, mas seus pacotes vão se propagar para a distribuição testing e então para a distribuição real. O Debian Unstable esta sujeita a uma atualização diaria de libs e isso pode resultar em quebras do sistema tal como um possível conflito do mesmo. Eu mesmo ja tive um problema na epoca do Debian Etch, com o xkbcomp, me inutilizando o ambiente gráfico por 2 dias até liberarem a correção pelo apt, quando estava indo para a versão 5.0 e deixou de usar o xfree86 para o port ao xorg, (que o Ubuntu ja tinha). As atualizações do Debian Unstable são Rolling Release e sempre seráo atualizadas de forma diaria, semanal, conforme as atualizações são liberadas desde a sua ultima instalação. Note que se voce ficar umas 2 semanas sem atualizar, com o ambiente gráfico instalado voce vai precisar de uma paciência de no mínimo 260MB. Então faça sempre o seu dist-upgrade.
Existe a relação da lista de pacotes do Debian Unstable que voce pdoe consultar em http://packages.debian.org/unstable/
Voce também pode combinar (se quiser), com o Debian Experimental para ter sempre um pacote ultra-mais-novo, mas ai voce pode ter algumas surpresas. http://packages.debian.org/experimental/
NUNCA, vou repetir, NUNCA, combine repositorios do stable junto com Unstable e Testing.
Fonte: http://www.debian.org/releases/sid/
Mas e o Ubuntu? Porque ele é tão bem atualizado ja que é baseado no Debian?
Antes de você executar os procedimentos, vale lembrar que o Ubuntu é baseado sempre no Debian Testing/Sid e desde o inicio do seu desenvolvimento sempre foi assim, porem o Ubuntu se tornou ja a tempos uma grande distribuição independente e com recursos novos, como o upstart que ja é utilizado pelo Debian e também o Red Hat Enterprise, o RHEL. Se voce no Ubuntu ler o conteúdo do arquivo /etc/debian_version, voce vai receber a seguinte saida.
{% highlight bash %}
~$ cat /etc/debian_version
{% endhighlight %}
wheezy/sid
O que faz o Ubuntu ter sua própria release são os arquivos /etc/lsb-base/*, /etc/lsb-release. A grande verdade é que o /etc/debian_version no Ubuntu é utilizado justamente pelo gerenciamento de pacotes do Debian, no caso o dpkg.
Para voce transformar o Debian Stable ou Debian Testing em Debian Unstable, ou sid segue os seguintes procedimentos que eu recomendo (para uma máquina nova):
OBS: recomendo que voce aperte TAB ou ESC na instalação e adicione o atributo “text”, para a instalação no modo texto do Debian Installer (console)
1. Instale o Debian Stable (ultima versão estável), podendo ser somente o primeiro CD de instalação, o netinstall que contem apenas a instalação do Debian Installer no CD e o Card Install que nem a install tem, vai depender de internet sempre para instalar e migrar para o unstable. Uma coisa é vc ter os milhoes de CD do Debian Stable e todo o repositorio com voce, outra coisa é voce migrar para o Unstable e então não tem como fazer isso local. A não ser que vocẽ esteja disponivel com um storage e um HD de no mínimo 60GB para manter todos.
2. Na instalação opte somente pelo ” minimal install “, pois voce tem disponível a instalação do GNOME pelo “graphical desktop environment”, apache em “Web Server”, cups e o foomatic em “Print Server”, o bind9 em “DNS Server”, o samba e o nfs-kernel-server em “File Server”, o postfix em “Mail Server”, o MySQL e agora o MariaDB em “SQL database”, o pacote openssh-server em “SSH Server”, os recursos do laptop-mode em “Laptop” (se for o seu caso opte), e o “stadart system utilities”, que define o MINIMAL INSTALL, opte apenas por este. Agora porque? Para que a migração não demore mutio ja que quando voce trocar para o unstable, ele vai puxar tudo novamente para atualizar cada pacote.
3. Após instalar o Debian, se conecte no sistema como root e atualize o mesmo com apt-get update &amp;&amp; apt-get dist-upgrade.
4. Entre no /etc/apt/sources.list e altere no vim todo a palavra “stable” ou o nome da distro para “unstable” e remova a seguinte linha:
deb http://security.debian.org/ squeeze/updates main contrib non-free
e toda linha com referencia as atualizações de segurança, lembre-se o Debian Unstable não atualiza por security e isso é mantido pela atualização do próprio pacote com a atualização não de patch, mas do próprio upgrade do pacote.
5. Agora você pode migrar para o Debian Unstable basta salvar o arquivo /etc/apt/sources.list com as modificações e digitar:
{% highlight bash %}
# apt-get update
{% endhighlight %}
{% highlight bash %}
# apt-get dist-upgrade -y
{% endhighlight %}
Quando concluir basta consultar o arquivo /etc/debian_version
6. Após a conclusão da atualização reinicie os sistema operacional Debian e ao se conectar no terminal novamente vamos instalar o ambiente desktop e todos os seus recursos com o seguinte comando (para quem usa gnome3).
{% highlight bash %}
# apt-get install xorg gnome
{% endhighlight %} (ou gnome-desktop-environment)
instale também o vim e mude o editor de texto padrão em caso do uso de comandos como vipw, visudo, crontab -e, edquota e outros.
{% highlight bash %}
# update-alternatives –config editor
{% endhighlight %}
e marque a opção 4 (vim)
Fonte: www.aprigiosimoes.com.br
