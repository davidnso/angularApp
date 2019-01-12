import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: '<app-post-create>',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    //newPost = 'Original content';
    enteredValue: string;
   @Output() postCreated = new EventEmitter;
    onAddPost(postInput: HTMLTextAreaElement) {
      console.log();
      const newPost = {text: this.enteredValue};
      this.postCreated.emit(newPost);
    }

}
