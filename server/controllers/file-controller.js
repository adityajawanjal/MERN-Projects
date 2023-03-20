const File = require("../models/file-model");

exports.fileUpload = async (req,res) =>{
    const fileObj = {
        path:req.file.path,
        name:req.file.originalname
    }
    try {
       const file = await File.create(fileObj);
       res.status(201).json({path:`http://localhost:5000/file/${file._id}`});
    } catch (err) {
        res.status(400).json(`The error in fileUpload is : ${err} `);
    }
}
exports.downloadFile = async (req,res) =>{
    try {
       const file = await File.findById(req.params.id);
       file.downloadContent ++;
       await file.save();
       res.download(file.path , file.name);
    } catch (err) {
        res.status(400).json(`The error in downloadFile is : ${err} `);
    }
}