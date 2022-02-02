import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Post from 'src/modelo/post.modelo';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public posts: Array<Post> = new Array();
  public loadingPosts: boolean = false

  constructor(
    private feedService: FeedService,
    private location: Location
  ) { 
    this.loadPosts()
  }

  loadPosts (): void {
    this.loadingPosts = true
    this.feedService
      .getPosts()
      .subscribe(( data: Array<Post> ) => {
        this.posts = data ? data : new Array()
      }, (_) => {
        this.loadingPosts = false
      }, () => {
        this.loadingPosts = false
      })
  }

  ngOnInit(): void {
    
  }

  voltar () {
    this.location.back()
  }

}
