let userDao = require('../database/dao/userDAO');

module.exports = (app)=>{

    app.post('/user/save',userDao.create);

    app.post('/login',userDao.login);

    app.get('/user/findAll',userDao.findAll);

    app.get('/user/:userId',userDao.findOne);

    app.put('/user/:userId',userDao.update);

    app.delete('/user/:userId',userDao.delete);

}