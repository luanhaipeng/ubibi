
function isFunction(obj){
    return Object.prototype.toString.call(obj) === "[object Function]";
}
function isPromise(obj) {
    if (!obj) {
        return false;
    }

    if (obj instanceof Promise) {
        return true;
    }

    return isFunction(obj.then) && isFunction(obj.catch)
}


function sendPromise (handler) {
    return function (req, res) {
        var result = handler(req, res);
        if (isPromise(result)) {
            result.then(function (d) {
                res.send(d || {errorCode: 1, msg: 'ok'});
            }, function (e) {
                if (typeof e === 'string') {
                    if(e==='not_login'){
                        res.send({errorCode: 2, msg: "用户未登录"});
                    }else {
                        res.send({errorCode: 1, msg: e});
                    }
                } else {
                    res.send(e || {errorCode: 1, msg: 'error'});
                }
            });
            return;
        }

        if (result) {
            res.send(result);
        }

    }
}


function handleRequest(handler){
    return function (req, res){
        var sendResult =  sendPromise(handler);
        sendResult(req,res);
    };
}




function getSqlResultObject(d){
    if(d && d.result && d.result[0]){
        return d.result[0];
    }
    return null;
}


function toAuthorInfo(userInfo) {
    return {
        uid: userInfo.id,
        nickname: userInfo.nickname,
        avatar: userInfo.avatar,
        description: userInfo.description
    };
}


module.exports = {
    toAuthorInfo:toAuthorInfo,
    getSqlResultObject:getSqlResultObject,


    handleRequest:handleRequest,
    sendPromise:sendPromise
};