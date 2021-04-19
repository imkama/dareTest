'use strict';

module.exports = {
    /**
     * Get clients
     * @param req
     * @param res
     */
    find: (req, res) => {
        console.log('on find');
        return res.send('test');
    }
}