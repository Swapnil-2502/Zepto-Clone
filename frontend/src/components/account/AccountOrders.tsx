import { useOrder } from "../../contexts/OrderContext"
import Noorders from "../orders/Noorders"
import Orders from "../orders/Orders"

const AccountOrders = () => {
    const {orders} = useOrder()

  return (
    <>
        {!orders ? <Noorders /> : <Orders />}
        
    </>
    
  )
}

export default AccountOrders