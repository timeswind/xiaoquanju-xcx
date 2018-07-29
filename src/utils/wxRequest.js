import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip'
import { USER_SPECICAL_INFO } from './constant'

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async (params = {}, url) => {
    console.log('wxRequest called')
    tip.loading();
    let data = params.query || {};
    data.sign = SIGN;
    data.time = TIMESTAMP;
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/json' },
    });
    tip.loaded();
    return res;
};

const apiRequest = async (params = {}, url) => {
    const apiRequestType = url.split("/")[4]
    var header = { 'Content-Type': 'application/json' }
    console.log(params)
    if (apiRequestType !== 'public') {
        const userSpecialInfo = wepy.getStorageSync(USER_SPECICAL_INFO) || {};
        const token = userSpecialInfo.token
        header["Authorization"] = "Bearer " + token
    }

    tip.loading();
    let data = params.query || {};
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: header,
    });
    tip.loaded();
    return res;
};


module.exports = {
    wxRequest,
    apiRequest
}
