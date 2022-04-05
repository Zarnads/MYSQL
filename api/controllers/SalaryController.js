/**
 * SalaryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async (req, res) => {
        try {
            const data = await Salary.create({
                sid: req.body.eid,
                emp_id: req.body.emp_id,
                month: req.body.month,
                year: req.body.year,
                amount: req.body.amount,
                generateddtae:req.body.date
            })
            res.send("done");
        } catch (error) {
            return res.badRequest(error);
        }
    },
    update: async function (req, res) {
        try {
            const  data = await Salary.findOne({ _id: req.params.id })
            console.log(data);
            if (data) {
                await Salary.updateOne({ _id: req.params.id }, {
                    sid: req.body.eid,
                    emp_id: req.body.emp_id,
                    month: req.body.month,
                    year: req.body.year,
                    amount: req.body.amount,
                    generateddtae:req.body.date
                });
                res.send("updated!!")
            }
            else { res.json({ msg: "err at update" }) };
        }
        catch (err) { res.json({ msg: "error at updatee" }) }
    },
    delete: async function (req, res) {
        try {
            console.log(req.params.id);
            let data = await Salary.findOne({ _id: req.params.id });
            console.log(data);
            await Salary.destroy({ _id: req.params.id }, function (err) {
                if (err) {
                    res.send("data not available");
                } else {
                    res.send("deleted");
                }
            });
        } catch { res.json({ msg: "ree at delete" }) }
    },
    find: async (req, res) => {
        try {
            let data = await Salary.find();
            res.ok(data);
        } catch (error) {
            return res.badRequest(error);
        }
    }
};