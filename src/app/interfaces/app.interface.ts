export interface IResponse<T> {
  payload: T;
  ok: boolean;
  error: any;
}
