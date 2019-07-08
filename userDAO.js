require('dotenv/config');
const UserModel = require('./models/User');
var Sequelize = require('sequelize');

//Initialize sequlize with database settings
var sqcon = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_CONNECTION_SQLITE
});

//Authenticate that connection was established with confirmation message
sqcon.authenticate().then(() =>{
    console.log('Connection has been established from sequelize');
})

//Load the user model
const User = UserModel(sqcon,Sequelize);

//Retrieves list of users
var getAllUsers = function(){
    return User.findAll({raw: true})
} 
//Get single user
var getSingleUser = function(id) {
    return User.findAll({
        raw: true,
        where : {
            UserID: id
        }
    })
}
//Post user
var postUser = function(req,res){
    var user = {
        UserID: req.body.UserID,
        DisplayName: req.body.DisplayName,
        Admin: req.body.Admin,
        Password: req.body.Password
    }
    User.create(user).then((res)=>{
            console.log("User created!");
            console.log(res.dataValues);
    });
    
}
//Delete user
var deleteUser = function(id){
    User.destroy({
        where: {
            UserID: id
        }
    })
}
//Update user
var updateUser = function(user,id) 
{
    User.update(user,{
        where: {
            UserID: id
        },
        returning: true,
         plain: true
    });
}


module.exports.getAllUsers = getAllUsers;
module.exports.getSingleUser = getSingleUser;
module.exports.postUser = postUser;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;
       

        
        

