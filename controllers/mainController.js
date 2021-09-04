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
    }
}

module.exports = mainController;