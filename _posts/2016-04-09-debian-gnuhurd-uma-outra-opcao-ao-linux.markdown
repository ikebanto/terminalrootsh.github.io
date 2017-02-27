---
layout: post
title: "Debian GNU/Hurd , uma outra opção ao Linux"
date: '2016-04-09T13:01:00.000-07:00'
description: "Debian GNU/Hurd , uma outra opção ao Linux"
main-class: 'debian'
tags:
- Debian
- Linux
- GNU
image: "https://2.bp.blogspot.com/-QL3PDf-BnFA/VwlfEXIC0qI/AAAAAAAAAOo/VfdipMq-CiwlMDwPhbEn2ZvBxlT9ILtJA/s72-c/Debian%2BGNU-Hurd%2B%252C%2Buma%2Boutra%2Bop%25C3%25A7%25C3%25A3o%2Bao%2BLinux%2B-%2BTerminal%2BRoot.jpg"
twitter_text: "'Debian GNU/Hurd , uma outra opção ao Linux'"
introduction: "'Debian GNU/Hurd , uma outra opção ao Linux'"
---
![Blog Linux](https://2.bp.blogspot.com/-QL3PDf-BnFA/VwlfEXIC0qI/AAAAAAAAAOo/VfdipMq-CiwlMDwPhbEn2ZvBxlT9ILtJA/s640/Debian%2BGNU-Hurd%2B%252C%2Buma%2Boutra%2Bop%25C3%25A7%25C3%25A3o%2Bao%2BLinux%2B-%2BTerminal%2BRoot.jpg "Blog Linux")
Debian GNU/Hurd é uma distribuição do sistema operacional GNU com o núcleo Hurd rodando sobre o micronúcleo GNU Mach, em contraste com a grande maioria das variantes do GNU, que funcionam com o núcleo Linux. Todo o software incluído na distribuição é software livre.
Embora seu desenvolvimento tenha começado há um tempo considerável, o Debian GNU/Hurd não foi lançado ainda. Apenas metade dos pacotes Debian de software foram portados para o GNU/Hurd, e o próprio Hurd ainda não está pronto para ser usado num sistema estável. A maioria dos usuários da Debian utiliza distribuições estáveis baseadas no Linux.
O Hurd está sob desenvolvido ativo, mas não fornece o desempenho e a estabilidade que você esperaria de um sistema em produção. Além disso, somente cerca um de cada dois pacotes Debian foram portados para o GNU/Hurd. Há muito trabalho a ser feito antes de fazer um lançamento.
Clique aqui para fazer o download do iso, md5,... do Debian GNU/Hurd:
Download Debian GNU/Hurd 
Você também pode obter uma imagem pré-instalada e rodá-la no qemu:
 
Ou converter para o formato VDI para o VirtualBox:
{% highlight bash %}
VBoxManage convertfromraw debian-hurd-*.img debian-hurd.vdi --format vdi
{% endhighlight %} 
Mais informações:
https://www.gnu.org/software/hurd/index.html
https://www.debian.org/ports/hurd/
