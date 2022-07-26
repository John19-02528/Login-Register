import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-screen',
  templateUrl: './new-screen.component.html',
  styleUrls: ['./new-screen.component.scss'],
})
export class NewScreenComponent implements OnInit {
name = 'I am John Arthur!';
isReleased = false;




public person: any = [ //property
{id:1, fname: 'John Palis', age: 20, gender: 0}, // 0 - male
{id:2, fname: 'Inah Hernandez', age: 21, gender: 1}, // 1 - female
{id:3, fname: 'Joshua Ebora', age: 21, gender: 0}, // 0 - male
];

  constructor() { }

  ngOnInit() {}

}
