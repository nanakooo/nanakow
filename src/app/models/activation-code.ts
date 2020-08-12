export interface ActivationCode {
  code: string; // 激活码
  createTime: Date;
  userName: string; // 绑定用户姓名
  vipName: string;
}

export interface ActivationCodeReq {
  current: number;
  size: number;
  total: number;
}

export interface CreateActivationCode {
  count: number;
  length: number;
  vid: string;
  memberType: string;
}
