import imgPost01 from "../assets/img/meowed.svg"
import post01 from "../assets/img/dog.svg"
import likePost01 from "../assets/img/respondeai.svg"
import imgPost02 from "../assets/img/barked.svg"
import post02 from "../assets/img/gato-telefone.svg"
import likePost02 from "../assets/img/adorable_animals.svg"
import imgPost03 from "../assets/img/9gag.svg"
import post03mp4 from "../assets/video/video.mp4"
import post03ogv from "../assets/video/video.ogv"
import likePost03 from "../assets/img/meowed.svg"

export let UsersPosts = [
    {
        type: "video",
        contentMp4: post03mp4,
        contentOgv: post03ogv,

        img: imgPost03,
        user: "9gag",
        subtitle: "Ursinho",
        
        likeImg: likePost03,
        likeUser: "meowed",

        comments:[
            {
            user: "bad.vibes.memes",
            text: "Chique"
            },
            {
            user: "filoderma",
            text: "Legal"
            },
            {
            user: "respondeai",
            text: "Gostei"
            },
            {
            user: "memeriagoumet",
            text: "Uau"
            },
]
    },
    {
        type: "img",
        content: post01,

        img: imgPost01,
        user: "meowed",
        subtitle: "Cachorrinho",
        
        likeImg: likePost01,
        likeUser: "respondeai",

        comments:[
            {
            user: "memeriagoumet",
            text: "Uau"
            },
            {
            user: "bad.vibes.memes",
            text: "Chique"
            },
            {
            user: "filoderma",
            text: "Legal"
            },
        ]
    },
    {
        type: "img",
        content: post02,

        img: imgPost02,
        user: "barked",
        subtitle: "Gatinho",

        
        likeImg: likePost02,
        likeUser: "adorable_animals",

        comments:[
            {
            user: "memeriagoumet",
            text: "Uau"
            },
            {
            user: "bad.vibes.memes",
            text: "Chique"
            }
        ]
    }
]

export { UsersPosts as default };