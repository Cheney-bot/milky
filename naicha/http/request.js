import {HOST} from "./api"

class Request {
  constructor(HOST){
    this.baseUrl = HOST;
  };

  async request(method,url,data={}){
    const header = {
      Authorization:'Bearer '+wx.getStorageSync('TOKEN')
    };
    const result = await wx.request({
      url:this.baseUrl+url,
      method,
      data,
      header,
      success:async (data)=>{
        return data
      }
    })
  };

  get(url,data={}){
    return this.request('GET',url,data);
  };

  post(url,dat={}){
    return this.request('POST',url,data);
  };

}

export default new Request(HOST)