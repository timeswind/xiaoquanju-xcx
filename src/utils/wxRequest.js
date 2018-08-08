import wepy from 'wepy';
import tip from './tip';
import { USER_SPECICAL_INFO } from './constant';

const apiRequest = async (params = {}, url) => {
    const apiRequestType = url.split("/")[4]
    var header = { 'Content-Type': 'application/json' }
    console.log(url)
    console.log(wepy.getStorageSync(USER_SPECICAL_INFO))
    if (apiRequestType !== 'public') {
        const userSpecialInfo = wepy.getStorageSync(USER_SPECICAL_INFO) || {};
        console.log("apiRequestType", userSpecialInfo)
        if (userSpecialInfo.token) {
            const token = userSpecialInfo.token
            header["Authorization"] = "Bearer " + token
        }
    }

    if (!('no_loading' in params)) {
        tip.loading();
    }

    let data = params.query || {};

    try {
        console.log("wepy.request start", new Date())
        let res = await wepy.request({
            url: url,
            method: params.method || 'GET',
            data: data,
            header: header
        });
        console.log("wepy.request end", new Date())
        if (!('no_loading' in params)) {
            tip.loaded();
        }
        return res;
    } catch (error) {
        //request fail
        if (!('no_loading' in params)) {
            tip.loaded();
        }
        return { data: { success: false } };
    }

};


module.exports = {
    apiRequest
}
