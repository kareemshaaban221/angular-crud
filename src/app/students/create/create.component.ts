import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Student } from './../../models/Student';
import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  disabled: boolean = false;

  constructor(
    public studentService: StudentService,
    public router: Router,
    public location: Location,
    public student: Student  ) { }

  store(form: NgForm) {
    if (form.valid) {
      this.disabled = true;
      this.studentService.post(this.student).subscribe({
        complete: () => {
          this.disabled = false;
          this.router.navigateByUrl('/students');
        }
      });
    }
  }

}
