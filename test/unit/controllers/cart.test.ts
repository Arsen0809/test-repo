import { expect } from 'chai'
import { req, tracker } from '../helpers';

describe('GET /cart', () => {
    it('should return to equal message', async () => {
        tracker.on('query', query => {
            expect(query.method).to.equal('insert')
            query.response([])
        });

        let data = {
            "productName": "Test Product",
            "unitPrice": "USD",
            "email": "email@gmail.com",
        };
        const res = await req.post('cart/', 200, data);
        console.log('res body', res.body)
        expect(res.body).to.eql(data);
    });

    it('should return 400 Bad Request', async () => {
        tracker.on('query', query => {
            expect(query.method).to.equal('insert');
            query.response([])
        });

        const res = await req.post('cart/', 400, {});
        expect(res.body.message).to.equal('Bad Request');
    });
})
