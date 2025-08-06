import React from 'react'

const AccountAddress = () => {
  return (
    <>
        <div className="hidden flex-col lg:block lg:h-[80vh] lg:w-2/3 lg:overflow-y-scroll lg:rounded-r-3xl lg:border-l" id="desktop-order-details-section">
            <div className="addresses_pageContainer__hPGDV">
                <div className="addresses_addNewAddressWrapper__pqd_K">
                    <div className="addresses_addNewAddressButton__vOWfQ">
                        <div className="_list-item_18zsn_1 _list-item-cursor-pointer_18zsn_9">
                            <div className="_list-item-left-container_18zsn_15">
                                <div className="_list-item-prefix-icon_18zsn_84">
                                    <img alt="" fetchPriority="low" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://www.zeptonow.com/images/plus.svg" style={{color: "transparent", objectFit: "contain"}}/>
                                </div>
                                <div className="_list-item-text-container_18zsn_23">
                                    <div className="_list-item-title-section_18zsn_31">
                                        <div className="_list-item-title_18zsn_31" data-size="small">
                                            <span className="addresses_addNewAddressText__1TMu8">Add New Address</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="addresses_chevronRight__3cwdC">
                                <img alt="" fetchPriority="low" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://www.zeptonow.com/images/chevron-right.svg" style={{color: "transparent", objectFit: "contain"}}/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="addresses_addressContainer__B52r5">
                    <h4 className="block font-heading text-lg tracking-wide addresses_savedAddressesTitle__CIKMI" data-testid="saved-location-title">Saved Addresses</h4>
                    <div className="addresses_addressCard__Bygaq">
                        <div className="addresses_emptyScreen__rqjPI">
                            <div className="m-auto block w-fit pt-4 ">
                                <div className="mx-auto block w-fit">
                                    <img alt="" fetchPriority="low" loading="lazy" width="120" height="120" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/images/cone-icon.png" style={{color: "transparent", objectFit: "contain"}}/>
                                </div>
                                <h3 className="block font-heading text-xl tracking-wider mt-8 text-center undefined">No Address Added</h3>
                                <p className="block font-body text-base mt-3 w-80 text-center undefined">To see the saved address here, add your work or home address</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AccountAddress