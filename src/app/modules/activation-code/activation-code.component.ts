import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivationCode, ActivationCodeReq } from '../../models/activation-code';
import { ActiveaTionCodeService } from '../../service/activation-code.service';
import { MembersType } from 'src/app/models/members-type';

@Component({
  selector: 'app-activation-code',
  templateUrl: './activation-code.component.html',
  styleUrls: ['./activation-code.component.scss']
})
export class ActivationCodeComponent implements OnInit {
  membersTypeList: Array<MembersType> = [];
  activationCodeList: Array<ActivationCode> = [];
  activationCodeReq: ActivationCodeReq = {
    current: 1,
    size: 10,
    total: 0,
  };
  nzLoading = false;
  visible = false;
  title = '生产激活码';
  activationCodeFrom: FormGroup = new FormGroup({
    count: new FormControl(null),
    length: new FormControl(null),
    vid: new FormControl(null),
    memberType: new FormControl
  });

  constructor(
    private message: NzMessageService,
    private activeaTionCodeService: ActiveaTionCodeService,
    private fb: FormBuilder
  ) {
    this.activationCodeFrom = this.fb.group({
      count: [null, [Validators.required]],
      length: [null, [Validators.required]],
      vid: [null, [Validators.required]],
      memberType: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.getActivationCodeList();
    this.getMemberList();
  }
  getMemberList() {
    this.activeaTionCodeService.getMembersTypeList().subscribe(res => {
      this.membersTypeList = res.data;
    }, err => {
      this.message.error("获取会员列表失败")
    });
  }
  getActivationCodeList() {
    this.nzLoading = true;
    this.activeaTionCodeService.getActiveaTionCodeList(this.activationCodeReq).subscribe(res => {
      this.nzLoading = false;
      this.activationCodeReq.total = res.data.total;
      this.activationCodeList = res.data.records;
    }, err => {
      this.nzLoading = false;
    });
  }
  getTableData(page) {
    this.activationCodeReq.current = page;
    this.getActivationCodeList();
  }
  add() {
    this.activationCodeFrom = this.fb.group({
      count: [null, [Validators.required]],
      length: [null, [Validators.required]],
      vid: [null, [Validators.required]],
      memberType: [null, [Validators.required]]
    });
    this.visible = true;
  }
  handleCancel() {
    this.visible = false;
  }
  handleOk() {
    if (this.activationCodeFrom.valid) {
      this.activeaTionCodeService.createActiveaTionCode(this.activationCodeFrom.value).subscribe(res => {
        this.visible = false;
        this.getActivationCodeList();
      });
    } else {
      this.message.error('请完善生成激活码信息');
    }
  }
  export({ id }) {
    this.activeaTionCodeService.exportActiveaTionCode(id).subscribe();
  }
}
