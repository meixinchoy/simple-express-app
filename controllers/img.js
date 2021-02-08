const UploadModel = require('../models/imageModel');

exports.delete = async (req, res) => {
    let img = await UploadModel.findById(req.params.id)
    img.delete()
    res.redirect('/')
}

exports.uploadimg = (req,res)=>{
    res.redirect('/')
}