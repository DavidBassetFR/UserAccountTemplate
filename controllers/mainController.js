const dataMapper = require('../dataMapper');
var crypto = require('crypto');

const mainController = {
    getUsersDetails : (req, res) => {
        req.body.form.password = crypto.createHash('sha256').update(req.body.form.password).digest('base64');
        dataMapper.getUsers((error, response) => {
            if (error) {
                res.status(500).send(error.message);
            } else {
                console.log("cc", response.rows[0]);
            }
        })
    },
    addNewUser : (req, res) => {
       req.body.form.password = crypto.createHash('sha256').update(req.body.form.password).digest('base64');
        dataMapper.createNewUser(req.body.form,(error, response) => {
            if (error) {
                res.status(500).send(error.message);
            } else {
                res.status(200).send('Utilisateur bien ajouté');
            }
        })
    },
    changeUserPassword : async (req, res) => {
        req.body.form.password = crypto.createHash('sha256').update(req.body.form.password).digest('base64');
       await dataMapper.getUniqueUser(req.session.user.id, (error, response) => {
            if (error) {
                res.status(500).send(error.message);
            } else {
                const data = response.rows[0]
                    if(data.password === req.body.oldPassword) {
                        dataMapper.updateUser(data.id, req.body.password,(error, response) => {
                            if (error) {
                                res.status(500).send(error.message);
                             } else {
                                console.log("Update du password effectué");
                                res.status(200).send('its ok bro')
                            }
                        })
                    } else {
                        res.status(401).send("Wrong password")
                    }
            }
        })
    },
}

module.exports = mainController;