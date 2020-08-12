import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountService } from '../service/account.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private accountService: AccountService,
    private router: Router,
    private message: NzMessageService
  ) {}

  user: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  clear(): void {
    this.user.value.password = '';
  };
  login(header): void {
    if(this.user.value.password === '') {
      this.message.error("密码不能为空")
      this.clear()
      return
    }
    if(this.user.value.username === '') {
      this.message.error("用户名不能为空")
      this.clear()
      return
    }
    this.accountService.login(this.user.value, header).subscribe(res => {
      if(+res.status > -1) {
        this.accountService.token = res.data;
        this.router.navigateByUrl('/member-list');
      } else {
        this.clear()
      }
    });
  }
}
