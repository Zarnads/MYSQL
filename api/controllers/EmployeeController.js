/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        const sql = `INSERT INTO employee (name,emp_no,dept_id,join_date,end_date)
        VALUES ($1,$2,$3,$4,$5)`;
        var data = [req.body.name,
        req.body.emp_no,
        req.body.dept_id,
        (req.body.join_date),
        (req.body.end_date)];
        const result = await sails.sendNativeQuery(sql, data);
        console.log(result);
    },
    update: async function (req, res) {
        const sql = ` UPDATE employee
        SET name = $1,emp_no = $2,dept_id = $3,join_date = $4,end_date = $5 WHERE id = $6 `;

        var data = [req.body.name,
        req.body.emp_no,
        req.body.dept_id,
        (req.body.join_date),
        (req.body.end_date),
        req.params.id];
        const result = await sails.sendNativeQuery(sql, data);
    },
    delete: async function (req, res) {
        const sql = `DELETE FROM employee WHERE id = $1`;
        var data = req.params.id;
        const result = await sails.sendNativeQuery(sql, data);
    },
    getjoin: async function (req, res) {
        var sql = `SELECT*
        FROM department
        INNER JOIN salary ON department.id=salary.id`;
        const result = await sails.sendNativeQuery(sql);
        res.send(result);
    }
};