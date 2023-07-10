const dotenv = require("dotenv");
const User = require("../modals/userDetailsModal");
const Asset = require("../modals/assetModal")
const Equity = require("../modals/equityModal");
const nodemailer = require('nodemailer');
const mailGen = require('mailgen');
const { find } = require("../modals/userDetailsModal");

dotenv.config();

//This method is used to add a single asset to the users protfolio
//@desc addAsset
//route POST /addAsset
//@access private 
const addAsset=async(req,res)=>{
    const {name,quantity,currentValue}=req.body;
    const {username,email,id}=req.user;

    if(!name || !quantity || !currentValue){
        return res.status(400).json({message:"All fields are required"})
    }

    try{
        const assetAvailable = await Asset.findOne({name})
        if(assetAvailable){
        console.log(assetAvailable)
        let updatedQuantity  = parseInt(assetAvailable.quantity)+1
        const totalValue=parseInt(updatedQuantity)*parseInt(assetAvailable.currentValue)
        const updatedAsset = await Asset.updateOne({_id:assetAvailable._id},{quantity:updatedQuantity,totalValue})
        return res.status(400).json({message:"An asset with this name is already there in your portfolio. We have updated the quantity number! Check below",updatedAsset}) 
        
        }
        const totalValue=parseInt(quantity)*parseInt(currentValue)
        const asset = await Asset.create({
             userId:id,
             name,
             quantity,
             currentValue,      
             totalValue         
        })

        return res.status(201).json({message:"Asset added succesfully", asset})

    }
    catch(err){
        console.log(err);
        return res.status(500).json({ error: "An error occurred" });
    }

}


// this method will return all the asset list of a user
//@desc getAllAsset
//route POST /getAssets
//@access private 
const getAllAsset = async(req,res)=>{
    
    const {username,email,id}=req.user;

    try{
        const allAssets = await Asset.find({userId:id})
        const totalAssetValue = allAssets.map((asset)=>asset.totalValue).reduce((a,c)=>a+parseInt(c),0);
        if(allAssets.length>0){
            return res.status(200).json({message:"Here is your list of assets",totalAssetValue,allAssets})
        }
        
        return res.status(400).json({message:"Assets not found"})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Error occured"})
    }

}

//Update asset 
//@desc updateAsset
//route POST /updateAsset
//@access private 
const updateAsset = async(req,res)=>{

    const {userId,name}=req.body;
    const {username,email,id}=req.user;
    
    try{ 
        if(!name){
            return res.status(400).json({message:"name field is required to update"})
        }
        const updateFields = {...req.body}
        let asset = await Asset.find({userId:id,name})

        if(updateFields.currentValue){
           asset[0].totalValue=parseInt(asset[0].quantity)*parseInt(updateFields.currentValue)
        }
        if(updateFields.quantity){
            asset[0].totalValue=parseInt(asset[0].currentValue)*parseInt(updateFields.quantity)
         }

        Object.assign(...asset,updateFields);

        asset = await asset[0].save();

        return res.status(200).json({message:"updation successful",asset})

    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Error occured"})
    }


}
//This method is used to add a single equity to the users protfolio
//@desc addEquity
//route POST /getEquities
//@access private 
const addEquity = async(req, res)=>{
    
    const {companyName,shares,purchaseValue,currentValue} = req.body;
    const {username,email,id}=req.user;

    if(!companyName || !shares || !purchaseValue || !currentValue){
        return res.status(400).json({message:"all fields are mandatory"})
    }

    try{
        const euqityAvailable = await Equity.findOne({companyName});
        if(euqityAvailable){
           return res.status(400).json({message:"Equity already exists in your portfolio"}); 
        }
        let totalValue = parseInt(shares)*parseInt(currentValue);
        const equity =await Equity.create({
            userId:id,
            companyName,
            shares,
            purchaseValue,
            currentValue,
            totalValue
        })
    
        return res.status(201).json({message:"Equity added !"})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Error occured"})
    }
    


}

//// this method will return all the asset list of a user
//@desc getAllEquity
//route POST /getEquities
//@access private 
const getAllEquity = async(req,res)=>{

    const {username,email,id}=req.user;

    try{
        const allEquity = await Equity.find({userId:id})
        let profitOfEach = allEquity.map((company)=>{
              return parseInt(company.currentValue)-parseInt(company.purchaseValue)
        })

        let netProfitInEquities = profitOfEach.reduce((a,c)=>a+c,0)

        if(allEquity.length>0){
            return res.status(200).json({message:"Here is your list of equity",profitOfEachEquity:profitOfEach,netProfitInEquities,allEquity})
        }
        
        return res.status(400).json({message:"Equities not found"})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Error occured"})
    }
}

//@desc updateEquity
//route POST /updateEquity
//@access private 
const updateEquity = async(req,res)=>{
     
    const{userId,companyName}=req.body;
    const {username,email,id}=req.user;

    if(!companyName){
        return res.status(400).json({message:"companyName is mandatory of updation"})
    }

    const updatedField = {...req.body};

    let equity = await Equity.find({userId:id,companyName});

    if(updatedField.shares){
        equity[0].totalValue = parseInt(updatedField.shares)*parseInt(equity[0].currentValue);
    }
    if(updatedField.currentValue){
        equity[0].totalValue=parseInt(updatedField.currentValue)*parseInt(equity[0].shares);
    }

    Object.assign(...equity,updatedField);
    equity=await equity[0].save();

    return res.status(200).json({message:"Equity successfully updated !",equity})

}


//To deliver mail about asset and equity of user
//@desc mailPortfolio
//route POST /mail
//@access private 
const mailPortfolio=async(req,res)=>{
    const {username,email,id}=req.user;
    console.log(process.env.EMAIL,process.env.PASSWORD)
    let config={
        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD,
        }
    }

    let transporter=nodemailer.createTransport(config)

    let mailGenerator = new mailGen({
        theme:"default",
        product:{
            name:"mailgen",
            link:"https://mailgen.js/'",
        }
    })
    //equity details
    const allEquity = await Equity.find({userId:id})
    let profitOfEach = allEquity.map((company)=>{
          return parseInt(company.currentValue)-parseInt(company.purchaseValue)
    })
    let overallPuchase = allEquity.map((company)=>{
        return parseInt(company.purchaseValue)
     })
     overallPuchase = overallPuchase.reduce((a,c)=>a+c,0);

    let netProfitInEquities = profitOfEach.reduce((a,c)=>a+c,0)
    
    //asset details
    const allAssets = await Asset.find({userId:id})
    const totalAssetValue = allAssets.map((asset)=>asset.totalValue).reduce((a,c)=>a+parseInt(c),0);

    let response = {
        body:{
            name:username,
            intro:"your financial Report",
            table:{
                data:[
                 {  item:"Net Profits in Equities",
                    purchased:"Rs."+overallPuchase,
                    profit:"Rs."+netProfitInEquities
                 }
                ,{
                        item:"Asset details",
                        totalValue:totalAssetValue,
                     }
              ]  
            },
            outro:"milte hai"
        }
    }

    let mail = mailGenerator.generate(response)

    let message={
        from:process.env.EMAIL,
        to:email,
        subject:"hello sid",
        html:mail

    }
    transporter.sendMail(message).then(()=>{
        return res.status(200).json({message:"you should receive a mail"})
    }).catch(err=>{
        return res.status(500).json({err})
    })
}


module.exports = {addAsset,getAllAsset,addEquity,getAllEquity,updateAsset,updateEquity,mailPortfolio}