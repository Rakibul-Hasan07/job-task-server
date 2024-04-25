const { default: mongoose } = require("mongoose");

const getFormDataSchema = new mongoose.Schema({
    style: [String],
    poNo: [String],
    country: [String],
    color: [String],
    line: [String],
    size: [String]
})

const getFormDataModels = mongoose.model('formdata', getFormDataSchema)
module.exports = getFormDataModels;