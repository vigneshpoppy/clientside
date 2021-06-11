import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {  AdminauthService } from './adminauth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private http : HttpClient,private adminauthservice:AdminauthService,private router: Router) { }
  model:any=[];
  ngOnInit(): void {
    
  }
data:any;
  ValidateRegistration(event:any)
  {
    var ad=new RegData();
    ad.SetEmail=event.email;
    ad.SetPass=event.pwd;
    if(ad.GetEmail=="admin123@gmail.com"&&ad.GetPass=="admin123"){
      this.router.navigate(['/Admindashboard']);

    }
    else{
      alert("invalid Credential");
    }
    
    }
//     fetchdata(reg:Admin){
//       let Observable=this.adminauthservice.getauth(reg);
//       Observable.subscribe((data)=>{
//         this.data=data;
//         console.log(this.data);
//         if(this.data){
//           this.router.navigate(['/Speakerdashboard']);
//          }
//          else{
//            alert("error password invalid")
//          }
//       })
  
//   }
// }
// export class Admin{
//   Speakeremail:string="";
//   password:string="";
// }
  }

  export class RegData
  {

  private  adminemail:string="";
  
  public set SetEmail(_eml:string)
  {
  
    this.adminemail=_eml;
  }
  
  public get GetEmail():string{
    return  this.adminemail;
  }
  
  
  private  password:string="";
  
  public set SetPass(_p:string)
  {
  
    this.password=_p;
  }
  
  public get GetPass():string{
    return  this.password;
  }
  
  
  }
  
