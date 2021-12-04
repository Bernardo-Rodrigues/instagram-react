import logo from "../assets/img/logo.png"

function Logo( {mobile} ){
    if(!mobile){
        return(
            <div class="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="separador"></div>
                <img src={logo} />
            </div>
        );
    }else{
        return(
            <div class="logo-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
            </div>
        );
    }          
}

function Middle( {mobile} ){
    if(!mobile){
        return(
            <div class="instagram-mobile">
                <img src={logo}/>
            </div>
        );
    }else{
        return(
            <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
        );
    }
}

function Icons( {mobile} ){
    if(!mobile){
        return(
            <div class="icones">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        );
    }else{
        return(
            <div class="icones-mobile">
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
        );
    }
}

export default function Navbar(){
    return(
        <div class="navbar">
            <div class="container">
                <Logo mobile={false}/>
                <Logo mobile={true}/>

                <Middle mobile={false}/>
                <Middle mobile={true}/>
                  
                <Icons mobile={false}/>
                <Icons mobile={true}/>
            </div>
        </div>
    );
}

