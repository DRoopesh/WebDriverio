

const PrimePage = require('./primepage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class primesecurepage extends PrimePage {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

module.exports = new primesecurepage();
