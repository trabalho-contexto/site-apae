import { Component, OnInit } from '@angular/core';
import Post from 'src/modelo/post.modelo';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public posts: Array<Post> = new Array();

  constructor() { }

  ngOnInit(): void {
    
  }

}
