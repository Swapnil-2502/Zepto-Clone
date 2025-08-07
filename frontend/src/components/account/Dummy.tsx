

const Dummy = () => {
  return (
    <>
       
        <div className="fixed inset-0 z-[99999999] overflow-y-hidden bg-black/70 transition-opacity ease-in">
            <div className="absolute inset-x-0 bottom-0 sm:static sm:flex sm:min-h-screen sm:items-center sm:justify-center" tabIndex={-1}>
                <div className="relative h-full overflow-hidden rounded-t-3xl text-left shadow-xl transition-all sm:my-8 sm:h-full sm:rounded-xl sm:drop-shadow-md" style={{width: "fit-content"}}>
                    <div className="max-h-[calc(100vh-128px)] overflow-y-scroll bg-white px-4 pt-5 pb-4 sm:max-h-full sm:overflow-auto sm:p-6 sm:pb-4">
                        <div className="sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                <div className="text-lg font-medium leading-6 text-gray-900" id="modal-title"></div>
                                <div className="mt-2">
                                    <div className="addresses_confirmDeleteText__CuT4i">
                                        <h3 className="block font-heading text-xl tracking-wider">Are you sure you want to delete this address?</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="addresses_deleteFooter__QMidJ">
                        <button className=" px-7 text-base border-skin-primary border bg-skin-primary text-skin-base  tracking-widest mr-2 flex-1 !rounded-lg !py-3 !font-bold" type="button" aria-label="Delete">
                            <div className="flex items-center justify-center">Delete</div>
                        </button>
                        <button className="px-7 text-base border-skin-primary border bg-skin-muted-dark bg-opacity-10 text-skin-muted-dark text-opacity-60 ml-2 flex-1 !rounded-lg !border-skin-primary-void/10 !py-3 !font-bold" type="button" aria-label="Cancel">
                            <div className="flex items-center justify-center">Cancel</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Dummy

// import React, { createContext, useContext, useState } from "react";
// import axios from "axios";
// import { useAuth } from "./authContext"; // if you need the token

// type Address = {
//   _id: string;
//   saveAddressAs: "Home" | "Work" | "Other";
//   blockOrHouseNumber: string;
//   streetName?: string;
//   landmark?: string;
//   receiverName?: string;
//   receiverContact?: string;
// };

// type AddressContextType = {
//   addresses: Address[];
//   fetchAddresses: () => Promise<void>;
//   addAddress: (data: Omit<Address, "_id">) => Promise<void>;
//   updateAddress: (id: string, data: Partial<Omit<Address, "_id">>) => Promise<void>;
//   deleteAddress: (id: string) => Promise<void>;
// };

// const AddressContext = createContext<AddressContextType | undefined>(undefined);

// export const AddressProvider = ({ children }: { children: React.ReactNode }) => {
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const { token } = useAuth(); // if token is needed for API auth

//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };

//   const fetchAddresses = async () => {
//     const res = await axios.get("/api/user/addresses", { headers });
//     setAddresses(res.data.addresses);
//   };

//   const addAddress = async (data: Omit<Address, "_id">) => {
//     const res = await axios.post("/api/user/addresses", data, { headers });
//     setAddresses(res.data.user.addresses); // or refetch all
//   };

//   const updateAddress = async (id: string, data: Partial<Omit<Address, "_id">>) => {
//     const res = await axios.put(`/api/user/addresses/${id}`, data, { headers });
//     setAddresses(res.data.user.addresses); // or refetch all
//   };

//   const deleteAddress = async (id: string) => {
//     const res = await axios.delete(`/api/user/addresses/${id}`, { headers });
//     setAddresses(res.data.user.addresses); // or refetch all
//   };

//   return (
//     <AddressContext.Provider
//       value={{ addresses, fetchAddresses, addAddress, updateAddress, deleteAddress }}
//     >
//       {children}
//     </AddressContext.Provider>
//   );
// };

// export const useAddress = () => {
//   const context = useContext(AddressContext);
//   if (!context) {
//     throw new Error("useAddress must be used within AddressProvider");
//   }
//   return context;
// };
