import { Component, OnInit } from '@angular/core';
import { MembersListService } from '../../service/members-list.service'
import { MembersListReq, MembersData } from '../../models/members-list'
import { NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit{
  nzLoading = false
  title = "新增用户"
  membersList: Array<MembersData> = [];
  membersListReq: MembersListReq = {
    current: 1,
    size: 10 
  }
  visible = false;
  total = 0;
  membersFrom: FormGroup = new FormGroup({
    avatar: new FormControl(''),
    code: new FormControl(''),
    createTime: new FormControl(null),
    expendMoney: new FormControl(null),
    id: new FormControl(null),
    money: new FormControl(null),
    realName:	new FormControl(''),
    tel: new FormControl(''),
    username:	new FormControl('')
  });

  constructor(
    private fb: FormBuilder,
    private membersListService: MembersListService,
    private message: NzMessageService
  ) {
    this.membersFrom = this.fb.group({
      avatar: ['', [Validators.required]],
      code: ['', [Validators.required]],
      createTime: ['', [Validators.required]],
      expendMoney: ['', [Validators.required]],
      money: ['', [Validators.required]],
      realName: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      username: ['', [Validators.required]]
    })
  };
  ngOnInit() {
    this.getmembersList()
  };
  getmembersList():void {
    this.nzLoading = true;
    this.membersListService.getmembersList(this.membersListReq).subscribe(res => {
      this.membersList = res.data.records;
      this.total = res.data.total;
      this.nzLoading = false;
    }, err=> {
      this.nzLoading = false;
    });
  };
  add():void {
    this.membersFrom = this.fb.group({
      avatar: ['', [Validators.required]],
      code: ['', [Validators.required]],
      createTime: ['', [Validators.required]],
      expendMoney: ['', [Validators.required]],
      money: ['', [Validators.required]],
      realName: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      username: ['', [Validators.required]]
    })
    this.title = "新增用户";
    this.visible = true;
  };
  delMember({id}):void {
    const ids = [id];
    this.membersListService.delMember(ids).subscribe(res => {
      this.message.success("删除用户成功");
      this.getmembersList();
    }, err=> {
      this.message.error("删除用户失败");
    })
  };
  getTableData(page) {
    this.membersListReq.current = page;
    this.getmembersList();
  };
  editMember(data): void {
    this.title = "编辑用户";
    this.membersFrom = this.fb.group({
      avatar: [data.avatar, [Validators.required]],
      code: [data.code, [Validators.required]],
      createTime: [data.createTime, [Validators.required]],
      expendMoney: [data.expendMoney, [Validators.required]],
      money: [data.money, [Validators.required]],
      realName: [data.realName, [Validators.required]],
      tel: [data.tel, [Validators.required]],
      username: [data.username, [Validators.required]]
    })
    this.visible = true;
  };
  handleCancel(): void {
    this.visible = false;
  };
  handleOk(): void {
    if(this.membersFrom.valid) {
      this.membersListService.editMember(this.membersFrom.value).subscribe(res => {
        this.visible = false;
        this.getmembersList()
      })
    } else {
      this.message.error('请完善信息');
    }
  };
}
