import { CloseIcon } from "../../Icons/CloseIcon"
import { useDispatch, useSelector } from "react-redux"

import { closeModal, ModalStateInterface } from "../../../store/modal/slice"
import { RootState } from "../../../store/rootReducer"

export const Modal = () => {
    const {data: selectedItem, isOpen} = useSelector<RootState, ModalStateInterface>(state => state.modal)
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(closeModal())
    }
 
    return isOpen && selectedItem?.modifiers ?  (
    <div className="absolute inset-0">
        <div className="flex flex-col h-full w-full bg-[#F8F9FA] relative">
            <button className="absolute flex items-center justify-center right-4 top-12 bg-white/50 size-[28px] rounded-full" onClick={handleCloseModal}>
                <CloseIcon fill="black" width={"20px"} height={"20px"} />
            </button>
            <img src="https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbe01b3373.png" />
           <div className="p-4 bg-white">
            <h2 className="text-[#121212] font-bold text-2xl" >{selectedItem.name}</h2>
            <p className="text-[#464646] text-base font-normal leading-5">{selectedItem.description}</p>
           </div>
          { selectedItem.modifiers.map( modifier => (<div key={modifier.id}>
            <div className="p-6">
                <h3 className="text-base text-[#464646] font-bold">{modifier.name}</h3>
                <p className="text-base font-normal text-[#464646] leading-3">Select {modifier.minChoices} option</p>
           </div>
           <div className="bg-white">
            
                {modifier.items.map(item => (
                    <div key={item.id} className="flex w-full justify-between items-center px-6 py-3">
                    <div>
                        <p className="font-medium text-[#121212] text-base">{item.name}</p>
                        <p className="font-normal text-[#464646] text-base leading-3">{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.price)}</p>
                    </div>
                    <input type="radio" name="size" className="size-5" value={item.id} />
                </div>
                ))}


           </div>
          </div>))}

           <div className="p-6 flex-1 flex flex-col justify-center gap-4">
            <div className="mx-auto"> - 1 +</div>
           <button className="flex w-full rounded-full mx-auto justify-center bg-[#4F372F] text-white font-bold text-base py-4">Add to Order • $11.75</button>
           </div>
        </div>
    </div>  
    ) : (<></>)
    
}