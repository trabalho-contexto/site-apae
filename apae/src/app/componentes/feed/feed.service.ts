import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import Post from 'src/modelo/post.modelo';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private readonly tempoDelaySimulado: number = 300
  private readonly posts: Array<Post> = [
    new Post(
      './assets/natal.jpg',
      'Natal',
      'E assim termina o último dia letivo Apae Piedade. Estamos felizes pelas oportunidades que juntos compartilhamos, principalmente os momentos de alegria. Feliz Natal, que Deus abençoe a todos!!!',
      '13 de dezembro de 2019'
    ),
    
    new Post(
      './assets/semanaExcepcional.jpg',
      'Semana Nacional do Excepcional',
      'Do dia 21 a 27/8 é comemorada a Semana Nacional da Pessoa com Deficiência Intelectual e Múltipla. Instituída pela Lei nº 13.585/2.017, essa semana visa o desenvolvimento de conteúdos para conscientizar a sociedade sobre as necessidades específicas de organização social e de políticas públicas para promover a inclusão social desse segmento populacional e para combater o preconceito e a discriminação.',
      '22 de agosto de 2019'
    ),
    
    new Post(
      './assets/arraia.jpg',
      'Arraial',
      '\"A verdadeira deficiência é aquela que prende o ser humano por dentro e não por fora, pois até os incapacitados de andar podem ser livres para voar\" Parabéns aos alunos da Apae Piedade pela linda apresentação. Parabéns tbm aos professores e demais funcionários que contribuíram para a realização dessa linda quadrilha',
      '11 de julho de 2019'
    ),
    
    new Post(
      './assets/carnaval.jpg',
      'CARNAPAE',
      'Sobre o CARNAPAE da Apae Piedade hoje, foi tudo mto bonito. Ser especial não limita nem exclui ninguém das diversões, ser especial mesmo é  respeitar as diferenças. É  mto gratificante estar com os alunos e todos os outros profissionais da instituição!',
      '9 de fevereiro de 2018'
    ),
    
    new Post(
      './assets/pascoa.jpg',
      'Páscoa',
      'Páscoa na Apae Piedade, tempo de conversão, de mais amor ao próximo de fortalecermos  ainda mais nossos laços afetivos,onde Jesus nos dá a maior prova de amor,então vamos retribuir amando uns aos outros. Mais que perfeita esta comemoração  junto com alunos e funcionários. Agradecemos a todos pelo carinho. Que o Senhor possa continuar nos abençoando e que nossas vidas sejam de eternas PÁSCOAS!!!!',
      '12 de abril de 2017'
    ),
  ]

  constructor() { }

  getPosts () : Observable<Array<Post>> {
    return of(this.posts).pipe(delay(this.tempoDelaySimulado))
  }

}



