import { Component } from '@angular/core';
import {COURSES} from  '../db-data';
import {Course} from 'model/Course'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 // name = 'Angular';
 courses:Course=COURSES;
}
