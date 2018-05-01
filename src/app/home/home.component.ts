import {Component, OnInit} from '@angular/core';
import {ServicesComponent} from '../services/services.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes: any;
  name: string;

  constructor(private dataService: ServicesComponent) {
  }

  ngOnInit() {
    this.dataService.getHeroList()
      .subscribe(heroList => {
        this.heroes = heroList;
        console.log(this.heroes);
      });
    console.log('Connected');
  }
}
