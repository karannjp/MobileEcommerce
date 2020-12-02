import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  @Input()
  user!: User;

  @Output()
  userAddedEvent = new EventEmitter();

  newUser!: User;
  
  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit()  {
    this.newUser = Object.assign({}, this.user);

  }

  addUser() {
    this.httpClientService.addUser(this.newUser).subscribe(
      (user) => {
        this.userAddedEvent.emit();
        this.router.navigate(['admin', 'users']);
      }
    );

    }
}
