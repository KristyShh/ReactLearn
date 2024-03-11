
import { useState } from 'react'
import './BurgerMenu.css'

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const setOpenState = () => {
        setIsOpen(!isOpen)
    }
    return (
       <div className={isOpen ? 'menu-button' : 'menu-button-open'} onClick={setOpenState}>
        <div className='menu-button-line'></div>
       </div>

    )
}

export default BurgerMenu