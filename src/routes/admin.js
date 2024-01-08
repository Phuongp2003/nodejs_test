const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/blog', (req, res) => {
    res.render('blog');
})

router.get('/search', (req, res) => {
    res.render('search');
    console.log(req.query); //tra ve object, vd: /search?name=abc&num=123 => {name: 'abc', num: '123'}
})


module.exports = router;
