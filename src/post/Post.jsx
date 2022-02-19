import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="/Images/ShibuyaCrossing.jpg" alt=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Country</span>
                    <span className="postCat">Shopping</span>
                </div>
                <span className="postTitle">Tokyo is the city of the future</span>
                <hr/>
                <span className="postDate">35 minutes ago</span>
            </div>
            <p className="postDescription">
            Tokyo is a city of surprises — ancient temples are nestled among modern skyscrapers and you're just as likely to see someone wearing a cosplay costume as you are to see someone dressed in a traditional kimono.
            </p>
        </div>
    )
}
