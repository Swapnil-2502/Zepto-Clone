import { Link } from "react-router-dom";

export type ProductData = {
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

type Props = {
    product: ProductData
};

const ProductCard: React.FC<Props> = ({product}) => {

    const {
        _id,
        title,
        netQty,
        stars,
        reviewsCount,
        imageURL,
        currPrice,
        mrp,    
    } = product
    
    const discount = mrp - currPrice

  return (
    <>
        <Link to={`/pn/${title}/pvid/${_id}`}>
            <div className="_container_sm_c1j8m_22 _container_c1j8m_3" data-variant="basic" data-size="sm" data-device="desktop" data-is-out-of-stock="false" style={{backgroundColor: "white"}}>
                
                <div data-slot-id="ProductImageWrapper" className="_container_6hrif_1 _image-wrapper_c1j8m_32">
                    <div className="_base_shgav_2 _base_border_shgav_13 _product-image--sm_c1j8m_40">
                        <img alt={title} title={title} className="_image_shgav_18" loading="lazy" src={imageURL} />
                        <button data-mode="default" className="_base_19qv4_2 _sm_19qv4_52 _empty_19qv4_30 _add-to-cart-button_c1j8m_88" data-size="sm" data-show-variant-selector="false">ADD</button>
                        <div className="_sponsor-tag_ztoqw_1 _sponsor-tag_c1j8m_113" data-slot-id="SponsorTag">
                            <img className="_sponsor-tag-image_ztoqw_13" height="10" width="14" alt="Icon-2.png" src="https://cdn.zeptonow.com/production/tr:w-1280,ar-48-48,pr-true,f-auto,q-80/inventory/product/cec23e7c-ec59-49e9-9a51-4b83d22bb2eb.png"/>
                        </div>
                    </div>
                </div>

                <div className="_price-and-discount-attribute_c1j8m_50">
                    <div data-slot-id="Price" className="_base_ljyvk_2 _price-container_c1j8m_58">
                        <p className="_price_ljyvk_11 _price_sm_ljyvk_19"><span className="_currency-symbol_ljyvk_49">₹</span>{currPrice}</p>
                        <p className="_original-price_ljyvk_35"><span className="_currency-symbol_ljyvk_49">₹</span>{mrp}</p>
                    </div>
                    <div className="_base_oilfk_1"><span>SAVE</span><span>₹{discount}</span></div>
                </div>

                <div data-slot-id="PackSize" className="_base_4i17o_1 _pack-size-container_c1j8m_64"><span>{netQty}</span></div>

                <div data-clamp="2" data-slot-id="ProductName" className="_base_1i8oq_1 _product-name-container_c1j8m_76"><span>{title}</span></div>

                <div className="_rating-and-eta-information-container_c1j8m_97">
                    <div data-slot-id="RatingInformation" className="_rating-container_1dpeb_1">
                        <span className="_rating_1dpeb_1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" color="#329537"><path fill="currentColor" d="M5.169 1.51c.218-.236.48-.428.831-.428.352 0 .613.192.832.427.208.225.432.552.698.94l.4.585c.165.239.2.282.24.311.04.03.093.05.37.132l.68.2c.452.133.831.245 1.11.374.292.135.555.325.663.659.109.334.008.642-.15.922-.149.268-.39.582-.677.955l-.432.562c-.177.23-.207.276-.222.324-.016.047-.02.103-.011.393l.02.708c.012.47.023.866-.013 1.17-.038.32-.138.629-.422.835-.284.207-.608.205-.924.143-.3-.06-.673-.192-1.117-.35l-.668-.237c-.273-.097-.327-.111-.377-.111-.05 0-.103.014-.377.11l-.667.238c-.444.158-.816.29-1.118.35-.315.062-.64.064-.923-.143-.284-.206-.384-.515-.422-.834-.036-.305-.025-.7-.012-1.171l.02-.708c.007-.29.004-.346-.012-.393-.015-.048-.045-.095-.222-.324l-.432-.562c-.287-.373-.528-.687-.678-.955-.157-.28-.258-.588-.15-.922.109-.334.372-.524.664-.66.278-.128.658-.24 1.11-.373l.68-.2c.277-.082.33-.103.37-.132.04-.03.075-.072.239-.311l.4-.585c.267-.388.49-.715.699-.94Z"></path></svg>{stars}</span>
                        <span className="_rating-count_1dpeb_21">({reviewsCount})</span>
                    </div>
                </div>

            </div>
        </Link>
        
    </>
  )
}

export default ProductCard