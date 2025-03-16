import type React from "react"

export interface ModalProps {
    isOpen?: any
    onClose?: any
    children?: any
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children
}) => {
    if (!isOpen) return null;
    return (
        <div>
            <div className="fixed inset-0 flex items-center
                        justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg
                            shadow-lg p-2 
                            w-full h-max relative mx-2 my-2 sm:mx-1 sm:my-1 md:mx-2 md:my-2">
                    <button
                        className="absolute top-1
                               right-1 text-gray-500
                               hover:text-gray-700"
                        onClick={onClose}
                    >
                        &#x2715; {/* Close button */}
                    </button>
                    {children}
                </div>
            </div>
        </div>
    )
}
