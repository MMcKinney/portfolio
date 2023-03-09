// Import Assets
import yaet from '../assets/yaet.png';
import portfolio from '../assets/portfolio.png';
import julius from '../assets/julius.png';


const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Yet Another ERC20</h3>
                    <img src={yaet} alt="Yet Another ERC20 Token" title="MidJourney Prompt: crypto, cryptocurrency, bitcoin, cyber, internet, blockchain ::1.1 vibrant yellow, green and black, uhd, intricate, masterpiece, highly detailed, cinematic lighting --ar 7:4 --seed 81543458 --stylize 532"/>

                    <a href="https://mumbai.polygonscan.com/address/0x7aC9b6f232CCF75A895Ac281FabcA25CB1D305E4" target="_blank" className="button">Site</a>
                    <a href="https://github.com/MMcKinney/yaet-erc20" target="_blank" className="button">Code</a>
                    <p>
                        A mintable, burnable, pausable ERC20 token with role based permissions, made using Node, Hardhat and Open Zeppelin.  It is deployed to the Mumbai Polygon test network.
                    </p>
                </div>
                <div className="projects__card">
                    <h3>This Portfolio</h3>
                    <img src={portfolio} alt="This Portfolio" title="MidJourney Prompt: documents, neatly organized, in a binder ::1.5 vibrant cyan, blue and black, vaporwave, uhd, intricate, masterpiece, highly detailed, cinematic lighting --ar 7:4 --seed 8243628 --stylize 744" />

                    <a href="#about" className="button">Site</a>
                    <a href="https://github.com/MMcKinney/portfolio" target="_blank" className="button">Code</a>
                    <p>
                        This page is hosted on Web 3 using IPFS, it automatically builds the React app and deploys whenever the code is updated.
                    </p>
                </div>
                <div className="projects__card">
                    <h3>Julius Blockchain</h3>
                    <img src={julius} alt="Julius Blockchain" title="MidJourney Prompt: Julius Caesar crossing the river in ancient Rome ::1.2 vibrant cyan, blue and black, vaporwave, uhd, intricate, masterpiece, highly detailed, cinematic lighting --ar 7:4 --seed 9245688 --stylize 321" />

                    <a href="https://github.com/MMcKinney/julius-blockchain" target="_blank" className="button">Code</a>
                    <p>
                        A simple example of a blockchain, written in Julia.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Projects;