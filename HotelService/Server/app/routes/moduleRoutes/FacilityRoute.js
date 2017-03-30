var express = require('express');
var router = express.Router();
var ControllerMap = require('../../Controller/ControllerMap');
var FacilityController = ControllerMap.FacilityController;

router.post('/', function(req, res, next) {
	FacilityController.addFacility(req.body, res);
});

router.put('/', function(req, res, next) {
	FacilityController.updateFacility(req.body, res);
})

router.delete('/:id', function(req, res, next) {
	FacilityController.deleteFacility(req.params.id, res);
})

router.get('/', function(req, res, next) {
	FacilityController.getAllFacilities(res);
})

router.get('/:id', function(req, res, next) {
	FacilityController.getSingleFacility(req.params.id, res);
})

router.get('/image/:id', function(req, res, next) {
	FacilityController.getFacilityImage(req.params.id, res);
})

module.exports = router;