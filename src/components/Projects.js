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
                    <img src={yaet} alt="Yet Another ERC20 Token" />

                    <a href="https://mumbai.polygonscan.com/address/0x7aC9b6f232CCF75A895Ac281FabcA25CB1D305E4" target="_blank" className="button">Site</a>
                    <a href="https://github.com/MMcKinney/yaet-erc20" target="_blank" className="button">Code</a>
                    <p>
                        A mintable, burnable, pausable ERC20 token with role based permissions, made using Node, Hardhat and Open Zeppelin.  It is deployed to the Mumbai Polygon test network.
                    </p>
                </div>
                <div className="projects__card">
                    <h3>This Portfolio</h3>
                    <img src={portfolio} alt="This Portfolio" />

                    <a href="#about" className="button">Site</a>
                    <a href="https://github.com/MMcKinney/portfolio" target="_blank" className="button">Code</a>
                    <p>
                        This page is hosted on Web 3 using IPFS, it automatically builds the React app and deploys whenever I update the code on GitHub.
                    </p>
                </div>
                <div className="projects__card">
                    <h3>Julius Blockchain</h3>
                    <img src={julius} alt="Julius Blockchain" />

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