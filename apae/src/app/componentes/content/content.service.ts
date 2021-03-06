import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  readonly conteudo: any = {
    'missao' : `<h3>Missão</h3>
    <p>
      Desenvolver ações de defesa de direitos, prevenção, orientações,
      prestação de serviços e apoio à família, direcionadas a melhoria da
      qualidade de vida da pessoa com deficiência intelectual e múltipla e
      à construção de uma sociedade mais justa e solidária.
    </p>`,
    'diagnostico' : `<h3>Diagnóstico da Escola e Realidade Contextual</h3>
    <p>
      A APAE de Piedade de Ponte Nova - MG caracteriza-se pelo atendimento
      especializado as pessoas com deficiência intelectual e múltipla com
      atendimento matutino.
    </p>
    <br />
    <p>
      A APAE, mantenedora da Escola de Educação Especial "Jacira Martins
      de Melo" atualmente fornece atendimento em nível de Ensino
      Fundamental-Anos Iniciais, e Educação de Jovens e Adultos-Anos
      Iniciais.
    </p>
    <br />
    <p>
      No Ensino Fundamental - Anos Iniciais serão desenvolvidas atividades
      que contribuam para a formação de atitudes e valores para a vida,
      por meio da aprendizagem da leitura, escrita e cálculo da
      compreensão do espaço natural, social, artístico, e valores
      fundamentais da sociedade, sobretudo para estimular o processo de
      Independência e o desenvolvimento das potencialidades da criança.
    </p>
    <br />
    <p>
      Na Educação de Jovens e Adultos - Anos Iniciais e Educação de Jovens
      e Adultos estão contidas considerações de ordem social, ética e
      política, considerando a importância dos preceitos legais que
      garantam o direito ao Ensino Fundamental às pessoas de todas as
      faixas etárias. Dentro da realidade da educação especial a
      flexibilidade curricular revela-se positiva. Aqui esse processo de
      formação se dará além das áreas de ensino, introduzindo a formação
      profissional para os jovens e adultos utilizando estratégias para o
      desenvolvimento de suas aptidões através de estímulos e atividades
      sistematizadas, em oficinas pedagógicas.
    </p>
    <br />
    A seguir destacamos alguns obstáculos que dificultam o pleno
    funcionamento da escola:
    <br />
    <ul style="padding-left: 30px">
      <li>
        Necessidade de capacitação dos funcionários da escola compatível
        com sua função;
      </li>
      <li>
        Dificuldade em conhecer as causas das deficiências e diagnóstico
        de alguns alunos;
      </li>
      <li>
        Pouco comprometimento por parte das famílias, no que se refere a
        dar continuidade ao que a escola vem trabalhando com o aluno;
      </li>
      <li>
        Conscientização dos pais quanto a medicação usada pelo filho e a
        necessidade de ser contínuo.
      </li>
    </ul>`,
    'objetivos' : `<h3>Objetivos</h3>
    <p>
      A APAE de Piedade de Ponte Nova - MG tem por objetivo principal garantir a independência 
      e o desenvolvimento pleno das potencialidades dos alunos com deficiência intelectual e 
      múltipla e sua participação na família e comunidade, através de conteúdo
      específicos, acessibilidades, adaptações e metodologias.
    </p>
    <br >
    <p>
      Para realizar o objetivo descrito acima, a APAE realiza atividades com os objetivos a seguir:
    <p>
    <ul style="padding-left: 30px">
      <li>
        Executar ações nas áreas pedagógicas, saúde, englobando programas
        de assistência social que atenda as pessoas com deficiência e suas
        famílias;
      </li>
      <li>
        Proporcionar a pessoa com deficiência, condições adequadas, tanto
        físicas como emocional, que propicie o desenvolvimento e sua
        inclusão no meio social;
      </li>
      <li>
        Oferecer programas educacionais de acordo com seu nível de
        escolaridade, necessidades e possibilidades;
      </li>
      <li>
        Proporcionar orientação a família, de modo a gerar ambiente
        adequado a pessoa com deficiência;
      </li>
      <li>
        Realizar trabalhos coletivos e atividades diversificadas para
        melhorar o ensino aprendizagem.
      </li>
    </ul>`,
    'principios' : `<h3>Princípios Norteadores</h3>    
    <br />
    
    <h4>Epistemológicos</h4>
    <p>
      A Escola de Educação Especial “Jacira Martins de Melo” acredita que
      o aluno com deficiência intelectual e múltipla é capaz de produzir
      conhecimento e inserir- se no mundo social.
    </p>
    <br />
    <p>
      Dessa forma buscamos cumprir a função social de incluí-los no espaço
      educacional, utilizando as fundamentações teóricas aliadas às
      práticas para o estabelecimento da universalização do conhecimento
      em conjunto com toda a comunidade.
    </p>
    <br />
    <h4>Didáticos-Pedagógicos</h4>
    <p>
      Definimos como linha teórica o construtivismo/sociointeracionista
      acreditando que o conhecimento se dá na interação do sujeito
      consigo, com os demais e com o objeto, agindo de maneira a permitir
      que o aluno se sinta estimulado a criar novos significados a partir
      de diversos conhecimentos existentes contribuindo para o
      desenvolvimento da aprendizagem, e levando-o a refletir e a criticar
      os fatores sociais ao qual está inserido. 0 papel do educador para a
      consolidação deste trabalho é imprescindível, pois suas ações são
      relevantes para o desenvolvimento do educando de forma a criar
      espaços em que o agir e o construir se efetivem.
    </p>
    <br />

    <h4>Éticos</h4>
    <p>
      Os valores precisam ser transmitidos e vivenciados por todas as
      pessoas da instituição. Para isso deverão ser criadas condições,
      através de atividades que motivem os envolvidos a criar hábitos de
      cooperação, respeito, igualdade e justiça, essenciais na construção
      da cidadania.
    </p>
    <br />

    <h4>Estéticos</h4>
    <p>
      Associado a possibilidade de produção artística, reafirmando a
      importância da criatividade, de forma a proporcionar maior autonomia
      das expressões artísticas. Cabe ao educador garantir um ambiente
      atrativo e rico em estratégias, com o objetivo de estimular a
      curiosidade e a emoção.
    </p>
    <br />
    <p>
      É necessário favorecer a manifestação da diversidade na escola, que
      é o espaço onde os costumes, valores e etnias estão em evidência.
    </p>`,
  }

  constructor() { }

  getContent ( key: string ) {
    return this.conteudo[key]
  }

}
