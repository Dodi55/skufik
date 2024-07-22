import { useData } from "../../App"
import { MdOutlineDelete } from "react-icons/md";
import { FiHeart, FiBarChart2 } from "react-icons/fi";



export function ItemTovar({src, name, price, id}) {
    const {data, setValue, deleteBasket, heart, setHeart, addHeart, deleteHeart} = useData();


    return(
            <div className="categori-menu-tovar-item">
                <img src={src} width={200} alt="" />
                <p className="categori-menu-tovar-item-name">{name}</p>
                <div className="item-heart-addchart">
                    {heart.find(el => el.id == id)
                        ?<FiHeart onClick={() => deleteHeart(id)} className="item-heart item-heart-active" />
                        :<FiHeart onClick={() => addHeart({src, name, price, id})} className="item-heart" />
                    }
                    <FiBarChart2 className="item-heart"/>    
                </div>
                
                
                <div className="categori-menu-tovar-item-price-block" >
                    <p className="categori-menu-tovar-item-price">{price.toLocaleString()} ₽</p>
                    {data.find(el => el.id == id)
                        ?<button onClick={() => deleteBasket(id)} className="categori-menu-tovar-item-btn item-btn-active"><MdOutlineDelete /></button>
                        :<button onClick={() => setValue({src, name, price, id})} className="categori-menu-tovar-item-btn">В корзину</button>
                    }
                </div>

            </div>
    )
}