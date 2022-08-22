import "./Whitepaper.css";
import { IconContext } from "react-icons";
import { FaTwitter, FaDiscord } from "react-icons/fa"

export default function Whitepaper(props) {

    return (
        <>
            <IconContext.Provider value={{ color: "blue" }}>


                <section id="whitepaper">
                    {/* <a id = "whitepaper-download-button" download="HelloDarkCity-Whitepaper.pdf" href="../../downloadable/Whitepaper.pdf" >Download the Whitepaper</a> */}
                    <footer id="whitepaper-text">
                        GOODBYE FOR NOW, TRAVELER!<br />
                        FIND OUT MORE INFORMATION BY READING OUR <a id="whitepaper-download-button" download="HelloDarkCity-Whitepaper.pdf" href="../../downloadable/Whitepaper.pdf" >WHITEPAPER</a>
                    </footer>



                    <div id="whitepaper-social-media-buttons-wrapper">

                        <a className="whitepaper-social-media-button" target="_blank" href="https://twitter.com/helloDARKCITY" rel="noreferrer">
                            <FaTwitter />
                        </a>
                        <a className="whitepaper-social-media-button" target="_blank" href="https://discord.gg/ABAvjWVkR5" rel="noreferrer">
                            <FaDiscord />
                        </a>

                    </div>


                </section>
            </IconContext.Provider>
        </>
    )
}

