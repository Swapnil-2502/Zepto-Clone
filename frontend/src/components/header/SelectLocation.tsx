import React, { useState } from "react"
import AccountAddressForm from "../account/AccountAddressForm";
import { useAddress } from "../../contexts/AddressContext";

type Address = {
    saveAddressAs: string;
    HouseNumber: string;
    BlockNumber: string;
    landmark?: string;
    receiverName?: string;
    receiverContact?: string;
    _id: string;
}

interface SelectLocationProps {
    onClose: () => void
    onAddressSelect?: (address : Address) => void;
}

const SelectLocation: React.FC<SelectLocationProps> = ({onClose,onAddressSelect}) => {

    const [showAddressForm, setshowAddressForm] = useState(false);
    const {addresses} = useAddress()

    if(showAddressForm){
        return <AccountAddressForm onClose={() => setshowAddressForm(false)} />
    }

    const handleAddress = (address: Address) =>{
        if(onAddressSelect){
            onAddressSelect(address)
        }
        onClose()
    }

  return (
    <>
       <div className="fixed inset-0 z-[99999999] overflow-y-hidden bg-black/70 transition-opacity ease-in">
            <div className="absolute inset-x-0 bottom-0 sm:static sm:flex sm:min-h-screen sm:items-center sm:justify-center top-0" tabIndex={-1}>
                <div className="overflow-hidden text-left shadow-xl transition-all sm:my-8 sm:h-full sm:rounded-xl sm:drop-shadow-md static flex h-screen flex-col justify-between rounded-none sm:static" style={{width: "25rem"}}>
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="" id="modal-title"></div>
                                <div className="">
                                    <div className="select-location-modal_modalContainer__cWTe3" data-testid="address-modal">
                                        <div className="sticky z-[1000] flex w-full justify-between bg-skin-base p-3 shadow undefined">
                                            <button aria-label="Back button" className="sm:hidden">
                                                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" style={{height: "1.5rem", width: "1.5rem", color: "black"}}>
                                                    <path d="M15.5 19L8.5 12L15.5 5" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
                                                </svg>
                                            </button>
                                            <p className="block font-heading text-lg tracking-wide w-full pl-2">Your Location</p>
                                            <button aria-label="Location modal close Icon" className="absolute right-2 hidden sm:block" onClick={onClose}>
                                                <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                                                    <path clip-rule="evenodd" d="M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9ZM5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L7.93934 9L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L9 7.93934L11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967C12.8232 5.76256 12.8232 6.23744 12.5303 6.53033L10.0607 9L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L9 10.0607L6.53033 12.5303C6.23744 12.8232 5.76256 12.8232 5.46967 12.5303Z" fill="#130022" fill-opacity="0.4" fill-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="select-location-modal_contentWrapper__19N_A">
                                            
                                            <div className="select-location-modal_savedAddressContainer__HLBl7" data-testid="saved-address-container">
                                                <div className="select-location-modal_sectionWrapper__zBDkG">
                                                    <div className="select-location-modal_sectionContent__nQQp7">
                                                        
                                                        <div className="_list-item_18zsn_1 _list-item-cursor-pointer_18zsn_9">
                                                            <div className="_list-item-left-container_18zsn_15">
                                                                <div className="_list-item-prefix-icon_18zsn_84">
                                                                    <img alt="" fetchPriority="low" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://www.zeptonow.com/images/plus.svg" style={{color: "transparent", objectFit: "contain"}}/>
                                                                </div>
                                                                <div className="_list-item-text-container_18zsn_23">
                                                                    <div className="_list-item-title-section_18zsn_31">
                                                                        <div className="_list-item-title_18zsn_31" data-size="small" onClick={()=>setshowAddressForm(true)}>
                                                                            <span className="select-location-modal_addNewAddressText__eOO2n">Add New Address</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className="select-location-modal_chevronRight__8b4mY">
                                                                <img alt="" fetchPriority="low" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://www.zeptonow.com/images/chevron-right.svg" style={{color: "transparent", objectFit: "contain"}}/>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="select-location-modal_addressSection__mA3jS">
                                                    <h4 className="block font-heading text-lg tracking-wide select-location-modal_savedLocationTitle__jZzO_" data-testid="saved-location-title">Saved Addresses</h4>
                                                    <div className="select-location-modal_addressList__jZD0p" data-testid="saved-address-list">
                                                        {
                                                            addresses.map((address) => (
                                                                <>
                                                                    <React.Fragment key={address._id}>
                                                                        <div className="_list-item_18zsn_1 _list-item-cursor-pointer_18zsn_9" data-testid="address-item" onClick={() => handleAddress(address)}>
                                                                            <div className="_list-item-left-container_18zsn_15">
                                                                                <div className="_list-item-prefix-icon_18zsn_84">
                                                                                    <img alt="" fetchPriority="low" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://www.zeptonow.com/images/location.svg" style={{color: "transparent", objectFit: "contain"}}/>
                                                                                </div>
                                                                                <div className="_list-item-text-container_18zsn_23">
                                                                                    <div className="_list-item-title-section_18zsn_31">
                                                                                        <div className="_list-item-title_18zsn_31" data-size="small">{address.saveAddressAs}</div>
                                                                                    </div>
                                                                                    <div className="_list-item-subtitle_18zsn_60" data-size="small">
                                                                                        <span className="line-clamp-2 break-all"> {address.HouseNumber}, {address.BlockNumber}, {address.landmark}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="pr-1.5"></div>
                                                                        </div>
                                                                        <div className="px-4">
                                                                            <div className="_divider_29zqs_1"></div>
                                                                        </div>
                                                                    </React.Fragment>
                                                                </>
                                                            ))
                                                        }
                                                        
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
            </div>
        </div> 
    </>
  )
}

export default SelectLocation