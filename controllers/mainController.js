const dataMapper = require('../dataMapper');

const mainController = {
    getUsersDetails : (req, res) => {
        dataMapper.getUsers((error, response) => {
            if (error) {
                res.status(500).send(error.message);
            } else {
                console.log("cc", response.rows[0]);
            }
        })
    },
    addNewUser : (req, res) => {
        dataMapper.createNewUser(req.body,(error, response) => {
            if (error) {
                res.status(500).send(error.message);
            } else {

                console.log("Requête réussie", response);
                res.status(200).send('Utilisateur bien ajouté');
            }
        })
    },
    async changeUserPassword : (req, res) => {
       const ActualPassword = await dataMapper.getUniqueUser(req.session.user.id, (error, response) => {
            if (error) {
                res.status(500).send(error.message);
            } else {
                console.log("Requête réussie", response.rows[0]);
            }
        })
        if (ActualPassword.user === req.session.user && ActualPassword.password === req.body.oldPassword) {
            dataMapper.updateUser(ActualPassword.id, req.body,(error, response) => {
                if (error) {
                    res.status(500).send(error.message);
                } else {
                    console.log("Update du password effectué", response.rows[0]);
                }
            })
        }
    },
}

module.exports = mainController;