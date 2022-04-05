/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */




module.exports = {
    create: async (req, res) => {
        try {
            const data = await Employee.create({
                name: req.body.name,
                emp_no: req.body.emp_no,
                dept_id: req.body.dept_id,
                join_date: req.body.join_date,
                end_date: req.body.end_date
            })
            res.send("done");
        } catch (error) {
            return res.badRequest(error);
        }
    },
    update: async function (req, res) {
        try {
            const  data = await Employee.findOne({ _id: req.params.id })
            console.log(data);
            if (data) {
                await Employee.updateOne({ _id: req.params.id }, {
                    name: req.body.name,
                    emp_no: req.body.emp_no,
                    dept_id: req.body.dept_id,
                    join_date: req.body.join_date,
                    end_date: req.body.end_date
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
            let data = await Employee.findOne({ _id: req.params.id });
            console.log(data);
            await Employee.destroy({ _id: req.params.id }, function (err) {
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
            let data = await Employee.find();
            res.ok(data);
        } catch (error) {
            return res.badRequest(error);
        }
    },
    join: async function (req, res) {
        try {
            var result = await Employee.find({ name:'pooja' }).populate('dept_id');
            console.log(result);
            res.send(result)
        }
        catch (err) { res.send(err) }
    }
};

