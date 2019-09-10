//  Saperate your business logic from controllers, hence write them as service here,

module.exports = {
    hello2: (context) => {
        console.log('gffgfgf>>');
        return context.db.raw('select * from persons').then((success) => {
            console.log('>>>>>');
            return success.rows[0].personid;
        });
    },
};
