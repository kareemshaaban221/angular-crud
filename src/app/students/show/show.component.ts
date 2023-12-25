import { StudentService } from './../../services/student.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  id: string|null;

  constructor(
    public studentService: StudentService,
    public activatedRoute: ActivatedRoute,
    public student: Student ) {

    this.id = activatedRoute.snapshot.paramMap.get('id');
    studentService.getOne(this.id).subscribe((data: any) => { this.student = data; });
    
  }

}
