// styles
import "./videos.css"


function Videos() {
    return (
        <div className="mainVideoWrapper">
            <div className="aboutUsHeading">
               Videos
            </div>
            <div className="videoWrapper">
                <div className="video1">
                    <div><iframe width="500" height="300" src="https://www.youtube.com/embed/VGvwFZaREM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> 
                    <span>Theme Reveal'22</span>
                </div>

                <div className="video2">
                 <div><iframe width="500" height="300" src="https://www.youtube.com/embed/EykvH3KETnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> 
                 <span>Curtain Raiser'21</span>

                </div>
            </div>
        </div>
    )
}
export default Videos
