// !Edit for current database
const Logs = require('../models/logs.models');

module.exports = {

    // !Edit
    getAllLogs: (req, res) => {
        Logs.find()
        .then((allLogs) => {
        res.json({ logs: allLogs });
        })
        .catch((err) => 
            res.json({ message: '===== An has occurred while retrieving the log data. =====', error: err})
        );
    },

    // !Edit
    createOneLog: (req, res) => {
        // creating a new object
        const newLog = new Logs(req.body)

        newLog.save()
        .then((newlyCreatedLog) => {
            res.json({ logs: newlyCreatedLog});
        })
        .catch((err) => 
            res.json({ message: '===== An has occurred while retrieving the log data. =====', error: err})
        );
    },

    // !Edit
    getOneLog: (req, res) => {
        Logs.findOne({ _id: req.params.id })
        .then((oneLog) => {
            res.json({ logs: oneLog });
        })
        .catch((err) => 
            res.json({ message: '===== An has occurred while retrieving the log data. =====', error: err})
        );
    },

    // !Edit
    updateOneLog: (req, res) => {
        Logs.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true })
        .then((updatedLog) => {
            res.json({ logs: updatedLog });
        })
        .catch((err) => 
            res.json({ message: '===== An has occurred while retrieving the log data. =====', error: err})
        );
    },

    // !Edit
    deleteOneLog: (req, res) => {
        Logs.deleteOne({ _id: req.params.id})
        .then((result) => {
            res.json({ result });
        })
        .catch((err) => 
            res.json({ message: '===== An has occurred while retrieving the log data. =====', error: err})
        );
    
    },
};


