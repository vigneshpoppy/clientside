import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../admin-login/adminauth.service';

@Component({
  selector: 'app-participant-login',
  templateUrl: './participant-login.component.html',
  styleUrls: ['./participant-login.component.css']
})
export class ParticipantLoginComponent implements OnInit {

  constructor(private http : HttpClient,private adminauthservice:AdminauthService,private router: Router) { }
  model:any=[];
  ngOnInit(): void {
    
  }
data:any;
  ValidateRegistration(event:any)
  {
    var ad=new Participant();
    ad.useremail=event.email;
    ad.password=event.pwd;
    

    this.fetchdata(ad);
    
    // console.log(reg.GetEmail);
    
    }
    fetchdata(reg:Participant){
      let Observable=this.adminauthservice.getauth(reg);
      Observable.subscribe((data)=>{
        this.data=data;
        console.log(this.data);
        if(this.data){
          this.router.navigate(['/Participantdashboard']);
         }
         else{
           alert("error password invalid")
         }
      })
  
  }
}
export class Participant{
  useremail:string="";
  password:string="";
}



