/**
 * DepartmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
    create: async (req, res) => {
        try {
            const data = await Department.create({
                name: req.body.name,
                createddate: (req.body.date)
            })
            res.send("done");
        } catch (error) {
            return res.badRequest(error);
        }
    },
    update: async function (req, res) {
        try {
            let data = await Department.findOne({ _id: req.params.id });
            if (data) {
                await Department.updateOne({_id: req.params.id }, {

                    name: req.body.name,
                    createddate: req.body.date,
                 
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
            let data = await Department.findOne({_id: req.params.id });
            console.log(data);
            await Department.destroy({_id: req.params.id }, function (err) {
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
            let data = await Department.find();
            res.ok(data);
        } catch (error) {
            return res.badRequest(error);
        }
    },
};