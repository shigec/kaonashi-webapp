import axios from 'axios';

export interface IHttpServiceParams {
  url: string,
  params?: {},
  headers?: {},
};

export default class HttpService {

  private static _instance: HttpService;
  
  private constructor() {}

  public static get instance(): HttpService {
    if (!this._instance) {
      this._instance = new HttpService();
    }
    return this._instance;
  }

  public get(params: IHttpServiceParams): Promise<any> {
    return axios.get(params.url, {
      headers: params.headers,
      params: params.params,
    });
  }
}
