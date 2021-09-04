const client = require("./database");

const dataMapper = {
    getUsers: (callback) => {
        const promoList_query = {
            text: 'SELECT * FROM "Users";'
        }
        client.query(promoList_query, callback);
    },
    createNewUser: (info, callback) => {
        console.log(info);
        const addAnUser = {
            text : `
                INSERT INTO "Users"
                    (prenom, nom, mail, password)
                VALUES
                    ($1, $2, $3, $4);`,
            values : [info.prenom, info.nom, info.mail, info.password]
        }
        client.query(addAnUser, callback);
    },
}

module.exports = dataMapper;
