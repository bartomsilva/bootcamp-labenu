"use strict";
exports.__esModule = true;
var knex_1 = require("knex");
exports.db = knex_1.knex({
    client: "sqlite3",
    connection: {
        filename: "./src/database/test.db"
    },
    useNullAsDefault: true,
    pool: {
        min: 0,
        max: 1,
        afterCreate: function (conn, cb) {
            conn.run("PRAGMA foreign_keys = ON", cb);
        } // configurando para o knex forçar o check das constrainst FK
    }
});
