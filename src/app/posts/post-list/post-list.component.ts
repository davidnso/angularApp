import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-post-output',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})export class PostListComponent {
 @Input() posts = [];
  addPostToList(userpost) {
    this.posts.push(userpost);
  }
}
