import { useState } from "react";
import { useAddress } from "../../contexts/AddressContext";


interface AccountAddressFormProps {
  onClose: () => void;
}

const AccountAddressForm: React.FC<AccountAddressFormProps> = ({onClose}) => {
    const [selectedType, setSelectedType] = useState<string>("");
    const {addAddress} = useAddress()

    const [form, setForm] = useState({
        saveAddressAs: "",
        HouseNumber: "",
        BlockNumber: "",
        landmark: "",
        receiverName: "",
        receiverContact: "",
    })

    const [customeLabel, setCustomLabel] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setForm((prev) => ({...prev, [name]: value}))
    }

    const isFormComplete = form.HouseNumber.trim() !== "" && form.BlockNumber.trim() !== "" 
        && ((form.saveAddressAs !== "Other" && form.saveAddressAs !== "") 
            || (form.saveAddressAs === "Other" && customeLabel !== ""))
        

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        if (!isFormComplete) return;
        try{
            const data = {
                ...form,
                saveAddressAs: form.saveAddressAs as "Other" | "Home" | "Work",
            }
            await addAddress(data)
            onClose();
        }
        catch(error){
            console.error("Failed to add address:", error);
        }
    }

  return (
    <>
        <div className="fixed inset-0 z-[99999999] overflow-y-hidden bg-black/70 transition-opacity ease-in">
            <div className="absolute inset-x-0 bottom-0 sm:static sm:flex sm:min-h-screen sm:items-center sm:justify-center top-0" tabIndex={-1}>
                <div className="overflow-hidden text-left shadow-xl transition-all sm:my-8 sm:h-full sm:rounded-xl sm:drop-shadow-md static flex h-screen flex-col justify-between rounded-none sm:static" style={{width: "fit-content"}}>
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="" id="modal-title"></div>
                                <div className="">
                                    <div className="bg-skin-base">
                                        <div className="sticky z-[1000] flex w-full justify-between bg-skin-base p-3 shadow undefined">
                                            <button aria-label="Back button" className="sm:hidden">
                                                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" style={{height: "1.5rem", width: "1.5rem", color: "black"}}>
                                                    <path d="M15.5 19L8.5 12L15.5 5" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
                                                </svg>
                                            </button>
                                            <p className="block font-heading text-lg tracking-wide w-full pl-2">Add Address Details</p>
                                            <button aria-label="Location modal close Icon" className="absolute right-2 hidden sm:block" onClick={onClose}>
                                                <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                                                    <path clip-rule="evenodd" d="M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9ZM5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L7.93934 9L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L9 7.93934L11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967C12.8232 5.76256 12.8232 6.23744 12.5303 6.53033L10.0607 9L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L9 10.0607L6.53033 12.5303C6.23744 12.8232 5.76256 12.8232 5.46967 12.5303Z" fill="#130022" fill-opacity="0.4" fill-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="update-address-hoc_modalContainer__QVk59">
                                            <div className="update-address-hoc_addressDetailsScreen__3XGVF">
                                                <div className="relative h-full">
                                                    <div className="px-4">
                                                        <div className="mb-4 flex flex-row items-center justify-between">
                                                            <div className="block">
                                                                <h4 className="block font-heading text-lg tracking-wide"></h4>
                                                            </div>
                                                            <button className="py-1 px-7 text-base border-skin-primary border text-skin-primary border-none mx-0 mb-0 mt-1 whitespace-nowrap !p-0 font-norms font-semibold" type="button" aria-label="Change">
                                                                <div className="flex items-center justify-center"></div>
                                                            </button>
                                                        </div>
                                                        <form className="mt-6 mb-20 flex grow flex-col justify-end" onSubmit={(e) => {e.preventDefault(); handleSubmit(e);}}>
                                                            <div className="flex max-h-[28rem] flex-1 flex-col overflow-auto overscroll-y-contain pb-36 sm:max-h-[36rem] sm:pb-72">
                                                                <h6 className="block font-subtitle text-base tracking-wider mb-2 text-[#13002266]">House No. &amp; Floor*</h6>
                                                                <div>
                                                                    <div className="w-full relative text-base text-skin-inverted flex bg-white items-center border rounded-md mb-4 !bg-map">
                                                                        <input className="focus:outline-none block py-3 px-2 appearance-none font-subtitle flex-grow font-normal bg-transparent text-md" inputMode="text" placeholder="Enter details" type="text" value={form.HouseNumber} onChange={handleChange} name="HouseNumber"/>
                                                                    </div>
                                                                </div>
                                                                <h6 className="block font-subtitle text-base tracking-wider mb-2 text-[#13002266]">Building &amp; Block No.*</h6>
                                                                <div>
                                                                    <div className="w-full relative text-base text-skin-inverted flex bg-white items-center border rounded-md mb-4 !bg-map">
                                                                        <input className="focus:outline-none block py-3 px-2 appearance-none font-subtitle flex-grow font-normal bg-transparent text-md" inputMode="text" placeholder="Enter details" type="text" value={form.BlockNumber} onChange={handleChange} name="BlockNumber"/>
                                                                    </div>
                                                                </div>
                                                                <h6 className="block font-subtitle text-base tracking-wider mb-2 text-[#13002266]">Landmark &amp; Area Name (Optional)</h6>
                                                                <div>
                                                                    <div className="w-full relative text-base text-skin-inverted flex bg-white items-center border rounded-md mb-4 !bg-map">
                                                                        <input className="focus:outline-none block py-3 px-2 appearance-none font-subtitle flex-grow font-normal bg-transparent text-md" inputMode="text" placeholder="Enter details" type="text" value={form.landmark} onChange={handleChange} name="landmark"/>
                                                                    </div>
                                                                </div>
                                                                <h4 className="block font-heading text-lg tracking-wide mb-3 mt-2">Add Address Label</h4>
                                                                <ul className="inline-flex gap-4 mb-3">
                                                                    <li className="relative">
                                                                        <input className="peer sr-only" id="type-Home-radio" test-id="type-Home-radio" type="radio" value="Home" name="saveAddressAs" onChange={(e) => { setSelectedType("Home"); handleChange(e); }}/>
                                                                        <label className="bg-skin-base border-skin-primary-void/20 border-opacity-12 hover:bg-skin-muted peer-checked:bg-skin-primary-darker peer-checked:border-skin-primary-darker text-skin-primary-darker peer-checked:text-skin-base font-norms peer-disabled:bg-skin-base peer-disabled:border-skin-primary-void/10 peer-disabled:text-skin-secondary/60 flex cursor-pointer justify-center rounded-full border px-5 py-1 text-xs focus:outline-none" htmlFor="type-Home-radio">Home</label>
                                                                    </li>
                                                                    <li className="relative">
                                                                        <input className="peer sr-only" id="type-Work-radio" test-id="type-Work-radio" type="radio" value="Work" name="saveAddressAs" onChange={(e) => {setSelectedType("Work"); handleChange(e); }}/>
                                                                        <label className="bg-skin-base border-skin-primary-void/20 border-opacity-12 hover:bg-skin-muted peer-checked:bg-skin-primary-darker peer-checked:border-skin-primary-darker text-skin-primary-darker peer-checked:text-skin-base font-norms peer-disabled:bg-skin-base peer-disabled:border-skin-primary-void/10 peer-disabled:text-skin-secondary/60 flex cursor-pointer justify-center rounded-full border px-5 py-1 text-xs focus:outline-none" htmlFor="type-Work-radio">Work</label>
                                                                    </li>
                                                                    <li className="relative">
                                                                        <input className="peer sr-only" id="type-Other-radio" test-id="type-Other-radio" type="radio" value="Other" name="saveAddressAs" onChange={(e) => {setSelectedType("Other"); handleChange(e); }}/>
                                                                        <label className="bg-skin-base border-skin-primary-void/20 border-opacity-12 hover:bg-skin-muted peer-checked:bg-skin-primary-darker peer-checked:border-skin-primary-darker text-skin-primary-darker peer-checked:text-skin-base font-norms peer-disabled:bg-skin-base peer-disabled:border-skin-primary-void/10 peer-disabled:text-skin-secondary/60 flex cursor-pointer justify-center rounded-full border px-5 py-1 text-xs focus:outline-none" htmlFor="type-Other-radio">Other</label>
                                                                    </li>
                                                                </ul>
                                                                {selectedType === "Other" && (
                                                                    <div>
                                                                        <div className="w-full relative text-base text-skin-inverted flex bg-white items-center border rounded-md mb-4 !bg-map">
                                                                            <input className="focus:outline-none block py-3 px-2 appearance-none font-subtitle flex-grow font-normal bg-transparent text-md" inputMode="text" placeholder="Enter your own label" type="text" value={customeLabel} onChange={(e)=>setCustomLabel(e.target.value)} name="cutomlabel"/>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                <h4 className="block font-heading text-lg tracking-wide mb-3 mt-2">Receiver Details</h4>
                                                                <div>
                                                                    <div className="w-full relative text-base text-skin-inverted flex bg-white items-center border rounded-md mb-4 !bg-map">
                                                                        <input className="focus:outline-none block py-3 px-2 appearance-none font-subtitle flex-grow font-normal bg-transparent text-md" inputMode="text" placeholder="Enter receiver's Name" type="text" value={form.receiverName} onChange={handleChange} name="receiverName"/>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="w-full relative text-base text-skin-inverted flex bg-white items-center border rounded-md mb-4 !bg-map">
                                                                        <span className="left-0 pl-3.5"><span>+91</span></span>
                                                                        <input className="focus:outline-none block py-3 px-2 appearance-none font-subtitle flex-grow font-normal bg-transparent text-md" inputMode="text" placeholder="Enter receiver's Phone Number" type="tel" value={form.receiverContact} onChange={handleChange} name="receiverContact" maxLength={10} pattern="\d{10}"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                
                                                            <div className="absolute inset-x-0 bottom-8 bg-skin-base p-4 pb-8 sm:bottom-0 sm:pb-4">
                                                                <button 
                                                                    className = {`px-7 text-base rounded-md w-full border-none !py-3.5 tracking-widest cursor-pointer
                                                                            ${
                                                                                isFormComplete
                                                                                    ? "bg-skin-primary text-skin-base border-skin-primary py-1 bg-[#ef4372] text-white"
                                                                                    : "bg-[#7575751a] text-[#75757599] bg-opacity-10 text-opacity-60"
                                                                            }
                                                                        `}
                                                                    disabled={!isFormComplete} type="submit" aria-label="Submit">
                                                                    <div className="flex items-center justify-center">
                                                                        <h4 className="block font-heading text-lg tracking-wide">Save &amp; Continue</h4>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        
                                                        </form>
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

export default AccountAddressForm