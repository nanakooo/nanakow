import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SmallMiService } from '../../service/small-mi.service'
import { SmallMiReq, SmallMiData,SmallMiSwitch } from '../../models/small-mi'
@Component({
  selector: 'app-small-mi',
  templateUrl: './small-mi.component.html',
  styleUrls: ['./small-mi.component.scss']
})

export class SmallMiComponent implements OnInit {
  nzLoading = false;
  title = "新增账号";
  smallMi: Array<SmallMiData> = [];
  smallMiReq: SmallMiReq = {
    current: 1,
    size: 10,
    total: 1
  };
  smallSwitch
  visible = false;
  total = 0;

  smallFrom: FormGroup = new FormGroup({
    assistantAccount: new FormControl(''),
    friends: new FormControl(''),
    name: new FormControl(''),
  });



  constructor(
    private fb: FormBuilder,
    private smallMiService: SmallMiService,
    private message: NzMessageService
  ) {
    // this.smallFrom = this.fb.group({
    //   assistantAccount: ['', [Validators.required]],
    //   friends: ['', [Validators.required]],
    //   name: ['', [Validators.required]],
    // })
  }

  clickSwitch(){
    
  }

  ngOnInit() {
    this.getsmallMi()
  };

  getsmallMi(): void {
    this.nzLoading = true;
    this.smallMiService.getsmallMi(this.smallMiReq).subscribe(res => {
      this.smallMi = res.data.records;
      this.total = res.data.total;
      this.nzLoading = false;
    }, err => {
      this.nzLoading = false;
    });
  }

  add(): void {
    this.title = "新增微小秘账号";
    console.log("{{data.assistantSwitch}}");
    

    this.visible = true;
    this.smallFrom = this.fb.group({
      assistantAccount: ['', [Validators.required]],
      friends: ['', [Validators.required]],
      accountSwitch:['true'],
      name: ['', [Validators.required]],
    });

  }
  getTableData(page) {
    this.smallMiReq.current = page;
    this.getsmallMi();
  };
  details(id) {
    this.visible = true;

  }
  // editSmall(data): void {
  //   this.title = "编辑用户";
  //   this.smallFrom = this.fb.group({
  //     accountAccount: [data.accountAccount, [Validators.required]],
  //     friends: [data.friends, [Validators.required]],
  //     name: [data.name, [Validators.required]],
      
  //   })
  //   this.visible = true;
  // };
  handleCancel(): void {
    this.visible = false;
    
  };
  handleOk(): void {
    let valueList = Object.values(this.smallFrom.value)
    let flag = valueList.every(function (val,index,arr){
      return val != ""
    })
    if (flag) {
      console.log();
      
      this.smallMiService.newsmallMi(this.smallFrom.value).subscribe(res => {
        this.visible = false;
        this.getsmallMi()
      })
    } else {
      this.message.error('请完善信息');
    }
  };
}
