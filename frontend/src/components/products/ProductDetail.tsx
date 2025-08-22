
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"
import type { ProductData } from "./ProductCard";
import axios from "../../api/axios";
import Footer from "../Footer";

const ProductDetail = () => {
    const {productId} = useParams<{productId: string}>();
    const [product, setProduct] = useState<ProductData | null>(null)
    const [showPreview, setShowPreview] = useState(false);

    const productSectionRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        const fetchProduct = async () =>{
            try{
                const getproduct = await axios.get(`/products/${productId}`)
                setProduct(getproduct.data.product)
            }
            catch(error){
                console.error("Error fetching product:", error);
            }
            
        }

        fetchProduct()
    },[])

    useEffect(() =>{
        const handleScroll = () => {
            if(!productSectionRef.current) return;
            const rect = productSectionRef.current.getBoundingClientRect();

            const threshold = 100;
            setShowPreview(rect.top < threshold);
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[])

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Adjust this threshold as needed
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
        <div className="mx-auto w-4/5 xl:w-[1040px]">
            
            {showPreview &&
                <div className="fixed top-[68px] left-0 z-[101] w-full transition-all duration-300 lg:top-[86px] translate-y-0 opacity-100">
                    <div className="w-screen bg-white shadow-[0px_4px_34.2px_0px_rgba(0,0,0,0.10)]">
                        <div className="mx-auto flex w-4/5 items-center justify-between bg-white py-2.5 xl:w-[1040px]">
                            <div className="relative flex gap-4">
                                <img alt="4e44890d-d561-4972-b190-45b0324acce8.jpeg" fetchPriority="low" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="relative overflow-hidden rounded-xl" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/production/tr:w-100,ar-100-100,pr-true,f-auto,q-80/cms/product_variant/4e44890d-d561-4972-b190-45b0324acce8.jpeg" style={{color: "transparent", objectFit: "contain"}}/>
                                <div className="">
                                    <h2 className="text-sm font-semibold leading-6 tracking-[-0.3px] text-[#262A33]">{product?.title}</h2>
                                    <div className="mt-1.5">
                                        <div className="flex items-center gap-2 shrink-0" data-discountpercent="89" data-getforpassprice="3900">
                                            <p className="text-[24px] font-medium leading-5 text-[#262A33]">₹{product?.currPrice}</p>
                                            <p className="text-[16px] font-[450] leading-[21.6px] tracking-[-0.24px] text-[#A9B0C2] line-through">₹{product?.mrp}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div aria-label="Add to Cart" className="flex h-12 justify-between overflow-hidden rounded-[10px] border border-[#EF4372] bg-[#EF4372] px-4 py-3 font-bold leading-5 tracking-[0.1px] text-white transition-all duration-300 ease-in-out w-60">
                                    <button aria-label="Increase quantity by 1" className="w-full disabled:opacity-60">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className="flex flex-wrap items-center my-8 gap-2" data-testid="pdp-breadcrumbs">
                <span className="flex shrink-0 items-center gap-2">
                    <span><a className="text-sm font-[450] leading-[14px] text-[#5A6477]" href="/">Home</a></span>
                    <svg fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg" style={{height: "15px", width: "15px", color: "rgb(90, 100, 119)"}}><path d="M7 4.5L10.5 8L7 11.5" stroke="#5A6477" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                </span>
                <span className="flex shrink-0 items-center gap-2">
                    <span><a className="text-sm font-[450] leading-[14px] text-[#5A6477]" href="/cn/zepto-cafe/tea-coffee/cid/dfe16918-81b1-49c3-941b-acd557f7c277/scid/9517d4fc-47f8-408d-8368-6ae245ce42b5">Tea &amp; Coffee</a></span>
                    <svg fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg" style={{height: "15px", width: "15px", color: "rgb(90, 100, 119)"}}><path d="M7 4.5L10.5 8L7 11.5" stroke="#5A6477" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                </span>
                <span className="text-sm font-semibold leading-[14px] text-[#101418]">{product?.title}</span>
            </div>
            <div className="mt-8 flex flex-col gap-5 md:flex-row">
                <div className="bottom-0 top-[118px] flex w-full flex-col gap-5 self-start overflow-y-hidden lg:sticky" id="left-carousel">
                    <div>
                        <div className="flex flex-row gap-5">
                            <div className="relative max-h-[420px]">
                                <div className="no-scrollbar relative flex max-h-full flex-col gap-4 overflow-y-scroll ">
                                    <div>
                                        <button aria-label="image-preview-0" className="relative h-12 w-12">
                                            <img alt="a446c8ea-9f1d-46ac-bc53-aec51ad72e0d.jpeg" fetchPriority="low" loading="lazy" width="4579" height="4579" decoding="async" data-nimg="1" className="relative overflow-hidden h-12 w-12 rounded-xl border-[#101418] border-2" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src={product?.imageURL} style={{color: "transparent", objectFit: "contain"}}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[470px] w-[470px] overflow-hidden rounded-2xl border border-[#DFE4EC]">
                                <div className="no-scrollbar relative flex h-full w-full snap-x snap-mandatory overflow-x-scroll">
                                    <div className="relative aspect-square h-full w-full snap-center" id="e22825ab-8cfe-4710-938f-adcbbedbbc3b">
                                        <img alt={product?.title} fetchPriority="high" decoding="sync" data-nimg="fill" className="relative overflow-hidden h-full w-full" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src={product?.imageURL} style={{position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "contain", color: "transparent"}}/>
                                    </div>
                                </div>
                                <div className="absolute right-3 bottom-3 flex  items-center gap-2.5 ">
                                    <button aria-label="previous-image" className="flex h-7 w-7 rotate-180 items-center justify-center rounded-full border border-[#EBECEF] bg-white invisible">
                                        <svg fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg" style={{height: "16px", width: "16px", color: "rgb(90, 100, 119)"}}><path d="M7 4.5L10.5 8L7 11.5" stroke="#5A6477" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                                    </button>
                                    <button aria-label="next-image" className="flex h-7 w-7 items-center justify-center rounded-full border border-[#EBECEF] bg-white invisible">
                                        <svg fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg" style={{height: "16px", width: "16px", color: "rgb(90, 100, 119)"}}><path d="M7 4.5L10.5 8L7 11.5" stroke="#5A6477" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[68px]" ref={productSectionRef}>
                        <div className="relative flex items-center justify-between bg-white">
                            <div className={`pointer-events-none transition-all duration-300 ${
                                    isScrolled 
                                        ? 'opacity-100 translate-x-0 w-auto' 
                                        : 'opacity-0 -translate-x-8 w-0'
                                }`}>
                                <div className="flex items-center gap-2 shrink-0" data-discountpercent="87" data-getforpassprice="5700">
                                    <p className="text-[24px] font-medium leading-5 text-[#262A33]">₹{product?.currPrice}</p>
                                    <p className="text-[16px] font-[450] leading-[21.6px] tracking-[-0.24px] text-[#A9B0C2] line-through">₹{product?.mrp}</p>
                                </div>
                            </div>
                            <div aria-label="Add to Cart" className={`flex h-12 items-center justify-center rounded-[10px] border border-[#EF4372] bg-[#EF4372] font-bold leading-5 tracking-[0.1px] text-white transition-all duration-300 ease-in-out 
                                                                        ${isScrolled ? 'w-32 px-3 py-2 ml-auto' : 'w-full px-4 py-3'}`} >
                                <button aria-label="Increase quantity by 1" className="w-full disabled:opacity-60">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex w-full flex-col overflow-y-auto bg-white md:z-50">
                    <div className="relative overflow-hidden rounded-2xl border border-[#DFE4EC] px-5 pb-5 pt-4 transition-[padding]" id="product-features-wrapper">
                        <div>
                            <div className="rounded-2xl">
                                <div className="mt-2 flex items-center justify-between gap-6">
                                    <h1 className="text-xl font-semibold leading-[22px] tracking-[-0.36px] text-[#262A33]">{product?.title}</h1>
                                    <button aria-label="share-product" className="relative h-9 w-9 shrink-0 rounded-full border border-[#0000001a] bg-[#ffffffcc] p-2" id="share-btn">
                                        <img alt="Share.svg" fetchPriority="low" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/production/inventory/banner/c9ea0974-855e-4681-b0e1-437a76ebe511.svg" style={{color: "transparent", objectFit: "contain"}} />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="mt-2 text-sm leading-4 text-[#757C8D]">Net Qty: <span className="font-bold">{product?.netQty}</span></p>
                                    <div className="mt-2 flex items-center gap-2 text-sm leading-4 text-[#757C8D]">
                                        <div className="flex items-center gap-1 rounded-md px-2 py-1" style={{backgroundColor: "rgb(4, 109, 69)", color: "white"}}>
                                            <svg fill="none" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M6.08 9.211a.156.156 0 0 0-.157 0l-2.531 1.463a.486.486 0 0 1-.715-.54l.675-2.676a.156.156 0 0 0-.053-.16L1.118 5.53a.486.486 0 0 1 .269-.862l2.898-.22a.156.156 0 0 0 .132-.093l1.14-2.592a.486.486 0 0 1 .89 0l1.139 2.592a.156.156 0 0 0 .131.093l2.899.22a.486.486 0 0 1 .269.862L8.704 7.298a.156.156 0 0 0-.053.16l.674 2.677a.486.486 0 0 1-.714.54L6.08 9.21Z" fill="#fff"></path></svg>
                                            <span className="font-bold">{product?.stars}</span>
                                        </div>
                                        <span>({product?.reviewsCount})</span>
                                    </div>
                                </div>
                                <div className="mt-5 flex flex-col items-start justify-between lg:flex-row lg:items-center">
                                    <div>
                                        <div className="flex max-h-[28px] w-full items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <p className="flex items-center justify-center gap-2"><span className="text-[32px] font-medium leading-[30px] text-[#262A33]">{product?.currPrice}</span></p>
                                                <p className="text-[14px] font-semibold leading-[21.6px] tracking-[-0.24px] text-[#079761]">87% Off</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-[14px] font-[450] leading-[21.6px] tracking-[-0.24px] text-[#757C8D]"><span className="mr-2 mt-2 text-sm leading-4 text-[#757C8D]">MRP</span><span className="line-through font-bold">₹{product?.mrp}</span><span className="ml-2 mt-2 text-sm leading-4 text-[#757C8D]">(incl. of all taxes)</span></p>
                                        </div>
                                    </div>
                                    <div className="h-14"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="h-[1px] w-full bg-slate-200 my-5"></div>
                            <div className="no-scrollbar flex w-full overflow-scroll items-center gap-3">
                                <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-1.5 rounded-2xl bg-[#F9F9FD] py-2 px-1">
                                    <img alt="No Return.svg" fetchPriority="low" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/production/tr:w-100,ar-44-44,pr-true,f-auto,q-80/inventory/product/f078756c-776f-4b0b-ab17-4a0400ae76d0.svg" style={{color: "transparent", objectFit: "contain"}} />
                                    <div className="text-balance truncate text-center text-[10px] font-semibold leading-3 tracking-[0.1px] text-[#130022CC]" style={{textWrap: "balance"}}>
                                        <p>No Return or Exchange</p>
                                    </div>
                                </div>
                                <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-1.5 rounded-2xl bg-[#F9F9FD] py-2 px-1">
                                    <img alt="Quick Delivery.svg" fetchPriority="low" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/production/tr:w-100,ar-44-44,pr-true,f-auto,q-80/inventory/product/b14db3f8-88e3-45b8-b2db-47404049a825.svg" style={{color: "transparent", objectFit: "contain"}} />
                                    <div className="text-balance truncate text-center text-[10px] font-semibold leading-3 tracking-[0.1px] text-[#130022CC]" style={{textWrap: "balance"}}>
                                        <p>Fast Delivery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mt-6">
                            <div>
                                <div className="" id="productHighlights">
                                    <div className="rounded-2xl border border-[#DFE4EC] py-5 px-4">
                                        <h2 className="text-lg font-bold leading-5 text-[#101418]">Highlights</h2>
                                        <div className="mt-5">
                                            <div className="flex flex-col gap-8">
                                                <div className="flex items-start gap-3">
                                                    <h3 className="w-1/2 overflow-hidden break-words text-[14px]  font-[450] capitalize leading-5 text-[#757C8D]">brand</h3>
                                                    <p className="w-1/2 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">{product?.brand}</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <h3 className="w-1/2 overflow-hidden break-words text-[14px]  font-[450] capitalize leading-5 text-[#757C8D]">dietary preference</h3>
                                                    <p className="w-1/2 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">{product?.dietaryPreference}</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <h3 className="w-1/2 overflow-hidden break-words text-[14px]  font-[450] capitalize leading-5 text-[#757C8D]">protein</h3>
                                                    <p className="w-1/2 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">{product?.protein}</p>
                                                </div>
                                                {product?.disclamer && 
                                                    <div className="flex items-start gap-3">
                                                        <h3 className="w-1/2 overflow-hidden break-words text-[14px]  font-[450] capitalize leading-5 text-[#757C8D]">disclaimer</h3>
                                                        <p className="w-1/2 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">{product?.disclamer}</p>
                                                    </div>
                                                }
                                                <div className="flex items-start gap-3">
                                                    <h3 className="w-1/2 overflow-hidden break-words text-[14px]  font-[450] capitalize leading-5 text-[#757C8D]">serving temperature</h3>
                                                    <p className="w-1/2 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">{product?.servingTemperature}</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <h3 className="w-1/2 overflow-hidden break-words text-[14px]  font-[450] capitalize leading-5 text-[#757C8D]">key features</h3>
                                                    <p className="w-1/2 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">{product?.keyFeatures}</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <h3 className="w-1/2 overflow-hidden break-words text-[14px]  font-[450] capitalize leading-5 text-[#757C8D]">serving size</h3>
                                                    <p className="w-1/2 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">{product?.servingSize}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6" id="productInformationL4">
                                    <div className="rounded-2xl border border-[#DFE4EC] py-5 px-4">
                                        <h2 className="text-lg font-bold leading-5 text-[#101418]">Information</h2>
                                        <div className="mt-5">
                                            <div className="flex flex-col gap-8">
                                                <div className="flex items-start gap-3">
                                                    <h3 className="w-1/2 overflow-hidden break-words text-[14px]  font-[450] capitalize leading-5 text-[#757C8D]">nutrition information</h3>
                                                    <p className="w-1/2 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">{product?.nutritionInformation}</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <h3 className="w-1/2 overflow-hidden break-words text-[14px]  font-[450] capitalize leading-5 text-[#757C8D]">customer care details</h3>
                                                    <p className="w-1/2 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">{product?.customerCareDetails}</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <h3 className="w-1/2 overflow-hidden break-words text-[14px]  font-[450] capitalize leading-5 text-[#757C8D]">refund policy</h3>
                                                    <p className="w-1/2 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">{product?.refundPolicy}</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <h3 className="w-1/2 overflow-hidden break-words text-[14px]  font-[450] capitalize leading-5 text-[#757C8D]">Seller Name</h3>
                                                    <p className="w-1/2 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">{product?.sellerName}</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <h3 className="w-1/2 overflow-hidden break-words text-[14px]  font-[450] capitalize leading-5 text-[#757C8D]">Seller Address</h3>
                                                    <p className="w-1/2 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">{product?.sellerAddress}</p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <h3 className="w-1/2 overflow-hidden break-words text-[14px]  font-[450] capitalize leading-5 text-[#757C8D]">Seller License No.</h3>
                                                    <p className="w-1/2 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">{product?.sellerLicenseNo}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <footer className="mx-auto max-w-7xl px-4 md:px-0 mt-20">
                <div>
                    <div>
                        <div className="footer-content pnV2-desktop_footer__content__P0wyP space-y-5">
                            <h2>How to Buy {product?.title} Online on Zepto – Step-by-Step</h2>
                            <ol className="space-y-5">
                                <li>Search for "{product?.title}" on the Zepto app or website or browse through the relevant category section.</li>
                                <li>View {product?.title} price, available options, and customer ratings.</li>
                                <li>Add the item to your cart and proceed to buy {product?.title} online with secure and flexible payment options.</li>
                                <li>Get {product?.title} delivered quickly with Zepto's trusted delivery network and enjoy a hassle-free experience.</li>
                            </ol>
                        </div>
                    </div> 
                </div>
            </footer>
            <div className="mt-40">
                <Footer />
            </div>
        </div>
        
        
    </>
  )
}

export default ProductDetail