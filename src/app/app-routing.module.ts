import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './students/index/index.component';
import { ShowComponent } from './students/show/show.component';
import { CreateComponent } from './students/create/create.component';
import { EditComponent } from './students/edit/edit.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'students', component: IndexComponent},
  {path: 'students/create', component: CreateComponent},
  {path: 'students/edit/:id', component: EditComponent},
  {path: 'students/:id', component: ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
