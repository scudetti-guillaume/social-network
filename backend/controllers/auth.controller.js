const UserModel = require("../models/user.model");
const jwt = require('jsonwebtoken');

// const durationTokenLogin = 1*24*60*60*1000
const durationTokenLogin = "1d"
// const durationTokenLogout = 1
const createToken = (id)=> {
  return jwt.sign({id}, process.env.TOKEN_SECRET, {
 expiresIn : durationTokenLogin
  })
}

module.exports.signUp = async (req, res, next) => {
  const { pseudo, email, password } = req.body;
  try {
    const user = await UserModel.create({  pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(500).json({message : err});
  }
};
 module.exports.signIn = async (req,res)=>{
  const {email , password} = req.body

  try{
 const user = await UserModel.login(email, password);
 const token = createToken (user._id)
 res.cookie('jwt', token , {httpOnly:true, expiresIn:'1d'});
 res.status(200).json({ user: user._id})

  }catch(err){
    res.status(500).json({message : err});
  }
}

module.exports.logout = (req,res)=>{
 res.cookie('jwt', '' , {expiresIn:1}
   );
//  res.status(200).json('vous etes déconnecté ')
 res.redirect('./')
 
}