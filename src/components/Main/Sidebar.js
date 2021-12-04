import UsersSuggestions from "../../data/UsersSuggestions";
import user from "../../assets/img/catanacomics.svg"
let username = "catanacomics"
let desc = "Catana"

export default function Sidebar(){
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src={user} />
                <div class="texto">
                    <strong>{username}</strong>
                    {desc}
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {UsersSuggestions.map( ({img,user,reason}) => {
                    return (
                        <div class="sugestao">
                            <div class="usuario">
                                <img src={img} />
                                <div class="texto">
                                <div class="nome">{user}</div>
                                <div class="razao">{reason}</div>
                                </div>
                            </div>

                            <div class="seguir">Seguir</div>
                        </div>
                    );
                })}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}