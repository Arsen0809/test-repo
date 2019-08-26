import { Router, Request, Response } from 'express'
import { Cart } from '../models/index'
import { wrap, error } from '../libs/utils';

const router = Router();

router.post('/', wrap(async (req: Request, res: Response) => {

    if (!req.body.productName || !req.body.unitPrice || !req.body.email) {
        throw error(400, 'Bad Request')
    }

    const cart = new Cart({
        productName: req.body.productName,
        unitPrice: req.body.unitPrice,
        email: req.body.email
    });

    try {
        const result = await cart.save();
        res.json(result)
    } catch (e) {
        console.log('[POST]e', e);

        throw error(500, 'Database Error')
    }
}));

module.exports = router;
