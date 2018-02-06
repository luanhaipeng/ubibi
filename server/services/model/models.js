var TopicModel = {
    tableName: 't_topic',
    tableFields: [
        'id',
        'topic_type',
        'title',
        'description',
        'cover_img',
        'content',
        'author_id',
        'author_info',
        'subject_ids',
        'images',
        'category_id',
        'reply_count',
        'view_count',
        'like_count',
        'create_time',
        'update_time'
    ]
};


var ReplyModel = {
    tableName: 't_reply',
    tableFields: [
        'id',
        'topic_id',
        'content',
        'floor_num',
        'author_id',
        'author_info',
        'create_time',
        'update_time',
        'like_count'
    ]
};


var CategoryModel = {
    tableName: 't_category',
    tableFields: [
        'id',
        'title',
        'author_id',
        'author_info',
        'create_time',
        'update_time'
    ]
};


var SubjectModel = {
    tableName: 't_subject',
    tableFields: [
        'id',
        'title',
        'author_id',
        'author_info',
        'create_time',
        'update_time'
    ]
};


var UserModel = {
    tableName: 't_user',
    tableFields: [
        'id',
        'username',
        'nickname',
        'mobile',
        'email',
        'passwd',
        'avatar',
        'description',
        'role_name',
        'sex',
        'create_time',
        'update_time',
        'score'
    ]
};


var UserMsgModel = {
    tableName: 't_user_msg',
    tableFields: [
        'id',
        'owner_id',
        'owner_info',
        'msg',
        'author_id',
        'author_info',
        'create_time',
        'update_time',
        'reply_msg',
        'reply_time'
    ]
};


var UserTokenModel = {
    tableName: 't_user_token',
    tableFields: [
        'id',
        'uid',
        'token',
        'user_info',
        'create_time',
        'update_time'
    ]
};


var NavCategoryModel = {
    tableName: 't_nav_category',
    tableFields: [
        'id',
        'title',
        'description',
        'create_time',
        'update_time'
    ]
};

var NavItemModel = {
    tableName: 't_nav_item',
    tableFields: [
        'id',
        'title',
        'description',
        'url',
        'cid',

        'create_time',
        'update_time'
    ]
};

//
// create table tmp_splider_shop_info
// (
//     id int auto_increment
// primary key,
//     shopid varchar(100) null,
//     shoptel varchar(100) null,
//     shopname varchar(200) null,
//     create_time varchar(20) null,
//     update_time varchar(20) null,
//     constraint tmp_splider_shop_info_id_uindex
// unique (id)
// )
// ;


var SpiderShopInfoModel = {
    tableName: 'tmp_splider_shop_info',
    tableFields: [
        'id',
        'shopid',
        'shoptel',
        'shopname',
        'create_time',
        'update_time'
    ]
};



module.exports = {
    TopicModel: TopicModel,
    ReplyModel: ReplyModel,
    CategoryModel: CategoryModel,
    SubjectModel: SubjectModel,
    UserModel: UserModel,
    UserMsgModel: UserMsgModel,
    UserTokenModel: UserTokenModel,
    NavCategoryModel: NavCategoryModel,
    NavItemModel: NavItemModel,
    SpiderShopInfoModel:SpiderShopInfoModel
};