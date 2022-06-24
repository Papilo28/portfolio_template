// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Papilo Swap</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>This is a decentralized cryptocurrencies exchange that was built using
                        Moralis servers along with 1inch plugins.
                        This app enables users to connect their wallet address through
                        Metamask and swap available tokens. 
                    </p>

                    <a href="https://gateway.pinata.cloud/ipfs/QmcLz52eMq1CCKWtcLR65y1iAyMRdf8WEayBcwesSWpmq3/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Papilo28/papilo-dex/tree/main/dexapp" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Defi Dashboard</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>This dapp was written in vanilla js and was connected to a cross-chain
                        server from moralis, this dapp will populate the tokens and NFTs of an
                        address from all different mainnet chains.
                    </p>

                    <a href="https://ipfs.io/ipfs/QmVQdzU48VQhKvqoZfHgACjahMKxfzuXyAKdCjw27Jvp9c/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Papilo28/defi-dashboard" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Papilo Punk</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>This NFT collection was launched on the ropsten tesnet for demonstration purposes only.
                    </p>

                    <a href="https://testnets.opensea.io/collection/papilo-punk-v2/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Papilo28/PapiloPunk/tree/main/PapiloPunk" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;