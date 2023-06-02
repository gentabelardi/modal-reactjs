import React, { useEffect, useRef, useState } from 'react'

interface IProps {
    button: any;
    children: any;
    title: string
}

function Modal(props: IProps) {
    const [openModal, setOpenModal] = useState(false)
    const modalRef = useRef(null);
    const handleParentClick = (event: any) => {
        if (event.target === modalRef.current) {
            setOpenModal(false);
        }
    };
    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openModal]);
    return (
        <div className='relative '>
            <button onClick={() => setOpenModal(!openModal)} className="flex w-full">
                {props.button}
            </button>
            {openModal ? <div ref={modalRef} onClick={handleParentClick} className="flex left-0 right-0 items-center z-50 justify-center bg-black/20 fixed h-screen  bottom-0 w-full ">
                <div className="flex flex-col slide-top bg-white   items-center z-40 rounded-2xl">
                    <div className="flex justify-center h-[64px] items-center border-b w-full relative">
                        <button onClick={() => setOpenModal(false)} className="absolute left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
                        </button>
                        <h1 className="font-semibold text-sm">
                            {props.title}
                        </h1>
                    </div>
                    {props.children}
                </div>
            </div> : null}
        </div>
    )
}

export default Modal
