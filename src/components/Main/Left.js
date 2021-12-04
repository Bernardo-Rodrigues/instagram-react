import UsersStories from "../../data/UsersStories"
import UsersPosts from "../../data/UsersPosts"

export default function Left(){
    return(
        <div class="esquerda">
            <Stories/>
            <Posts/>
        </div>
    );
}

function Stories(){
    return(
        <div class="stories">
            {UsersStories.map( ({img,user}) => {
                return (
                    <div class="story">
                        <div class="imagem">
                            <img src={img} />
                        </div>
                        <div class="usuario">
                            {user}
                        </div>
                    </div>
                );
            })}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Posts(){
    return(
        <div class="posts">
            {UsersPosts.map( ({img,user,post,likeImg, likeUser}) => {
                return (
                    <div class="post">
                        <div class="topo">
                            <div class="usuario">
                                <img src={img} />
                                {user}
                            </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div class="conteudo">
                        <img src={post}/>
                        </div>

                        <div class="fundo">
                            <div class="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img src={likeImg}/>
                                <div class="texto">
                                    Curtido por <strong>{likeUser}</strong> e <strong>outras 101.523 pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}