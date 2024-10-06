const express = require ('express');
const router = express.Router();

/*

1. Register a user
    URL : /user/register
    Fields Name , email , Password , Confirmpassword
    Method Post
    Access Public
*/

router.post('/register', (request, response) => {
        //registration logic
});


/* 
 2.login logic
    Url /user/login
    fields email , password
    method Post
    Access Public

*/

router.post('/login',(request,response)=>{

    //login logic

});




module.exports = router;
