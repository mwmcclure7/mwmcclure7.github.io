import "../styles/Interest.css";
import Carousel from "../components/Carousel";

function Mtb() {
    const images = [
        "mtb1.png",
        "devo.png",
        "mtbtreefarm.jpg",
        "mtbpodium.png",
        "mtbmedals.jpg",
        "nhspodium.jpg",
    ];

    return (
        <div className="interest">
            <div className="intro">
                <div>
                    <h1>Mountain Biking</h1>
                    <p>
                        My journey in mountain biking began during my Freshman
                        year, where I found a profound love for this exciting
                        sport. Its unique blend of mental stimulation and
                        physical exertion drew me in from the beginning. Beyond
                        the mental challenge, mountain biking serves as an
                        excellent form of exercise, pushing my endurance and
                        strength to new limits. What sets it apart is the
                        interplay between grueling uphill climbs and the
                        exhilaration of downhill descents, turning each ride
                        into a fast-paced roller coaster. I joined the
                        Northville team in my first year of riding, progressing
                        in the MiSCA league from a novice to a varsity rider.
                        This year, I sought to expand my skills by joining the
                        MiSCA DEVO team, a developmental program that not only
                        refines my mountain biking skills but also enhances my
                        overall athleticism through specialized training and
                        additional races.
                    </p>
                    <div className="links">
                        <a
                            href="https://www.instagram.com/nhsmtb/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Northville HS MTB Instagram
                        </a>

                        <a
                            href="https://www.miscabike.org/devo-roster-2024/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MiSCA DEVO
                        </a>
                    </div>
                </div>
                <img
                    src="misca.png"
                    style={{ background: "white", padding: "10px" }}
                />
            </div>
            <Carousel images={images} />
            <div className="list">
                <div className="item">
                    <div>
                        <h2>Northville HS MTB</h2>
                        <p>
                            I joined the Northville High School Mountain Bike
                            Team shortly after I began my journey as a mountain
                            biker. I had never tried this sport before high
                            school, but quickly grew to love it. That same year,
                            I raced in the MiSCA series alongside my Northville
                            teammates. Having just started, I placed near the
                            middle of the novice level races. The following
                            year, I decided to push myself harder and race in
                            the longer, junior varsity races. Having improved
                            from the previous year, I placed near the middle of
                            the junior varsity category. The year after that, in
                            my eleventh grade year, my performance absolutely
                            skyrocketed and I began placing on podiums in my
                            junior varsity races. That year, I applied for the
                            MiSCA DEVO team and set my mind on racing in the
                            varsity category the following year.
                        </p>
                    </div>
                    <img src="nhspodium.jpg" />
                </div>
                <div className="item">
                    <div>
                        <h2>MiSCA DEVO Elite Team</h2>
                        <p>
                            Following the success of my eleventh grade season, I
                            applied for a spot on the MiSCA DEVO team for elite
                            student racers in Michigan. After interviewing with
                            the coaches, I was accepted onto the team, and was
                            thrilled that I would be taking my riding to the
                            next level. This team opened up a world of
                            opportunities for racing and training. In this
                            program, my coach would arrange personalized
                            training plans to make my workouts as effective as
                            possible. In addition to better training, my coaches
                            also helped me navigate the world of national
                            racing. In March 2023, I competed in my first
                            national race and earned national rank as a mountain
                            bike racer.
                        </p>
                    </div>
                    <img src="devo.png" />
                </div>
            </div>
        </div>
    );
}

export default Mtb;
