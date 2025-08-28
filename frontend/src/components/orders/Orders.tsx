
import { useOrder, type Order, type OrderItem } from "../../contexts/OrderContext"
import { useState } from "react"
import OrderDetail from "./OrderDetail"
import { useCart } from "../../contexts/CartContext"


const Orders = () => {
    const {orders} = useOrder()
    const {setSelectedCartItems} = useCart()
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

    const calculateTotal = (cartItems: OrderItem[]) => {
        return cartItems.reduce((total,item) => total + (item.price * item.quantity),0)
    }

    const calculateTotalMRP = (cartItems: OrderItem[]) => {
        return cartItems.reduce((total,item) => total + (item.mrp * item.quantity),0)
    }
    
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return {
            date: date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
            time: date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
        };
    };

    const handleOrderAgain = (orders: Order) => {
        setSelectedCartItems(orders.cartItems)
    }

    if(selectedOrder){
        return <OrderDetail orders={selectedOrder} formatDate={formatDate} calculateTotal={calculateTotal} calculateTotalMRP={calculateTotalMRP} onBack={() => setSelectedOrder(null)} />
    }

  return (
    <>
        <div className="hidden flex-col lg:block lg:h-[80vh] lg:w-2/3 lg:overflow-y-scroll lg:rounded-r-3xl lg:border-l" id="desktop-order-details-section">
            <div className="-mt-4 pb-6 pt-3 bg-[#f0f4f9]">
                <header className="sticky top-0 z-[100] mx-auto flex w-full items-center justify-between bg-skin-base p-2 shadow-md">
                    <div className="flex">
                        <button className="py-1 px-7 text-base border-skin-primary border text-skin-primary border-none !p-0" type="button" aria-label="Back Icon">
                            <div className="flex items-center justify-center"><span className="mr-2"><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" style={{height: "1.25rem", width: "1.25rem", color: "black"}}><path d="M15.5 19L8.5 12L15.5 5" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg></span></div>
                        </button>
                        <h1 className="font-subtitle text-lg tracking-wider line-clamp-1 mr-5 overflow-hidden text-ellipsis font-semibold">Settings</h1>
                    </div>
                </header>
                <div className="cursor-pointer">
                    {orders.map((order) => {
                        const totalBill = calculateTotal(order.cartItems)
                        const timeAndDate = formatDate(order.createdAt)
                        return (
                        // <Link to={`/order/${order._id}`}>
                            <div className="shadow-base rounded relative m-4 !rounded-2xl bg-white py-4 !shadow-none mb-0 !pb-0" >
                                <div className="px-4" onClick={()=>setSelectedOrder(order)}>
                                    <div className="relative">
                                        <div className="no-scrollbar flex w-full space-x-3 overflow-scroll">
                                            {order.cartItems.map((item) => (
                                                <img alt="" fetchPriority="low" loading="lazy" width="46" height="46" decoding="async" data-nimg="1" className="overflow-hidden relative !aspect-square shrink-0 rounded-lg border" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src={item.imageURL} style={{color: "transparent", objectFit: "contain"}}/>
                                            ))}
                                            
                                        </div>
                                        <div className="-mx-4">
                                            <button aria-label="left arrow" className="absolute inset-y-0 left-0 z-[1] hidden xl:-left-2">
                                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f0f4f9] p-1 drop-shadow-xl">
                                                    <img alt="left-arrow-icon" fetchPriority="low" loading="lazy" width="12" height="12" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.11.0/tr:w-12,ar-12-12,pr-true,f-auto,q-80//images/left-arrow-gray.svg" style={{color: "transparent", objectFit: "contain"}} />
                                                </div>
                                            </button>
                                            <button aria-label="right arrow" className="absolute inset-y-0 right-0 z-[1] xl:-right-2 hidden">
                                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f0f4f9] p-0.5 drop-shadow-xl">
                                                    <img alt="right-arrow-icon" fetchPriority="low" loading="lazy" width="12" height="12" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.11.0/tr:w-12,ar-12-12,pr-true,f-auto,q-80//images/right-arrow-gray.svg" style={{color: "transparent", objectFit: "contain"}}/>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex !items-center">
                                        <p className="mr-1.5 text-heading6 !font-bold">Order Placed</p>
                                        <img alt="order-cancelled.svg" fetchPriority="low" loading="lazy" width="14" height="14" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.11.0/tr:w-0.2,ar-0.2-0.2,pr-true,f-auto,q-80//images/order/order-cancelled.svg" style={{color: "transparent", objectFit: "contain"}}/>
                                    </div>
                                    <div className="flex items-start justify-between">
                                        <p className="mt-1 text-body2 !text-skin-muted">Placed at {timeAndDate.date} {timeAndDate.time}</p>
                                        <div className="flex items-center">
                                            <p className="mr-1.5 text-heading5">₹{(totalBill + totalBill * 0.05264 + 10.99).toFixed(2) }</p>
                                            <svg fill="none" height="8" viewBox="0 0 6 10" width="8" xmlns="http://www.w3.org/2000/svg"><line stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" x1="1" x2="4.93934" y1="8.93934" y2="5"></line><line stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" x1="4.93934" x2="1" y1="5" y2="1.06066"></line></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex w-full gap-2 border-t">
                                    <button className="px-7 text-base border-skin-primary border text-skin-primary border-none mx-auto w-full py-3" type="button" onClick={() => handleOrderAgain(order)}>
                                        <div className="flex items-center justify-center"><span className="text-cta2">Order Again</span></div>
                                    </button>
                                </div>
                            </div>
                        // </Link>
                    )})}
                </div>
            </div>
        </div>
    </>
  )
}

export default Orders