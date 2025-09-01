import { useOrder } from "../../contexts/OrderContext"
import Noorders from "../orders/Noorders"
import Orders from "../orders/Orders"

const AccountOrders = () => {
    const {orders} = useOrder()

  return (
    <>
        {orders.length === 0 ? <Noorders /> : <Orders />}
        
    </>
    
  )
}

export default AccountOrders