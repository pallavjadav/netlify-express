const controller = require('../controllers/controller');
module.exports = (router) => {
    // router.get('/', (request, response) => {
    //     response.send("<h1>Hello from Express + Nodemon</h1>")
    // });
    router.get('/',controller.getdefault);
    // router.post('/addweight', function (request, response) {
    //     let empName = request.body.empName;
    //     let empWeight = request.body.empWeight;
    //     response.end(`POST request Suceeded, we got ${empName} who weights ${empWeight}`);

    // });
    router.post('/addweight', controller.addweight);
    router.get('/aboutus', controller.aboutus);
    router.get('/getemployees', controller.getemployees);
    router.delete('/deletebyname',controller.deletebyname );
    router.post('/addemployee', controller.addemployee);
    router.put('/updatedoc', controller.updatedoc);
    // router.get('/aboutus', (req, res) => {
    //     res.send("<h1>You're on the About US route</h1>");
    // });
}
