import './header.sass'


export function Header({theme}) {

    return(
        <>
            <div className="main-item">
                <img src="https://i.ytimg.com/vi/kz23xxukY5s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCn_WtTzRmVKWDeFRjomSw4xqxfcQ" width={280} alt="" />
                <p style={{color: theme}}>I bay home for 12.000$</p>
                <p style={{color: theme}}>Mr Bist</p>
                <p style={{color: theme}}>Всего лайков: 12.000</p>
                <button>Подписаться</button>
            </div>
        </>
    )
}