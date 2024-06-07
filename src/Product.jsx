import React from 'react'
import Modal from './Modal'

function Product() {
  return (
    <div className='flex justify-end  '> {/* You can open the modal using document.getElementById('ID').showModal() method */}
    <button className="btn bg-green-600 text-white mt-5" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add</button>
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <Modal />
      </div>
    </dialog>
    
    </div>
  )
}

export default Product