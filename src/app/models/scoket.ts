export interface ScoketReq {
  current: number;
  ip:	string;
  remark:	string;
  size:	number;
  total: number;
}

export interface ScoketData {
  client:	string; // server编号
  id: string;
  ipAddr:	string; // ip地址
  remark:	string; // 备注
  secret:	string; // 密钥
}
