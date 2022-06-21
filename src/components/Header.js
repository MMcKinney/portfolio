// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Mike McKinney" />

            <div className='header__content'>
                <h1>Mike McKinney</h1>
                <p>Software Engineer</p>
                <div>
                    <a className="button" href="#social">Get In Touch</a>
                </div>
            </div>
        </section>
    );
}

export default Header;