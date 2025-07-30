import { useEffect, useRef, useState } from "react";


type OTPprops = {
    phone: string,
    onBack: () => void
    onVerifySuccess: () => void;
}

const OTPInput: React.FC<OTPprops> = ({ phone, onBack, onVerifySuccess }) => {
    const length = 4
    const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
    const inputRefs = useRef<HTMLInputElement[]>([]);

    useEffect(()=>{
        inputRefs.current[0]?.focus()
    },[])

    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return;

        const newotp = [...otp]
        newotp[index] = value
        setOtp(newotp)
        console.log("From Inside: ",newotp);

        if (value && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    }

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index:number
    ) => {
        if(e.key === 'Backspace' && !otp[index] && index > 0){
            inputRefs.current[index-1]?.focus()
        }
    }

  return (
    <>
        <div className="verifyOTP-container">
            <div className="verifyOTP-container-sub_container">
                <div className="relative z-50">
                    <button className="py-1 px-7 text-base border-skin-primary border text-skin-primary border-none fixed top-6 left-0 z-[100]" type="button" onClick={onBack}>
                        <div className="flex items-center justify-center">
                            <svg fill="none" height="12" viewBox="0 0 22 12" width="22" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.49927 5.85254C1.49927 5.30025 1.94698 4.85254 2.49927 4.85254H20.9997C21.552 4.85254 21.9997 5.30025 21.9997 5.85254V6.62431C21.9997 7.1766 21.552 7.62431 20.9997 7.62431H2.49927C1.94698 7.62431 1.49927 7.17659 1.49927 6.62431V5.85254Z" fill="white"></path>
                                 <rect fill="white" height="2.71971" rx="1" transform="matrix(0.693307 -0.720642 0.693307 0.720642 0.000244141 5.87982)" width="8.15913"></rect><rect fill="white" height="2.71971" rx="1" transform="matrix(0.693307 0.720642 -0.693307 0.720642 1.8855 4.16025)" width="8.15913"></rect>
                            </svg>
                        </div>
                    </button>
                    <h2 className="block font-heading tracking-wider mb-6 mt-28 w-48 text-left text-3xl text-skin-base sm:mt-4 sm:w-full">OTP Verification</h2>
                    <div className="mt-4">
                        <h5 className="block font-subtitle text-lg tracking-wider text-skin-base">OTP has been sent to +91 {phone}</h5>
                    </div>
                    <div className="z-50 text-center">
                        <div className="flex w-full justify-center gap-x-2 mt-12 sm:mt-8">
                            {otp.map((digit,i) => (
                                <input 
                                    key={i}
                                    ref={(el) => { inputRefs.current[i] = el! }}
                                    type="text"
                                    inputMode="numeric"
                                    pattern="\d{1}"
                                    maxLength={1}
                                    autoComplete="off"
                                    className={`w-10 h-12 rounded-[32px] text-white font-normal text-base text-center not-italic outline-none 
                                        focus:border-[2px] focus:border-solid focus:border-[#46CA7B] active:border-[2px] active:border-solid active:border-[#46CA7B]
                                            ${digit ? "bg-[#46CA7B]" : "bg-white"}
                                        `}
                                    value={digit}
                                    onChange={(e) => handleChange(e.target.value,i)}
                                    onKeyDown={(e) => handleKeyDown(e,i)}
                                />
                            ))}
                        </div>
                        <button
                            onClick={onVerifySuccess}
                            className="mt-8 bg-[linear-gradient(92.16deg,_#ff3269_1.82%,_#ff794d_98.18%)] text-white px-4 py-2 rounded cursor-pointer"
                        >
                            Verify OTP
                        </button>
                        <p className="block font-body text-base mt-2 h-5 font-medium text-skin-error"> </p>
                        <p className="block font-body mt-12 mb-9 text-[28px] text-skin-base sm:mt-8">00:00</p>
                        <p className="block font-body text-base text-skin-base">Didn't get it?</p>
                        <button className="py-1 text-base border-skin-primary border text-skin-primary border-none mt-5 px-0 disabled:opacity-50" type="button">
                            <div className="flex items-center justify-center">
                                <img alt="location-permission-icon" fetchPriority="low" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.4.1/tr:w-0.2,ar-0.2-0.2,pr-true,f-auto,q-80//images/message-circle-colored-icon.svg" style={{color: "transparent", objectFit: "contain"}} />
                                <p className="block font-body text-base ml-1.5 text-skin-base underline">Send OTP (SMS)</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default OTPInput