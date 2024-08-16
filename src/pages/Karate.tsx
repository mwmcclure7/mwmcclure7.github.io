import "../styles/Interest.css";
import Carousel from "../components/Carousel";

function Karate() {
    const images = [
        "karate-promotion.jpg",
        "karatefiretruck.jpg",
        "covid-karate.jpg",
        "trophy.JPG",
        "tokumara.jpg",
        "megami.jpg",
    ];

    return (
        <div className="interest">
            <div className="intro">
                <div>
                    <h1>Isshinryu Karate</h1>
                    <p>
                        I have been involved with Isshinryu Karate from the time
                        I was six years old, and my love of the art has only
                        grown since then. Although I have grown to appreciate
                        the physical benefits this system of karate has
                        provided, I view this activity as a sort of puzzle with
                        endless solutions. My sensei, Paul Coleman, and I have
                        developed many of our own katas based around our
                        favorite weapons and techniques, fostering a more
                        innovative and open-ended interpretation of this system
                        of karate. This open-minded interpretation of katas and
                        techniques extended into my practice of Tokushinryu
                        Kobudo, a weapons system that uses traditional Okinawan
                        farming equipment for self defense. My dedication to
                        karate for over a decade has earned a second degree
                        black belt in both Isshinryu Karate and Tokushinryu
                        Kobudo.
                    </p>
                    <div className="links">
                        <a
                            href="https://okinawabudokai.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Dojo Website
                        </a>
                    </div>
                </div>
                <img src="okinawabudokailogo.jpg" />
            </div>
            <Carousel images={images} />
            <div className="item">
                <div>
                    <h2>Isshinryu Medley</h2>
                    <p>
                        The Isshinryu Medley is my favorite kata we have
                        developed during my time in Isshinryu, as it combines
                        all katas into a single, fluid series of techniques. For
                        instance, we begin with the first kata, Seisan, and
                        later transition into the second kata, Seiuchin, when
                        techniques from two katas line up. We repeated this
                        process for all seven katas in Isshinryu, and later
                        return back to Seisan after the seventh kata,
                        effectively creating a "medley" of Isshinryu katas. I
                        really enjoyed working on this project, as matching up
                        similar techniques between the katas was a unique type
                        of puzzle. Please note that this video was recorded upon
                        the initial creation of the medley in 2021, and has
                        since been improved upon.
                    </p>
                </div>
                <iframe
                    src="https://www.youtube.com/embed/qmUAoT48Uoc?si=Xh6jerumEVWC6FLx"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>{" "}
            </div>
            <div className="list">
                <div className="item">
                    <div>
                        <h2>Qingwa</h2>
                        <p>
                            Around 2019, Paul and I began working on an entirely
                            new kata which used our favorite techniques from
                            various katas in Isshinryu, along with a few
                            techniques from other karate systems. After a few
                            months of development, we finally had what we
                            considered to be a full kata with applicable
                            techniques, which we later referred to as "Qingwa."
                            We, as far as we are aware, have been the only
                            people locally to make a kata from scratch. This
                            inventive approach to karate makes me truly
                            appreciate the dojo that I am a part of, as it
                            fosters creative thinking and innovation, rather
                            than the repetitive training as seen in many other
                            dojos.
                        </p>
                    </div>
                    <img src="covid-karate.jpg" />
                </div>
                <div className="item">
                    <div>
                        <h2>Seisan Kama</h2>
                        <p>
                            Seisan is an empty-hand Isshinryu kata that, in
                            2015, Paul and I adapted to fit kama, a sickle-like
                            Okinawan farming tool. This was the first weapon we
                            had adapted to fit an empty hand kata, and I used it
                            in a tournament, winning first place in my age
                            group, and later winning against an older age group
                            as well. This was my first tournament and
                            demonstrated to me how new ideas and innovations,
                            such as combining kama with Seisan, are what
                            ultimately drive success. Years later, we would
                            spend considerable time adapting more empty hand
                            katas to various other weapons.
                        </p>
                    </div>
                    <img src="trophy.JPG" />
                </div>
            </div>
        </div>
    );
}

export default Karate;
