/**
 * Created by 罗志伟 on 2017/6/17.
 */
import axios from 'axios';

//获取新闻列表
const BaseUrl = 'https://wangyi.butterfly.mopaasapp.com/news/api?type=war&page=1&limit=10'

//获取某条新闻的详情页

const baseurl = 'https://wangyi.butterfly.mopaasapp.com/detail/api?simpleId=1'

export default  {
  getNewList(type){
    console.log(axios.get(`api/news/${type}`))
    return axios.get(`api/news/${type}`)
  }
};

