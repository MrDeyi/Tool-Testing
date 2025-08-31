import '../../styles.css'
import movieLogo from '../../assets/logo.png'
import
function Header() {
    return ( 
       <div className='header'>
          <img src={movieLogo} className="logo" alt="moviedux" />
          <h2 className='app-subtitle'>Your Ultimate Movie Companion! Find your next movie here</h2>
       </div>
     );
}

export default Header;