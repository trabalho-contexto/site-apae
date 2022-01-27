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
      'https://external-preview.redd.it/Dxr4Y4pEJ7jxgotnr6HcpRwlbuZLhjsefgnCsnoWx58.jpg?auto=webp&s=4eab04fffb4852ff26307f7599af072eab5d219b',
      'Lorem ipsum',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi veritatis laudantium rerum omnis, quis nihil magnam a temporibus quibusdam vero nulla molestias laborum voluptate iure sunt quidem consectetur fugiat voluptates?',
      '26/01/2022 21:32:13'
    ),
    new Post(
      'https://i.redd.it/ykmd9d490h701.jpg',
      'Lorem ipsum',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi veritatis laudantium rerum omnis, quis nihil magnam a temporibus quibusdam vero nulla molestias laborum voluptate iure sunt quidem consectetur fugiat voluptates?',
      '26/01/2022 21:35:21'
    ),
    new Post(
      'https://i.redd.it/r9xhgi758by61.jpg',
      'Lorem ipsum',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi veritatis laudantium rerum omnis, quis nihil magnam a temporibus quibusdam vero nulla molestias laborum voluptate iure sunt quidem consectetur fugiat voluptates?',
      '26/01/2022 21:35:21'
    ),
    new Post(
      'https://i.redd.it/w0lqgm70zzm61.png',
      'Lorem ipsum',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi veritatis laudantium rerum omnis, quis nihil magnam a temporibus quibusdam vero nulla molestias laborum voluptate iure sunt quidem consectetur fugiat voluptates?',
      '26/01/2022 21:35:21'
    ),
    new Post(
      'https://external-preview.redd.it/Qo-e4s3tux58-GL6r0AmSawojThjA-UW4K8BDzghY8k.jpg?auto=webp&s=4e58045bc36bd94927aa7e378054fcf4a9f7245d',
      'Lorem ipsum',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi veritatis laudantium rerum omnis, quis nihil magnam a temporibus quibusdam vero nulla molestias laborum voluptate iure sunt quidem consectetur fugiat voluptates?',
      '26/01/2022 21:35:21'
    ),
    new Post(
      'https://i.redd.it/vulh7hzvset51.jpg',
      'Lorem ipsum',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi veritatis laudantium rerum omnis, quis nihil magnam a temporibus quibusdam vero nulla molestias laborum voluptate iure sunt quidem consectetur fugiat voluptates?',
      '26/01/2022 21:35:21'
    ),
  ]

  constructor() { }

  getPosts () : Observable<Array<Post>> {
    return of(this.posts).pipe(delay(this.tempoDelaySimulado))
  }

}



