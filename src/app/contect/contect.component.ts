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
  title = 'fileUpload';
  images;
  multipleImages = [];
 
  Stud: stud[];
  editForm: FormGroup;

  dept = ['SOE','SOS','SOM','SOPH'];
  branch = ['Computer','Civil',"MECH","BSC","MSC","Managment","Information Technology"];
  model =  new stud("17SOECE11048",'Bhautik',21,'11/12/1999',this.dept[0],this.branch[0],7.00,35000);
  constructor(private studservice: StudServiceService,private router: Router,private http: HttpClient) { }
  
  submitted = false;

  onSubmit() { 
    
  
    
    this.studservice.savestud(this.model).subscribe(data => console.log("success", data), error => console.log("error", error)); 
  
    this.router.navigate(['/home'])  
  }
  ngOnInit() {
    }
    selectImage(event) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.images = file;
      }
    }
    Upload(){
      const formData = new FormData();
      formData.append('file', this.images);
  
      this.http.post<any>('http://localhost:5000/file', formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    }
    
  }
