import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { MembersListService } from '../../../service/members-list.service';

@Component({
  selector: 'app-members-list-add',
  templateUrl: './members-list-add.component.html',
  styleUrls: ['./members-list-add.component.scss']
})
export class MembersListAddComponent implements OnInit{
  @Input()
  nzVisible = false;
  @Input()
  membersData
  @Output()
  nzVisibleChange: EventEmitter<boolean> = new EventEmitter();
  @Output()
  change: EventEmitter<null> = new EventEmitter();

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
    private mesage: NzMessageService,
    private membersListService: MembersListService
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
    
  };
  handleCancel(): void {
    this.nzVisible = false;
    this.nzVisibleChange.emit(this.nzVisible)
  };
  handleOk(): void {
    if(this.membersFrom.valid) {
      this.membersListService.editMember(this.membersFrom.value).subscribe(res => {
        this.change.emit();
        this.nzVisible = false;
        this.nzVisibleChange.emit(this.nzVisible);
      })
    } else {
      this.mesage.error('请完善信息');
    }
  };
};
