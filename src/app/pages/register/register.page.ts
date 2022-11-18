import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  authService: any;
  router: any;
  constructor() { }

  ngOnInit() {
  }
  register(form) {
    this.authService.RegisterPage(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }
}
