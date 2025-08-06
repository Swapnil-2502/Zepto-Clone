import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const AccountProfile = () => {
    const {user, updateNameEmail, deleteAccount} = useAuth()
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [showDeleteModel, setShowDeleteModel] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        if(user?.email){
            setEmail(user.email)
        } 
        if(user?.name){
            setName(user.name)
        }
    },[user])

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleNameEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateNameEmail({name,email})
        toast.success('Submitted successfully!');
    }

    const handleDeleteAccount = async () =>{
        deleteAccount()
        toast.success("Account deleted successfully.");
        navigate("/");
    }

  return (
    <>
        <div className="hidden flex-col lg:block lg:h-[80vh] lg:w-2/3 lg:overflow-y-scroll lg:rounded-r-3xl lg:border-l" id="desktop-order-details-section">
            <header className="sticky top-0 z-[100] mx-auto flex w-full items-center justify-between bg-skin-base p-2 shadow-md">
                <div className="flex">
                    <button className="py-1 px-7 text-base border-skin-primary border text-skin-primary border-none !p-0" type="button" aria-label="Back Icon">
                        <div className="flex items-center justify-center">
                            <span className="mr-2">
                                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" style={{height: "1.25rem", width: "1.25rem", color: "black"}}>
                                    <path d="M15.5 19L8.5 12L15.5 5" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
                                </svg>
                            </span>
                        </div>
                    </button>
                    <h1 className="font-subtitle text-lg tracking-wider line-clamp-1 mr-5 overflow-hidden text-ellipsis font-semibold">Profile</h1>
                </div>
            </header>
            <div className="profile_profileScreen__Wfmlo">
                <form onSubmit={handleNameEmailSubmit}>
                    <div className="profile_profileScreen__wrapper__uNn7f">
                        <div data-prefix="false" data-suffix="false" className="_container_1g9zu_1">
                            <div className="_wrapper_1g9zu_10">
                                <div className="_input-wrapper_1g9zu_26">
                                    <input className="_input_1g9zu_26" placeholder="Enter your name" value={name} name="name" onChange={handleName}/>
                                    <label className="_label_1g9zu_52">Name *</label>
                                </div>
                            </div>
                        </div>
                        <div data-prefix="false" data-suffix="false" className="_container_1g9zu_1">
                            <div className="_wrapper_1g9zu_10">
                                <div className="_input-wrapper_1g9zu_26">
                                    <input className="_input_1g9zu_26" placeholder="Enter your email" value={email} name="email" onChange={handleEmail}/>
                                    <label className="_label_1g9zu_52">Email Address *</label>
                                </div>
                            </div>
                            <div className="_support-text_1g9zu_103 _support-text-neutral_1g9zu_119">We promise not to spam you</div>
                        </div>
                    </div>
                    <div className="profile_profileScreen__buttonWrapper__YNaUH">
                        <button className="_button_tg1er_2 _button-primary_tg1er_31 _button-l_tg1er_125 _button-full_tg1er_19" >Submit</button>
                    </div>
                </form>
                <hr className="profile_profileScreen__separator__UbYTp"/>
                <div className="flex flex-col items-start gap-y-1">
                    <button className="py-1 border-skin-primary border text-skin-primary border-none !px-0 !text-lg !font-semibold" type="button" onClick={()=>setShowDeleteModel(true)}>
                        <div className="flex items-center justify-center">Delete Account</div>
                    </button>
                    <p className="text-gray-600">Deleting your account will remove all your orders, wallet amount and any active referral</p>
                </div>
            </div>
        </div>

        {showDeleteModel && (
            <div className="fixed inset-0 z-[99999999] overflow-y-hidden bg-black/70 transition-opacity ease-in">
                <div className="absolute inset-x-0 bottom-0 sm:static sm:flex sm:min-h-screen sm:items-center sm:justify-center">
                    <div className="relative h-full overflow-hidden rounded-t-3xl text-left shadow-xl transition-all sm:my-8 sm:h-full sm:rounded-xl sm:drop-shadow-md" style={{width: "28rem"}}>
                        <div className="max-h-[calc(100vh-128px)] overflow-y-scroll bg-white px-4 pt-5 pb-4 sm:max-h-full sm:overflow-auto sm:p-6 sm:pb-4">
                            <div className="sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                    <div className="text-lg font-medium leading-6 text-gray-900" id="modal-title"></div>
                                    <div className="mt-2">
                                        <div className="flex flex-col items-center gap-y-2 text-center">
                                            <img alt="delete account" height="60" width="60" src="https://prod-zepto-public-assets.s3.ap-south-1.amazonaws.com/app/images/t-img-suc.png"/>
                                            <h5 className="text-xl font-semibold">Sad To See You Go</h5>
                                            <p className="text-sm text-gray-600">You will lose your past order details. Would you still like to proceed?</p>
                                            <div className="my-5 grid w-full grid-cols-2 gap-5">
                                                <button className=" px-7 text-base border-skin-primary border text-skin-primary bg-skin-base rounded-md tracking-widest !py-2.5 !leading-normal" type="button">
                                                    <div className="flex items-center justify-center" onClick={()=>setShowDeleteModel(false)}>No, Thank You</div>
                                                </button>
                                                <button className=" px-7 text-base border-skin-primary border bg-skin-primary text-skin-base rounded-md tracking-widest !py-2.5 !leading-normal" type="button" onClick={handleDeleteAccount}>
                                                    <div className="flex items-center justify-center">Continue</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        )}
    </>
  )
}

export default AccountProfile