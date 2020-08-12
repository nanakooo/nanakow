import { Component, OnInit } from '@angular/core';
import { ResourceServiceReq, ResourceServiceData } from '../../models/resource-service';
import { ResourceService } from '../../service/resource-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-resource-service',
  templateUrl: './resource-service.component.html',
  styleUrls: ['./resource-service.component.scss']
})
export class ResourceServiceComponent implements OnInit {
  nzLoading = false;
  resourceServiceReq: ResourceServiceReq = {
    accessAddr: null,
    current: 0,
    dataAddr: null,
    hitCount: null,
    pages: null,
    remark: null,
    searchCount: null,
    serverIp: null,
    size: 10,
    total: null,
  };
  resourceServiceList: Array<ResourceServiceData> = [];
  visible = false;
  title = '新增资源服务';
  resourceServiceFrom = new FormGroup({
    accessAddr:	new FormControl(''),
    dataAddr:	new FormControl(''),
    id:	new FormControl(null),
    remark:	new FormControl(''),
    serverIp:	new FormControl(''),
  });
  resourceServiceReqForm = new FormGroup({
    accessAddr:	new FormControl(''),
    dataAddr:	new FormControl(''),
    serverIp:	new FormControl('')
  });

  constructor(
    private resourceService: ResourceService,
    private fb: FormBuilder,
    private message: NzMessageService
  ) {
    this.resourceServiceFrom = this.fb.group({
      accessAddr:	['', [Validators.required]],
      dataAddr:	['', [Validators.required]],
      id:	[null],
      remark:	[''],
      serverIp:	['', [Validators.required]]
    });
  }
  ngOnInit() {
    this.getResourceServiceList();
  }

  search() {
    this.resourceServiceReq = {...this.resourceServiceReq, ...this.resourceServiceFrom.value};
    this.getResourceServiceList();
  }

  getResourceServiceList() {
    this.nzLoading = true;
    this.resourceService.getResourceServiceList(this.resourceServiceReq).subscribe(res => {
      this.nzLoading = false;
      this.resourceServiceReq.total = res.data.total;
      this.resourceServiceList = res.data.records;
    }, err => {
      this.nzLoading = false;
    });
  }
  getTableData(page) {
    this.resourceServiceReq.current = page;
  }
  add() {
    this.visible = true;
    this.title = '新增资源服务';
    this.resourceServiceFrom = this.fb.group({
      accessAddr:	['', [Validators.required]],
      dataAddr:	['', [Validators.required]],
      id:	[null],
      remark:	[''],
      serverIp:	['', [Validators.required]]
    });
  }
  edit(data) {
    this.visible = true;
    this.title = '修改资源服务';
    this.resourceServiceFrom = this.fb.group({
      accessAddr:	[data.accessAddr, [Validators.required]],
      dataAddr:	[data.dataAddr, [Validators.required]],
      id:	[data.id],
      remark:	[data.remark],
      serverIp:	[data.serverIp, [Validators.required]]
    });
  }
  del({ id }) {
    this.resourceService.delResourceService([id]).subscribe(res => {
      this.getResourceServiceList();
    });
  }
  handleCancel() {
    this.visible = false;
  }
  handleOk() {
    if (this.resourceServiceFrom.valid) {
      this.resourceService.eidtResourceService(this.resourceServiceFrom.value).subscribe(res => {
        this.visible = false;
        this.getResourceServiceList();
      });
    } else {
      this.message.error('请完善资源服务信息');
    }
  }
}
