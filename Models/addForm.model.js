const mongoose = require("mongoose");

const addFormSchema = new mongoose.Schema({
    style: String,
    poNo: String,
    country: String,
    color: String,
    line: String,
    hour: String,
    date: Date,
    size: String,
    sewingQty: String,
    totalOrderQty: String,
    totalInputQty: String,
    totalProductionQty: String,
    totalBalanceQty: String,
});

const addFormModel = mongoose.model("AddFormData", addFormSchema);

module.exports = addFormModel;
