import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from '../../core/services/ui/app.layout.service';
import { AuthService, User } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formLogin!: FormGroup;
  public isLoading: boolean = false;
  constructor(
    public layoutService: LayoutService,
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this._fb.group({
      identifier: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  public loginUser(): void {
    this.isLoading = true;
    this._authService.loginUser(this.formLogin.value).subscribe(
      (user: User) => {
        if (user.jwt) {
          this.isLoading = false;
          localStorage.setItem('user', JSON.stringify(user));
          this._router.navigate(['/']);
        } else {
          this.isLoading = false;
          console.log('login.component LINE 31 =>', user);
        }
      },
      (error) => console.log(error)
    );
  }
}
