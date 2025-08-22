import { useEffect, useState } from "react"
import type { ProductData } from "./ProductCard"
import type {ProductApiResponse} from "../CoffeeProducts"
import axios from "../../api/axios";
import ProductCard from "./ProductCard";
import Footer from "../Footer";
import { useParams } from "react-router-dom";


const ProductPage = () => {
    const {Category} = useParams<{Category: string}>();
    const [products, setProducts] = useState<ProductData[] | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const res = await axios.get(`/products?category=${Category}`)
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
                console.log("HLL:->",res.data)
                setProducts(mapped)
            }
            catch(error){
                console.error(error)
            }
        }
        fetchProducts();
    },[])

  return (
    <>
        <div className="m-auto max-w-7xl">
            <h1 className="block font-body text-base sticky z-[101] bg-skin-base p-2 !font-title shadow sm:py-6 sm:!text-[1.5rem] sm:!font-heading sm:shadow-transparent top-[4.25rem] sm:relative sm:top-0">Coffee Lovers</h1>
    
            <div className="flex flex-col">
                <div className="grid h-full w-full grid-cols-2 gap-y-4 content-start gap-x-3 px-3 py-4 place-items-center md:place-items-start md:p-3 md:grid-cols-3 md:gap-x-3 lg:grid-cols-5 xl:grid-cols-6 pb-4 no-scrollbar" data-testid="uncl-Coffee Lovers-product-list">
                    {
                        products?.map((p) => <ProductCard key={p._id} product={p} />)
                    }
                </div>
            </div>
        </div>
        <div className="mt-20">
            <Footer />
        </div>
    </>
  )
}

export default ProductPage

