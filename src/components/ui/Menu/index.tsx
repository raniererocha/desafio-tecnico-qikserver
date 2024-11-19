import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import style from './index.module.css'
import { CloseIcon } from '../../Icons/CloseIcon'
import { MenuIcon } from '../../Icons/MenuIcon'


export const Menu = ({brandColor = "#FFF000"}: {brandColor: string | undefined}) => {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const {pathname} = useLocation()
    
    return (
        <header style={{background: brandColor}} className={`flex flex-col w-screen text-white font-normal text-[20px] min-h-[52px] `}>
            <nav className="flex flex-1 flex-col md:hidden">
                <button className="flex flex-1 items-center w-full justify-center h-full min-h-[52px]" onClick={toggle}>Menu <span className='absolute right-3 top-3'>{isOpen ? <CloseIcon /> : <MenuIcon />}</span></button>
                <ul className={`flex flex-col w-full justify-center ${isOpen ? '' : 'hidden'} ${style.menu}`} aria-label="Menu principal">
                    <li data-active={pathname === '/' ? "true" : "false"} className={style.menuItem}>
                        <a href="/" className="block w-full p-2">Menu</a>
                    </li>
                    <li data-active={pathname === '/login' ? "true" : "false"} className={style.menuItem}>
                        <a href="/login" className="block w-full p-2">Entrar</a>
                    </li>
                    <li data-active={pathname === '/contact' ? "true" : "false"} className={style.menuItem}>
                        <a href="/contact" className="block w-full p-2">Contato</a>
                    </li>
                </ul>
            </nav>
            <nav className="hidden md:flex flex-row w-full justify-center bg-[#4F372F]">
                <ul className="flex flex-row space-x-4" aria-label="Menu principal">
                    <li data-active={pathname === '/' ? "true" : "false"} className={style.menuItem}>
                        <a href="/" className="block ">Menu</a>
                    </li>
                    <li data-active={pathname === '/login' ? "true" : "false"} className={style.menuItem}>
                        <a href="/login" className="block ">Entrar</a>
                    </li>
                    <li data-active={pathname === '/contact' ? "true" : "false"} className={style.menuItem}>
                        <a href="/contact" className="block ">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

