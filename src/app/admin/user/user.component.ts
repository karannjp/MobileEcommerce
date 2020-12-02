import { HttpClientService } from './../../service/http-client.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users!:Array<User>
  selectedUser!: User;
  action!: string;
  
  constructor(private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      this.refreshData();
     }
   
     refreshData() {
       this.httpClientService.getUsers().subscribe(
         response => this.handleSuccessfulResponse(response),
       );
   
       this.activatedRoute.queryParams.subscribe(
         (params) => {
           this.action = params['action']
         }
       );
     }
   

    


     handleSuccessfulResponse(response: User[]) {
       this.users = response;
       console.log(this.users);
     }
   
     addUser() {
       this.selectedUser = new User();
       this.router.navigate(['admin', 'users'], { queryParams: { action: 'add' } });
     }
     viewUser(id: number) {
      this.router.navigate(['admin','users'], {queryParams : {id, action: 'view'}});
    }

}
