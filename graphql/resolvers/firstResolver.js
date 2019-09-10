
const { hello2 } = require('../../services/sampleService');


module.exports = {
    hello2: (obj, args, context) => hello2(context),

};
