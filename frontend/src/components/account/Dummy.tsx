

const Dummy = () => {
  return (
    <>
        <div className="flex h-[calc(100%-52px)] flex-col items-center justify-center bg-skin-base p-4 sm:h-full">
            <h3 className="block font-heading text-xl tracking-wider !text-[20px]">Please Login</h3>
            <p className="font-norms block mt-2 text-[14px] font-medium">Please login to access the cart.</p>
            <button className="py-1 px-7 text-base border-skin-primary border bg-skin-primary text-skin-base rounded-md tracking-widest w-full mt-6 !py-3 !px-8 sm:max-w-sm" type="button">
                <div className="flex items-center justify-center">
                    <h6 className="block font-subtitle tracking-wider text-lg font-bold">Login</h6>
                </div>
            </button>
        </div>
    </>
  )
}

export default Dummy


