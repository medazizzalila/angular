import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { NotfoundComponent } from './notfound/notfound.component';

const ROUTES:Routes = [

  {path:"home",component:HomeComponent},

  { path: 'students', component: StudentComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
