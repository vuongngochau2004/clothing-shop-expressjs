const { User } = require('./../../models/index.model');
 
module.exports = {
    getUsers: async (req, res) => {
        const users = await User.findAll({
            where: 
            {
                role: 'admin'
            }
        });
        // render the view with the data
        res.render('admin/customers/index', { 
            pageTitle: 'Custumers', 
            users,
        });
    }
}