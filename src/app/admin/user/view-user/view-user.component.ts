import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

 @Input()
 user!:User;

  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.httpClientService.deleteUser(this.user.id).subscribe(
      (user) => {
        this.router.navigate(['admin', 'users']);
      }
    );
  }


}
