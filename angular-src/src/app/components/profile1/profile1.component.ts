import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.scss']
})

export class Profile1Component implements OnInit {
  user: Object;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getProfile()
      .subscribe(data => {
        this.user = data.user;
      },
      err => {
        console.log(err);
        return false;
      });
  }

}
