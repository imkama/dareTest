'use strict';

const clientsRouter = require('./../routes/clientsRouter');

module.exports = (app) => {

    app.use('/api/clients', clientsRouter);
    //app.use('/api/login', loginRouter);
    //app.use('/api/policies', policiesRouter);

};


