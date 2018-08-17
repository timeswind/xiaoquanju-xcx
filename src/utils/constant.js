export const TAGTRACK_ID = "TAGTRACK_ID"

export const USER_SPECICAL_INFO = "userSpecialInfo";

export const USER_INFO = "userInfo";

export const SYSTEM_INFO = "systemInfo";

export const ADDRESS_ID = "addressId";

export const SEL_CLASS_CODE = "selClassCode";

export const DEFAULT_ROOT_CATEGORY_SCOPE = "pet.supply.main.category";

export const IMAGE_ORIGINAL_URL = "https://	xiaoquanju-1257075795.picsh.myqcloud.com"
export const IMAGE_CDN_URL = "https://xiaoquanju-1257075795.image.myqcloud.com"

export const CATEGORY_ICON_RESIZE_SUFFIX = "imageMogr2/thumbnail/60x/format/png/interlace/0"
export const GOOD_IMAGE_SMALL_SQUARE_SUFFIX = "imageMogr2/thumbnail/!80x80r/format/jepg/interlace/0/quality/100|imageMogr2/gravity/center/crop/80x80"
export const HOME_DISCOVER_GOOD_SUFFIX = "imageMogr2/thumbnail/!400x400r/format/jepg/interlace/0/quality/70|imageMogr2/gravity/center/crop/400x400"

export const TEMPORARY_ORDER_DATA = "TEMPORARY_ORDER_DATA";


export const tradeStatusTranslateCN = {
    "WAIT_BUYER_PAY": "等待付款",
    "WAIT_SELLER_SEND_GOODS": "等待发货",
    "PARTIAL_SHIPPED": "部分发货",
    "WAIT_BUYER_CONFIRM_GOODS": "全部发货",
    "TRADE_FINISHED": "交易成功",
    "TRADE_CLOSED": "已退款",
    "TRADE_CLOSED_WITHOUT_PAYMENT": "已关闭",
    "WAIT_SELLER_CONFIRM": "已通知店家",
    "SELLER_CONFIRMED": "店家已确认",
    "TRADE_BUYER_SIGNED": "已签收" //货到付款
}

    //WAIT_BUYER_PAY(等待买家付款)
    //WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款)
    //WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货)
    //TRADE_BUYER_SIGNED(买家已签收,货到付款专用)
    //TRADE_FINISHED(交易成功)
    //TRADE_CLOSED(付款以后用户退款成功，交易自动关闭)
    //TRADE_CLOSED_WITHOUT_PAYMENT(付款以前，卖家或买家主动关闭交易)