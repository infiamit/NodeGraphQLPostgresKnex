const db = require('../../config/config');

module.exports = {
    hello2: () => {
        db.raw('select * from persons').then((success) => {
            console.log(success);

            return success.rows;
        });
    },
};
