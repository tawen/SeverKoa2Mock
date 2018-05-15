
var Mock = require('mockjs') //引入mockjs
const Random = Mock.Random; 
const mock = Mock.mock; 
generateJson=(data)=>{
    return mock({
        "status|1": ["OK","ERROR"],
        "message": function() {
            if(this.status=="OK"){
                return "数据返回成功"
            }else{
                return "数据返回失败"
            }
        },
        "content": data
    })
}
module.exports = generateJson