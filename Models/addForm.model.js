const mongoose = require("mongoose");

const addFormSchema = new mongoose.Schema({
    style: { type: String, required: true }, 
    poNo: { type: String, required: true }, 
    country: { type: String, required: true },
    color: { type: String, required: true },
    line: { type: String, required: true },
    hour: { type: String, required: true },
    date: { type: Date, required: true }, 
    size: { type: String, required: true },
    sewingQty: { type: String, required: true },
    totalOrderQty: String,
    totalInputQty: String,
    totalProductionQty: String,
    totalBalanceQty: String,
});

const addFormModel = mongoose.model("AddFormData", addFormSchema);

module.exports = addFormModel;
