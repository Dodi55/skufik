import { MdOutlineDelete } from "react-icons/md";
import { useData } from '../../App';



function HeaderBasketItem({src, name, id, price}) {
    const {data, setValue,setActiveBasket, activeBasket, deleteBasket} = useData();



    return (
        <>
            <div className='header-main-info-basket-item'>
                <img width={70} src={src} alt="" />
                <p style={{width: '170px'}}>{name}</p>
                <p>{price} ₽</p>
                <button><MdOutlineDelete className='delete-basket' onClick={() => deleteBasket(id)}/></button>
            </div>
        </>
    );
}

export default HeaderBasketItem;