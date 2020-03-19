import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'talks',
  template: `
    <ion-list inset>
      <p *ngFor="let talk of talks">{{talk.title}}</p>
    </ion-list>
  `
})
export class TalksComponent {

  talks;

  constructor(public http: HttpClient) {
    this.getAllTalks()
  }
  getAllTalks() {
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(result =>{
        this.talks = result;
      })

  }
}
