import express from 'express';
import * as bodyParser from 'body-parser';
import { Err } from './interfaces';
import * as lusca from 'lusca';
import logger from 'morgan';
// Create a new express application instance
const app = express();

const debug = require('debug')('ts-express:app');
const isTest = process.env.NODE_ENV === 'test';
app.use(logger('dev', {
    skip: () => isTest
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', require('./router'));
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));


// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
    let err = new Error('Not Found') as Err;
    err.status = 404;
    next(err)
});

// error handler
app.use(function (err: Err, req: express.Request, res: express.Response, next: express.NextFunction) {
    debug(err);

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        message: err.message,
        data: err.data
    })
});

module.exports = app;
