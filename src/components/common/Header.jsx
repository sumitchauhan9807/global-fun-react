import { Link } from 'react-router';

function Header() {
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
          <button className="a11y-button sidebar-trigger" aria-label="Toggle menu" type="button">
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
        <nav className="nav-right">
          <div className="nav-button media-up-to-m-hidden" />
          <div className="header-dropdown header-user-menu with-new-messenger">
            <a className="about-us-button about-us-button--hidden media-up-to-m-hidden" href="/about">About Stripchat</a><a className="btn btn-signup" href="/signup"><span className="media-after-m-hidden">Join Free</span><span className="media-up-to-s-hidden">Create Free Account</span></a>
            <a className="dropdown-link media-after-m-hidden mobile-nav-link">
              <span>
                <svg style={{height: '20px', width: '20px'}} className="icon icon-menu-mobile">
                  <use xlinkHref="#icons-menu-mobile" />
                </svg>
              </span>
            </a>
            <a className="btn btn-outline media-up-to-s-hidden" href="/login">Log In</a>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <div className="header-sub header-sub-with-sidebar">
    <div className="tooltip-v2-portal-container" id="header-sub-portal-container" />
    <div className="container">
      <nav className="model-filter nav-left navbar-dropdown">
        <div className="visible-items"><a href="/" aria-label="Girls" className="active model-filter-link model-filter__link model-filter__link--active"><span className="model-filter__link-label">Girls</span></a><a href="/couples" aria-label="Couples" className="model-filter-link model-filter__link"><span className="model-filter__link-label">Couples</span></a><a href="/men" aria-label="Guys" className="model-filter-link model-filter__link"><span className="model-filter__link-label">Guys</span></a><a href="/trans" aria-label="Trans" className="model-filter-link model-filter__link"><span className="model-filter__link-label">Trans</span></a></div>
        <div className="navbar-hidden-elements-wrapper">
          <a href="/" aria-label="Girls" className="active model-filter-link model-filter__link model-filter__link--active" aria-hidden="true"><span className="model-filter__link-label">Girls</span></a><a href="/couples" aria-label="Couples" className="model-filter-link model-filter__link" aria-hidden="true"><span className="model-filter__link-label">Couples</span></a><a href="/men" aria-label="Guys" className="model-filter-link model-filter__link" aria-hidden="true"><span className="model-filter__link-label">Guys</span></a><a href="/trans" aria-label="Trans" className="model-filter-link model-filter__link" aria-hidden="true"><span className="model-filter__link-label">Trans</span></a>
          <div className="navbar-more-button" aria-hidden="true">More</div>
        </div>
        <div className="hidden navbar-more-button">
          More
          <span className="dropdown-arrow">
            <svg className="icon icon-sort">
              <use xlinkHref="#icons-sort" />
            </svg>
          </span>
        </div>
      </nav>
      <div className="nav-scrollable-container scroll-bar-container ps">
        <nav className="model-filter nav-left nav-scrollable nav-scrollable--only-for-touch"><a href="/" aria-label="Girls" className="active model-filter-link model-filter__link model-filter__link--active"><span className="model-filter__link-label">Girls</span></a><a href="/couples" aria-label="Couples" className="model-filter-link model-filter__link"><span className="model-filter__link-label">Couples</span></a><a href="/men" aria-label="Guys" className="model-filter-link model-filter__link"><span className="model-filter__link-label">Guys</span></a><a href="/trans" aria-label="Trans" className="model-filter-link model-filter__link"><span className="model-filter__link-label">Trans</span></a></nav>
        <div className="ps__rail-x" style={{left: '0px', bottom: '0px'}}>
          <div className="ps__thumb-x" tabIndex={0} style={{left: '0px', width: '0px'}} />
        </div>
        <div className="ps__rail-y" style={{top: '0px', right: '0px'}}>
          <div className="ps__thumb-y" tabIndex={0} style={{top: '0px', height: '0px'}} />
        </div>
      </div>
      <nav className="nav-right nav-right--box-shadow">
        <button type="button" className="all-tags-dropdown-trigger btn dropdown-link media-up-to-xs-hidden">
          <svg className="icon icon-categories-2" style={{height: '16px', width: '16px'}}>
            <use xlinkHref="#icons-categories-2" />
          </svg>
          <svg className="icon icon-close-2 xs-only" style={{height: '16px', width: '16px'}}>
            <use xlinkHref="#icons-close-2" />
          </svg>
          <span className="dropdown-label">Categories</span>
        </button>
        <div className="model-search model-search--compact">
          <button role="search" aria-label="Search models, tags or countries, tip menu" className="btn btn-default btn-inline-block open-button" type="button">
            <span>
              <svg className="icon icon-search-3">
                <use xlinkHref="#icons-search-3" />
              </svg>
              <span className="search-text">Search</span>
            </span>
          </button>
        </div>
        <button className="btn nav-right-close-btn nav-right-close-btn--box-shadow" type="button">
          <svg className="icon icon-close-3" style={{height: '14px', width: '14px'}}>
            <use xlinkHref="#icons-close-3" />
          </svg>
        </button>
      </nav>
    </div>
  </div>
  </>
  )
}
export default Header