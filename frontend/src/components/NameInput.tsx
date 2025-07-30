import { useState } from "react"

const NameInput = ({onSubmit} : {onSubmit: (name: string) => void}) => {
    const [fullName, setFullName] = useState("")

  return (
    <div className="flex  flex-col items-center p-8 pt-32 bg-[linear-gradient(92.16deg,_#ff3269_1.82%,_#ff794d_98.18%)]">
        <h3 className="font-heading tracking-wider mb-12 flex text-[26px] text-white">You're almost there!
            <img alt="" fetchPriority="low" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="relative overflow-hidden ml-1" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/images/wave.png" style={{color: "transparent", objectFit: "contain"}}/>
            </h3>
            <div className="w-full">
                <div>
                    <div className="w-full relative text-base text-skin-inverted flex bg-white items-center border mb-4 rounded-full">
                        <input className="focus:outline-none block py-3 appearance-none font-subtitle flex-grow font-normal bg-transparent text-md px-2" inputMode="text" placeholder="Enter Your Name" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                    </div>
                </div>
                <button className="border-skin-primary border bg-skin-primary text-skin-base tracking-widest w-full mt-2 rounded-3xl bg-[linear-gradient(92.16deg,_#ff3269_1.82%,_#ff794d_98.18%)] p-3 text-lg font-semibold disabled:text-skin-base disabled:opacity-50" type="button"
                    onClick={()=> onSubmit(fullName)}>
                    <div className="flex items-center justify-center cursor-pointer">Start Shopping</div>
                </button>
            </div>
    </div>
  )
}

export default NameInput