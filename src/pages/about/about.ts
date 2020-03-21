import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {SucessPage} from "../sucess/sucess";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public http: HttpClient) {

  }


  save(title,date){
    this.http.post('http://jsonplaceholder.typicode.com/posts',{title,date})
      .subscribe(x => {

          console.log(x)
          this.navCtrl.push(SucessPage,{talk: {title, date}})

      });
  }
}
