exports.up = function (knex) {
    return knex.schema
        .createTable('cart', table => {
            table.increments('id').primary();
            table.string('productName');
            table.string('email');
            table.string('unitPrice');
        })
}

exports.down = function (knex) {
    return knex.schema
        .dropTable('echo')
}
