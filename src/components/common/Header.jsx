import { Link } from 'react-router';
import { setSidebar } from 'src/redux/app'
import { useDispatch ,useSelector } from "react-redux";
import {logOut} from 'src/redux/user'
function Header() {
  const appData = useSelector((state) => state.app);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const toggleSidebar = () => {
    dispatch(setSidebar(!appData.sidebar))
  }
  return(
    <>
      <svg style={{height: 0, width: 0, display: 'block'}}>
      <defs>
        <symbol id="site_logo_header" viewBox="0 0 500 100">
          <image href="https://assets.strpst.com/assets/icons/headerlogo_stripchat.global.png?v=9d31abb7" />
        </symbol>
        <symbol id="site_logo_footer" viewBox="0 0 500 100">
          <image href="https://assets.strpst.com/assets/icons/footerlogo_stripchat.global.png?v=9d31abb7" />
        </symbol>
      </defs>
    </svg>
    <header className="header-top-wrapper">
    <div className="guest header-top is-guest-user">
      <div className="header-top-container">
        <nav className="nav-left">
          <button onClick={()=>{ toggleSidebar()}} className="a11y-button sidebar-trigger" aria-label="Toggle menu" type="button">
            <svg className="icon icon-menu sidebar-trigger-icon">
              <use xlinkHref="#icons-menu" />
            </svg>
          </button>
          <Link to="/" aria-label="Go to Main Page" className="header-logo-link" href="/">
            <div className="header-logo">
              <svg>
                <use xlinkHref="#site_logo_header" />
              </svg>
            </div>
          </Link>
          <a className="header-top__live-counter live-counter live-counter--interactive media-up-to-m-hidden" href="/">
            <svg className="icon icon-dot live-counter__dot">
              <use xlinkHref="#icons-dot" />
            </svg>
            <span><span className><span className="live-counter__accent">5289</span> LIVE</span></span>
          </a>
          <div className="nav-link media-up-to-s-hidden">
            <a href="/top/girls/current-month-asia-and-pacific">
              <svg className="icon icon-best-models">
                <use xlinkHref="#icons-best-models" />
              </svg>
              <span className="media-up-to-m-hidden">Top Models</span>
            </a>
          </div>
        </nav>
        <div className="header-top-search-wrapper">
          <div className="model-search model-search--expanded">
            <div className="spotlight-container">
              <div className="model-search__input-wrapper">
                <button role="presentation" aria-label="Search models, tags or countries, tip menu" className="btn btn-default btn-inline-block open-button" type="button">
                  <svg className="icon icon-search-3">
                    <use xlinkHref="#icons-search-3" />
                  </svg>
                </button>
                <input className="inline-block input text-default theme-default" type="text" aria-label="Search models, tags or countries, tip menu" placeholder="Models, categories, countries, tip menu" role="search" tabIndex={-1} autoComplete="off" autoCorrect="off" autoCapitalize="off" defaultValue />
                <button role="button" aria-label="Search" className="btn btn-default btn-inline-block model-search__advanced-filter-toggle" type="button">
                  <div className="model-search__advanced-filter-toggle-wrapper">
                    <svg className="icon icon-filter">
                      <use xlinkHref="#icons-filter" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {userData.token ? <LoggedInNav/> : <LoggedOutNav/> }
        {/* <LoggedOutNav/> */}
        {/* <LoggedInNav/> */}
      </div>
    </div>
  </header>
  
  </>
  )
}

const LoggedOutNav = () => {
  return (
    <nav className="nav-right">
          <div className="header-dropdown header-user-menu with-new-messenger">
            <Link className="btn btn-signup" to="/register"><span className="media-after-m-hidden">Join Free</span><span className="media-up-to-s-hidden">Create Free Account</span></Link>
            <a className="dropdown-link media-after-m-hidden mobile-nav-link">
              <span>
                <svg style={{height: '20px', width: '20px'}} className="icon icon-menu-mobile">
                  <use xlinkHref="#icons-menu-mobile" />
                </svg>
              </span>
            </a>
            <Link className="btn btn-outline media-up-to-s-hidden" to="/login">Log In</Link>
          </div>
        </nav>
  )
}

const LoggedInNav = () => {
  const dispatch = useDispatch()
  return (
    <nav className="nav-right">
      <div className="personal-notifications-modal-panel with-new-messenger">
      <button className="a11y-button dropdown-link" type="button">
        <svg className="icon icon-chat-2">
          <use xlinkHref="#icons-chat-2" />
        </svg>
      </button>
      <button className="a11y-button dropdown-link dropdown-link-notification" id="dropdown-link-notifications" type="button">
        <svg className="icon icon-notifications">
          <use xlinkHref="#icons-notifications" />
        </svg>
      </button>
      <button className="a11y-button dropdown-link dropdown-link-notification mobile" id="dropdown-link-notifications" type="button">
        <svg className="icon icon-notifications">
          <use xlinkHref="#icons-notifications" />
        </svg>
      </button>
      <div className="personal-notifications-modal-panel__dropdown" /></div>
      <div className="header-dropdown not-a-studio tokens-menu with-new-messenger mt-2">
        <a className="dropdown-link inactive">
          <button className="btn ds-btn-inline-block btn-v2-money new-tokens-group new-tokens-group--visible" type="button">Profile</button>
        </a>
      </div>
      <div className="header-dropdown header-user-menu with-new-messenger">
       
        <a href="#" onClick={(e) =>{e.preventDefault(); dispatch(logOut())}} >Log Out</a>
        <a className="dropdown-link media-after-m-hidden mobile-nav-link">
          <span>
            <svg style={{height: '20px', width: '20px'}} className="icon icon-menu-mobile">
            <use xlinkHref="#icons-menu-mobile" />
            </svg>
          </span>
        </a>
      </div>
    </nav>
  )
}
export default Header