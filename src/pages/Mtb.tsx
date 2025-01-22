import "../styles/Interest.css";
import Carousel from "../components/Carousel";

function Mtb() {
    const images = [
        "mtb1.png",
        "varsity.jpg",
        "statechamp2024.jpg",
        "jv2023.jpg",
        "jv2022.jpg",
        "devo.png",
        "mtbtreefarm.jpg",
        "mtbpodium.png",
        "mtbmedals.jpg",
        "nhspodium.jpg",
        "mtb2.jpg",
    ];

    return (
        <div className="interest">
            <div className="intro">
                <div>
                    <h1>Mountain Biking</h1>
                    <p>
                        I began mountain biking during my freshman year and
                        immediately loved the sport, as it is the perfect
                        combination of mental stimulation and physical exertion.
                        It is also one of the few sports, if not the only sport,
                        that incorporates engineering principles through bike
                        repair, maintenance, and tuning. I joined the Northville
                        Mountain Bike Team in my first year of riding and began
                        racing in the Novice category of the MiSCA league. Over
                        the next two years, I raced in the Junior Varsity
                        category, making a few podiums in my junior year.
                        Afterwards, I joined the MiSCA DEVO team, a
                        developmental program that enhances my skills and
                        athleticism through scientific training. Through MiSCA
                        DEVO, I was able to participate in national-level races.
                        I raced Varsity in my senior year and was chosen as the
                        Northville Team Captain. Throughout my time in the
                        sport, I have enjoyed watching the tremendous growth it
                        has endured. My team grew from around 15 to 40+ riders,
                        and the MiSCA League as a whole expanded significantly.
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
                            middle of the Novice category races. The following
                            year, I decided to push myself harder and race in
                            the longer, Junior Varsity races. Having improved
                            from the previous year, I placed near the middle of
                            the Junior Varsity category. In my junior year, my
                            performance skyrocketed and I began making the
                            podium. It was at this point that I applied for the
                            MiSCA DEVO team. In my final year on the team, I
                            raced Varsity to push the limits of what I was
                            capable of in this sport.
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
                            the coaches, I was accepted onto the team. This
                            program opened up a world of opportunities for
                            racing and training. In this program, my coach would
                            arrange personalized training plans to make my
                            workouts as effective as possible. In addition to
                            scientific training, my coaches helped me navigate
                            the world of national racing. In March 2023, I
                            competed in my first national race in Tennessee and
                            earned national rank as a mountain bike racer.
                        </p>
                    </div>
                    <img src="devo.png" />
                </div>
            </div>
        </div>
    );
}

export default Mtb;
