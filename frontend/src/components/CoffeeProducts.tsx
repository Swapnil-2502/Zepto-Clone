import { useEffect, useRef, useState } from "react"
import type { ProductData } from "./products/ProductCard"
import axios from "../api/axios";
import ProductCard from "./products/ProductCard";
import { Link } from "react-router-dom";

export type ProductApiResponse = {
    _id: string
    title: string;
    netQty: string;
    stars: number;
    reviewsCount: string;
    imageURL: string;
    currPrice: number;
    mrp: number;
    brand: string;
    dietaryPreference: string;
    allergenInformation: string;
    protein: string;
    disclamer: string;
    servingTemperature: string;
    keyFeatures: string;
    servingSize: string;
    nutritionInformation: string;
    customerCareDetails: string;
    refundPolicy: string;
    sellerName: string;
    sellerAddress: string;
    sellerLicenseNo: string;
    category: string; 
};


const CoffeeProducts = () => {
    const [products, setProducts] = useState<ProductData[]>([])
    const [scrollLeftButton, setscrollLeftButton] = useState(false)
    const [scrollRightButton, setScrollRightButton] = useState(true)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const res = await axios.get("/products?category=CoffeeProducts")
                const mapped: ProductData[] = (res.data.Products || []).map((p:ProductApiResponse) => ({
                    _id: p._id,
                    title: p.title,
                    netQty: p.netQty,
                    stars: p.stars,
                    reviewsCount: p.reviewsCount,
                    imageURL: p.imageURL,
                    currPrice: p.currPrice,
                    mrp: p.mrp
                }))
                setProducts(mapped)
            }
            catch(error){
                console.error(error)
            }
        }
        fetchProducts();
    },[])

    const scroll = (direction: "left" | "right") => {

        if(!scrollRef.current) return 

        const { scrollLeft, clientWidth } = scrollRef.current
        const scrollAmount = clientWidth * 0.4

        if(direction === "left"){
            scrollRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: "smooth" })
        }
        else{
            scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" })
        }
    }

    const handleScroll = () => {
        if (!scrollRef.current) return
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        setscrollLeftButton(scrollRef.current.scrollLeft > 0)

        const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 5;
        setScrollRightButton(!isAtEnd);
    }

    useEffect(()=>{
        const el = scrollRef.current
        if (!el) return
        el.addEventListener("scroll", handleScroll)
        return () => el.removeEventListener("scroll", handleScroll)
    },[])

 
  return (
    <>
        <div className="opacity-0" style={{opacity: "1"}}>
            <div className="flex items-start gap-14" style={{padding: "3.25rem 1.25rem 3.25rem 2.5rem", marginBottom: "3.25rem", borderRadius: "1rem", borderColor: "rgb(255, 255, 255)", background: "url('https://cdn.zeptonow.com/production/inventory/banner/1b4d7f2a-4d0a-4729-8dfd-649d3492903b.png') center bottom / cover no-repeat"}}>
                <div className="flex w-full max-w-max shrink-0 flex-col justify-between gap-11">
                    <img alt="Header.png" fetchPriority="low" loading="lazy" width="272" height="156" decoding="async" data-nimg="1" className="relative overflow-hidden h-[156px] w-full" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/production/tr:w-272,ar-1088-624,pr-true,f-auto,q-80/inventory/banner/92d8f5bd-3795-4cb7-a0ba-8396a85a778d.png" style={{color: "transparent", objectFit: "contain", padding: "0rem"}}/>
                    <Link to={`/uncl/CoffeeProducts`}>
                        <img alt="Footer.png" fetchPriority="low" loading="lazy" width="180" height="52" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/production/tr:w-180,ar-720-208,pr-true,f-auto,q-80/inventory/banner/cf4eab38-7fea-4cb4-b76f-781f92604bf0.png" style={{color: "transparent", objectFit: "contain", padding: "0rem"}}/>
                    </Link>
                </div>
                <div className="overflow-scroll">
                    <div className="relative">
                        <section className="embla">
                            <div className="embla__viewport overflow-x-scroll scrollbar-hide" ref={scrollRef}>
                                <div className="embla__container" >
                                    {
                                        products.map((p) => <ProductCard key={p._id} product={p} />)
                                    }
                                </div>
                            </div>
                            {scrollLeftButton &&                               
                                <div className="absolute left-5 top-1/2 z-10 -translate-y-1/2 ">
                                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black p-2 shadow-lg" type="button"  onClick={() => scroll("left")}>
                                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" style={{height: "1.5rem", width: "1.5rem", color: "rgb(255, 255, 255)"}}>
                                            <path d="M15.5 19L8.5 12L15.5 5" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
                                            </svg>
                                    </button>
                                </div>
                            }
                            {scrollRightButton && 
                                <div className="absolute right-5 top-1/2 z-10 -translate-y-1/2">
                                    <button className="flex h-8 w-8 -rotate-180 items-center justify-center rounded-full bg-black p-2 shadow-lg" type="button"  onClick={() => scroll("right")}>
                                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" style={{height: "1.5rem", width: "1.5rem", color: "rgb(255, 255, 255)"}}>
                                            <path d="M8.5 5L15.5 12L8.5 19" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                             }
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CoffeeProducts