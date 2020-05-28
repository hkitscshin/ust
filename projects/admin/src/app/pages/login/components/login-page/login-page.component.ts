import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../../../ust/src/lib/modules/auth/state';
import { Notifier } from '../../../../core/services/notifier.service';

@Component({
  selector: 'ust-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm = this.createForm();

  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notifier: Notifier
  ) { }

  ngOnInit() {
  }

  async login() {
    const formValue = this.loginForm.value;

    this.isLoading = true;

    try {
      await this.authService.loginWithEmail(formValue.email, formValue.password);
      await this.router.navigate(['/dashboard']);
    } catch (err) {
      this.notifier.error(err.message);
    }

    this.isLoading = false;
  }

  private createForm() {
    return this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
}
