import imgPost01 from "../assets/img/meowed.svg"
import imgPost02 from "../assets/img/barked.svg"
import imgPost03 from "../assets/img/9gag.svg"
import post01 from "../assets/img/dog.svg"
import post02 from "../assets/img/gato-telefone.svg"
import post03mp4 from "../assets/video/video.mp4"
import post03ogv from "../assets/video/video.ogv"
import likePost01 from "../assets/img/respondeai.svg"
import likePost02 from "../assets/img/adorable_animals.svg"
import likePost03 from "../assets/img/meowed.svg"

export let UsersPosts = [
    {
        type: "img",
        img: imgPost01,
        user: "meowed",
        content: post01,
        likeImg: likePost01,
        likeUser: "respondeai"

    },
    {
        type: "img",
        img: imgPost02,
        user: "barked",
        content: post02,
        likeImg: likePost02,
        likeUser: "adorable_animals"
    },
    {
        type: "video",
        img: imgPost03,
        user: "9gag",
        contentMp4: post03mp4,
        contentOgv: post03ogv,
        likeImg: likePost03,
        likeUser: "meowed"
    }
]

export { UsersPosts as default };