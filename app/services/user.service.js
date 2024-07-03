var User = require("mongoose").model("User");

exports.authenticate = async function(email, password){
    var user = await User.findOne({email: email, password: password}).exec();
    
    return user;
}

exports.getUsers = async function (){
    return await User.find({}).exec();
}

exports.postUser = async function(user){
    let newUser = new User(user);
    
    return await newUser.save();
}

exports.getUser = async function(userId){
    return await User.findById(userId).exec();
}