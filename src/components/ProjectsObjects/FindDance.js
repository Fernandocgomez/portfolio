let homePage = "https://camo.githubusercontent.com/9b5df48ef8e4fd0d111d7fb1fcf010c1ee1a2ec4/68747470733a2f2f692e696d6775722e636f6d2f65706b757a776a2e706e67"
let eventPage = 'https://camo.githubusercontent.com/98eba519cbeda3f2eef280b174129fce3a478b11/68747470733a2f2f692e696d6775722e636f6d2f523768796542392e706e67'
let searchResults = 'https://camo.githubusercontent.com/32c6280edb65d8e0c5822425030e1901f63beafb/68747470733a2f2f692e696d6775722e636f6d2f5073446266534a2e706e67'
let wireframeHomePage = 'https://camo.githubusercontent.com/e6dfc9a3480e6777446e4d82b0f69b1194990ea0/68747470733a2f2f692e696d6775722e636f6d2f6436556e6d31622e706e67'
let wireframeSearchPage = 'https://camo.githubusercontent.com/51da62df86a9408688cbe296edd3902cf8c7b84d/68747470733a2f2f692e696d6775722e636f6d2f523232625941772e706e67'
let wireframeSearchResults = 'https://camo.githubusercontent.com/b91221e9da3f32a321d49c8717c6e52ed33d4b8f/68747470733a2f2f692e696d6775722e636f6d2f77736d4e4a6c5a2e706e67'

export const findDanceProject = {
    videoId: "8Ur2YyLZf3k", 
    title: "Find Dance", 
    des: "This is a web app designed to help dancers and people interested in dancing to find nearby social dancing events. The app was built based on the same concept of Trivago and Expedia. In seconds, the app will scan and scrap EventBrite, Groupon and MeetUp to gather all the best social dancing on the USA and sort them by area.",
    frontEnd: ["React JS", "React Router", "HTML", "CSS"], 
    backEnd: ["Ruby on Rails", "SQLite", "MVC", "Nokogiri"], 
    mobile: undefined,
    links: [
        {
            link: "https://github.com/Fernandocgomez/FindDance", 
            label: "Github",
            icon: "github icon huge"
        }, {}, {}
    ], 
    imgs: [
        {
            imageUrl: homePage, 
            label: "Home Page"
        },
        {
            imageUrl: searchResults, 
            label: "Search Results"
        },
        {
            imageUrl: eventPage, 
            label: "Event Page"
        }
    ],
    imgsWireframe: [
        {
            imageUrl: wireframeHomePage, 
            label: "Wireframe Home Page"  
        },
        {
            imageUrl: wireframeSearchResults, 
            label: "Wireframe Search Results"  
        },
        {
            imageUrl: wireframeSearchPage, 
            label: "Wireframe Event Page"  
        } 
    ]

}