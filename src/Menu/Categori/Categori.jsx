import { MenuName } from "./MenuName"
import { MenuLogo } from "./MenuLogo"
import './Categori.sass'
import { ItemTovar } from "./ItemTovar"
import { FastFilter } from "./FastCategori/FastFilter"



export function Categori({name, icon, bd, fastFilt}) {

  let x;
  if (!fastFilt) x = {paddingLeft: '0px'}
    return (
      <> 
        <div className="container">
          <MenuName name={name}/>
          <MenuLogo icon={icon}/> 

          <div className="categori-menu">
            
            {fastFilt && <div><FastFilter name={name}/></div>}
            


            <div className="categori-menu-tovar" style={x}>
              { bd.map(el => <ItemTovar src={el.src} name={el.name} price={el.price} key={el.id} id={el.id} />)}
            </div>


          </div>
        </div>
      </>
    )
}

