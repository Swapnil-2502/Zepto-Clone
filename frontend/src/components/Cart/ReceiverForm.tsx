import React, { useEffect, useState } from "react";
import { useAddress } from "../../contexts/AddressContext";
import ReceiverFormToast from "./ReceiverFormToast";

interface RecieverFormProps {
    onClose: () => void;
}

const ReceiverForm: React.FC<RecieverFormProps> = ({onClose}) => {
    const {selectedAddress, updateAddress} = useAddress();
    const [receiverName, setReceiverName] = useState("");
    const [receiverNumber, setReceiverNumber] = useState("");
    const [showRecieverFormToast, setShowRecieverFormToast] = useState(false)

    useEffect(()=>{
        if(selectedAddress){
            setReceiverName(selectedAddress.receiverName || "")
            setReceiverNumber(selectedAddress.receiverContact || "")
        }
    },[])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedAddress) return;

        try{
            await updateAddress(selectedAddress._id,{
                saveAddressAs: selectedAddress.saveAddressAs,
                HouseNumber: selectedAddress.HouseNumber,
                BlockNumber: selectedAddress.BlockNumber,
                landmark: selectedAddress.landmark,
                receiverName: receiverName.trim(),
                receiverContact: receiverNumber.trim()
            })
        }
        catch(error){
            console.error('Failed to update receiver details:', error);
        }

        setTimeout(()=>{
            onClose()
        },500)

        setShowRecieverFormToast(true)
        
    }

    const handleRemove = async () => {

        if (!selectedAddress) return;
        try{
            console.log("INSIDE")
            await updateAddress(selectedAddress._id,{
                saveAddressAs: selectedAddress.saveAddressAs,
                HouseNumber: selectedAddress.HouseNumber,
                BlockNumber: selectedAddress.BlockNumber,
                landmark: selectedAddress.landmark,
                receiverName: "",
                receiverContact: ""
            })
        }
        catch(error){
            console.error('Failed to update receiver details:', error);
        }

        console.log("HELL=")

        onClose()
    }

  return (
    <>
    <div className="fixed inset-0 z-[99999999] overflow-y-hidden bg-black/70 transition-opacity ease-in">
        <div className="absolute inset-x-0 bottom-0 sm:static sm:flex sm:min-h-screen sm:items-center sm:justify-center">
            {!showRecieverFormToast ? 
                (<div className="relative h-full overflow-hidden rounded-t-3xl text-left shadow-xl transition-all sm:my-8 sm:h-full sm:rounded-xl sm:drop-shadow-md" style={{width: "28rem"}}>
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="" id="modal-title"></div>
                                <div className="">
                                    <div className="bg-skin-base">
                                        <div className="px-4 pb-6 pt-4">
                                            <div className="relative h-24">
                                                <img alt="" fetchPriority="low" loading="lazy" decoding="async" data-nimg="fill" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/images/add-receiver-details-final.png" style={{position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "contain", color: "transparent"}}/>
                                            </div>
                                            <div className="text-center">
                                                <h4 className="block font-heading text-lg tracking-wide mt-2 mb-1 !text-xl">Add Receiver's Details</h4>
                                                <p className="block font-body text-sm">Our delivery partner will coordinate with them</p>
                                                <div className="mt-4 rounded-lg bg-[#F3F5F7] text-skin-base">
                                                    <div className="_list-item_18zsn_1 ">
                                                        <div className="_list-item-left-container_18zsn_15">
                                                            <div className="_list-item-prefix-icon_18zsn_84">
                                                                <img alt="" fetchPriority="low" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://www.zeptonow.com/images/location.svg" style={{color: "transparent", objectFit: "contain"}} />
                                                            </div>
                                                            <div className="_list-item-text-container_18zsn_23">
                                                                <div className="_list-item-title-section_18zsn_31">
                                                                    <div className="_list-item-title_18zsn_31" data-size="small"></div>
                                                                </div>
                                                                <div className="_list-item-subtitle_18zsn_60" data-size="small">
                                                                    <span className="line-clamp-2 break-all">{selectedAddress?.HouseNumber}, {selectedAddress?.BlockNumber}, {selectedAddress?.landmark} </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <form className="mt-6 flex grow flex-col justify-end" role="form" onSubmit={handleSubmit}>
                                                <div>
                                                    <div className="w-full relative text-base text-skin-inverted flex bg-white items-center border rounded-md mb-4">
                                                        <input className="focus:outline-none block py-3 px-2 appearance-none font-subtitle flex-grow font-normal bg-transparent text-md" inputMode="text" placeholder="Reciever's Name" type="text" value={receiverName} onChange={(e)=>setReceiverName(e.target.value)} name="contactName" />
                                                        <button aria-label="Close Icon" className="pr-3.5">
                                                            <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                                                                <path clip-rule="evenodd" d="M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9ZM5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L7.93934 9L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L9 7.93934L11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967C12.8232 5.76256 12.8232 6.23744 12.5303 6.53033L10.0607 9L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L9 10.0607L6.53033 12.5303C6.23744 12.8232 5.76256 12.8232 5.46967 12.5303Z" fill="#130022" fill-opacity="0.4" fill-rule="evenodd"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="w-full relative text-base text-skin-inverted flex bg-white items-center border rounded-md mb-4">
                                                        <span className="left-0 pl-3.5"><span>+91</span></span>
                                                        <input className="focus:outline-none block py-3 px-2 appearance-none font-subtitle flex-grow font-normal bg-transparent text-md" inputMode="text" placeholder="Reciever's Phone Number" type="tel" value={receiverNumber} onChange={(e)=>setReceiverNumber(e.target.value)} name="contactNumber" />
                                                        <button aria-label="Close Icon" className="pr-3.5">
                                                            <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9ZM5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L7.93934 9L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L9 7.93934L11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967C12.8232 5.76256 12.8232 6.23744 12.5303 6.53033L10.0607 9L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L9 10.0607L6.53033 12.5303C6.23744 12.8232 5.76256 12.8232 5.46967 12.5303Z" fill="#130022" fill-opacity="0.4" fill-rule="evenodd"></path></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button className="py-1 px-7 text-base border-skin-primary border bg-skin-primary text-skin-base tracking-widest rounded-xl !py-3" type="submit">
                                                    <div className="flex items-center justify-center">
                                                        <h6 className="block font-subtitle text-base tracking-wider">Save Details</h6>
                                                    </div>
                                                </button>
                                                <button className="py-1 px-7 text-base border-skin-primary border text-skin-primary border-none mx-auto mt-3 w-max rounded-xl !px-0 !py-1" type="button" aria-label="Remove Receiver's Details" onClick={handleRemove}>
                                                    <div className="flex items-center justify-center">
                                                        <h6 className="block font-subtitle text-base tracking-wider">Remove Receiver's Details</h6>
                                                    </div>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            : (
                <ReceiverFormToast 
                    onClose={()=>setShowRecieverFormToast(false)}
                    duration={2000}
                />)
            }
        </div>
    </div>
    </>
  )
}

export default ReceiverForm