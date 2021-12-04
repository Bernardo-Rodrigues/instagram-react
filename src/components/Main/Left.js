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
            {UsersPosts
                .map( (post) => {
                    console.log(post)
                return (
                    <div class="post">
                        <Topo post={post}/>
                        {post.type === "img" 
                        ?   <div class="conteudo">
                                <img src={post.content}/>
                            </div>
                        :   <div class="conteudo">
                                <video width="612" height="612" autoPlay muted>
                                    <source src={post.contentMp4} type="video/mp4"/>   
                                    <source src={post.contentOgv} type="video/ogv"/>   
                                </video>
                            </div>
                        }
                        <Fundo post={post}/>
                    </div>
                );
            })}
        </div>
    );
}

function Topo( { post } ) {
    return(
        <div class="topo">
            <div class="usuario">
                <img src={post.img} />
                {post.user}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

function Fundo( { post } ){
    return(
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
                <img src={post.likeImg}/>
                <div class="texto">
                    Curtido por <strong>{post.likeUser}</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
        </div>
    );
}