import { useState } from "react";
import { useAddress } from "../../contexts/AddressContext";
import AccountAddressForm from "./AccountAddressForm";

type Address = {
    saveAddressAs: string;
    HouseNumber: string;
    BlockNumber: string;
    landmark?: string;
    receiverName?: string;
    receiverContact?: string;
    _id: string;
}

type Props = {
  address: Address;
};

const AccountSavedAddress = ({address}: Props) => {
    const { saveAddressAs, HouseNumber, BlockNumber, landmark } = address;
    const [showForm, setShowForm] = useState(false)
    const [isAddressForm, setisAddressForm] = useState(false)
    const {deleteAddress} = useAddress();

    const handleDelete = async (id:string) =>{
        await deleteAddress(id);
    }

  return (
    <>
        <div className="_list-item_18zsn_1 ">
            <div className="_list-item-left-container_18zsn_15">
                <div className="_list-item-prefix-icon_18zsn_84">
                    {address.saveAddressAs === "Home" ? <img alt="" fetchPriority="low" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://www.zeptonow.com/images/home.svg" style={{color: "transparent", objectFit: "contain"}}/> : null}
                    {address.saveAddressAs === "Work" ? <img alt="" fetchPriority="low" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://www.zeptonow.com/images/briefcase.svg" style={{color: "transparent", objectFit: "contain"}}/> : null}
                    {address.saveAddressAs === "Other" ? <img alt="" fetchPriority="low" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://www.zeptonow.com/images/location.svg" style={{color: "transparent", objectFit: "contain"}}/> : null}
                </div>
                <div className="_list-item-text-container_18zsn_23">
                    <div className="_list-item-title-section_18zsn_31">
                        <div className="_list-item-title_18zsn_31" data-size="big">{saveAddressAs}</div>
                    </div>
                    <div className="_list-item-subtitle_18zsn_60" data-size="big">
                        <span className="line-clamp-2 break-all">{HouseNumber} {BlockNumber} {landmark}</span>
                    </div>
                </div>
            </div>
            <div className="flex cursor-pointer items-center self-stretch p-1.5" onClick={()=>setisAddressForm(true)}>
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                        <mask fill="black" height="19" id="path-1-outside-1_25003_9309" maskUnits="userSpaceOnUse" width="19" x="2" y="3">
                            <rect fill="white" height="19" width="19" x="2" y="3"></rect>
                            <path d="M13.9067 6.63178L5.60582 14.9326C5.38123 15.1572 5.26893 15.2695 5.19165 15.406C5.11437 15.5425 5.07586 15.6966 4.99882 16.0047L4.23321 19.0672C4.12906 19.4837 4.07699 19.692 4.19248 19.8075C4.30797 19.923 4.51625 19.8709 4.93283 19.7668L7.99528 19.0012C8.30342 18.9241 8.45749 18.8856 8.59398 18.8083C8.73047 18.7311 8.84276 18.6188 9.06736 18.3942L9.06736 18.3942L17.3682 10.0933L17.3682 10.0933C18.1374 9.32409 18.5221 8.93948 18.5221 8.46154C18.5221 7.9836 18.1374 7.59899 17.3682 6.82976L17.3682 6.82975L17.1702 6.63178C16.401 5.86255 16.0164 5.47794 15.5385 5.47794C15.0605 5.47794 14.6759 5.86255 13.9067 6.63178Z"></path>
                        </mask>
                            <path d="M5.60582 14.9326L6.70184 16.0287L6.70184 16.0287L5.60582 14.9326ZM13.9067 6.63178L12.8107 5.53577L12.8107 5.53577L13.9067 6.63178ZM17.1702 6.63178L16.0742 7.7278L16.0742 7.7278L17.1702 6.63178ZM17.3682 6.82975L18.4642 5.73374L18.4642 5.73374L17.3682 6.82975ZM17.3682 10.0933L18.4642 11.1893H18.4642L17.3682 10.0933ZM9.06736 18.3942L7.97135 17.2982L9.06736 18.3942ZM4.99882 16.0047L3.4951 15.6288L3.4951 15.6288L4.99882 16.0047ZM4.23321 19.0672L5.73693 19.4431L4.23321 19.0672ZM4.93283 19.7668L4.5569 18.2631L4.5569 18.2631L4.93283 19.7668ZM7.99528 19.0012L7.61935 17.4975H7.61935L7.99528 19.0012ZM4.19248 19.8075L3.09646 20.9035L3.09647 20.9035L4.19248 19.8075ZM8.59398 18.8083L7.8303 17.4595L7.83029 17.4595L8.59398 18.8083ZM17.3682 6.82976L18.4642 5.73374V5.73374L17.3682 6.82976ZM17.3682 10.0933L18.4642 11.1893V11.1893L17.3682 10.0933ZM5.19165 15.406L3.84284 14.6423L3.84284 14.6423L5.19165 15.406ZM6.70184 16.0287L15.0027 7.7278L12.8107 5.53577L4.50981 13.8366L6.70184 16.0287ZM16.0742 7.7278L16.2722 7.92577L18.4642 5.73374L18.2663 5.53577L16.0742 7.7278ZM16.2722 8.99731L7.97135 17.2982L10.1634 19.4902L18.4642 11.1893L16.2722 8.99731ZM3.4951 15.6288L2.72949 18.6912L5.73693 19.4431L6.50254 16.3807L3.4951 15.6288ZM5.30876 21.2705L8.37121 20.5049L7.61935 17.4975L4.5569 18.2631L5.30876 21.2705ZM2.72949 18.6912C2.69005 18.849 2.61333 19.1388 2.58785 19.3993C2.56049 19.679 2.54468 20.3518 3.09646 20.9035L5.2885 18.7115C5.48492 18.9079 5.59701 19.1413 5.64598 19.354C5.68826 19.5377 5.67592 19.6725 5.67312 19.7012C5.66991 19.734 5.66704 19.7359 5.6799 19.6779C5.6922 19.6225 5.70938 19.5533 5.73693 19.4431L2.72949 18.6912ZM4.5569 18.2631C4.4467 18.2906 4.37753 18.3078 4.32205 18.3201C4.26405 18.333 4.26604 18.3301 4.29884 18.3269C4.32746 18.3241 4.4623 18.3117 4.64599 18.354C4.8587 18.403 5.09207 18.5151 5.28849 18.7115L3.09647 20.9035C3.64825 21.4553 4.32099 21.4395 4.60065 21.4122C4.86116 21.3867 5.15102 21.3099 5.30876 21.2705L4.5569 18.2631ZM7.97135 17.2982L7.97134 17.2982L10.1634 19.4902L10.1634 19.4902L7.97135 17.2982ZM7.97134 17.2982C7.91354 17.356 7.87066 17.3988 7.83346 17.4352C7.79653 17.4714 7.77476 17.4918 7.76143 17.5038C7.73895 17.524 7.76884 17.4943 7.8303 17.4595L9.35766 20.1572C9.71956 19.9523 9.99697 19.6566 10.1634 19.4902L7.97134 17.2982ZM8.3712 20.5049C8.59952 20.4478 8.99577 20.3621 9.35767 20.1572L7.83029 17.4595C7.89175 17.4247 7.93255 17.4144 7.90366 17.4232C7.88652 17.4285 7.85784 17.4367 7.80783 17.4498C7.75746 17.4629 7.69865 17.4776 7.61935 17.4975L8.3712 20.5049ZM16.2722 7.92577L16.2722 7.92577L18.4642 5.73374L18.4642 5.73374L16.2722 7.92577ZM16.2722 7.92577C16.4686 8.12216 16.6217 8.27544 16.7497 8.41005C16.8782 8.54522 16.9546 8.63391 17.0013 8.69508C17.0884 8.80926 16.9721 8.69773 16.9721 8.46154H20.0721C20.0721 7.74741 19.7634 7.20461 19.4659 6.81468C19.1957 6.46053 18.8179 6.08737 18.4642 5.73374L16.2722 7.92577ZM18.4642 11.1893L18.4642 11.1893L16.2722 8.9973L16.2722 8.99731L18.4642 11.1893ZM18.4642 11.1893C18.8179 10.8357 19.1957 10.4626 19.4659 10.1084C19.7634 9.71847 20.0721 9.17567 20.0721 8.46154H16.9721C16.9721 8.22534 17.0884 8.11382 17.0013 8.22799C16.9546 8.28917 16.8782 8.37785 16.7497 8.51303C16.6217 8.64764 16.4686 8.80092 16.2722 8.9973L18.4642 11.1893ZM15.0027 7.7278C15.1991 7.53142 15.3524 7.37828 15.487 7.25029C15.6221 7.12177 15.7108 7.04536 15.772 6.99868C15.8862 6.91157 15.7747 7.02794 15.5385 7.02794V3.92794C14.8243 3.92794 14.2815 4.23661 13.8916 4.53412C13.5374 4.80433 13.1643 5.18214 12.8107 5.53577L15.0027 7.7278ZM18.2663 5.53577C17.9126 5.18214 17.5395 4.80433 17.1853 4.53412C16.7954 4.23661 16.2526 3.92794 15.5385 3.92794V7.02794C15.3023 7.02794 15.1907 6.91157 15.3049 6.99868C15.3661 7.04536 15.4548 7.12177 15.59 7.25029C15.7246 7.37828 15.8778 7.53142 16.0742 7.7278L18.2663 5.53577ZM4.50981 13.8366C4.3434 14.003 4.04774 14.2804 3.84284 14.6423L6.54046 16.1697C6.50566 16.2312 6.47602 16.261 6.49623 16.2386C6.50821 16.2252 6.5286 16.2035 6.56476 16.1665C6.60119 16.1293 6.64404 16.0865 6.70184 16.0287L4.50981 13.8366ZM6.50254 16.3807C6.52237 16.3014 6.53709 16.2425 6.55025 16.1922C6.56331 16.1422 6.57149 16.1135 6.57675 16.0963C6.58563 16.0674 6.57526 16.1082 6.54046 16.1697L3.84284 14.6423C3.63794 15.0042 3.55218 15.4005 3.4951 15.6288L6.50254 16.3807Z" fill="#130022" mask="url(#path-1-outside-1_25003_9309)"></path>
                            <path d="M12.6543 6.73047L17.2697 11.3459" stroke="#130022" stroke-width="1.55"></path>
                    </g>
                </svg>
            </div>
            <div className="flex cursor-pointer items-center self-stretch p-1.5" onClick={() => setShowForm(true)}>
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                        <path d="M10 15L10 12" stroke="#130022" stroke-linecap="round" stroke-width="1.55"></path>
                        <path d="M14 15L14 12" stroke="#130022" stroke-linecap="round" stroke-width="1.55"></path>
                        <path d="M19.2346 7.15224L19.5312 7.86825L19.2346 7.15224ZM18.1522 8.23463L17.4362 7.93805L18.1522 8.23463ZM5.84776 8.23463L5.13175 8.53121L5.84776 8.23463ZM6.58579 19.4142L7.13379 18.8662L6.58579 19.4142ZM17.4142 19.4142L16.8662 18.8662L17.4142 19.4142ZM3 7.775H21V6.225H3V7.775ZM14 19.225H10V20.775H14V19.225ZM6.775 16V10H5.225V16H6.775ZM17.225 10V16H18.775V10H17.225ZM21 6.225C20.5447 6.225 20.1643 6.22458 19.8529 6.24583C19.5346 6.26755 19.232 6.31448 18.9381 6.43623L19.5312 7.86825C19.6048 7.83776 19.719 7.80857 19.9584 7.79223C20.2049 7.77542 20.5235 7.775 21 7.775V6.225ZM18.775 10C18.775 9.52345 18.7754 9.20486 18.7922 8.95844C18.8086 8.71899 18.8378 8.60481 18.8682 8.53121L17.4362 7.93805C17.3145 8.232 17.2676 8.53456 17.2458 8.85293C17.2246 9.16435 17.225 9.54466 17.225 10H18.775ZM18.9381 6.43623C18.2581 6.71788 17.7179 7.2581 17.4362 7.93805L18.8682 8.53121C18.9926 8.23105 19.2311 7.99258 19.5312 7.86825L18.9381 6.43623ZM6.775 10C6.775 9.54466 6.77542 9.16435 6.75417 8.85293C6.73245 8.53456 6.68552 8.232 6.56377 7.93805L5.13175 8.53121C5.16224 8.60481 5.19143 8.71899 5.20777 8.95844C5.22458 9.20486 5.225 9.52345 5.225 10H6.775ZM3 7.775C3.47655 7.775 3.79514 7.77542 4.04156 7.79223C4.28101 7.80857 4.39519 7.83776 4.46879 7.86825L5.06195 6.43623C4.768 6.31448 4.46544 6.26755 4.14707 6.24583C3.83565 6.22458 3.45534 6.225 3 6.225V7.775ZM6.56377 7.93805C6.28212 7.2581 5.7419 6.71788 5.06195 6.43623L4.46879 7.86825C4.76895 7.99258 5.00742 8.23105 5.13175 8.53121L6.56377 7.93805ZM10 19.225C9.03528 19.225 8.38971 19.2234 7.90872 19.1587C7.45003 19.097 7.25869 18.9911 7.13379 18.8662L6.03778 19.9622C6.49867 20.4231 7.07162 20.6101 7.70219 20.6949C8.31046 20.7766 9.0791 20.775 10 20.775V19.225ZM5.225 16C5.225 16.9209 5.22335 17.6895 5.30513 18.2978C5.38991 18.9284 5.57689 19.5013 6.03778 19.9622L7.13379 18.8662C7.0089 18.7413 6.90298 18.55 6.84131 18.0913C6.77665 17.6103 6.775 16.9647 6.775 16H5.225ZM14 20.775C14.9209 20.775 15.6895 20.7766 16.2978 20.6949C16.9284 20.6101 17.5013 20.4231 17.9622 19.9622L16.8662 18.8662C16.7413 18.9911 16.55 19.097 16.0913 19.1587C15.6103 19.2234 14.9647 19.225 14 19.225V20.775ZM17.225 16C17.225 16.9647 17.2234 17.6103 17.1587 18.0913C17.097 18.55 16.9911 18.7413 16.8662 18.8662L17.9622 19.9622C18.4231 19.5013 18.6101 18.9284 18.6949 18.2978C18.7766 17.6895 18.775 16.9209 18.775 16H17.225Z" fill="#130022"></path><path d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059" stroke="#130022" stroke-linecap="round" stroke-width="1.55"></path>
                    </g>
                </svg>
            </div>
        </div>
        {showForm && (
            <div className="fixed inset-0 z-[99999999] overflow-y-hidden bg-black/70 transition-opacity ease-in">
                <div className="absolute inset-x-0 bottom-0 sm:static sm:flex sm:min-h-screen sm:items-center sm:justify-center" tabIndex={-1}>
                    <div className="relative h-full overflow-hidden rounded-t-3xl text-left shadow-xl transition-all sm:my-8 sm:h-full sm:rounded-xl sm:drop-shadow-md" style={{width: "fit-content"}}>
                        <div className="max-h-[calc(100vh-128px)] overflow-y-scroll bg-white px-4 pt-5 pb-4 sm:max-h-full sm:overflow-auto sm:p-6 sm:pb-4">
                            <div className="sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                    <div className="text-lg font-medium leading-6 text-gray-900" id="modal-title"></div>
                                    <div className="mt-2">
                                        <div className="addresses_confirmDeleteText__CuT4i">
                                            <h3 className="block font-heading text-xl tracking-wider">Are you sure you want to delete this address?</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="addresses_deleteFooter__QMidJ">
                            <button className=" px-7 text-base border-skin-primary border bg-skin-primary text-skin-base  tracking-widest mr-2 flex-1 !rounded-lg !py-3 !font-bold" type="button" aria-label="Delete">
                                <div className="flex items-center justify-center" onClick={() => handleDelete(address._id)}>Delete</div>
                            </button>
                            <button className="px-7 text-base border-skin-primary border bg-skin-muted-dark bg-opacity-10 text-skin-muted-dark text-opacity-60 ml-2 flex-1 !rounded-lg !border-skin-primary-void/10 !py-3 !font-bold" type="button" aria-label="Cancel">
                                <div className="flex items-center justify-center" onClick={() => setShowForm(false)}>Cancel</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {isAddressForm && (
            <AccountAddressForm 
                onClose={()=>{
                    setisAddressForm(false)
                }}
                initialData = {address}
                addressId = {address._id}
            />
        )}
    </>
  )
}

export default AccountSavedAddress