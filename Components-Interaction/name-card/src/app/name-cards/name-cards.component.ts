import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-cards',
  templateUrl: './name-cards.component.html',
  styleUrls: ['./name-cards.component.css']
})
export class NameCardsComponent implements OnInit {
@Input()
cardName: string;
@Input()
email: string;
@Input()
phone: string;

  constructor() { }

  ngOnInit() {
  }

}
