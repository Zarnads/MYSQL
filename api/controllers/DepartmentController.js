/**
 * DepartmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        const sql = `INSERT INTO department (name,createddate)
        VALUES ($1,$2)`;
        var data = [req.body.name, req.body.createddate];
        const result = await sails.sendNativeQuery(sql, data);
        res.send(result);
    },
    update: async function (req, res) {
        const sql = ` UPDATE department
        SET name = $1 WHERE id = $2 `;

        var data = [req.body.name, req.params.id];
        const result = await sails.sendNativeQuery(sql, data);
        sails.log(result);
    },
    delete: async function (req, res) {
        const sql = `DELETE FROM department WHERE id = $1`;
        var data = req.params.id;
        const result = await sails.sendNativeQuery(sql, data);
    },
};