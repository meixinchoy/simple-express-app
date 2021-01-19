var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing')

/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);
router.get('/leads', landing.show_leads);
router.get('/lead/:lead_id', landing.show_indiLeads);
router.get('/lead/:lead_id/edit', landing.show_editLeads);
router.post('/lead/:lead_id/edit', landing.submit_editedLead);

module.exports = router;
