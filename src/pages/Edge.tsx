import "../styles/Interest.css";
import Carousel from "../components/Carousel";

function Edge() {
    const images = [
        "EDGE Team with Pak.jpg",
        "EDGE Poster.jpg",
        "signontree.jpg",
        "edgeboard.jpg",
        "EDGE Team.png",
        "edgehoodie.jpg",
        "miciuik.jpg",
    ];

    return (
        <div className="interest">
            <div className="intro">
                <div>
                    <h1>EDGE</h1>
                    <p>
                        EDGE (Engineering and Design for Growth and Empowerment)
                        is a club I founded at the Northville High School during
                        my junior year. The goal of this club is to use
                        student's STEM skills to make a meaningful impact on the
                        community. Our club would work on a multitude of
                        projects that would benefit the community in some way,
                        ranging from cell phone sanitation devices to custom
                        designed special-education activities. Keep in mind that
                        the three projects listed below were accomplished in
                        only our first year, and our impact on our community
                        will continue to grow as our club becomes more
                        established.
                    </p>
                    <div className="links">
                        <a
                            href="https://northvilleedge.wixsite.com/northvilleedge"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            EDGE Website
                        </a>
                        <a
                            href="https://www.instagram.com/northvilleedge/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            EDGE Instagram
                        </a>
                    </div>
                </div>
                <img src="EDGE LOGO Final 2023.png" />
            </div>
            <Carousel images={images} />
            <div className="list">
                <div className="item">
                    <div>
                        <h2>Interactive Trail Signage</h2>
                        <p>
                            The trail signage project, along with the following
                            two projects, was one of the first projects
                            undertaken by our club. We learned that many of the
                            new cross-country runners at our school would get
                            lost on their home trail, Cass Benton Park, due to
                            insufficient signage throughout the park. So, we
                            dedicated one of our projects to solving this issue.
                            However, rather than simply put up signs throughout
                            the park, we wanted to innovate upon this trail
                            navigation system and integrate technology into our
                            solution. Along with designing, constructing, and
                            laser engraving maps that could be located
                            throughout the park, our team set out to create an
                            app that would map the user's current location onto
                            a digital copy of our maps via a QR code located on
                            the signs.This interactivity leads to a greater
                            connection between the user and the signs, allowing
                            for more effective navigaiton and a more enjoyable
                            experience. By the end of the project, we had hung
                            20 signs throughout the park.
                        </p>
                    </div>
                    <img src="signontree.jpg" />
                </div>
            </div>
            <div className="item">
                <div>
                    <h2>Special-Ed Sensory Board</h2>
                    <p>
                        The sensory board was a concept that our club developed
                        after much discussion and collaboration with the
                        Special-Ed teachers of the school. Initially, we wanted
                        to utilize the resources we had access to in the school,
                        such as 3D printers, laser engravers, and other shop
                        tools, in order to create custom games for the
                        Special-Ed students. After discussing our ideas with the
                        teachers at, we learned that there was an entire closet
                        that they wanted to make into a "sensory room" with
                        different activities and fidgets for the kids to use. We
                        were shown an example of what a sensory object would
                        look like, which was essentially a cube with a different
                        random object attached to each face, such as a doorknob
                        or a light switch. At this point, the dream of the
                        "sensory room" had not yet been brought into reality,
                        and our club decided to change that. By the end of our
                        project, we had built a 4x8 foot board with different
                        sensory objects and activities.
                    </p>
                </div>
                <img src="edgeboard.jpg" />
            </div>
            <div className="item">
                <div>
                    <h2>Cell Phone Sanitation</h2>
                    <p>
                        Most cell phones carry ten times more bacteria than a
                        toilet seat. This simple fact came to us as a shock when
                        we were researching ways to improve public sanitation
                        throughout the community. We figured that rarely anybody
                        actually sanitizes their cell phones, despite being the
                        object that is most frequently used. Our club decided to
                        work towards solving this issue by developing a simple
                        device that could be located throughout the community to
                        sanitize cell phones. After much discussion on the most
                        efficient ways to kill bacteria, we determined that
                        sanitizing cell phones with ultraviolet light would do
                        the job with little-to-no maintenance while minimizing
                        our environmental footprint. Our final concept was a
                        simple box with slots for phones to slide into, with UV
                        LED light strips going across the lid that would turn on
                        when the box closes, eliminating any bacteria on the
                        phones. After prototyping and testing our concept, we
                        learned that it was indeed effective at killing
                        bacteria. So, we built a final prototype and placed it
                        in the school's main office for students and staff to
                        use.
                    </p>
                </div>
                <img src="sanitationbox.jpg" />
            </div>
        </div>
    );
}

export default Edge;
