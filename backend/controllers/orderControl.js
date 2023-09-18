const router = require('express').Router()
const { getOrders, createNewOrder, updateStatus, getOrderById } = require('../Model/orderModel')
const auth = require('../authentication/auth')

router.post('/add', auth.verifyTokenAdmin, createNewOrder)
// router.get('/myOrders', auth.verifyTokenAdmin, getMyOrder )

router.get('/allOrders', getOrders )
router.get('/:id',auth.verifyTokenAdmin, getOrderById)
router.put('/:id', updateStatus)

module.exports = router;

