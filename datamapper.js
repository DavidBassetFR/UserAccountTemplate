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
    getUniqueUser: (id, callback) => {
        console.log(id)
        const getAnUser = {
            text : `
                SELECT * FROM "Users" WHERE id = $1`,
            values : [id]
        }
        client.query(getAnUser, callback);
    },
    updateUser : (id, password, callback) => {
        const updateAnUser = {
            text : `
            UPDATE "Users"
            SET password =$1
            WHERE id = $2 `,
            values : [password, id]
        }
        client.query(updateAnUser, callback);
    }
}

module.exports = dataMapper;
