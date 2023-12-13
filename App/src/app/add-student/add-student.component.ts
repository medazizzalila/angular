import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../Models/student';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentform!: FormGroup;
  id = 0;
  res = { id: 1, name: '', email: '', gender: '' };
  student = { id: 1, name: '', email: '', gender: '' };

  constructor(private acr: ActivatedRoute, private fb: FormBuilder, ) {}

  ngOnInit(): void {
    this.id = this.acr.snapshot.params['id'];

    this.studentform = this.fb.group({
      id: ['', [Validators.required, Validators.pattern(/^-?\d+$/)]], 
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]], 
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
    });
  
  }
  Submit() {
    console.log('Form submitted:', this.studentform.value);
  }
}
