import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
  // posts = [
  //   {title: 'First post', content: 'First Post Content Read Moby Dick'},
  //   {title: 'Second post', content: 'Second Post Content Read Tom Sawyer'},
  //   {title: 'Third post', content: 'Third Post Content Read Raven'}
  // ];
  @Input() posts = [];

  constructor() { }

  ngOnInit() { }
}
