import { Component, Input,OnInit } from '@angular/core';
import {Course} from '../model/Course';
import {COURSES} from  '../../db-data';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
@Input()
 course:Course;
  constructor() { }

  ngOnInit() {
  }

}