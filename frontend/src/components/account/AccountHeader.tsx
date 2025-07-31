import { useAuth } from "../../contexts/AuthContext"



const AccountHeader: React.FC = () => {
    const {user} = useAuth();
  return (
    <>
        <header className="mt-2">
            <div className="non-pass-profile-header_non-pass-profile-header__f7l8r">
                <div className="non-pass-profile-header_non-pass-profile-header__container__QB995">
                    <img alt="Swapnil Hajare" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" className="non-pass-profile-header_non-pass-profile-header__image__jbkWB" srcSet="https://cdn.zeptonow.com/production/app/svg/ProfileIconNonMember.svg 1x" src="https://cdn.zeptonow.com/production/app/svg/ProfileIconNonMember.svg" style={{color: "transparent"}}/>
                    <div className="non-pass-profile-header_non-pass-profile-header__info__gTmDc">
                        <h3 className="non-pass-profile-header_non-pass-profile-header__name__XZrX0">{user?.name}</h3>
                        <p className="non-pass-profile-header_non-pass-profile-header__mobile__iNT4F">{user?.phone}</p>
                    </div>
                </div>
                <a data-unstyled="true" href="/buy-pass">
                    <div className="non-pass-profile-header_non-pass-profile-header__suggested__Sn14g">
                        <div className="non-pass-profile-header_non-pass-profile-header__suggested-inner__p2la7">
                            <div className="non-pass-profile-header_non-pass-profile-header__suggested-content___zBf_">
                                <img alt="" fetchPriority="low" loading="lazy" width="44" height="15" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/svg/daily_yellow.svg?tr=w-undefined,q-70" style={{color:"transparent", objectFit: "contain"}}/>
                                <p className="non-pass-profile-header_non-pass-profile-header__suggested-title__yt8zE">
                                    <span className="text-body2 " style={{color: "white"}}>You would potentially save </span>
                                    <span className="text-cta1 " style={{color: "rgb(255, 240, 104)"}}>₹500</span>
                                    <span className="text-body2 " style={{color: "white"}}> per month with Zepto Daily</span>
                                </p>
                            </div>
                            <img alt="" fetchPriority="low" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" className="relative overflow-hidden non-pass-profile-header_non-pass-profile-header__suggested-image__cg7Yr" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/svg/dp_profile_wallet_coins.svg?tr=w-undefined,q-70" style={{color:"transparent", objectFit: "contain"}}/>
                            <div className="non-pass-profile-header_non-pass-profile-header__suggested-cta__KlYZn">
                                <span className="non-pass-profile-header_non-pass-profile-header__suggested-cta-text__a3Liq">Get</span>
                                <img alt="" fetchPriority="low" loading="lazy" width="40" height="13" decoding="async" data-nimg="1" className="relative overflow-hidden non-pass-profile-header_non-pass-profile-header__suggested-cta-icon__pHwJr" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/svg/daily_green.svg?tr=w-undefined,q-70" style={{color:"transparent", objectFit: "contain"}}/>
                                <img alt="" fetchPriority="low" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://www.zeptonow.com/images/double-chevron-right.svg" style={{color: "transparent", objectFit: "contain"}}/>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="mt-2.5 rounded-xl p-3 sm:m-2.5 bg-[#F3F5F7]">
                <a href="/account/wallet">
                    <div className="mb-5 flex flex-row items-center border-b border-dashed border-[#98A2B3] pb-3">
                        <img alt="refund-timeline" fetchPriority="low" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://www.zeptonow.com/images/wallet.svg" style={{color: "transparent", objectFit: "contain"}}/>
                        <h5 className="block font-subtitle tracking-wider w-full pl-2 text-base !font-bold text-black">Zepto Cash &amp; Gift Card</h5>
                        <img alt="right-arrow-icon" fetchPriority="low" loading="lazy" width="7" height="9" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.5.2/tr:w-5,ar-5-5,pr-true,f-auto,q-80//images/right-arrow-dark.svg" style={{color: "transparent", objectFit: "contain"}}/>
                    </div>
                </a>
                <div className="flex items-center justify-between">
                    <p className="block font-body text-base !font-extralight text-gray-500">Available Balance: <span className="font-bold text-black">₹0</span></p>
                    <a href="/account/wallet">
                        <h5 className="block font-subtitle text-lg tracking-wider rounded-lg bg-black p-2 text-white">Add Balance</h5>
                    </a>
                </div>
            </div>
        </header>
    </>
  )
}

export default AccountHeader