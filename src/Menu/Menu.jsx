import { Routes, Route } from 'react-router-dom'
import { Categori } from './Categori/Categori'
import { Home } from './Home/Home'
import './Menu.sass'
import {bdSale} from '../bd/bdSale.js'
import { bdBY } from '../bd/bdBY.js'
import {bdIphone} from '../bd/bdIphone.js'
import {bdMac} from '../bd/bdMac.js'
import {bdWatch} from '../bd/bdWatch.js'
import {bdAirPods} from '../bd/bdAirPods.js'
import {bdGame} from '../bd/bdGame.js'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import Heart from '../Heart/Heart.jsx'

export function Menu() {
  	return (
    	<div className='menu'> 
			<Routes>
                <Route path='/' element={<Home />}/>
				<Route path='/sale'   element={<Categori fastFilt={false}  name={'Скидки %'} bd={bdSale} icon={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
				<Route path='/used'   element={<Categori fastFilt={false} name={'Идеальное БУ'} bd={bdBY} icon={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
				<Route path='/iphone'   element={<Categori fastFilt={true} name={'iPhone'} bd={bdIphone} icon={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
				<Route path='/mac'   element={<Categori fastFilt={true} name={'Mac'} bd={bdMac} icon={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
				<Route path='/watch'   element={<Categori fastFilt={true} name={'Watch'} bd={bdWatch} icon={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
				<Route path='/airpods'   element={<Categori fastFilt={true} name={'AirPods'} bd={bdAirPods} icon={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
				<Route path='/game'   element={<Categori fastFilt={true} name={'Все для игр'} bd={bdGame} icon={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
				<Route path='/heart' element={<Heart />}/>
				<Route path="*" element={<ErrorComponent />}/>
			</Routes>
    	</div>
  	)
}

