import { StudentService } from './../../services/student.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  students: Student[]|undefined;
  loading: boolean = false;

  constructor(
    public studentService: StudentService,
    public router: Router ) {
    this.getAll();
  }

  getAll(): void {
    this.loading = true;
    this.studentService.getAll().subscribe({
      next: (data: any) => { this.students = data; },
      complete: () => { this.loading = false }
    });
  }

  delete(id: any): void {
    if (confirm('Are you sure you want to continue?'))
      this.studentService.delete(id).subscribe({
        complete: () => { this.getAll(); }
      });
  }

}
