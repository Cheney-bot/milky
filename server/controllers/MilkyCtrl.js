const milky = require('../model/milky');

class MilkyCtrl {
    // 查询商品
    static async findMilky(cate){
        const result = await milky.find(cate);
        return result
    }


}

module.exports = MilkyCtrl;