import './Header.css';
export const Header  = ({children, title, show}) =>{
    return(
        <header className="header">
            <h1 className="title">
                {title || "título por defecto"}
            </h1>
           {children}

           {
            show ?  <p>Este texto se va a mostrar solo si el prop show es true</p> : null
           } 
   
        </header>
    )
}
 
