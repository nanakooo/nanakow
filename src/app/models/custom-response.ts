export interface CustomResponse<T> {
  data: T;
  msg: string;
  status: string;
  timestamps: number;
}
