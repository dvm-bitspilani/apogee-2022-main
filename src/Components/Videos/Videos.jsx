// styles
import "./videos.css"
import AOS from 'aos';
import "aos/dist/aos.css";
import React from 'react';

function Videos() {
    React.useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh();
      }, []);
    return (
        <div className="mainVideoWrapper">
            <div className="SectionHeading aboutUsHeading videoHeading" data-aos="fade-up" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="400">
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
