import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby pabst DSA fanny pack locavore, cred af man bun twee 90's
            yuccie listicle banh mi austin. Hell of glossier etsy messenger bag
            swag, chartreuse wolf pinterest bitters cloud bread JOMO skateboard.
            Tbh forage next level typewriter air plant tattooed. Pabst tilde
            subway tile austin, occupy sus direct trade offal kale chips food
            truck flannel adaptogen. Hella single-origin coffee lyft organic
            fingerstache crucifix tousled readymade neutra chartreuse bruh
            shoreditch DSA vexillologist 90's.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
