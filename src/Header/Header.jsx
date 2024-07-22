import {Link} from 'react-router-dom'
import './Header.sass'
import { HeaderInfo } from './HeaderInfo/HeaderInfo'
import { HeaderMain } from './HeaderMain/HeaderMain'
import { HeaderMenu } from './HeaderMenu/HeaderMenu'



export function Header(params) {
    return(
        <>
        <header>
            <HeaderInfo />
            <HeaderMain />
            <HeaderMenu />
        </header> 
        </>
    )  
}