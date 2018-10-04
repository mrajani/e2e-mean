import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent implements OnInit {

  enteredValue = '';
  newPost = 'NO Content';

  constructor() { }

  ngOnInit() { }

  onAddPost(post) {
    this.newPost = this.enteredValue;
  }
}
