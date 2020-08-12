import { Component, OnInit } from '@angular/core';
import { ScoketReq, ScoketData } from '../../models/scoket';
import { ScoketService } from '../../service/scoket.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-scoket',
  templateUrl: './scoket.component.html',
  styleUrls: ['./scoket.component.scss']
})
export class ScoketComponent implements OnInit {
  scoketReq: ScoketReq = {
    current: 1,
    ip:	null,
    remark:	null,
    size:	10,
    total: null
  };
  nzLoading = false;
  scoketList: Array<ScoketData> = [];
  scoketForm = new FormGroup({
    client:	new FormControl(''), // server编号
    id: new FormControl(null),
    ipAddr:	new FormControl(''), // ip地址
    remark:	new FormControl(''), // 备注
    secret:	new FormControl('') // 密钥
  });
  scoketReqForm = new FormGroup({
    ip: new FormControl('')
  });
  visible = false;
  title = '新增scoket';

  constructor(
    private scoketService: ScoketService,
    private message: NzMessageService,
    private fb: FormBuilder
  ) {
    this.scoketForm = this.fb.group({
      client:	['', [Validators.required]], // server编号
      id: [null],
      ipAddr:	['', [Validators.required]], // ip地址
      remark:	[''], // 备注
      secret:	['', [Validators.required]] // 密钥
    });
  }

  ngOnInit() {
    this.getScoketlist();
  }

  getScoketlist() {
    this.nzLoading = true;
    this.scoketService.getScoketList(this.scoketReq).subscribe(res => {
      this.nzLoading = false;
      this.scoketList = res.data.records;
      this.scoketReq.total = res.data.total;
    }, err => {
      this.nzLoading = false;
    });
  }
  getTableData(page) {
    this.scoketReq.current = page;
    this.getScoketlist();
  }
  search() {
    this.scoketReq = {...this.scoketReq, ...this.scoketReqForm.value};
    this.getScoketlist();
  }
  add() {
    this.scoketForm = this.fb.group({
      client:	['', [Validators.required]],
      id: [null],
      ipAddr:	['', [Validators.required]],
      remark:	[''],
      secret:	['', [Validators.required]]
    });
    this.visible = true;
  }
  edit(data) {
    this.scoketForm = this.fb.group({
      client:	[data.client, [Validators.required]],
      id: [data.id],
      ipAddr:	[data.ipAddr, [Validators.required]],
      remark:	[data.remark],
      secret:	[data.secret, [Validators.required]]
    });
    this.visible = true;
  }
  del({ id }) {
    this.scoketService.delScoket([id]).subscribe(res => {
      this.getScoketlist();
    });
  }
  handleCancel() {
    this.visible = false;
  }
  handleOk() {
    if (this.scoketForm.valid) {
      this.scoketService.editScoket(this.scoketForm.value).subscribe(res => {
        this.visible = false;
        this.getScoketlist();
      });
    } else {
      this.message.error('请完善scoket信息');
    }
  }
}
