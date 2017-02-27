---
layout: post
title: Função Shell Script para cálculo do Imposto de Renda e INSS
date: '2015-12-23T14:13:00.000-08:00'
description: Função Shell Script para cálculo do Imposto de Renda e INSS
main-class: 'bash'
tags:
- Bash
- Shell Script
- Contábeis
- Software Livre
- Open Source
- GNU
- Terminal
- terminalroot
image: http://1.bp.blogspot.com/-_vnZMlyjmnA/VnsRjn8FAMI/AAAAAAAAE-M/HF15LwAvKZY/s72-c/irrf.gif
twitter_text: Função Shell Script para cálculo do Imposto de Renda e INSS
introduction: Função Shell Script para cálculo do Imposto de Renda e INSS
---
![Blog Linux](http://1.bp.blogspot.com/-_vnZMlyjmnA/VnsRjn8FAMI/AAAAAAAAE-M/HF15LwAvKZY/s640/irrf.gif "Blog Linux")
E aê pessoal! 
Estamos de volta com as postagens do blog , demos um tempo para revermos as ideias e enxugar algumas coisas! :)
Hoje vamos mostrar como é feito o cálculo do INSS e do Imposto de Renda e usaremos como ferramenta uma função em Shell Script .
Disponibilizaremos no rodapé e no corpo deste post alguns links úteis para mostrar como funciona o cálculo desses tributos , mas caso você tenha dificuldade , utilize esse link: https://is.gd/LblNpV ! :)
Quando você precisa saber quando é recolhido seu quando você trabalha mensalmente para o INSS e o IRRF ou IR ou a até mesmo, mais conhecido como: Imposto de Renda . 
Para o INSS há umas faixas de contribuição e o TETO máximo, bem como também para o IRRF !
Verifique, baixe e execute o script/função abaixo e leia os comentários ( linhas iniciadas com # ) para entendimento . 
Como nosso intuito aqui é mais o Shell Script do que, não menos importante , a Contabilização , segue a função/script , e não esqueça de consultar os links úteis para melhor entendimento e informação !
Após baixar/salvar e dar o chmod +x imposto.sh , para execução , informe o salário e o número de dependentes para efetuar o cálculo, utilizando o -s para p salário e o -d para dependentes, para dúvidas utilize o argumento -h , exemplo:
 {% highlight bash %}
$ ./imposto.sh -s 2.500,84 -d 1
{% endhighlight %}
A saída será mais ou menos isso, com detalhamento do INSS, IR e outros:
Para dúvidas: {% highlight bash %}
$ ./imposto.sh -h
{% endhighlight %} 
Ou{% highlight bash %}
$ ./imposto.sh --helper
{% endhighlight %}  
 
Função imposto.sh  
 
Lembramos que essa função está disponibilizadas com todas as outras funções Terminal Root , lá ela possui o nome de irrf (para ser chamada pelo Terminal ), clique no link abaixo para mais informações: Instale as Funções Terminal Root no seu terminal 
Links Úteis:  
 https://is.gd/LblNpV
http://www.previdencia.gov.br/servicos-ao-cidadao/todos-os-servicos/gps/tabela-contribuicao-mensal/
http://idg.receita.fazenda.gov.br/acesso-rapido/tributos/irpf-imposto-de-renda-pessoa-fisica
http://economia.uol.com.br/empregos-e-carreiras/noticias/redacao/2013/01/01/imposto-de-renda-e-inss-entenda-os-descontos-no-seu-salario.htm
http://www.calculador.com.br
https://pt.wikipedia.org/wiki/Imposto_de_Renda_de_Pessoa_F%C3%ADsica
http://www.receita.fazenda.gov.br/PessoaFisica/IRPF/2015/perguntao/assuntos/calculo-e-pagamento-do-imposto.htm
http://www.receita.fazenda.gov.br/Aplicacoes/ATRJO/Simulador/simulador.asp?tipoSimulador=M
http://www.dpc.com.br/pt-br/show/tabela-progressiva-do-imposto-de-renda 
Valeu até a próxima! :) 
