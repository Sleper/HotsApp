import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  heroList: any;

  constructor(private httpClient: HttpClient) {
  }

  getHeroList() {
    return this.httpClient.get('https://api.hotslogs.com/Public/Data/Heroes')
      .map(heroList => this.heroList = heroList);
  }
}


