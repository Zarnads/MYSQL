/**
 * SalaryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        const sql = `INSERT INTO salary (emp_id,month,year,amount,generateddate)
        VALUES ($1,$2,$3,$4,$5)`;
        var data = [req.body.emp_id,
        req.body.month,
        req.body.year,
        req.body.amount,
        Date.now(),
        ];
        const result = await sails.sendNativeQuery(sql, data);
        res.send("sucess!!")
    },
    update: async function (req, res) {
        const sql = ` UPDATE salary
        SET emp_id = $1,month= $2,year= $3,amount= $4,generateddate= $5 WHERE id = $6 `;

        var data = [req.body.emp_id,
            req.body.month,
            req.body.year,
            req.body.amount,
            req.body.generateddate,
            req.params.id];
        const result = await sails.sendNativeQuery(sql, data);
    },
    delete: async function (req, res) {
        const sql = `DELETE FROM salary WHERE id = $1`;
        var data = req.params.id;
        const result = await sails.sendNativeQuery(sql, data);
    }
};