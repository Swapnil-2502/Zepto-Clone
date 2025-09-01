import { useState } from "react";
import LoginFormModel from "../LoginFormModel";


const NotLoggedIn = ({isOpen, closeCart} : {isOpen: boolean, closeCart: () => void}) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

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
                    <div className="h-[calc(100vh-52px)] sm:mt-64 sm:h-fit sm:w-full">
                        <div className="flex h-[calc(100%-52px)] flex-col items-center justify-center bg-skin-base p-4 sm:h-full">
                            <h3 className="block font-heading text-xl tracking-wider !text-[20px]">Please Login</h3>
                            <p className="font-norms block mt-2 text-[14px] font-medium">Please login to access the cart.</p>
                            <button className="py-1 px-7 text-base border-skin-primary border bg-skin-primary text-skin-base rounded-md tracking-widest w-full mt-6 !py-3 !px-8 sm:max-w-sm" type="button" onClick={()=> setIsLoginOpen(true)}>
                                <div className="flex items-center justify-center">
                                    <h6 className="block font-subtitle tracking-wider text-lg font-bold">Login</h6>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <LoginFormModel isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  )
}

export default NotLoggedIn