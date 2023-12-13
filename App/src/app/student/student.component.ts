import { Component } from '@angular/core';
import { Student } from '../Models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  selectedStudent: Student | undefined;
  selectstudent!:number
  aff:boolean=false

  studentlist:Student[]=[  
    {  
      "id": 1,  
      "name": "Jack",  
      "email": "jack@gmail.com",  
      "gender": "male"  
    },  
    {  
      "id": 2,  
      "name": "Peter",  
      "email": "peter@gmail.com",  
      "gender": "male"  
    },  
    {  
      "id": 3,  
      "name": "Mary",  
      "email": "mary@gmail.com",  
      "gender": "female"  
    },  
    {  
      "id": 4,  
      "name": "Smith",  
      "email": "smith@gmail.com",  
      "gender": "male"  
    },  
    {  
      "id": 5,  
      "name": "John",  
      "email": "john@gmail.com",  
      "gender": "male"  
    }  
  ]

  selectStudent(studentId: number) {
    this.selectstudent= studentId;
  }

  showStudents(student: Student) {
    this.selectedStudent = student;
  }
  addstudent(st:Student){
    this.studentlist.push(st)
    this.aff=true
  
  }
  display(){
    this.aff=!this.aff
  }
  constructor(private router: Router) {}
  navigateToAddStudentForm() {
    this.router.navigate(['/add-student']); 
  }
}
