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
        'Cegueira (9D90.4)',
        `A perda da visão, também chamada de cegueira, pode ser ocasionada por vários fatores e aparecer de variadas formas. A cegueira pode ser congênita (quando já nasce com a pessoa) ou adquirida, que pode ser causada por diferentes fatores.
         
        Existe também a cegueira resultante de acidentes com objetos pontiagudos, queimaduras, substâncias químicas e inflamáveis. Rubéola, sarampo e toxoplasmose em mulheres grávidas também podem ocasionar cegueira no bebê.`,
        `https://icd.who.int/browse11/l-m/en#/http%3a%2f%2fid.who.int%2ficd%2fentity%2f1103667651`
      ),
      new Transtorno(
        'Desordem do Desenvolvimento Intelectual (6A00.Z)',
        `Distúrbios do desenvolvimento intelectual são um grupo de condições etiologicamente diversas originadas durante o período de desenvolvimento, caracterizadas por funcionamento intelectual significativamente abaixo da média e comportamento adaptativo que estão aproximadamente dois ou mais desvios-padrão abaixo da média (aproximadamente menos do que o percentil 2,3), com base em normalizados, testes padronizados administrados individualmente.
        
        Quando os testes adequadamente normatizados e padronizados não estão disponíveis, o diagnóstico de distúrbios do desenvolvimento intelectual requer maior confiança no julgamento clínico baseado na avaliação apropriada de indicadores comportamentais comparáveis.`,
        `https://icd.who.int/browse11/l-m/en#/http%3a%2f%2fid.who.int%2ficd%2fentity%2f605267007`
      ),
      new Transtorno(
        'Epilepsia (G40.2)',
        `Pelo menos 2 convulsões não provocadas (ou reflexas) ocorrendo com mais de 24 horas de intervalo.`,
        `https://icd.who.int/browse11/l-m/en#/http%3a%2f%2fid.who.int%2ficd%2fentity%2f1397288146`,
        200
      ),
      new Transtorno(
        'Esquizofrenia(6A20.Z)',
        `A esquizofrenia é caracterizada por distúrbios em múltiplas modalidades mentais, incluindo pensamento (por exemplo, delírios, desorganização na forma de pensamento), percepção (por exemplo, alucinações), autoexperiência (por exemplo, a experiência de que os sentimentos, impulsos, pensamentos ou comportamento estão sob o controle de uma força externa), cognição (p. parece respostas emocionais bizarras ou sem propósito, imprevisíveis ou inadequadas que interferem na organização do comportamento).`,
        `https://icd.who.int/browse11/l-m/en#/http%3a%2f%2fid.who.int%2ficd%2fentity%2f1683919430?data=%7B%22dataType%22%3A%22pc%22%2C%22postcoordinationCodeSet%22%3A%7B%22stemId%22%3A%22http%3A%2F%2Fid.who.int%2Ficd%2Fentity%2F1683919430%22%2C%22axisToValueIds%22%3A%7B%22hasManifestation%22%3A%5B%7B%22stemId%22%3A%22http%3A%2F%2Fid.who.int%2Ficd%2Fentity%2F1358754380%22%7D%5D%7D%7D%7D`
      ),
      new Transtorno(
        'Microcefalia (LA05.0)',
        `Condição causada pela falha da cabeça em se desenvolver corretamente durante o período pré-natal. Esta condição é caracterizada por um tamanho de cabeça significativamente menor que o normal para sua idade e sexo. Essa condição também pode apresentar atrasos no desenvolvimento, dificuldades de equilíbrio e coordenação, baixa estatura, hiperatividade, retardo mental, convulsões ou outras anormalidades neurológicas.`,
        `https://icd.who.int/browse11/l-m/en#/http://id.who.int/icd/entity/179350437`
      ),
      new Transtorno(
        'Síndrome de Rett - (LD90.4)',
        `Condição em que o desenvolvimento inicial aparentemente normal é seguido por perda parcial ou completa da fala e das habilidades de locomoção e uso das mãos, juntamente com desaceleração do crescimento da cabeça, geralmente com início entre sete e 24 meses de idade. Perda de movimentos intencionais das mãos, estereotipias de torcer as mãos e hiperventilação são características.`,
        `https://icd.who.int/browse11/l-m/en#/http://id.who.int/icd/entity/201200685`
      ),
      new Transtorno(
        'Transtorno do Déficit de Atenção e Hiperatividade (6A05)',
        `O transtorno de déficit de atenção e hiperatividade é caracterizado por um padrão persistente (pelo menos 6 meses) de desatenção e/ou hiperatividade-impulsividade que tem um impacto negativo direto no funcionamento acadêmico, ocupacional ou social. Há evidências de sintomas significativos de desatenção e/ou hiperatividade-impulsividade antes dos 12 anos de idade, tipicamente entre o início e o meio da infância, embora alguns indivíduos possam vir à atenção clínica mais tarde.
         
        O grau de desatenção e hiperatividade-impulsividade está fora dos limites da variação normal esperada para a idade e nível de funcionamento intelectual.`,
        `https://icd.who.int/browse11/l-m/en#/http%3a%2f%2fid.who.int%2ficd%2fentity%2f821852937`
      ),
      new Transtorno(
        'Transtorno mental e comportamental devido ao uso de canabinóides (6C41)',
        `Os transtornos devidos ao uso de substâncias incluem transtornos que resultam de uma única ocasião ou uso repetido de substâncias que possuem propriedades psicoativas, incluindo certos medicamentos. Estão incluídos os transtornos relacionados a quatorze classes ou grupos de substâncias psicoativas.
        
        Normalmente, o uso inicial dessas substâncias produz efeitos psicoativos agradáveis ou atraentes que são recompensadores e reforçados com o uso repetido. Com o uso continuado, muitas das substâncias incluídas têm a capacidade de produzir dependência.`,
        `https://icd.who.int/browse11/l-m/en#/http%3a%2f%2fid.who.int%2ficd%2fentity%2f590211325`
      ),    
      new Transtorno(
        'Trissomia 21 Completa (ou Síndrome de Down) (LD40.0)',
        `A trissomia 21 é uma anomalia cromossômica, caracterizada pela presença de uma terceira cópia (parcial ou total) do cromossomo 21, cujas manifestações clínicas incluem deficiência intelectual variável, hipotonia muscular e frouxidão articular, muitas vezes associada a dismorfismo facial e malformações variáveis (essencialmente cardíaca e digestivo) e risco de complicações (epilepsia, leucemia, patologias auto-imunes e endócrinas, envelhecimento precoce e doença de Alzheimer.`,
        `https://icd.who.int/browse11/l-m/en#/http://id.who.int/icd/entity/1624623908`
      ),      
    ]
  }

}
