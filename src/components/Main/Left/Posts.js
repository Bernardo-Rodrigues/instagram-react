import UsersPosts from "../../../data/UsersPosts";

export default function Posts(){
    return(
        <div class="posts">
            {UsersPosts
                .map( (post) => {
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
    let comments = post.comments
    let last = comments[comments.length-1]
    let lastButOne = comments[comments.length-2]
    return(
        <div>
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


            <div class="post-comments">
                <p> <a href="">{post.user}</a>{post.subtitle}</p>
                {comments.length > 2 && <p class="seecomments">Ver todos os {comments.length} comentários</p>}
                <div class="comment">
                    <p> <a href="">{lastButOne.user}</a>{lastButOne.text}</p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div class="comment">
                    <p> <a href="">{last.user}</a>{last.text}</p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <p class="post-date">HÁ 1 DIA</p>
            </div>
            <div class="comment-input">
                <div class="input">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input type="text" placeholder="Adicione um comentário..."/>    
                </div>
                <button>Publicar</button>
            </div>
        </div>
    );
}