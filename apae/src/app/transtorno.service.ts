import { Injectable } from '@angular/core';
import { Transtorno } from 'src/modelo/transtorno.modelo';

@Injectable({
  providedIn: 'root'
})
export class TranstornoService {

  constructor() { }

  getTranstornos () : Array<Transtorno>{
    return [
      new Transtorno(
        'Retardo Mental Leve (F70)',
        `Nesse tipo de retardo mental, as pessoas com um grau leve de retardo mental podem atingir um nível de leitura similar aos das crianças que cursam entre a 4ª e a 6ª série escolar, aprender as habilidades educacionais básicas necessárias no dia-a-dia.
        Essas pessoas geralmente não apresentam defeitos físicos evidentes, mas podem apresentar epilepsia e necessitam de supervisão de instituições educacionais especiais. São frequentemente imaturos e pouco refinados, com pouca capacidade de interação social. A sua linha de pensamento é muito específica e em geral, eles são incapazes de generalizar. Possuem dificuldades para ajustar-se a situações novas e podem apresentar uma má capacidade de julgamento, falta de prevenção e credulidade excessiva, e são capazes de cometer atos impulsivos.`,
        `https://www.tuasaude.com/retardo-mental-leve/`
      ),
      new Transtorno(
        'Retardo Mental Moderado (F71)',
        `O retardo mental moderado é quando a pessoa apresenta um quociente de inteligência (QI) entre 35 e 55. A pessoa apresenta uma maior lentidão para aprender a falar ou sentar, mas se receber treinamento e apoio adequados, os adultos com esse grau de retardo mental conseguem viver com alguma independência. A intensidade do apoio deve ser estabelecida para cada paciente e algumas vezes pode ser preciso apenas uma pequena ajuda, para que consiga estar integrado.`,
        `https://www.tuasaude.com/retardo-mental-moderado/`
      ),
      new Transtorno(
        'Retardo Mental Grave (F72)',
        `Como características do retardo mental grave pode-se destacar uma incapacidade de aprendizagem mesmo quando comparada a uma criança com um retardo menos intenso, especialmente nos casos em que o QI é inferior a 19. Nesses casos, em geral a criança pode não conseguir aprender a falar e necessita de muita ajuda para as atividades diárias, como higiene e alimentação, mesmo na vida adulta.`,
        `https://lobo.jusbrasil.com.br/artigos/361100297/quais-as-classificacoes-do-retardo-mental-e-como-repercute-no-ambito-penal`
      ),
      new Transtorno(
        'Microcefalia (Q02)',
        `Microcefalia é uma malformação congênita, em que o cérebro não se desenvolve de maneira adequada. Neste caso, os bebês nascem com perímetro cefálico (PC) menor que o normal, ou seja, igual ou inferior a 32 cm. Essa malformação congênita pode ser efeito de uma série de fatores de diferentes origens, como substâncias químicas e agentes biológicos (infecciosos), como bactérias, vírus e radiação.`,
        `https://bvsms.saude.gov.br/microcefalia/`
      ),
      new Transtorno(
        'Epilepsia (G40)',
        `É uma alteração temporária e reversível do funcionamento do cérebro, que não tenha sido causada por febre, drogas ou distúrbios metabólicos e se expressa por crises epilépticas repetidas.`,
        `https://bvsms.saude.gov.br/epilepsia-6/`
      ),
      new Transtorno(
        'Transtorno Hipercinéticos (F90)',
        `Esta subclasse de distúrbios é caracterizada pelo comportamento social disruptivo e é, frequentemente, mais penoso para outros do que para as próprias pessoas com o distúrbio. O transtorno hipercinético refere-se a "muito movimento", a inquietação, impulsividade, agitação. É um dos componentes do Transtorno de Déficit de Atenção e Hiperatividade, ou TDAH. Alguns podem ser mais hipercinéticos ou hiperativos, ou impulsivos, ou desatentos.`,
        `https://treinamento24.com/library/lecture/read/748521-o-que-e-f90-transtornos-hipercineticos`
      ),
      new Transtorno(
        'Sindrome de Down (Q90)',
        `A síndrome de Down, ou trissomia 21, é uma doença genética causada por uma mutação no cromossomo 21 que faz com que o portador não tenha um par, mas um trio de cromossomos, e por isso no total não possui 46 cromossomos, mas 47.
        Essa alteração do cromossomo 21 faz com que a criança nasça com características específicas, como implantação mais baixa das orelhas, olhos puxadinhos para cima e língua grande, por exemplo. Conheça outras características dessa síndrome.`,
        `https://www.tuasaude.com/sindrome-de-down/`
      ),
      new Transtorno(
        'Síndrome de Rett - TGO (F84.2)',
        `A síndrome de Rett é uma condição genética rara que afeta principalmente as meninas e que prejudica o sistema nervoso central, causando atraso no desenvolvimento físico e neurológico, gerando características e sintomas típicos, como irritabilidade frequente, convulsões e movimentos involuntários.`,
        `https://www.tuasaude.com/caracteristicas-da-sindrome-de-rett/`
      ),
      new Transtorno(
        'Esquizofrenia Residual (F20.5)',
        `É uma forma crônica das doenças. Acontece quando os critérios para esquizofrenia ocorreram no passado, mas não estão ativos atualmente, entretanto, ainda persistem sintomas negativos como lentificação, isolamento social, falta de iniciativa ou afeição, expressão facial diminuída ou falta de autocuidado, por exemplo.`,
        `https://www.tuasaude.com/esquizofrenia/`
      ),
      new Transtorno(
        'Cegueira (H54.0)',
        `A perda da visão, também chamada de cegueira, pode ser ocasionada por vários fatores e aparecer de variadas formas. A cegueira pode ser congênita (quando já nasce com a pessoa) ou adquirida, que pode ser causada por diferentes fatores.
        Existe também a cegueira resultante de acidentes com objetos pontiagudos, queimaduras, substâncias químicas e inflamáveis. Rubéola, sarampo e toxoplasmose em mulheres grávidas também podem ocasionar cegueira no bebê.`,
        `https://www.unimed.coop.br/viver-bem/saude-em-pauta/cegueira`
      ),
      new Transtorno(
        'Transtorno mental e comportamental devido ao uso de canabinóides (F12)',
        `Estudos mostram a relação entre o abuso de Cannabis sativa e o surgimento de possíveis psicoses desencadeadas. Além disso, os mesmos indicam que o abuso contínuo da maconha pode contribuir para desenvolver doenças como esquizofrenia e outros sintomas psicóticos, além de transtornos ansiosos. De acordo com Diehl; Cordeiro; Laranjeira (2010), este risco é de 1,2 a 2,8 (95% IC, OddsRatio) em indivíduos vulneráveis, ou seja, que já possuem uma predisposição. Tais resultados são advindos de estudos longitudinais que relacionaram temporalidade, causalidade e vulnerabilidade biológica. Com isso, foi concluído pelos estudos que o abuso da Cannabis sativa pode ser considerado um dos elementos de causalidade que leva à esquizofrenia na fase adulta.`,
        `http://pensaracademico.unifacig.edu.br/index.php/semiariocientifico/article/viewFile/1334/1139`
      ),
    ]
  }

}
