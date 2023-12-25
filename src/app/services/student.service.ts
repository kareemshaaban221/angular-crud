import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/Student';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = environment.api_url + "/students";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Student> {
    return this.http.get<Student>(this.url);
  }

  getOne(id: number|string|null): Observable<Student> {
    return this.http.get<Student>(this.url + '/' + id);
  }

  post(model: Student): Observable<Student> {
    return this.http.post<Student>(this.url, model);
  }

  delete(id: number): Observable<Student> {
    return this.http.delete<Student>(this.url + '/' + id);
  }

  update(model: Student, id: number): Observable<Student> {
    return this.http.put<Student>(this.url + '/' + id, model);
  }

}
