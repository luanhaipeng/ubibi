var mysql = require('mysql');
// "mysql": "^2.13.0",

var _mysql_config = {
    connectionLimit: 10,
    host: '',
    user: '',
    password: '',
    database: '',
    port: 3660
};

var _sql_map = {};

var _query_result_cache = {};

var _connectionPool = null;

function getConnectionPool() {
    if (!_connectionPool) {
        _connectionPool = mysql.createPool(_mysql_config);
    }
    return _connectionPool;
}

function parseQueryResult(results) {
    return results;
}

function toResModel(requestModel, objResult, errorCode, errorMsg) {
    return {
        result: objResult,
        errorCode: errorCode,
        errorMsg: errorMsg
    };
}

function configSqlMap(sql_map) {
    _sql_map = sql_map;
}

function configMySQL(config) {
    _mysql_config = config;
}


function doQueryAsync(requestModel) {
    var sqlId = requestModel['sqlId'];
    var sql = requestModel['sql'];
    var webSql = requestModel['webSql'];
    var params = requestModel['params'] || [];

    if (process.env.NODE_ENV === 'production') {
        sql = sql || _sql_map[sqlId];
    }
    else {
        sql = sql || webSql || _sql_map[sqlId];
    }

    return new Promise(function (resolve, reject) {

        if (!sql) {
            return reject(toResModel(requestModel, null, 2, "not find sql of id :" + sqlId));
        }

        var pool = getConnectionPool();
        pool.getConnection(function (err, connection) {

            if(err){
                reject(err);
                return;
            }

            console.log(sql + "\n");

            connection.query(sql, params, function (error, results, fields) {
                connection.release();
                var sqlResponseModel = null;
                var objResult = parseQueryResult(results);
                if (error) {
                    sqlResponseModel = toResModel(requestModel, objResult, 1, error.toString());
                } else {
                    sqlResponseModel = toResModel(requestModel, objResult, 0, null);
                }
                resolve(sqlResponseModel);
            });
        });

    });
}


function doQueryCacheAsync(requestModel, cacheKey, cacheSecond) {
    if (cacheSecond && cacheSecond > 0 && cacheKey) {
        var cacheObject = _query_result_cache[cacheKey];
        if (cacheObject) {
            var cacheObjectTime = cacheObject['time'];
            if (cacheObjectTime + cacheSecond * 1000 > Date.now()) {
                var cacheResult = cacheObject['result'];
                return Promise.resolve(cacheResult);
            }
        }
    }

    return doQueryAsync(requestModel).then(function (result) {
        _query_result_cache[cacheKey] = {time: Date.now(), result: result};
        return result;
    });
}



function doClearCacheByKey(cacheKey){
    _query_result_cache[cacheKey] = null;
}




function doInsertByModelAsync(model,insertObject){
    var objectKeys = Object.keys(insertObject);

    var tableName = model.tableName;
    var tableFields = model.tableFields;

    //1.insertKeys
    var insertKeys = [];
    var insertKeys0 = [];
    var insertKeys1 = [];
    for (var i = 0; i < objectKeys.length; i++) {
        var obj = objectKeys[i];
        for (var j = 0; j < tableFields.length; j++) {
            var obj1 = tableFields[j];
            if (obj1 === obj) {
                insertKeys.push("`" + obj + "`");
                insertKeys0.push("?");
                insertKeys1.push(obj);
            }
        }
    }
    var insertKeysString = insertKeys.join(',');
    var insertKeys0String = insertKeys0.join(',');

    //2.insertValues
    var insertValues = [];
    for (var i = 0; i < insertKeys1.length; i++) {
        var obj2 = insertKeys1[i];
        var value = insertObject[obj2];
        insertValues.push(value);
    }

    var sql = "INSERT INTO  `" + tableName + "` (" + insertKeysString + ") VALUES(" + insertKeys0String + ")";

    return doQueryAsync({
        sql: sql,
        params: insertValues
    });

}




function joinTableFields(model,excepts){

    //1.exceptsMap
    var exceptsMap = {};
    for (var i = 0; i < excepts.length; i++) {
        var obj = excepts[i];
        exceptsMap[obj] = true;
    }




    //2.fetchFields
    var tableFields = model.tableFields;
    var fetchFields = [];
    for (var i = 0; i < tableFields.length; i++) {
        var obj1 = tableFields[i];
        if(!exceptsMap[obj1]){
            fetchFields.push("`" + obj1+"`");
        }
    }
    return " " +fetchFields.join(",") + " ";

}


module.exports = {
    configMySQL: configMySQL,
    configSqlMap: configSqlMap,
    doQueryAsync: doQueryAsync,
    doQueryCacheAsync: doQueryCacheAsync,
    doClearCacheByKey: doClearCacheByKey,
    doInsertByModelAsync:doInsertByModelAsync,
    joinTableFields:joinTableFields
};
