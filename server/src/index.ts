import express from 'express';
import http from 'http';
import cors from 'cors';
import logging from '../config/logging';
import config from '../config/config';

import messageRoutes from '../routes/messages';

const app = express();

const NAMESPACE = 'Sever';

app.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATE: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })

    next();
})

app.use(cors());

// app.use((req, res, next) => {
//     logging.debug(NAMESPACE, 'cors??')
//     res.header('Acess-Control-Allow-Origin', '*');
//     res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

//     if (req.method == 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({cors: 'cors'});
//     }

//     next()
// })

app.use(express.json());

app.use('/api/messages', messageRoutes)

app.use((req, res, next) => {
    const error =  new Error('Not found');

    res.status(404).json({
        success: false,
        msg: 'Not found',
        data: {}
    });
})

const httpServer = http.createServer(app);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running at ${config.server.hostname}:${config.server.port}`));