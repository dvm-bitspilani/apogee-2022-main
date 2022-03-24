// styles
import "./videos.css"



function Videos() {
    return (
        <div className="AboutUsWrapper">
            <div className="aboutUsHeading">
               Videos
            </div>
            <div className="videoWrapper">
                <div className="video1">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VGvwFZaREM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}
export default Videos