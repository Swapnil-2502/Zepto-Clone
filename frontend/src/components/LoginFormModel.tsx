import type React from 'react';
import './LoginFormModel.css'
import { useEffect, useState } from 'react';

interface LoginFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginFormModel:React.FC<LoginFormModalProps> = ({isOpen,onClose}) => {
    

    if (!isOpen) return null;

    useEffect(()=>{
        document.body.style.overflow = "hidden"

        return () => {
             document.body.style.overflow = ""
        }
    },[])

    const [phone,setPhone] = useState("")
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setPhone(value);
        }
    };

    const isValid = phone.length === 10;


    const handleOverlayClick = () => {
        onClose(); 
    };

    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation(); 
    };
    
  return (
    <>
    <div className="absolute inset-x-0 bottom-0 sm:static sm:flex sm:min-h-screen sm:items-center sm:justify-center top-0" tabIndex={-1} onClick={handleOverlayClick}>
        <div className="overflow-hidden text-left shadow-xl transition-all sm:my-8 sm:h-full sm:rounded-xl sm:drop-shadow-md static flex h-screen flex-col justify-between rounded-none sm:static" style={{width: "44rem"}} onClick={handleModalClick}>
            <button aria-label="Close Icon" onClick={onClose} className="absolute right-4 z-10 top-12">
                <svg className="sm:hidden" fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9ZM5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L7.93934 9L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L9 7.93934L11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967C12.8232 5.76256 12.8232 6.23744 12.5303 6.53033L10.0607 9L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L9 10.0607L6.53033 12.5303C6.23744 12.8232 5.76256 12.8232 5.46967 12.5303Z" fill="white" fill-opacity="0.4" fill-rule="evenodd" style={{height: "1.5rem", width: "1.5rem", color: "white"}}></path>
                </svg>
            </button>
          
            <div className="">
                <div className="relative mt-[0.05rem] sm:mt-0">
                    <div className="relative flex w-full flex-row">
                        <div className="login-container">
                            <div className="h-screen w-screen overflow-auto p-6 sm:h-full sm:w-full sm:p-8 sm:pt-12 !pt-[20%] no-scrollbar">
                                <div>
                                    <img alt="zepto-logo" fetchPriority="low" loading="lazy" width="164" height="54" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.4.1/tr:w-0.2,ar-0.2-0.2,pr-true,f-auto,q-80//images/logo.svg" style={{color: "transparent", objectFit: "contain"}}/>
                                    <h2 className="block font-heading tracking-wider text-2xl mb-8 mt-7 max-w-[60%] text-left text-skin-base sm:max-w-full">Groceries delivered in 10 minutes</h2>
                                    <form data-gtm-form-interact-id="1">
                                        <div>
                                            <div className="w-full relative text-base text-skin-inverted flex bg-white items-center border mb-4 rounded-full">
                                                <span className="left-0 pl-3.5"><span>+91</span></span>
                                                <input className="focus:outline-none block py-3 px-2 appearance-none font-subtitle flex-grow font-normal bg-transparent text-md" inputMode="numeric" placeholder="Enter Phone Number" type="tel" value={phone} onChange={handlePhoneChange} data-gtm-form-interact-field-id="1"/>
                                            </div>
                                        </div>
                                        <button className={`border-skin-primary border tracking-widest w-full mt-1 rounded-3xl p-3 text-lg font-semibold  bg-[linear-gradient(92.16deg,_#ff3269_1.82%,_#ff794d_98.18%)] 
                                            ${isValid? "bg-[linear-gradient(92.16deg,_#ff3269_1.82%,_#ff794d_98.18%)] text-white cursor-pointer"
                                            : "text-[#c3c0c099] opacity-50 cursor-not-allowed"
                                        }`}
                                        type="button"  disabled={!isValid}>
                                            <div className="flex items-center justify-center">Continue</div>
                                        </button>
                                    </form>
                                </div>
                                <div className="flex flex-col items-center justify-center pt-[15%] sm:pt-0" style={{marginTop: "32px"}}>
                                    <p className="block font-body text-base text-skin-base">By continuing, you agree to our</p>
                                    <p className="block text-base font-title text-skin-base">
                                        <a className="px-1 font-bold text-skin-primary" href="https://www.zeptonow.com/s/terms-of-service" rel="noreferrer" target="_blank">Terms of Service</a> &amp;<a className="px-1 font-bold text-skin-primary" href="https://www.zeptonow.com/s/privacy-policy" rel="noreferrer" target="_blank">Privacy Policy</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="login-container-get-the-app hidden w-2/5 !bg-white sm:block">
                            <div className="z-40 flex h-full w-full flex-col items-center overflow-auto pt-4">
                                <img alt="get-the-app-phone" fetchPriority="low" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="relative overflow-hidden mt-5" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.4.1/tr:w-100,ar-100-100,pr-true,f-auto,q-80//images/get-the-app/get-the-app-phone.png" style={{color: "transparent", objectFit: "contain"}}/>
                                <div className="mt-2 px-8 text-center">
                                    <h3 className="block font-heading text-xl tracking-wider !text-[1.75rem] text-skin-primary-dark">Order faster &amp; easier everytime</h3>
                                    <h5 className="block font-subtitle text-lg tracking-wider mt-1 !font-subtitle text-gray-500">with the Zepto App</h5>
                                </div>
                                <a className="" href="https://play.google.com/store/apps/details?id=com.zeptoconsumerapp" rel="noopener noreferrer" target="_blank">
                                    <img alt="download-play-store" fetchPriority="low" loading="lazy" width="180" height="46" decoding="async" data-nimg="1" className="relative overflow-hidden mt-6" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.4.1/tr:w-180,ar-180-46,pr-true,f-auto,q-80//images/app-stores/download-play-store.svg" style={{color: "transparent", objectFit: "contain"}}/>
                                </a>
                                <a className="" href="https://apps.apple.com/in/app/zepto-grocery-delivery/id1575323645" rel="noopener noreferrer" target="_blank">
                                    <img alt="download-app-store" fetchPriority="low" loading="lazy" width="180" height="46" decoding="async" data-nimg="1" className="relative overflow-hidden mt-3" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.4.1/tr:w-180,ar-180-46,pr-true,f-auto,q-80//images/app-stores/download-app-store.svg" style={{color: "transparent", objectFit: "contain"}}/>
                                </a>
                            </div>
                        </div>
                        <button className="absolute top-3 right-3 hidden sm:absolute">
                            <svg fill="none" height="1.5rem" viewBox="0 0 18 18" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" d="M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9ZM5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L7.93934 9L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L9 7.93934L11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967C12.8232 5.76256 12.8232 6.23744 12.5303 6.53033L10.0607 9L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L9 10.0607L6.53033 12.5303C6.23744 12.8232 5.76256 12.8232 5.46967 12.5303Z" fill="#130022" fill-opacity="0.4" fill-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoginFormModel

