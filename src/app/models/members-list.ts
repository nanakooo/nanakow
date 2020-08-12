export interface MembersListReq {
  current: number;
  size: number;
}

export interface MembersData {
  avatar: string;
  code: string;
  createTime: Date;
  expendMoney: number;
  id: string;
  money: number;
  realName:	string;
  tel: string;
  username:	string;
}
