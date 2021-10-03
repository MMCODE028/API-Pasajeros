const { Router } = require('express');
const router = Router(); 

router.get('/pasajeros', (req, res) => {
    res.json({"title": "hello wordld"});

});

module.exports = router;