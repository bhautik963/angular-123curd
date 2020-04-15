import { Component, OnInit } from '@angular/core';
import{stud} from '../shared/stud';
import { StudServiceService } from './../stud-service.service';
import {  Router  } from '@angular/router';  
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent implements OnInit {
  
  customer: stud = new stud();
  submitted = false;

  constructor(private studservice: StudServiceService,private router: Router,private http: HttpClient) { }
  
  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new stud();
  }

  save() {
    this.studservice.createCustomer(this.customer);
    this.customer = new stud();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
