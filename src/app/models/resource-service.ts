export interface ResourceServiceReq {
  accessAddr: string;
  current: number;
  dataAddr: string;
  hitCount: boolean;
  pages: number;
  remark: string;
  searchCount: boolean;
  serverIp: string;
  size: number;
  total: number;
}

export interface ResourceServiceData {
  accessAddr:	string; // 资源访问地址
  dataAddr:	string; // 数据存放地址
  id:	string;
  remark:	string; // 备注
  serverIp:	string; // 服务器ip
}
