const express = require('express');
const router = express.Router();
const p = require('../pool');
router.get('/v1/mlist', (req, res) => {
    var sql = 'select * from mlist';
    p.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send('0');
        }
    })
})

module.exports = router;