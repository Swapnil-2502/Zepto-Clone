import { useState } from "react";
import './LoginFormModel.css'


type PhoneInputProps = {
  onContinue: (phone: string) => void;
};

const PhoneInput: React.FC<PhoneInputProps> = ({onContinue}) => {
    const [phone,setPhone] = useState("")
    
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setPhone(value);
        }
    };
    const isValid = phone.length === 10;

    const handleContinue = () => {
            if(phone.length === 10){
            onContinue(phone)
        }
    }
    
  return (
    <>
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
                            <div className="flex items-center justify-center" onClick={handleContinue}>Continue</div>
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
    </>
  )
}

export default PhoneInput