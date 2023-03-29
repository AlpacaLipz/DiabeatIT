// !Edit Name of Controller and file location
const LogsController = require('../controllers/logs.controller')

// !Edit Route Names
// !Edit ControllerFunctions
module.exports = (app) => {
    app.get('/api/logs', LogsController.getAllLogs);
    app.post('/api/logs', LogsController.createOneLog);
    app.get('/api/logs/:id', LogsController.getOneLog);
    app.put('/api/logs/:id', LogsController.updateOneLog);
    app.delete('/api/logs/:id', LogsController.deleteOneLog);
}