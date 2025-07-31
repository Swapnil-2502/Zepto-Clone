

const AccountFooter: React.FC = () => {
  return (
   <>
         <div className="hidden lg:block">
            <button className="py-1 px-7 border-skin-primary border border-none mx-auto mt-7 flex h-full w-max justify-center text-md font-semibold text-skin-inverted" type="button">
                <div className="flex items-center justify-center">Log Out</div>
            </button>
            <div className="mt-8 text-center">
                <button aria-label="zepto" className="mx-auto inline-block">
                    <img alt="" fetchPriority="low" loading="lazy" width="90" height="30" decoding="async" data-nimg="1" className="relative overflow-hidden inline-block min-w-[90px] opacity-50 grayscale" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.5.2/images/header/primary-logo.svg" style={{color: "transparent", objectFit: "contain"}}/>
                </button>
            </div>
        </div>
   </>
  )
}

export default AccountFooter