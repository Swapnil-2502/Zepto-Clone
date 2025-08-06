

const Dummy = () => {
  return (
    <>
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
                                    <button className="py-1 px-7 text-base border-skin-primary border text-skin-primary bg-skin-base rounded-md tracking-widest !py-2.5 !leading-normal" type="button">
                                        <div className="flex items-center justify-center">No, Thank You</div>
                                    </button>
                                    <button className="py-1 px-7 text-base border-skin-primary border bg-skin-primary text-skin-base rounded-md tracking-widest !py-2.5 !leading-normal" type="button">
                                        <div className="flex items-center justify-center">Continue</div>
                                    </button>
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

export default Dummy