const express = require('express');
const router = express.Router();
// const Todo = require('../controllers/Todo')

router.get('/', function (req, res) {
    //req.body를 controller.getall로 받아서 res.send한다.
});

router.get('/:id', function (req, res) {
    //req.params.id를 controller.getone으로 받아서 res.send한다. 
});

router.post('/', function (req, res) {
    // req.body를 검증한 뒤에 controller.post로 넣은 뒤 res.send한다.
});

router.post('?userId={id}', function (req, res) {
    // req.body를 검증한 뒤에 controller.post로 넣은 뒤 res.send한다.
});

router.put('/:id', function (req, res) {
    // req.body검증과 req.params.id를 받은 뒤에 put한다.
});

router.delete('/:id', function (req, res) {
    // 
});


module.exports = router;