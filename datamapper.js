const client = require("./database");

const dataMapper = {
    getUsers: (callback) => {
        const promoList_query = {
            text: 'SELECT * FROM "Users";'
        }
        client.query(promoList_query, callback);
    },
}

module.exports = dataMapper;
