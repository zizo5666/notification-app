import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Services } from '../services.service';
import { Supervisor } from '../models/supervisor.model';
import { NotificationForm } from '../models/notificationForm.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class Notification implements OnInit{
  addForm: FormGroup;
  errorStatus = '';
  supervisorsList: Supervisor[];
  notificationForm: NotificationForm;
  notificationFormResponse: NotificationForm;
  submitStatus: String;

  constructor(private fb: FormBuilder, private router: Router, private services: Services) {}

  ngOnInit() {
    this.addForm = this.fb.group({
        fname: [null, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(2), Validators.maxLength(35)]],
        lname: [null, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(2), Validators.maxLength(35)]],
        emailCheckbox: [false],
        phoneCheckbox: [false],
        supervisor: [null, [Validators.required]],
        phone: [null, [Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)] ],
        email: [null, [Validators.minLength(10), Validators.maxLength(50), Validators.email]]
    });
    
    this.services.getSupervisors().subscribe(
        responseData => {
            this.supervisorsList = responseData as Supervisor[];
            console.log(this.supervisorsList)
  
        },
        err =>{
          console.log(err);
       })
    

  }

  onSubmit(){
    this.notificationForm = Object.assign({},this.addForm.value);
    this.errorStatus = '';
    
    if(this.addForm.invalid){

        this.errorStatus = "Please make sure every field was filled in.";
        return;
    }else{
      this.services.postNotificationForm(this.notificationForm).subscribe(
        responseData => {
            this.notificationFormResponse = responseData as NotificationForm;
            console.log("Form Submit Successful");
            this.submitStatus = "Form Submit Successful!";
            console.log(this.notificationFormResponse);
  
        },
        err =>{
          console.log(err);
          this.errorStatus = "Service Error. Please try again later.";
       })
      
    }
   }
  

}
