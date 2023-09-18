const Order = require('../Schema/orderSchema')

// CREATE

exports.createNewOrder = async (req, res) => {
    const { orderRows, status } = req.body

    if(!orderRows) {
        return res.status(400).json({
            message: "you need to enter all the fields"
        })
    }
    try {
        const data = await Order.create({
            orderRows,
            userId: req.userId,
            status

        })
      res.status(201).json({ userId: data.userId })



    } catch (err) {
        return res.status(500).json({
            message: "something went wrong when createing the order",
            err: err.message,
        })
    }
}

// exports.getMyOrder = async (req, res) => {

//     const orders = await Order.find({userId: req.userId})

//     if(!orders){
//         return res.status(404).json({message: 'Could not fint the orders'})
//     }

//     res.status(200).json(orders)
// }


exports.getOrders = async (req, res) =>{
    const orders = await Order.find().populate({
        path: 'userId', 
        select: "_id email "
    })
    if(!orders){
        return res.status(404).json({message: 'Could not fint the orders'})
    }

    res.status(200).json(orders)
}

exports.getOrderById = async (req, res) => {
    const orderId = req.params.id;
  
    try {
      const order = await Order.findById(orderId);
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };

  exports.updateStatus = async (req, res) => {
    try {
      const status = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true})
      res.status(200).json(status)
    } catch (error) {
      return res.status(404).json({message: 'Could not update status'})
    }
  }