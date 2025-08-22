import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"


const Cart = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

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
        <div className={`fixed inset-0 z-[99999] bg-black/70 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} id="side-drawer-overlaycart">
            <div
                className={`fixed right-0 top-0 h-full bg-[#F0F4F9] w-screen lg:w-[400px] transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="no-scrollbar relative bg-skin-grey-light">
                <header className="cart-header_cart-header__kvCgP">
                    <div className="cart-header_cart-header__content__39XR7 cart-header_cart-header__content--default__HouTG">
                    <button onClick={closeCart}>
                        <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ height: "22px", width: "22px", color: "black" }}
                        >
                        <path
                            d="M15.5 19L8.5 12L15.5 5"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                        ></path>
                        </svg>
                    </button>
                    <div className="cart-header_cart-header__title-section__a8wyO">
                        <p className="cart-header_cart-header__title__R0UXa">Your Cart</p>
                    </div>
                    </div>
                </header>
                <div className="mx-auto pt-3.5 lg:max-w-5xl">
                    <div className="z-10 m-4 mt-3 rounded-xl bg-white px-12 py-10 text-center">
                    <img
                        alt=""
                        fetchPriority="low"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        className="relative overflow-hidden mx-auto"
                        src="https://cdn.zeptonow.com/production/tr:w-100,ar-100-100,pr-true,f-auto,q-80/app/svg/empty_cart_v2.svg"
                        style={{ color: "transparent", objectFit: "contain" }}
                    />
                    <p className="py-2 text-heading6">Your cart is empty</p>
                    <a href="/">
                        <p className="mx-auto mt-4 w-fit rounded-lg bg-skin-secondary-black px-[60px] py-2.5 text-heading6 text-white">
                        Browse Products
                        </p>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart