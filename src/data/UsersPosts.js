import imgPost01 from "../assets/img/meowed.svg"
import imgPost02 from "../assets/img/barked.svg"
import post01 from "../assets/img/dog.svg"
import post02 from "../assets/img/gato-telefone.svg"
import likePost01 from "../assets/img/respondeai.svg"
import likePost02 from "../assets/img/adorable_animals.svg"

export let UsersPosts = [
    {
        img: imgPost01,
        user: "meowed",
        post: post01,
        likeImg: likePost01,
        likeUser: "respondeai"

    },
    {
        img: imgPost02,
        user: "barked",
        post: post02,
        likeImg: likePost02,
        likeUser: "adorable_animals"
    }
]

export { UsersPosts as default };