
const db = require("../models");
const UserController = {
    create(req, res) {
        return db.user.create(req.body).then((users) => {
            if (users) {
                res.status(200).send({
                    success: 200,
                    message: "Data Added Successfully",
                    payload: users
                });
            } else {
                res.status(400).send({
                    success: 400,
                    message: "Insert Failed",
                    payload: users
                });
            }
        });
    },
    update(req, res) {
        let { id, points } = req.body;
        db.user.update({ points: points }, {
            where: { id: id }
        }).then(num => {
            if (num == 1) {
                res.status(200).send({
                    success: 200,
                    message: "Data Updated Successfully",
                    payload: ""
                });
            } else {
                res.status(400).send({
                    success: 400,
                    message: "Update Failed",
                    payload: ""
                });
            }
        }).catch(err => {
            res.status(500).send({
                success: 500,
                message: err.message,
                payload: ""
            });
        });
    },
    get(req, res) {
        db.user.findAll().then((users) => {
            if (users) {
                res.send({
                    success: 200,
                    message: "Sucess",
                    payload: users
                });
            }
            else {
                res.status(400).send({
                    success: 400,
                    message: "Failed",
                    payload: users
                });
            }
        })
    },
    delete(req, res) {
        const id = req.params.id;
        db.user.destroy({
            where: { id: id }
        }).then(num => {
            if (num == 1) {
                res.status(200).send({
                    success: 200,
                    message: "Data Deleted Successfully",
                    payload: ""
                });
            } else {
                res.status(400).send({
                    success: 200,
                    message: "Deleted Failed",
                    payload: ""
                });
            }
        })
            .catch(err => {
                res.status(500).send({
                    success: 500,
                    message: err.message,
                    payload: ""
                });
            });
    }
};

module.exports = UserController;