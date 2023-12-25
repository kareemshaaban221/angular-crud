import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  id: string|null;
  disabled: boolean = false;

  constructor(
    public studentService: StudentService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public location: Location,
    public student: Student  ) {

    this.id = activatedRoute.snapshot.paramMap.get('id');
    this.studentService.getOne(this.id).subscribe(
      (data: any) => { this.student = data; }
    );

  }

  update(form: NgForm, id: any) {
    if (form.valid) {
      this.disabled = true;
      this.studentService.update(this.student, id).subscribe({
        complete: () => {
          this.disabled = false;
          this.location.back();
        }
      });
    }
  }

}
