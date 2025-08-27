

const Noorders = () => {
  return (
    <>
        <div className="hidden flex-col lg:block lg:h-[80vh] lg:w-2/3 lg:overflow-y-scroll lg:rounded-r-3xl lg:border-l" id="desktop-order-details-section">
            <div className="-mt-4 pb-6 pt-3 bg-[#f0f4f9]">
                <header className="sticky top-0 z-[100] mx-auto flex w-full items-center justify-between bg-skin-base p-2 shadow-md">
                    <div className="flex">
                        <button className="py-1 px-7 text-base border-skin-primary border text-skin-primary border-none !p-0" type="button" aria-label="Back Icon">
                            <div className="flex items-center justify-center">
                                <span className="mr-2"><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" style={{height: "1.25rem", width: "1.25rem", color: "black"}}><path d="M15.5 19L8.5 12L15.5 5" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg></span>
                            </div>
                        </button>
                        <h1 className="font-subtitle text-lg tracking-wider line-clamp-1 mr-5 overflow-hidden text-ellipsis font-semibold">Orders</h1>
                    </div>
                </header>
                <div className="">
                    <div className="m-auto block w-fit pt-4 ">
                        <div className="mx-auto block w-fit">
                            <img alt="" fetchPriority="low" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="relative overflow-hidden" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/app/images/empty-bag.png" style={{color: "transparent", objectFit: "contain"}}/>
                        </div>
                        <h3 className="block font-heading text-xl tracking-wider mt-8 text-center !font-medium !mt-2">No orders yet</h3>
                        <p className="block font-body text-base mt-3 w-80 text-center undefined"></p>
                        <div className="mx-auto mt-5 block w-fit">
                            <a href="/">
                                <button className="py-1 px-7 text-base border-skin-primary border text-skin-primary bg-skin-base rounded-md tracking-widest !border-skin-primary-dark !py-3 !px-4 !font-semibold !text-skin-primary-dark" type="button" aria-label="Action Button">
                                    <div className="flex items-center justify-center">Browse products</div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-5 h-10 w-fit rounded-full border border-[#ff3269] pt-1">
                    <button className="py-1 px-7 text-base border-skin-primary border text-skin-primary border-none" type="button" aria-label="Load More">
                        <div className="flex items-center justify-center">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8.33301 2L8.33301 13.3333" stroke="#FF3269" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M11.667 10L8.33366 13.3333L4.66699 10" stroke="#FF3269" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                            <p className="block font-body text-base !font-heading">Load More</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Noorders