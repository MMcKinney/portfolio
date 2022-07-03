// Import Assets
import uniswap from '../assets/yaet.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Yet Another ERC20</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>
                        A mintable, burnable, pausable ERC20 token with role based permissions, made using Node, Hardhat and Open Zeppelin.  It is deployed to the Mumbai Polygon test network.
                    </p>

                    <a href="https://mumbai.polygonscan.com/address/0x7aC9b6f232CCF75A895Ac281FabcA25CB1D305E4" target="_blank" className="button">Site</a>
                    <a href="https://github.com/MMcKinney/yaet-erc20" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;