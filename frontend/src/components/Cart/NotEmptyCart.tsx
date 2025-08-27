import { useEffect, useState } from "react";
import { useCart, type CartItems } from "../../contexts/CartContext";
import { useAddress, type Address } from "../../contexts/AddressContext";
import ReceiverForm from "./ReceiverForm";
import SelectLocation from "../header/SelectLocation";
import { useOrder, type OrderItem } from "../../contexts/OrderContext";


const NotEmptyCart = ({isOpen, closeCart} : {isOpen: boolean, closeCart: () => void}) => {

    const {createOrder} = useOrder()

    const [toPay, setToPay] = useState(false)
    const [toDelivery, setToDelivery] = useState(false)
    const [toTip, setToTip] = useState(false)
    const [toSafety, setToSafety] = useState(false)
    const [showTipInput, setshowTipInput] = useState(false);
    const [tipAmount, setTipAmount] = useState('')
    const [selectedTip, setSelectedTip] = useState<number | null>(null)
    const { cartItems, updateQuantity, clearCartItems } = useCart();
    const {selectedAddress, setSelectedAddress} = useAddress();
    const [showRecieverForm, setShowRecieverForm] = useState(false)
    const [addressModel, setAddressModel] = useState(false)
    const [paid, setPaid] = useState(false)

    const totalItem = cartItems.reduce((total,item) => total + (item.price * item.quantity),0)
    const GST = totalItem * 0.05264
    const totalMRP = cartItems.reduce((total,item) => total + (item.mrp * item.quantity),0) + 18.99 + 30 + GST;
    const toPAY= totalItem + GST + 9.99;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    
    if (!selectedAddress) {
        return null;
    } 

    const handleToPay = () => {
        setToPay((prev) => !prev)
    }
    const handleToDelivery = () => {
        setToDelivery((prev) => !prev)
    }
    const handleTip = () => {
        setToTip((prev) => !prev)
    }
    const handleSafety = () => {
        setToSafety((prev) => !prev)
    }

    const handleincrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: CartItems, quantity: number) => {
        e.preventDefault()
        updateQuantity(product.productId, quantity + 1)
    }

    const handledecrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: CartItems, quantity: number) =>{
        e.preventDefault()
        updateQuantity(product.productId, quantity - 1)
    }

    const handleInputAmount = (e) => {
        const value = e.target.value.replace(/[^0-9.]/g, '');

        if(value.includes('.')){
            const parts = value.split('.');
            if(parts[1].length>1) return
        }

        setTipAmount(value)
    }

    const handleSelectedTip = (amount: number) => {
        if(selectedTip === amount) {
            setSelectedTip(null)
        }
        else{
            setSelectedTip(amount)
            setTipAmount("")
            setshowTipInput(false)
        }
    }

    const handleCreateOrder = (items: OrderItem[], address: Address) => {
        createOrder(items,address)

        setPaid(true)
        setTimeout(()=>{
            closeCart()
            clearCartItems()
        },4000)
    }

    const tipButtons = [
        { amount: 10, icon: "https://www.zeptonow.com/images/cart/rider-tip/1000.png" },
        { amount: 20, icon: "https://www.zeptonow.com/images/cart/rider-tip/2000.png" },
        { amount: 35, icon: "https://www.zeptonow.com/images/cart/rider-tip/3500.png" }
    ];

    
  return (
    <>
        <div className={`fixed inset-0 z-[99999] bg-black/70 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} id="side-drawer-overlaycart">
            <div className={`absolute right-0 no-scrollbar h-full overflow-auto bg-[#F0F4F9] w-screen lg:w-[400px] transition-transform duration-300 ease-in-out 
                ${isOpen ? "translate-x-0" : "translate-x-full"}`} id="«r7»" style={{opacity: "1", transform: "translateX(0px)"}}>
                <div className="no-scrollbar relative bg-skin-grey-light">
                    
                    <header className="cart-header_cart-header__kvCgP cart-header_cart-header--with-info__YAVmH">
                        <div className="cart-header_cart-header__content__39XR7 cart-header_cart-header__content--default__HouTG">
                            <button onClick={closeCart}>
                                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ height: "22px", width: "22px", color: "black" }}><path d="M15.5 19L8.5 12L15.5 5" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
                            </button>
                            <div className="cart-header_cart-header__title-section__a8wyO">
                                <p className="cart-header_cart-header__title__R0UXa">Your Cart</p>
                                <div className="saving_saving__jYV2F" style={{ borderRadius: "10px", backgroundColor: "rgb(206, 251, 227)", alignItems: "center", padding: "0.25rem 0.375rem" }}>
                                    <p className="text-body4 saving_saving__primary-text__VW9FM" style={{ color: "rgb(8, 123, 87)", fontSize: "0.6875rem", fontWeight: 600, lineHeight: "0.875rem" }}>SAVED</p>
                                    <p className="text-cta1 saving_saving__secondary-text__czV_h" style={{ color: "rgb(6, 169, 118)", fontSize: "1rem", fontWeight: 700, lineHeight: "1.125rem" }}>₹{(totalMRP - toPAY).toFixed(0)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 px-3 pb-2" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                            <div className="m-0.5 h-6 w-6">
                                <div className="" style={{ width: "100%", height: "100%", lineHeight: 0, flex: "1 1 0%" }}>
                                    <canvas aria-hidden="true" height="42" width="42" style={{width: "100%", height: "100%"}}></canvas>
                                </div>
                            </div>
                            <div className="flex items-center text-heading7">
                                <span className="text-heading6 truncate text-left pr-1" style={{color: "rgb(6, 169, 118)"}}>Free delivery auto applied on this order!</span>
                            </div>
                        </div>
                    </header>

                    
                    <div className="mx-auto pt-3.5 lg:max-w-5xl">
                        
                        {/* Delivery in 6 mins */}
                        <div style={{ marginLeft: "0.75rem", marginRight: "0.75rem", padding: "0rem 0rem 0.75rem", marginBottom: "0.75rem", borderRadius: "0.625rem", backgroundColor: "rgb(255, 255, 255)" }}>
                            <div className="flex items-start justify-between bg-white pr-2" style={{ padding: "14px 12px 6px", backgroundColor: "rgb(255, 255, 255)", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                                <div className="flex items-center gap-2 overflow-hidden">
                                    <img alt="" fetchPriority="low" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" className="relative overflow-hidden min-w-[36px]" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/production/tr:w-100,ar-36-36,pr-true,f-auto,q-80/app/images/eta_normal_darkstore_v1.png" style={{color: "transparent", objectFit: "contain"}} />
                                    <div className="content">
                                        <div className="flex">
                                            <p className="text-cta1 truncate" style={{color: "rgb(38, 42, 51)"}}>Delivery in 6 mins</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden bg-skin-base text-lg font-subtitle text-skin-primary-void/60 transition-all duration-300" style={{height: "100%"}}>
                                
                                {/* Product List */}
                                <div>
                                    {cartItems.map((item) => (
                                        <div className="bg-skin-base pt-2.5">
                                            <div className="product-item_product-item__n_kQD ">
                                                <div className="product-item_product-item__content__4hovj">
                                                    <div className="product-item_product-item__image-container__SBDPA">
                                                        <img alt={item.title} fetchPriority="low" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="relative overflow-hidden product-item_product-item__image__WjoEw product-item_product-item__image--rounded__ZFmNA" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src={item.imageURL}style={{color: "transparent", objectFit: "contain"}}/>
                                                    </div>
                                                    <div className="product-item_product-item__details__8_VHz">
                                                        <p className="product-item_product-item__title___NYts">{item.title}</p>
                                                        <div className="product-item_product-item__quantity-text-container__P_ACH">
                                                            <p className="quantity-text_quantity-text__main__HnGoB">{item.netQty}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-item_product-item__actions__H7eI4">
                                                    <div className="flex w-full items-center justify-between rounded border border-skin-primary text-base font-semibold text-skin-primary bg-skin-primary px-1 py-2 !w-16 !rounded-lg !border !border-skin-primary-light !bg-skin-primary-lighter">
                                                        <button className="py-1 px-7 text-base border-skin-primary border border-none cursor-pointer text-skin-base !p-0" type="button" aria-label="Remove" data-testid="undefined-minus-btn" onClick={(e) => handledecrease(e, item, item.quantity)}>
                                                            <div className="flex items-center justify-center">
                                                                <svg fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{height: "0.8rem", width: "0.8rem", color: "rgb(var(--color-primary))"}}>
                                                                    <path d="M20 12H4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg>
                                                            </div>
                                                        </button>
                                                        <p className="text-sm text-skin-base !text-black/75" data-testid="undefined-cart-qty">{item.quantity}</p>
                                                        <button className="py-1 px-7 text-base border-skin-primary border border-none cursor-pointer text-skin-base !p-0" type="button" aria-label="Add" data-testid="undefined-plus-btn" onClick={(e) => handleincrease(e, item, item.quantity)}>
                                                            <div className="flex items-center justify-center">
                                                                <svg fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{height: "0.8rem", width: "0.8rem", color: "rgb(var(--color-primary))"}}>
                                                                    <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="product-item_product-item__price-container__UhqYy">
                                                        <p className="_normal_g8qhm_143 _whitespace-normal_g8qhm_202 _body-12_g8qhm_61" style={{color: "black"}}>₹{item.price * item.quantity}</p>
                                                        <p className="_strikethrough_g8qhm_168 _whitespace-normal_g8qhm_202 _body-10_g8qhm_68" style={{color: "rgb(162, 170, 186)"}}>₹{item.mrp * item.quantity}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between border-t border-dashed px-4 pt-2.5">
                                    <p className="text-[14px] text-black">Missed something?</p>
                                    <a className="flex items-center justify-between rounded-lg bg-black px-2 py-1 text-white" href="/">
                                        <svg fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{height: "11px", width: "11px", color: "white"}}>
                                            <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        <p className="pl-2 text-[11px]">Add More Items</p>
                                    </a>
                                </div>

                            </div>

                        </div>

                            {/* View Coupons &amp; Offers */}
                            <div aria-label="Open coupon modal" className="relative flex min-h-[50px] cursor-default flex-col justify-center bg-skin-base" style={{margin: "0.75rem", padding: "0rem", borderRadius: "0.625rem", backgroundColor: "rgb(255, 243, 209)"}}>
                                <div className="flex items-center gap-[13px] py-2 px-3">
                                    <img alt="" fetchPriority="low" loading="lazy" width="24" height="33" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/production/tr:w-150,ar-24-33,pr-true,f-auto,q-80/app/images/temp_coupon_icon.png" style={{ color: "transparent", objectFit: "contain" }} />
                                    <div className="flex-1">
                                        <div className="text-cta2">View Coupons &amp; Offers</div>
                                    </div>
                                    <img alt="right-arrow-icon" fetchPriority="low" loading="lazy" width="22" height="22" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.10.1/tr:w-5,ar-24-24,pr-true,f-auto,q-80//images/right-arrow-black.svg" style={{ color: "transparent", objectFit: "contain" }} />
                                </div>
                            </div>
                            
                            <div className="bg-white" style={{ marginLeft: "0.75rem", marginRight: "0.75rem", padding: "0rem", marginBottom: "0.75rem", borderRadius: "0.625rem", backgroundColor: "rgb(255, 255, 255)" }}>
                                
                                {/* To Pay */}
                                <div style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between", padding: "14px 12px", borderBottomWidth: "1px", borderColor: "rgb(240, 244, 249)" }}>
                                    <div className="cursor-pointer hidden border-none p-0 sm:block">
                                        
                                        <div aria-expanded={toPay} className="text-skin-inverted flex items-center justify-between" role="button">
                                            <div className="flex w-full justify-between">
                                                <div className="flex items-center justify-center gap-4">
                                                    <img alt="" fetchPriority="low" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://ik.imagekit.io/jupdt2k6txi/app/images/bill_icon.png" style={{ color: "transparent", objectFit: "contain" }} />
                                                    <div>
                                                        <p className="text-heading6" style={{color: "rgb(38, 42, 51)"}}>To Pay</p>
                                                        <p className="block font-body text-xs" style={{color: "rgb(117, 124, 141)"}}>Incl. all taxes and charges</p>
                                                    </div>
                                                </div>
                                                <div className="mr-3 text-right">
                                                    <div className="flex justify-end">
                                                        <p className="block font-body text-xs"  style={{ color: "rgb(117, 124, 141)", marginRight: "4px", textDecoration: "line-through" }}>₹{totalMRP.toFixed(2)}</p>
                                                        <p className="block font-body text-xs !font-semibold">₹{toPAY.toFixed(2)}</p>
                                                    </div>
                                                    <p className="font-norms block text-[9px] font-bold" style={{ color: "rgb(34, 155, 82)", padding: "2px 6px", borderRadius: "20px", background: "linear-gradient(270deg, rgba(34, 155, 82, 0.18), rgba(34, 155, 82, 0))" }}>SAVINGS ₹{(totalMRP - toPAY).toFixed(0)}</p>
                                                </div>
                                            </div>
                                            <span className="text-skin-primary-void/875" onClick={handleToPay}>
                                                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{height: "1rem", width: "1rem"}}><path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </span>
                                        </div>

                                        <div className="bg-skin-base text-skin-primary-void/60 font-subtitle overflow-hidden text-lg transition-all duration-200" style={{height: toPay? "max-content" : "0px"}}>
                                            <div className="py-4 border-t mt-3">
                                                <div className="">
                                                    <div>
                                                        <div style={{marginBottom: "16px"}}>
                                                            <div className="flex justify-between">
                                                                <button className="flex items-center justify-start pr-2">
                                                                    <span className="relative whitespace-normal" style={{ marginBottom: "4px", width: "20px", height: "20px", marginRight: "2px" }}>
                                                                        <img alt="" fetchPriority="low" loading="lazy" decoding="async" data-nimg="fill" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://ik.imagekit.io/jupdt2k6txi/app/images/bill_icon_new.png" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "contain", color: "transparent" }}/>
                                                                    </span>
                                                                    <span className="text-heading4 truncate text-left whitespace-normal" style={{color: "rgb(38, 42, 51)"}}>Bill Summary</span>
                                                                </button>
                                                                <div className="flex items-center justify-end"></div>
                                                            </div>
                                                        </div>
                                                        <div style={{marginBottom: "8px"}}>
                                                            <div className="flex justify-between">
                                                                <button className="flex items-center justify-start pr-2 max-w-[70%]">
                                                                    <span className="text-body4 truncate text-left whitespace-normal" style={{color: "rgb(38, 42, 51)"}}>Item Total</span>
                                                                </button>
                                                                <div className="flex items-center justify-end">
                                                                    <span className="text-heading8 truncate text-left" style={{color: "rgb(38, 42, 51)"}}>₹{totalItem}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style={{marginBottom: "8px"}}>
                                                            <div className="flex justify-between">
                                                                <button className="flex items-center justify-start pr-2 border-b border-dashed max-w-[70%]">
                                                                    <span className="text-body4 truncate text-left whitespace-normal" style={{color: "rgb(38, 42, 51)"}}>Restaurant Charges &amp; GST</span>
                                                                </button>
                                                                <div className="flex items-center justify-end">
                                                                    <span className="text-heading8 truncate text-left" style={{color: "rgb(38, 42, 51)"}}>₹{GST.toFixed(2)}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style={{marginBottom: "8px"}}>
                                                            <div className="flex justify-between">
                                                                <button className="flex items-center justify-start pr-2 border-b border-dashed max-w-[70%]">
                                                                    <span className="text-body4 truncate text-left whitespace-normal" style={{color: "rgb(38, 42, 51)"}}>Handling Charge</span>
                                                                </button>
                                                                <div className="flex items-center justify-end">
                                                                    <span className="text-strikethrough3 truncate text-left" style={{ color: "rgb(117, 124, 141)", marginBottom: "1px", marginRight: "4px" }}>₹18.99</span>
                                                                    <span className="text-heading8 truncate text-left" style={{color: "rgb(38, 42, 51)"}}>₹9.99</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style={{marginBottom: "8px"}}>
                                                            <div className="flex justify-between">
                                                                <button className="flex items-center justify-start pr-2 border-b border-dashed max-w-[70%]">
                                                                    <span className="text-body4 truncate text-left whitespace-normal" style={{color: "rgb(38, 42, 51)"}}>Delivery Fee</span>
                                                                </button>
                                                                <div className="flex items-center justify-end">
                                                                    <span className="text-strikethrough3 truncate text-left" style={{ color: "rgb(117, 124, 141)", marginBottom: "1px", marginRight: "4px" }}>₹30</span>
                                                                    <span className="text-heading8 truncate text-left" style={{color: "rgb(38, 42, 51)"}}>₹0</span>
                                                                </div>
                                                            </div>
                                                            {tipAmount || selectedTip ? "": <div style={{borderBottomWidth: "1px", borderColor: "rgb(227, 233, 243)", marginTop: "12px"}}></div>}
                                                        </div>
                                                        {tipAmount || selectedTip ? (
                                                            <div style={{marginBottom: "12px"}}>
                                                                <div className="flex justify-between">
                                                                    <button className="flex items-center justify-start pr-2 max-w-[70%]">
                                                                        <span className="text-body4 truncate text-left whitespace-normal" style={{color: "rgb(38, 42, 51)"}}>Delivery Partner Tip</span>
                                                                    </button>
                                                                    <div className="flex items-center justify-end">
                                                                        <span className="text-heading8 truncate text-left" style={{color: "rgb(38, 42, 51)"}}>₹{tipAmount || selectedTip}</span>
                                                                    </div>
                                                                </div>
                                                                <div style={{borderBottomWidth: "1px", borderColor: "rgb(227, 233, 243)", marginTop: "12px"}}></div>
                                                            </div>
                                                        ): ("")}
                                                        <div style={{marginBottom: "2px"}}>
                                                            <div className="flex justify-between">
                                                                <button className="flex items-center justify-start pr-2 max-w-[70%]">
                                                                    <span className="text-cta2 truncate text-left whitespace-normal" style={{color: "rgb(38, 42, 51)"}}>To Pay</span>
                                                                </button>
                                                                <div className="flex items-center justify-end">
                                                                    <span className="text-strikethrough3 truncate text-left" style={{ color: "rgb(117, 124, 141)", marginBottom: "1px", marginRight: "4px", alignSelf: "flex-end" }}>₹{totalMRP.toFixed(2)}</span>
                                                                    <span className="text-cta1 truncate text-left" style={{color: "rgb(38, 42, 51)"}}>₹{toPAY.toFixed(2)}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style={{marginBottom: "0px"}}>
                                                            <div className="flex justify-between">
                                                                <button className="flex items-center justify-start pr-2 max-w-[70%]">
                                                                    <span className="text-body5 truncate text-left whitespace-normal" style={{color: "rgb(117, 124, 141)"}}>Incl. all taxes and charges</span>
                                                                </button>
                                                                <div className="flex items-center justify-end">
                                                                    <span className="text-overline2 !text-left" style={{ color: "rgb(34, 155, 82)", padding: "2px 6px", background: "linear-gradient(45deg, rgba(34, 155, 82, 0.18), rgba(34, 155, 82, 0))" }}>SAVING ₹{(totalMRP - toPAY).toFixed(0)}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex justify-between sm:hidden">
                                        <div className="flex items-center justify-center gap-4">
                                            <img alt="" fetchPriority="low" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://ik.imagekit.io/jupdt2k6txi/app/images/bill_icon.png" style={{ color: "transparent", objectFit: "contain" }} />
                                            <div>
                                                <p className="text-heading6" style={{color: "rgb(38, 42, 51)"}}>To Pay</p>
                                                <p className="block font-body text-xs" style={{color: "rgb(117, 124, 141)"}}>Incl. all taxes and charges</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="mr-3 text-right">
                                                <div className="flex justify-end">
                                                    <p className="block font-body text-xs" style={{ color: "rgb(117, 124, 141)", marginRight: "4px", textDecoration: "line-through" }}>₹700.39</p>
                                                    <p className="block font-body text-xs !font-semibold" style={{color: "rgb(38, 42, 51)"}}>₹281.39</p>
                                                </div>
                                                <p className="font-norms block text-[9px] font-bold" style={{ color: "rgb(34, 155, 82)", padding: "2px 6px", borderRadius: "20px", background: "linear-gradient(270deg, rgba(34, 155, 82, 0.18), rgba(34, 155, 82, 0))" }}>SAVINGS ₹419</p>
                                            </div>
                                            <img alt="" fetchPriority="low" loading="lazy" width="14" height="16" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://ik.imagekit.io/jupdt2k6txi/app/images/right_chevron_black_.png" style={{ color: "transparent", objectFit: "contain" }} />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Delivery Instructions */}
                                <div style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between", padding: "14px 12px", borderBottomWidth: "1px", borderColor: "rgb(240, 244, 249)" }}>
                                    <div className="cursor-pointer hidden border-none p-0 sm:block">
                                        <div aria-expanded={toDelivery} className="text-skin-inverted flex items-center justify-between" role="button">
                                            <div className="flex w-full justify-between">
                                                <div className="flex items-center justify-center gap-4">
                                                    <img alt="" fetchPriority="low" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://ik.imagekit.io/jupdt2k6txi/app/images/instructions_icon.png" style={{ color: "transparent", objectFit: "contain" }} />
                                                    <div>
                                                        <p className="text-heading6" style={{color: "rgb(38, 42, 51)"}}>Delivery Instructions</p>
                                                        <p className="block font-body text-xs" style={{color: "rgb(117, 124, 141)"}}>Delivery partner will be notified</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-skin-primary-void/875" onClick={handleToDelivery}>
                                                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{height: "1rem", width: "1rem"}}>
                                                    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="bg-skin-base text-skin-primary-void/60 font-subtitle overflow-hidden text-lg transition-all duration-200" style={{height: toDelivery ? "max-content" : "0px"}}>
                                            <div className="py-4 border-t mt-3">
                                                <div className="bg-skin-base">
                                                    <div className="no-scrollbar flex overflow-x-scroll">
                                                        <button className="mr-2 flex w-fit flex-col items-center  rounded-lg border border-skin-muted-lightest p-2 false">
                                                            <img alt="bewareOfPets" fetchPriority="low" loading="lazy" width="50" height="40" decoding="async" data-nimg="1" className="relative overflow-hidden h-8 w-8 false" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/images/beware_of_pets.png?tr=w-150,q-70" style={{ color: "transparent", objectFit: "contain" }} />
                                                            <div className="w-44 pl-2 text-left">
                                                                <p className="block font-body text-sm text-center !font-semibold text-skin-inverted">Beware Of Pets</p>
                                                                <p className="block font-body text-xs pt-1 text-center !text-2xs !text-skin-primary-void/50 md:!text-xs">Delivery partner will be informed about the presence of pet(s)</p>
                                                            </div>
                                                        </button>
                                                        <button className="mr-2 flex w-fit flex-col items-center  rounded-lg border border-skin-muted-lightest p-2 false">
                                                            <img alt="doNotRingBell" fetchPriority="low" loading="lazy" width="50" height="40" decoding="async" data-nimg="1" className="relative overflow-hidden h-8 w-8 false" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/images/do_not_ring_bell.png?tr=w-150,q-70" style={{ color: "transparent", objectFit: "contain" }} />
                                                            <div className="w-44 pl-2 text-left">
                                                                <p className="block font-body text-sm text-center !font-semibold text-skin-inverted">Do Not Ring The Bell</p>
                                                                <p className="block font-body text-xs pt-1 text-center !text-2xs !text-skin-primary-void/50 md:!text-xs">Delivery partner will not ring the bell</p>
                                                            </div>
                                                        </button>
                                                        <button className="mr-2 flex w-fit flex-col items-center  rounded-lg border border-skin-muted-lightest p-2 false">
                                                            <img alt="leaveAtGate" fetchPriority="low" loading="lazy" width="50" height="40" decoding="async" data-nimg="1" className="relative overflow-hidden h-8 w-8 false" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/images/no_contact_delivery.png?tr=w-150,q-70" style={{ color: "transparent", objectFit: "contain" }} />
                                                            <div className="w-44 pl-2 text-left">
                                                                <p className="block font-body text-sm text-center !font-semibold text-skin-inverted">No Contact Delivery</p>
                                                                <p className="block font-body text-xs pt-1 text-center !text-2xs !text-skin-primary-void/50 md:!text-xs">Delivery partner will leave your order at your door</p>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between sm:hidden">
                                        <div className="flex items-center justify-center gap-4">
                                            <img alt="" fetchPriority="low" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://ik.imagekit.io/jupdt2k6txi/app/images/instructions_icon.png" style={{ color: "transparent", objectFit: "contain" }} />
                                            <div>
                                                <p className="text-heading6" style={{color: "rgb(38, 42, 51)"}}>Delivery Instructions</p>
                                                <p className="block font-body text-xs" style={{color: "rgb(117, 124, 141)"}}>Delivery partner will be notified</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <img alt="" fetchPriority="low" loading="lazy" width="14" height="16" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://ik.imagekit.io/jupdt2k6txi/app/images/right_chevron_black_.png" style={{ color: "transparent", objectFit: "contain" }} />
                                        </div>
                                    </div>
                                </div>

                                {/* Delivery Partner Tip */}
                                <div style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between", padding: "14px 12px", borderBottomWidth: "1px", borderColor: "rgb(240, 244, 249)" }}>
                                    <div className="cursor-pointer hidden border-none p-0 sm:block">
                                        <div aria-expanded={toTip} className="text-skin-inverted flex items-center justify-between" role="button">
                                            <div className="flex w-full justify-between">
                                                <div className="flex items-center justify-center gap-4">
                                                    <img alt="" fetchPriority="low" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://ik.imagekit.io/jupdt2k6txi/app/images/tip_icon.png" style={{ color: "transparent", objectFit: "contain" }} />
                                                    <div>
                                                        <p className="text-heading6" style={{color: "rgb(38, 42, 51)"}}>Delivery Partner Tip</p>
                                                        {(tipAmount || selectedTip) && !showTipInput ? (
                                                            <p className="block font-body text-xs" style={{color: "rgb(34, 155, 82)"}}>We thank you for your generosity!</p>
                                                        ):(
                                                            <p className="block font-body text-xs" style={{color: "rgb(117, 124, 141)"}}>This amount goes to your delivery partner</p>
                                                        )}
                                                        
                                                    </div>
                                                </div>
                                                {(tipAmount || selectedTip) && !showTipInput ? (
                                                     <div className="p-1" style={{backgroundColor: "rgb(235, 250, 244)", borderRadius: "2px", marginRight: "12px"}}>
                                                    <p className="font-norms block text-[9px] font-bold" style={{color: "rgb(34, 155, 82)", textAlign: "center"}}>🥳 ₹{tipAmount || selectedTip}<div>TIPPED</div></p>
                                                </div>
                                                ): ""}
                                               
                                            </div>
                                            <span className="text-skin-primary-void/875" onClick={handleTip}>
                                                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{height: "1rem", width: "1rem"}}>
                                                    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="bg-skin-base text-skin-primary-void/60 font-subtitle overflow-hidden text-lg transition-all duration-200" style={{height: toTip ? "max-content" : "0px"}}>
                                            <div className="py-4 border-t mt-3">
                                                <div className="bg-skin-base">
                                                    <div className="mb-4 flex justify-between">
                                                        {tipButtons.map((tip) => (
                                                            <button key={tip.amount} className={`py-1 px-7 text-base border-skin-primary border text-skin-primary bg-skin-base rounded-md tracking-widest !rounded-full !px-4 !py-3 !text-skin-primary-void ${selectedTip === tip.amount ? "!border-skin-primary-dark !bg-skin-primary-dark/20" : "!border-skin-primary-void/25 "}  `} type="button" aria-label={`Tip ₹${tip.amount}`} onClick={() => handleSelectedTip(tip.amount)}>
                                                                <div className="flex items-center justify-center">
                                                                    <img alt="" fetchPriority="low" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src={tip.icon} style={{ color: "transparent", objectFit: "contain" }} />
                                                                    <p className="block font-body text-base pl-1">₹{tip.amount}</p>
                                                                </div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                    {!showTipInput? (
                                                        <button className="py-1 px-7 text-base border-skin-primary border text-skin-primary bg-skin-base rounded-md tracking-widest w-full !rounded-full !border-skin-primary-void/25 !px-4 !py-3 !text-skin-primary-void" type="button" onClick={()=>setshowTipInput(true)}>
                                                            <div className="flex items-center justify-center">
                                                                <p className="block font-body text-base">Add Custom Tip</p>
                                                            </div>
                                                        </button>
                                                    ): (
                                                        <div>
                                                            <div className="w-max relative text-base text-skin-inverted flex bg-white items-center border rounded-md mb-4 !rounded-full !border-skin-primary-void/25 !px-4 !py-3 !text-skin-primary-void !w-full !bg-skin-primary-dark/5 !mb-0">
                                                                <input className="focus:outline-none block py-3 px-2 appearance-none font-subtitle flex-grow font-normal bg-transparent text-md !mb-0 !p-0 [appearance:textfield] [&amp;::-webkit-inner-spin-button]:appearance-none" inputMode="numeric" placeholder="" type="number" value={tipAmount} onChange={handleInputAmount} autoFocus />
                                                                    <span className="right-0 pr-3.5">
                                                                        <button className="py-1 px-7 text-base border-skin-primary border text-skin-primary border-none !px-0 !py-[3px]" type="button" onClick={()=>setshowTipInput(false)}>
                                                                            <div className="flex items-center justify-center">Save</div>
                                                                        </button>
                                                                    </span>
                                                            </div>
                                                        </div>
                                                    )}
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between sm:hidden">
                                        <div className="flex items-center justify-center gap-4">
                                            <img alt="" fetchPriority="low" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://ik.imagekit.io/jupdt2k6txi/app/images/tip_icon.png" style={{ color: "transparent", objectFit: "contain" }} />
                                            <div>
                                                <p className="text-heading6" style={{color: "rgb(38, 42, 51)"}}>Delivery Partner Tip</p>
                                                <p className="block font-body text-xs" style={{color: "rgb(117, 124, 141)"}}>This amount goes to your delivery partner</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <img alt="" fetchPriority="low" loading="lazy" width="14" height="16" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://ik.imagekit.io/jupdt2k6txi/app/images/right_chevron_black_.png" style={{ color: "transparent", objectFit: "contain" }} />
                                        </div>
                                    </div>
                                </div>

                                {/* Delivery Partner's Safety */}
                                <div style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between", padding: "14px 12px" }}>
                                    <div className="cursor-pointer hidden border-none p-0 sm:block">
                                        <div aria-expanded={toSafety} className="text-skin-inverted flex items-center justify-between" role="button">
                                            <div className="flex w-full justify-between">
                                                <div className="flex items-center justify-center gap-4">
                                                    <img alt="" fetchPriority="low" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://ik.imagekit.io/jupdt2k6txi/app/images/partner_safety_icon.png" style={{ color: "transparent", objectFit: "contain" }} />
                                                    <div>
                                                        <p className="text-heading6" style={{color: "rgb(38, 42, 51)"}}>Delivery Partner's Safety</p>
                                                        <p className="block font-body text-xs" style={{color: "rgb(117, 124, 141)"}}>Learn more about how we ensure their safety</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-skin-primary-void/875" onClick={handleSafety}>
                                                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{height: "1rem", width: "1rem"}}>
                                                    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="bg-skin-base text-skin-primary-void/60 font-subtitle overflow-hidden text-lg transition-all duration-200" style={{height: toSafety ? "max-content" : "0px"}}>
                                            <div className="py-4 border-t mt-3">
                                                <div className="bg-skin-base pt-10 pb-2 text-center sm:pb-0">
                                                    <img alt="" fetchPriority="low" loading="lazy" width="140" height="88" decoding="async" data-nimg="1" className="relative overflow-hidden m-auto" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/images/zeptonian-riding.png?tr=w-undefined,q-70" style={{ color: "transparent", objectFit: "contain" }} />
                                                    <h3 className="block font-heading text-xl tracking-wider pt-5 pb-3 !text-[1.3rem]">Here's How We Do It</h3>
                                                    <p className="block font-body text-base pb-4">At Zepto, Rider's safety is our responsibility</p>
                                                    <div className="bg-skin-base">
                                                        <div className="my-3 flex rounded-lg bg-skin-primary-dark/10 p-3">
                                                            <img alt="" fetchPriority="low" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/images/lucide_timer.png?tr=w-undefined,q-70" style={{ color: "transparent", objectFit: "contain" }} />
                                                            <p className="block font-body text-base pl-2 text-left">Delivery partners ride safely at an average speed of 15kmph per delivery</p>
                                                        </div>
                                                        <div className="my-3 flex rounded-lg bg-skin-primary-dark/10 p-3">
                                                            <img alt="" fetchPriority="low" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/images/lucide_bike.png?tr=w-undefined,q-70" style={{ color: "transparent", objectFit: "contain" }} />
                                                            <p className="block font-body text-base pl-2 text-left">No penalties for late deliveries &amp; no incentives for on-time deliveries</p>
                                                        </div>
                                                        <div className="my-3 flex rounded-lg bg-skin-primary-dark/10 p-3">
                                                            <img alt="" fetchPriority="low" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/images/lucide_megaphone.png?tr=w-undefined,q-70" style={{ color: "transparent", objectFit: "contain" }} />
                                                            <p className="block font-body text-base pl-2 text-left">Delivery partners are not informed about promised delivery time</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between sm:hidden">
                                        <div className="flex items-center justify-center gap-4">
                                            <img alt="" fetchPriority="low" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://ik.imagekit.io/jupdt2k6txi/app/images/partner_safety_icon.png" style={{ color: "transparent", objectFit: "contain" }} />
                                            <div>
                                                <p className="text-heading6" style={{color: "rgb(38, 42, 51)"}}>Delivery Partner's Safety</p>
                                                <p className="block font-body text-xs" style={{color: "rgb(117, 124, 141)"}}>Learn more about how we ensure their safety</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <img alt="" fetchPriority="low" loading="lazy" width="14" height="16" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://ik.imagekit.io/jupdt2k6txi/app/images/right_chevron_black_.png" style={{ color: "transparent", objectFit: "contain" }} />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Display the address line or any suitable property */}
                            {(selectedAddress.receiverName || selectedAddress.receiverContact) ? (
                                <div className="flex items-center justify-between bg-white" style={{marginBottom: "0.75rem", marginLeft: "0.8125rem", marginRight: "0.8125rem", padding: "0.625rem 0.75rem 0.75rem 0.625rem", borderRadius: "0.625rem"}}>
                                    <div><span className="text-heading6 " style={{color: "rgb(38, 42, 51)"}}>Ordering for </span>
                                        <span className="text-cta2 " style={{color: "rgb(156, 39, 176)"}}>{selectedAddress.receiverName}, </span>
                                        <span className="text-heading6 " style={{color: "rgb(38, 42, 51)"}}>{selectedAddress.receiverContact} </span>
                                    </div>
                                    <button className="py-1 px-7 text-base border-skin-primary border text-skin-primary border-none !px-0 !py-1" type="button" onClick={()=>setShowRecieverForm(true)}>
                                        <div className="flex items-center justify-center">
                                            <p className="block font-body text-sm mr-1 !p-0 font-semibold">Edit</p>
                                        </div>
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between bg-white" style={{ marginBottom: "0.75rem", marginLeft: "0.8125rem", marginRight: "0.8125rem", padding: "0.625rem 0.75rem 0.75rem 0.625rem", borderRadius: "0.625rem" }}>
                                    <div><span className="text-heading6 " style={{color: "rgb(38, 42, 51)"}}>Ordering for someone else?</span></div>
                                    <button className="py-1 px-7 text-base border-skin-primary border border-none rounded-md !border-solid !px-2 !py-1 text-[#EF4372]" type="button" onClick={()=>setShowRecieverForm(true)}>
                                        <div className="flex items-center justify-center">Add Details</div>
                                    </button>
                                </div>
                            )}

                            <div className="h-56"></div>
                            
                            <div className="sticky bottom-0 right-0 z-[101] h-fit w-full overflow-hidden rounded-t-md bg-white px-3 pt-1.5 shadow-lg lg:w-[400px]">
                                {selectedAddress && (
                                    <button className="flex w-full items-start justify-start px-1 py-2" onClick={()=>setAddressModel(true)}>
                                        <img alt="" fetchPriority="low" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="relative overflow-hidden min-w-[38px]" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/production/tr:w-100,ar-40-40,pr-true,f-auto,q-80/app/images/address_home_icon_v3.png" style={{color: "transparent", objectFit: "contain"}} />
                                        <div className="overflow-hidden pl-[10px]">
                                            <div className="flex items-center justify-start">
                                                <p className="pr-2 text-cta1">Delivering to {selectedAddress.saveAddressAs}</p>
                                                <img alt="" fetchPriority="low" loading="lazy" width="8" height="4" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/images/bold-arrow-down.png?tr=w-undefined,q-70" style={{color: "transparent", objectFit: "contain"}}/>
                                            </div>
                                            <p className="truncate text-[14px] font-[400] leading-[16px] text-[rgba(2,_6,_12,_0.60)]">{selectedAddress.HouseNumber}, {selectedAddress.BlockNumber}, {selectedAddress.landmark} </p>
                                        </div>
                                    </button>
                                )}
                                <div className="flex items-center">
                                    {selectedAddress ? (
                                        <button className="my-2.5 h-[52px] w-full rounded-xl bg-skin-primary text-center" onClick={() => handleCreateOrder(cartItems,selectedAddress)}>
                                            <span className="text-body1 text-white"> {paid ? "Paid" : "Click to Pay"}  {toPAY.toFixed(2)}</span>
                                        </button>
                                    ):(
                                        <button className="my-2.5 h-[52px] w-full rounded-xl bg-skin-primary text-center">
                                            <span className="text-body1 text-white">Add Address to proceed</span>
                                        </button>
                                    )}
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        {showRecieverForm && (
            <ReceiverForm 
                onClose={() => setShowRecieverForm(false)}
            />
        )}
        {addressModel && (
        <SelectLocation 
          onClose={() => setAddressModel(false)}  
          onAddressSelect={(address) => {
            setSelectedAddress({
              ...address,
              saveAddressAs: address.saveAddressAs as "Home" | "Work" | "Other"
            });
            setAddressModel(false);}
          }
        />
      )}
    </>
  )
}

export default NotEmptyCart