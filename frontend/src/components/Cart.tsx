import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import EmptyCart from "./Cart/EmptyCart";
import NotEmptyCart from "./Cart/NotEmptyCart";
import { useCart } from "../contexts/CartContext";


const Cart = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false);
    const { cartItems } = useCart();

    useEffect(()=>{
        const params = new URLSearchParams(location.search)
        setIsOpen(params.get("cart") === "open")
    },[location.search])

    const closeCart  = () => {
        const params = new URLSearchParams(location.search)
        params.delete("cart")
        navigate(`${location.pathname}?${params.toString()}`);
    }

  return (
    <>
        {cartItems.length > 0 ?  <NotEmptyCart isOpen={isOpen} closeCart={closeCart} /> : <EmptyCart isOpen={isOpen} closeCart={closeCart} />}
    </>
  )
}

export default Cart