import { Component, OnInit } from '@angular/core';

interface Card {
  
}

@Component({
  selector: 'gdsc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: Card[] = [
    {

    },
    {

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
