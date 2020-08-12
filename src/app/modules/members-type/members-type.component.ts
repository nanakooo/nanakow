import { Component, OnInit } from '@angular/core';
import { MembersType, MembersTypeReq } from '../../models/members-type';
import { MembersTypeService } from '../../service/members-type.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-members-type',
  templateUrl: './members-type.component.html',
  styleUrls: ['./members-type.component.scss']
})
export class MembersTypeComponent implements OnInit {
  membersTypeList: Array<MembersType> = [];
  membersTypeReq: MembersTypeReq = {
    current: 1,
    size: 10
  };
  nzLoading = false;
  visible = false;
  total = 0;
  title = '新增会员种类';
  membersTepyFrom: FormGroup = new FormGroup({
    createAccountNumber: new FormControl(null),
    createBy: new FormControl(''),
    createTime: new FormControl(''),
    name: new FormControl(''),
    oneProfit: new FormControl(null),
    syncNumber: new FormControl(null),
    threeProfit: new FormControl(null),
    twoProfit: new FormControl(null),
    useViewTemp: new FormControl(null),
    id: new FormControl(null)
  });

  constructor(
    private membersTypeService: MembersTypeService,
    private fb: FormBuilder,
    private message: NzMessageService
  ) {
    this.membersTepyFrom = this.fb.group({
      createAccountNumber: [null, [Validators.required]],
      createBy: [''],
      createTime: [''],
      name: ['', [Validators.required]],
      oneProfit: [null, [Validators.required]],
      syncNumber: [null, [Validators.required]],
      threeProfit: [null, [Validators.required]],
      twoProfit: [null, [Validators.required]],
      useViewTemp: [null, [Validators.required]]
    });
  }
  ngOnInit() {
    this.getMemebersTypeList();
  }
  getMemebersTypeList() {
    this.nzLoading = true;
    this.membersTypeService.getMembersTypeList().subscribe(res => {
      this.membersTypeList = res.data;
      this.total = this.membersTypeList.length;
      this.nzLoading = false;
    }, err => {
      this.nzLoading = false;
    });
  }
  getTableData(page) {
    this.membersTypeReq.current = page;
  }
  add() {
    this.visible = true;
    this.membersTepyFrom = this.fb.group({
      createAccountNumber: [null, [Validators.required]],
      createBy: [''],
      createTime: [''],
      name: ['', [Validators.required]],
      oneProfit: [null, [Validators.required]],
      syncNumber: [null, [Validators.required]],
      threeProfit: [null, [Validators.required]],
      twoProfit: [null, [Validators.required]],
      useViewTemp: [null, [Validators.required]]
    });
  }
  editMembersType(data) {
    this.visible = true;
    this.membersTepyFrom = this.fb.group({
      createAccountNumber: [data.createAccountNumber, [Validators.required]],
      createBy: [data.createBy],
      createTime: [data.createTime],
      name: [data.name, [Validators.required]],
      oneProfit: [data.oneProfit, [Validators.required]],
      syncNumber: [data.syncNumber, [Validators.required]],
      threeProfit: [data.threeProfit, [Validators.required]],
      twoProfit: [data.twoProfit, [Validators.required]],
      useViewTemp: [data.useViewTemp, [Validators.required]],
      id: [data.id],
    });
  }
  delMembersType({id}) {

  }
  handleCancel() {
    this.visible = false;
  }
  handleOk() {
    if (this.membersTepyFrom.valid) {
      this.membersTypeService.eidtMembersType(this.membersTepyFrom.value).subscribe(res => {
        this.visible = false;
        this.getMemebersTypeList();
      });
    } else {
      this.message.error('请完善会员种类信息');
    }
  }
}
