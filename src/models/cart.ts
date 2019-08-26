import db from '../libs/ps';

export class Cart extends db.Model<Cart> {
    get tableName() { return 'cart' }
}
