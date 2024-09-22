import "../styles/Interest.css";
import Carousel from "../components/Carousel";

function Academics() {
    const awards = ["commencement.jpg", "gpa2024.jpg", "gpa2023.jpg", "apaward2024.jpeg"];

    return (
        <div className="interest">
            <div className="intro">
                <div>
                    <h1>Academics</h1>
                    <p>
                        During my time at the Northville High School, I have
                        consistently maintained an unweighted 4.0 GPA while
                        focusing on classes that align with my mission. I find
                        that I am much more focused in classes that challenge my
                        technical thinking, so I have taken as many science and
                        engineering courses as I could.
                    </p>
                </div>
                <img
                    src="nhslogo.png"
                    style={{ background: "white", padding: "5px" }}
                />
            </div>
            <div className="table-section">
                <h2>Course List</h2>
                <a
                    href="MatthewMcClureTranscript.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Transcript
                </a>
                <h3>Senior Year</h3>
                <div className="year">
                    <div>
                        <h4>Semester 1</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Honors Calculus 2</td>
                                    <td>(In progress)</td>
                                </tr>
                                <tr>
                                    <td>AP Biology</td>
                                    <td>(In progress)</td>
                                </tr>
                                <tr>
                                    <td>AP Statistics</td>
                                    <td>(In progress)</td>
                                </tr>
                                <tr>
                                    <td>AP Computer Science</td>
                                    <td>(In progress)</td>
                                </tr>
                                <tr>
                                    <td>IB Chemistry-HL-Y2</td>
                                    <td>(In progress)</td>
                                </tr>
                                <tr>
                                    <td>AP English Literature and Composition</td>
                                    <td>(In progress)</td>
                                </tr>
                                <tr>
                                    <td>AP Physics (C)</td>
                                    <td>(In progress)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h3>Junior Year</h3>
                <div className="year">
                    <div>
                        <h4>Semester 1</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>AP Computer Science Principles</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>AP English Language and Composition</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>PLTW Principles of Engineering</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>AP Calculus AB</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>Honors Physics</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>AP Chemistry</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>AP World History</td>
                                    <td>A+</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h4>Semester 2</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>AP Computer Science Principles</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>AP English Language and Composition</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>PLTW Principles of Engineering</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>AP Calculus AB</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>Honors Physics</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>AP Chemistry</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>AP World History</td>
                                    <td>A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h3>Sophomore Year</h3>
                <div className="year">
                    <div>
                        <h4>Semester 1</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Principles of Business</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>Honors English 10</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>CAD Engineering</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>Honors Algebra 2</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>Honors Chemistry</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>Civics</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>Spanish 3</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>Honors Pre-Calculus (summer)</td>
                                    <td>A+</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h4>Semester 2</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Physical Conditioning</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>Honors English 10</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>CAD Engineering</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>Honors Algebra 2</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>Honors Chemistry</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>Economics</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>Spanish 3</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>Honors Pre-Calculus (summer)</td>
                                    <td>A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h3>Freshman Year</h3>
                <div className="year">
                    <div>
                        <h4>Semester 1</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Visual Basic</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>Honors English 9</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>PLTW Intro to Engineering</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>Honors Geometry</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>Biology</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>US History</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>Spanish 2</td>
                                    <td>A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h4>Semester 2</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Health</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>Honors English 9</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>PLTW Intro to Engineering</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>Honors Geometry</td>
                                    <td>A+</td>
                                </tr>
                                <tr>
                                    <td>Biology</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>US History</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>Spanish 2</td>
                                    <td>A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="year">
                    <div>
                        <h3>AP Tests</h3>
                        <h4>Junior Year</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>AP Calculus AB</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>AP Chemistry</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>AP Computer Science Principles</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>AP World History</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>AP English Language and Composition</td>
                                    <td>5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img
                        src="4.0.svg"
                        style={{ width: "45%", marginTop: "100px" }}
                    />
                </div>
            </div>
            <Carousel images={awards} />
            <div className="list">
                <h1>Academic Project Highlights</h1>
                <div className="item">
                    <div>
                        <h2>Seaperch</h2>
                        <p>
                            The Seaperch was part of a project in CAD
                            Engineering where we had to design and construct a
                            remotely operated vehicle that could complete tasks
                            underwater. Our class then competed in a competition
                            to see what team could complete the most tasks in a
                            given amount of time, with our group taking the
                            victory.
                        </p>
                        <a
                            href="https://cad.onshape.com/documents/2b35ea583a8184e2bb1df7ce/w/a6bc72273d56b6dd7ad6efd6/e/735407d209f2536bb33b6f61?renderMode=0&uiState=66c01721a114081520cdae5b/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Seaperch CAD
                        </a>
                    </div>
                    <img src="Seaperch.png" />
                </div>
                <div className="item">
                    <div>
                        <h2>illumiLock</h2>
                        <p>
                            illumiLock was a device I created for a project in
                            CAD Engineering where we had to use Arduinos to
                            solve a problem. At the time, my sister frequently
                            left the lights on in the house, so I designed and
                            programmed a device that would only allow a certain
                            light switch to be turned on for a given amount of
                            time per day. When that time is exceeded, then the
                            light switch is locked until the next day.
                        </p>
                        <a
                            href="https://cad.onshape.com/documents/d9792e07871b8fed54199996/w/49a5e2b719816e509b3bb563/e/4770c4cdd54aeb5a47301e09?renderMode=0&uiState=66c01e5a633b6f37122df9ec/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            illumiLock CAD
                        </a>
                    </div>
                    <iframe
                        src="https://www.youtube.com/embed/8p9ZJp2yHoU?si=nj-oirkERR80V0_l"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>{" "}
                </div>
                <div className="item">
                    <div>
                        <h2>Electrical Kitchen Model</h2>
                        <p>
                            This model was part of a physics project where we
                            constructed a functional electrical model of a room
                            in our house, in this case, the kitchen. Rather than
                            bring in materials and construct my kitchen by hand,
                            I designed and 3D printed the structure for my
                            kitchen with the goal of making the smallest model
                            possible. In the end, this model was by far the
                            smallest in the class, measuring around 3.5x3.5
                            inches.
                        </p>
                    </div>
                    <img src="physicshouse.jpg" />
                </div>
                <div className="item">
                    <div>
                        <h2>Automata</h2>
                        <p>
                            This automata project was part of the PLTW Intro to
                            Engineering class where we designed, 3D printed, and
                            constructed a simple mechanism with cams. Although
                            the project is relatively simple, it reinforced
                            concepts about designing for variation in
                            manufacturing with interacting parts.
                        </p>
                        <a
                            href="https://cad.onshape.com/documents/137f2edf6ea5eb1b142ba95b/w/424df0454fd534f1b2d832b9/e/3c38801078dc3a9f38590eeb?renderMode=0&uiState=66c028b2a01a1d79edad2027/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Automata CAD
                        </a>
                    </div>
                    <img src="automata.jpg" />
                </div>
                <div className="item">
                    <div>
                        <h2>Swept Away Robot</h2>
                        <p>
                            This competition was part of the CAD Engineering
                            class, where we had to design and construct a robot
                            capable of competing in a game called "Swept Away."
                            The game involved a robot that had to pick up and
                            move balls from one side of the field to the other,
                            with the robot that moved the most balls winning.
                            Despite the fact that our bot was put together with
                            scraps, the design was unstoppable in the
                            competition and we won by a large margin. We really
                            enjoyed putting this simple robot together, and
                            actually bought LED strips to attach to it.
                        </p>
                    </div>
                    <img src="sweptawayrobot.jpg" />
                </div>
                <div className="item">
                    <div>
                        <h2>Shoes</h2>
                        <p>
                            This was a project in PLTW Principles of Engineering
                            where we had to make shoes to fit a client's needs.
                            Our team's shoe was primarily made of strips of
                            leather sewn together to create a full shoe, along
                            with a sole made of layers of neoprene and
                            polyethylene. This project seemed simple at first,
                            but actually going through the process of making a
                            shoe out of nothing gave me a greater appreciation
                            for the work that goes into making all everyday
                            items.
                        </p>
                    </div>
                    <img src="shoes.jpg" />
                </div>
                <div className="item">
                    <div>
                        <h2>Holocaust Memorial</h2>
                        <p>
                            This memorial was part of a 9th grade English
                            project where we had to create a symbolic
                            representation of the Holocaust. I designed and 3D
                            printed a metaphorical concentration camp, where the
                            words "silence" and "indifference" are outside of
                            the fences, the word "fam ily" is split up inside
                            the fence, and the words "hopes" and "dreams" are
                            burning in the flames of the crematorium.
                        </p>
                    </div>
                    <img src="holocaust.jpg" />
                </div>
                <div className="item">
                    <div>
                        <h2>Tokushinryu Snowflake</h2>
                        <p>
                            This was an assignment in PLTW Intro to Engineering
                            where we had to use radial pattern tool to create a
                            snowflake. In my case, I based the snowflake off of
                            the Tokushinryu logo. I later 3D printed the
                            snowflake with a 0.2mm nozzle, which was much
                            smaller than I had printed with before. This small
                            nozzle size allowed me to print the Japanese
                            characters with much greater detail. I also tried a
                            new technique with my 3D printer where I printed the
                            base of the snowflake in black, and switched the
                            material color to red when it had completed the
                            layers on the interior pattern, giving the logo a
                            red outline without requiring a dual extrusion
                            printer.
                        </p>
                    </div>
                    <img src="snowflake.jpg" />
                </div>
                <div className="item">
                    <div>
                        <h2>Powerscoop</h2>
                        <p>
                            Powerscoop was a product I created for my Principles
                            of Business class, where we had to develop a product
                            and "sell" it to other students. The product I
                            developed was essentially a battery powered ice
                            cream scoop that functioned similarly to an
                            oscillating saw. This functionality would make it
                            much easier to scoop deeply frozen ice cream. We
                            did not have to actually construct the product, but
                            I decided to design and 3D print a basic model of
                            the product to make it more appealing to potential
                            buyers. The tip of the scoop threads into the
                            handle, and the handle has a button made of flexible
                            material that would, in theory, turn on the device.
                        </p>
                    </div>
                    <img src="powerscoop.png" />
                </div>
                <div className="item">
                    <div>
                        <h2>Exigimos Music Video</h2>
                        <p>
                            In Spanish 3, we were given the choice of completing
                            a variety of projects that demonstrate our
                            understanding of Spanish through a given song. I
                            chose to create a music video. Initially, I was
                            irritated by the project because I felt that it was
                            busywork that did not actually prove I knew
                            anything. So the recording of myself was done with a
                            very serious "just get it done" expression. But once
                            I began to edit the video, I started to enjoy it,
                            and went completely overboard with the editing. The
                            juxtaposition of the serious expression with the
                            ridiculous editing is what makes this video funny,
                            especially if you consider that I am generally a
                            serious, introverted person. On an even funnier note,
                            I started getting random compliments in the hallway
                            from friends, and found out that my teacher had
                            shown the video to the other classes.
                        </p>
                    </div>
                    <iframe
                        src="https://www.youtube.com/embed/rQIuA9tCbdA?si=6RHO2-c5zNWfBYaJ"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>{" "}
                </div>
                <div className="item">
                    <div>
                        <h2>AP World History Video</h2>
                        <p>
                            While taking AP World History, the school counselors
                            were trying to add videos to the course catalog
                            created by students in order to tell future students
                            what the class is about. So, my AP World History
                            teacher offered extra credit to any student who
                            created a video, and double the extra credit for the
                            person who created the winning video. I figured that
                            in order to get the extra credit, I would have to
                            make my video stand out. And what better way to
                            stand out than to make yet another completely
                            ridiculous video? It turns out that my video won, so
                            it was published to the course catalog. Now, all
                            students who have any questions about AP World
                            History can observe as I make a fool of myself for
                            the sake of extra credit. Despite this, my grade
                            ended up being too high to even receive the extra
                            credit for winning the competition.
                        </p>
                    </div>
                    <iframe
                        src="https://www.youtube.com/embed/GUDNUbLU9Xw?si=BSGeDn7rFMc2z_dz"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>{" "}
                </div>
            </div>
        </div>
    );
}

export default Academics;
