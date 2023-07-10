const dotenv = require("dotenv");
const User = require("../modals/userDetailsModal");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

dotenv.config();


//@desc do registration
//route POST /registration
//@access public 
const creatUser = async (req, res) => {
  console.log("Request body is :" + req.body);
  const { username, email, password, confirmPassword } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are mandatory!" });
  }

  try {
    const userAvailable = await User.findOne({ email });
    console.log(email, "a", userAvailable);
    if (userAvailable) {
      return res.status(400).json({ message: "User already registered" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user = await User.create({ username, email, password});
    console.log(user);
    return res.status(201).json({ message: "Registration successful!", user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "An error occurred" });
  }
};

//@desc login
//route GET /login
//@access public 
const loginUser = async(req,res)=>{
    
    const {email,password} = req.body;

    if(!email || !password){
       return res.status(400).json({message:"All field are mandatory!"})
    }
    try{
        const user = await User.findOne({email})
        
        if(user && (user.password===password)){
           
            const accessToken=jwt.sign({
                user:{
                    username:user.username,
                    email:user.email,
                    id:user.id,
                },
            },
            process.env.ACCESS_TOKEN_SECERT,
            {expiresIn:"20m"}
            );
            return res.status(200).json({accessToken});
        }else{
            return res.status(401).json({message:"incorrect password"})
        }
    }
    catch(err){

    }

}

//@desc login
//route GET /get_all_users
//@access public 
const getAllUsers=(req,res)=>{
  User.find()
  .then(users => {
    res.status(200).json({ allUsers: users });
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  });
}
module.exports = { creatUser ,loginUser,getAllUsers};
