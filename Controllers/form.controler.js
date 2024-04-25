const addFormModels = require('../Models/addForm.model');
const getFormDataModels = require('../Models/getForm.model');

const saveFormData = async (req, res) => {
    console.log('body', req.body)
    try {
        const result = new addFormModels(req.body);
        console.log(result)
        await result.save()
        res.send(result);
    } catch (error) {
        console.log(error)
        res.status(404).send('Server Error')
    }
}
const getFormData = async (req, res) => {
    try {
        const result = await getFormDataModels.find()
        res.send(result);
    } catch (error) {
        res.status(404).send('Server Error')
        console.log("this is error msg",error)
    }
}


module.exports = { getFormData, saveFormData }