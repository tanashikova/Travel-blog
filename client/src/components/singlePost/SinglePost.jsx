import "./singlePost.css"
export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="./images/ShibuyaCrossing.jpg" alt=""/>
                <h1 className="singlePostTitle">
                    Must see places in Tokyo
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostPublisher">Publisher: <b>Dina</b></span>
                    <span className="singlePostDate"> 30 minutes ago</span>
                </div>
                <p className="singlePostDescription">Tokyo is a city of surprises — ancient temples are nestled among modern skyscrapers and you're just as likely to see someone wearing a cosplay costume as you are to see someone dressed in a traditional kimono. And even though Tokyo is the most populated city in the world, the streets can be almost eerily silent. You'll find every modern convenience (and then some), but because Japan was closed off to the rest of the world for many years, tech evolved in a way that reflects the Japanese psyche, English is not widely spoken, and the far-reaching effect of globalization is still minimal. It is a true breath of fresh air among the myriad destinations that lost themselves in their quest to cater to tourists and meet global ideals. These contradictions and surprises make Tokyo a city that leaves you curious, fascinated, and wanting more. In a single day you can visit a 7th-century temple, order ramen from a vending machine, and watch a sumo match. There is no shortage of things to do, see, and eat in Tokyo, and while its citizens tend to be respectful and accommodating, they too, like to keep you on your toes. Swing by a maid cafe or a Babymetal concert and you'll know what I mean.

               </p>
            </div>
        </div>
    )
}
