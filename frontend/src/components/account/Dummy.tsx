

const Dummy = () => {
  return (
    <>
        <div className="relative h-full overflow-hidden rounded-t-3xl text-left shadow-xl transition-all sm:my-8 sm:h-full sm:rounded-xl sm:drop-shadow-md !overflow-visible" style={{width: "28rem"}}>
            <div className="max-h-[calc(100vh-128px)] overflow-y-scroll bg-white px-4 pt-5 pb-4 sm:max-h-full sm:overflow-auto sm:p-6 sm:pb-4 rounded-t-3xl sm:rounded-xl !overflow-visible">
                <div className="sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                        <div className="text-lg font-medium leading-6 text-gray-900" id="modal-title"></div>
                        <div className="mt-2">
                            <div className="bg-skin-base">
                                <div className="mb-10 px-4 pb-6 pt-4 text-center sm:mb-0">
                                    <div className="relative h-24">
                                        <div className="relative mx-auto -mt-24 flex h-24 w-24 items-center justify-center rounded-full border-8 border-white bg-[#0EAF72] p-4">
                                            <img alt="" fetchPriority="low" loading="lazy" decoding="async" data-nimg="fill" className="relative overflow-hidden !relative" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://www.zeptonow.com/images/cart/checkbox-check.svg" style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'contain', color: 'transparent' }} />
                                        </div>
                                    </div>
                                    <h3 className="block font-heading text-xl tracking-wider">Details saved</h3>
                                    <p className="block font-body text-base my-3 text-[#5A6477]">Our delivery partner will coordinate directly with the receiver to deliver the order</p>
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


