import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'channels';
  currentState = 'initial';
  ngOnInit() {
    AOS.init();
  }

}
