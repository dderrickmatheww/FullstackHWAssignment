var express = require("express");
var parenthesesAreBalanced = require('../assets/script/script');
var router = express.Router();


router.get('/', function(req, res) {
        res.render('index', {
            title: 'Availitys Fullstack Homework Assignment: 1-3',
            discript: 'This page will display answers to numbers 1 through 3 from Availity Fullstack Homework Assignment'
        });
    });


router.get("/part2", function(req, res) {
        res.render('part2', {
        title: 'Availitys Fullstack Homework Assignment: 4-6',
        discript: 'This page will display answers to numbers 4 through 6 from Availity Fullstack Homework Assignment'
        })
})

router.post('/part2', function(req, res) {
   var string = req.body.string;
   res.render('part2', {
    title: 'Availitys Fullstack Homework Assignment: 4-6',
    discript: 'This page will display answers to numbers 4 through 6 from Availity Fullstack Homework Assignment',
    result: parenthesesAreBalanced(string)
   })
})

module.exports = router;
