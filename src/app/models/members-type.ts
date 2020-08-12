export interface MembersType {
  createAccountNumber: number; // 创建账号个数
  name: string; // 会员类型名称
  createTime: Date; // 创建时间
  id: string;
  oneProfit: number; // 1级推广收益
  syncNumber: number; // 每日同步条数
  threeProfit: number; // 3级推广收益
  twoProfit: number; // 2级推广收益
  useViewTemp: number; // 可用视图模板
}

export interface MembersTypeReq {
  current: number;
  size: number;
}
