var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
let user = require('../controllers/user');
let img = require('../controllers/img')

const store = require('../middleware/multer')
let { uploads } = require('../middleware/saveimg')
let { isLoggedIn } = require('../middleware/hasAuth.js')

router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout', user.logout);
router.get('/logout', user.logout);

/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);
router.get('/leads', landing.show_leads);
router.get('/lead/:lead_id', isLoggedIn,landing.show_indiLeads);
router.get('/lead/:lead_id/edit', isLoggedIn,landing.show_editLeads);
router.post('/lead/:lead_id/edit', isLoggedIn,landing.submit_editedLead);
router.post('/lead/:lead_id/delete', isLoggedIn,landing.submit_deleteLead);
router.post('/lead/:lead_id/delete-json',landing.submit_deleteLeadJson); //ajax

/* Image */
router.get("/deletedbimg/:id", img.delete)
router.post('/uploadmultiplepics', store.array('images', 12), uploads, img.uploadimg)
 
module.exports = router;
