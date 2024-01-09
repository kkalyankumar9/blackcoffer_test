const express =require("express");
const { DataModel } = require("../Models/DataModel");

const dataRouter=express.Router();

dataRouter.get("/getdata",async(req,res)=>{

    try {
        const data = await DataModel.find();
       
        if (data.length > 0) {
            console.log("Retrieved data");
            res.status(200).send({ "msg": "Successfully retrieved all data", "data": data });
          } else {
            res.status(404).send({ "msg": "No data found" });
          }

    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(505).send({"error":error})
    }
})



module.exports={dataRouter}