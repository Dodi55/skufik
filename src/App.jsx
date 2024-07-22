import './App.sass'
import { Header } from './Header/Header'
import { createContext, useContext, useState } from 'react';
import { Menu } from './Menu/Menu';
import Footer from './Footer/Footer';


const MyContext = createContext();

export default function App() {
	const [data, setData] = useState(localStorage.getItem('shopBasket') ? JSON.parse(localStorage.getItem('shopBasket')): []);
	const [activeBasket, setActiveBasket] = useState(false);
	const [heart, setHeart] = useState(localStorage.getItem('heartBasket') ? JSON.parse(localStorage.getItem('heartBasket')): []);
	const [catalog, setCatalog] = useState(false)

	const setValue = (value, delet) => {
		if (!value) {
			setActiveBasket(!activeBasket)
			return setData([])
		}
		if (delet) {
			return setData([...value])
		}

        setData(prev => ([
			...prev,
			value
		]))
    }

	function deleteBasket(id) {
        const indexDelete = data.findIndex(el => el.id == id);
        data.splice(indexDelete,1)
        setValue(data,true)
        if (!data.length && activeBasket) {
            setActiveBasket(!activeBasket)
        }
    }  




	const addHeart = (value, delet) => {
		if (delet) {
			return setHeart([...value])
		}

        setHeart(prev => ([
			...prev,
			value
		]))
    } 


	function deleteHeart(id) {
        const indexDelete = heart.findIndex(el => el.id == id);
        heart.splice(indexDelete,1)
        addHeart(heart,true)
    }


	localStorage.setItem('heartBasket',JSON.stringify(heart))
	localStorage.setItem('shopBasket',JSON.stringify(data))





  	return (
    	<> 
			<MyContext.Provider  value={{catalog, setCatalog, data, setValue, activeBasket, setActiveBasket, deleteBasket, heart, setHeart, addHeart, deleteHeart}}>
				{catalog && <div className='catalor-back' onClick={() => setCatalog(!catalog)}></div>}
				<Header />
				<Menu />
				<Footer />
			</MyContext.Provider>
		</>
  	)
}

export const useData2 = MyContext
export const useData = () => useContext(MyContext)
