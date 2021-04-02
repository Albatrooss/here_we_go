import { Request, Response } from 'express';
import Message from '../models/Message';
import DB from '../config/db';
import logging from '../config/logging';

const NAMESPACE = 'MessageCtrl';

const all = async (req: Request, res: Response) => {
    try {
        const allMessages = await DB.query(Message.all.query);
        res.json({
            success: true,
            msg: '',
            data: allMessages.rows,
        })
    } catch(error) {
        logging.error(NAMESPACE, error.message, error)
        res.status(500).json({
            success: false,
            msg: 'Something went wrong..',
            data: {}
        })
    }
};

const addOne = async (req: Request, res: Response) => {
    try {
        const newMessage = await DB.query(Message.insert.query, [req.body.text]);
        res.json({
            success: true,
            msg: `${newMessage.rowCount} rows inserted`,
            data: { }
        })
    } catch(errpr) {
        res.status(500).json({
            success: false,
            msg: 'Something went wrong..',
            data: {}
        })
    }
};

export default { 
    all,
    addOne,
 };