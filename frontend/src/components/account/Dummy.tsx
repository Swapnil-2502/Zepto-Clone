

const Dummy = () => {
  return (
    <>
        <div className="absolute mt-20 mx-2 z-20 h-fit w-fit rounded-lg pointer-events-auto w-96 bg-white p-4 shadow-[0_2px_16px_0_rgba(0,0,0,0.2)]" style={{top: "78px", left: "1040.36px"}}>
            <svg height="18" viewBox="0 0 71 18" width="71" xmlns="http://www.w3.org/2000/svg" style={{position: "fixed", left: "1330.36px", top: "64px", color: "white", filter: "drop-shadow(rgba(0, 0, 0, 0.08) 0px -5px 4px)"}}>
                <path d="M31.0086 2.68532C33.614 1.04429 36.9301 1.04429 39.5356 2.68531L63.8509 18H6.69324L31.0086 2.68532Z" fill="white"></path>
                <path d="M57.4439 14.0076H70.5244C70.5244 14.0076 62.029 13.536 57.6109 12.3208C54.2373 11.3928 50.6978 9.75195 50.6978 9.75195L57.4439 14.0076Z" fill="white"></path>
                <path d="M13.0805 14.0076H3.05176e-05C3.05176e-05 14.0076 8.49543 13.536 12.9135 12.3208C16.2871 11.3928 19.8267 9.75195 19.8267 9.75195L13.0805 14.0076Z" fill="white"></path>
            </svg>
            <div className="mb-6 flex justify-between">
                <div className="flex items-center justify-center text-sm font-medium text-skin-saver-green">
                    <img alt="" fetchPriority="low" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="relative overflow-hidden mr-1 inline-block" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://www.zeptonow.com/images/super-saver/check-mark.svg" style={{color: "transparent", objectFit: "contain"}}/>
                    <span>Added to Cart</span>
                </div>
                <button><svg className="" fill="none" height="16" viewBox="0 0 12 12" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M9 3L3 9" stroke="#958E9A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"></path><path d="M3 3L9 9" stroke="#958E9A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"></path></svg></button>
            </div>
            <ul className="max-h-[310px] overflow-y-auto">
                <li>
                    <div className="mb-4 flex gap-3 last:mb-6">
                        <div className="h-[88px] w-[88px] shrink-0 overflow-hidden">
                            <img alt="" fetchPriority="low" loading="lazy" width="88" height="88" decoding="async" data-nimg="1" className="relative overflow-hidden max-h-full rounded-lg" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/production/tr:w-220,ar-4579-4579,pr-true,f-auto,q-80/cms/product_variant/a446c8ea-9f1d-46ac-bc53-aec51ad72e0d.jpeg" style={{color: "transparent", objectFit: "contain"}}/>
                        </div>
                        <div className="flex flex-col justify-between text-sm font-medium text-gray-800">
                            <div>
                                <h3 className="line-clamp-2 text-base">French Vanilla Cold Brew</h3>
                                <div className="mt-0.5 text-slate-500">
                                    <span className="text-xs font-normal">450 ml</span> <span className="text-xs font-normal">×2</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <h4 className="line-clamp-1 !m-0 mb-0.5 py-0.5 text-sm font-semibold  tracking-wide">₹189</h4>
                                    <p className="line-clamp-1 text-[10px] font-body text-skin-primary-void/40 line-through">₹469</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <a aria-label="Cart" className="pt-2" data-testid="cart-btn" href="/?cart=open">
                <button className="px-7 text-base border-skin-primary border text-skin-primary bg-skin-base rounded-md w-full py-2 tracking-normal" type="button" style={{borderColor: "rgb(247, 199, 212)"}}>
                    <div className="flex items-center justify-center">Go to Cart <svg fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg" style={{height: "15px", width: "15px", color: "rgb(239, 67, 114)"}}><path d="M7 4.5L10.5 8L7 11.5" stroke="#ef4372" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div>
                </button>
            </a>
        </div>
        <span className="absolute -top-2 -right-2">
            <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full rounded-full p-2.5 opacity-75 bg-skin-primary-violet animate-ping-short"></span>
                <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full p-2.5 text-[10px] text-white bg-skin-primary-violet" data-testid="cart-items-number">1</span>
            </span>
        </span>
    </>
  )
}

export default Dummy


