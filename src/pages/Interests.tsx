import "../styles/Interests.css";

function Interests() {
    return (
        <div>
            <div className="title">
                <div>
                    <h1>My Interests</h1>
                    <p>
                        My interests have greatly shaped who I am as a person,
                        showcasing the technical and social growth I have
                        experienced throughout my years as a student. I am
                        dedicated to the advancement of technology and have a
                        strong interest in the STEM fields, particularly in
                        software and artificial intelligence. My ultimate goal
                        in life is to advance technology to the greatest extent
                        that I can in a way that benefits humanity. I truly want
                        to leave my mark on the world, and I believe that
                        perusing the growth of the technology is the most
                        effective way to achieve this goal.
                    </p>
                </div>
            </div>
            <div className="sections">
                <div className="section" onClick={() => window.location.href = '#edge'}>
                    <img src="EDGE Team.png" />
                    <div>
                        <h2>EDGE</h2>
                        <p>
                            EDGE is a club I founded in 2023 that unifies
                            students in STEM to work on projects that have a
                            meaningful impact on the community.
                        </p>
                    </div>
                </div>
                <div className="section" onClick={() => window.location.href = '#sensei'}>
                    <div>
                        <h2>Sensei.AI</h2>
                        <p>
                            Sensei.AI LLC is a company I founded that uses
                            artificial intelligence to teach students how to
                            code in an interactive and personalized manner.
                        </p>
                    </div>
                    <img src="sensei-screenshot.png" />
                </div>
                <div className="section" onClick={() => window.location.href = '#karate'}>
                    <img src="karate-promotion.jpg" />
                    <div>
                        <h2>Isshinryu Karate</h2>
                        <p>
                            Isshinryu Karate has been an integral part of my
                            life from the time I was 6. My sensei, Paul, and I
                            have developed numerous katas of our own, fostering
                            creative thinking and innovation within this art.
                        </p>
                    </div>
                </div>
                <div className="section" onClick={() => window.location.href = '#mtb'}>
                    <div>
                        <h2>Mountain Biking</h2>
                        <p>
                            Mountain biking has been a fundamental part of my
                            wellbeing during my time in high school. I began as
                            a novice rider, eventually racing at a national
                            level as my love for the sport grew.
                        </p>
                    </div>
                    <img src="mtb1.png" />
                </div>
                <div className="section" onClick={() => window.location.href = '#aerospace'}>
                    <img src="r4s-team.jpg" />
                    <div>
                        <h2>Aerospace</h2>
                        <p>
                            I joined the NHS Aerospace club in my junior year
                            looking to expand my technical knowledge into
                            rocketry. Since then, I have competed in various
                            national competitions, including ARC, Rockets for
                            Schools, and NASA SLI.
                        </p>
                    </div>
                </div>
                <div className="section" onClick={() => window.location.href = '#robotics'}>
                    <div>
                        <h2>Robotics</h2>
                        <p>
                            I was accepted onto my high school robotics team as
                            a freshman. Afterwards, I was elected as the Design
                            Lead (2023), Driver (2023), and Software Lead
                            (2024), throughout my time on the team.
                        </p>
                    </div>
                    <img src="robotics-driving.jpg" />
                </div>
                <div className="section" onClick={() => window.location.href = '#programming'}>
                    <img src="pong.png" />
                    <div>
                        <h2>Programming</h2>
                        <p>
                            I have had a passion for programming from the time I
                            was in first grade. I have since developed projects
                            and am proficient in various languages and
                            frameworks.
                        </p>
                    </div>
                </div>
                <div className="section" onClick={() => window.location.href = '#printing'}>
                    <div>
                        <h2>3D Printing</h2>
                        <p>
                            After being immersed in the world of CAD as a
                            freshman, I used this knowledge to create numerous
                            3D printed projects. I am now proficient in
                            SolidWorks and Onshape, as well as familiar with the
                            various materials and processes involved in additive
                            manufacturing.
                        </p>
                    </div>
                    <img src="ThreadedTichuRender.JPG" />
                </div>
                <div className="section" onClick={() => window.location.href = '#volunteering'}>
                    <img src="volunteering.jpg" />
                    <div>
                        <h2>Volunteering</h2>
                        <p>
                            I have spent considerable time volunteering for my
                            community in ways that align with my interests. I
                            joined the National Honor Society to further pursue
                            this goal.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interests;
