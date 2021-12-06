import UsersStories from "../../../data/UsersStories"

export default function Stories(){
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