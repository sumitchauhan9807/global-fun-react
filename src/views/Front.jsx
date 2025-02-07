import ModelsGrid from 'src/components/ModelsGrid/Index';
function Front(){ 
  return (
    <div>
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
    <div id="body">
      <div className="tooltip-v2-portal-container" id="body-container" />
     
      <div className="indexpage main-layout main-layout__with-navbar sticky-header-desktop sticky-header-mobile sticky-subheader-mobile">
        <div className="wrapper">
          <header className="header-top-wrapper">
            <div className="guest header-top is-guest-user">
              <div className="header-top-container">
                <nav className="nav-left">
                  <button className="a11y-button sidebar-trigger" aria-label="Toggle menu" type="button">
                    <svg className="icon icon-menu sidebar-trigger-icon">
                      <use xlinkHref="#icons-menu" />
                    </svg>
                  </button>
                  <a aria-label="Go to Main Page" className="header-logo-link" href="/">
                    <div className="header-logo">
                      <svg>
                        <use xlinkHref="#site_logo_header" />
                      </svg>
                    </div>
                  </a>
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
          <main id="app" className="main-layout-main main-layout-main-multiple-column">
            <div className="app-sidebar-content app-sidebar-content-non-overlay" id="NON_OVERLAY_SIDEBAR_ID">
              <div className="app-sidebar-full-content-scroll-container hide-scrollbar">
                <div className="app-sidebar-full-content-padded">
                  <div className="app-sidebar-full-content-tokens-giveaway compact media-up-to-m-hidden tokens-giveaway-banner">
                    <div className=" tokens-giveaway-banner-container">
                      <svg className="icon icon-tokens-2 tokens-giveaway-icon">
                        <use xlinkHref="#icons-tokens-2" />
                      </svg>
                      <div className="tokens-giveaway-description">
                        <div className="tokens-giveaway-amount">50</div>
                        <div className="tokens-giveaway-title"><span className>tokens<br />giveaway</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="app-sidebar-full-content-vr-button-container" />
                  <div className="app-sidebar-full-content-categories categories model-list-filter">
                    <div className="model-filter-header">Categories</div>
                    <div className="tag-list-transition">
                      <div>
                        <div className="model-filter-groups">
                          <div className="tag-group tag-group-main">
                            <div className="group-header">Main</div>
                            <ul>
                              <li>
                                <a aria-current="page" className="model-filter-main-link active" href="/">
                                  <svg className="icon icon-home" style={{height: '16px', width: '16px'}}>
                                    <use xlinkHref="#icons-home" />
                                  </svg>
                                  <span className="model-filter-main-link-container">Home</span>
                                </a>
                              </li>
                              <li>
                                <a className="model-filter-main-link" href="/discover">
                                  <svg className="icon icon-feed" style={{height: '16px', width: '16px'}}>
                                    <use xlinkHref="#icons-feed" />
                                  </svg>
                                  <span>Feed</span>
                                </a>
                              </li>
                              <li>
                                <a className="model-filter-main-link" href="/girls/recommended">
                                  <svg className="icon icon-recommended" style={{height: '16px', width: '16px'}}>
                                    <use xlinkHref="#icons-recommended" />
                                  </svg>
                                  <span>Recommended</span>
                                </a>
                              </li>
                              <li>
                                <a className="model-filter-main-link" href="/favorites">
                                  <svg className="icon icon-favorited" style={{height: '16px', width: '16px'}}>
                                    <use xlinkHref="#icons-favorited" />
                                  </svg>
                                  <span>My Favorites</span>
                                </a>
                              </li>
                              <li>
                                <a className="model-filter-main-link" href="/girls/best">
                                  <svg className="icon icon-locked" style={{height: '16px', width: '16px'}}>
                                    <use xlinkHref="#icons-locked" />
                                  </svg>
                                  <span>Best for Privates</span>
                                </a>
                              </li>
                              <li>
                                <a className="model-filter-main-link" href="/watch-history">
                                  <svg className="icon icon-watch-history" style={{height: '16px', width: '16px'}}>
                                    <use xlinkHref="#icons-watch-history" />
                                  </svg>
                                  <span>Watch History</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="tag-group tag-group-specials">
                            <div className="group-header">Specials</div>
                            <nav>
                              <a href="/girls/german" aria-label="German" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label"><span className="country-flag country-flag--medium" style={{backgroundImage: 'url("https://assets.strpst.com/assets/common/components/ui/CountryFlag/images/de.svg")'}} />German</span><span className="categories__link-counter model-filter-link-count">42</span></a><a href="/girls/ukrainian" aria-label="Ukrainian" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label"><span className="country-flag country-flag--medium" style={{backgroundImage: 'url("https://assets.strpst.com/assets/common/components/ui/CountryFlag/images/ua.svg")'}} />Ukrainian</span><span className="categories__link-counter model-filter-link-count">145</span></a>
                              <a href="/girls/new" aria-label="New Models" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">
                                  <svg className="icon icon-lightning">
                                    <use xlinkHref="#icons-lightning" />
                                  </svg>
                                  New Models
                                </span>
                                <span className="categories__link-counter model-filter-link-count">436</span>
                              </a>
                              <a href="/girls/vr" aria-label="VR Cams" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">
                                  <svg className="icon icon-badge-vr-ds">
                                    <use xlinkHref="#icons-badge-vr-ds" />
                                  </svg>
                                  VR Cams
                                </span>
                                <span className="categories__link-counter model-filter-link-count">103</span>
                              </a>
                              <a href="/girls/indian" aria-label="Indian" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label"><span className="country-flag country-flag--medium" style={{backgroundImage: 'url("https://assets.strpst.com/assets/common/components/ui/CountryFlag/images/in.svg")'}} />Indian</span><span className="categories__link-counter model-filter-link-count">216</span></a>
                              <a href="/girls/bdsm" aria-label="BDSM" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">
                                  <svg className="icon icon-bunny-mask">
                                    <use xlinkHref="#icons-bunny-mask" />
                                  </svg>
                                  BDSM
                                </span>
                                <span className="categories__link-counter model-filter-link-count">29</span>
                              </a>
                              <a href="/girls/ticket-and-group-shows" aria-label="Ticket Shows" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">
                                  <svg className="icon icon-ticket-ds">
                                    <use xlinkHref="#icons-ticket-ds" />
                                  </svg>
                                  Ticket Shows
                                </span>
                                <span className="categories__link-counter model-filter-link-count">72</span>
                              </a>
                            </nav>
                          </div>
                          <div className="tag-group tag-group-age">
                            <div className="group-header">Age</div>
                            <nav><a href="/girls/teens" aria-label="Teen 18+" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Teen 18+</span><span className="categories__link-counter model-filter-link-count">867</span></a><a href="/girls/young" aria-label="Young 22+" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Young 22+</span><span className="categories__link-counter model-filter-link-count">2032</span></a><a href="/girls/milfs" aria-label="MILF" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">MILF</span><span className="categories__link-counter model-filter-link-count">557</span></a><a href="/girls/mature" aria-label="Mature" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Mature</span><span className="categories__link-counter model-filter-link-count">249</span></a><a href="/girls/grannies" aria-label="Granny" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Granny</span><span className="categories__link-counter model-filter-link-count">36</span></a></nav>
                          </div>
                          <div className="tag-group tag-group-ethnicity">
                            <div className="group-header">Ethnicity</div>
                            <nav><a href="/girls/arab" aria-label="Arab" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Arab</span><span className="categories__link-counter model-filter-link-count">58</span></a><a href="/girls/asian" aria-label="Asian" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Asian</span><span className="categories__link-counter model-filter-link-count">340</span></a><a href="/girls/ebony" aria-label="Ebony" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Ebony</span><span className="categories__link-counter model-filter-link-count">404</span></a><a href="/girls/indian" aria-label="Indian" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Indian</span><span className="categories__link-counter model-filter-link-count">216</span></a><a href="/girls/latin" aria-label="Latina" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Latina</span><span className="categories__link-counter model-filter-link-count">844</span></a><a href="/girls/mixed" aria-label="Mixed" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Mixed</span><span className="categories__link-counter model-filter-link-count">136</span></a><a href="/girls/white" aria-label="White" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">White</span><span className="categories__link-counter model-filter-link-count">2010</span></a></nav>
                          </div>
                          <div className="tag-group tag-group-bodyType">
                            <div className="group-header">Body Type</div>
                            <nav><a href="/girls/petite" aria-label="Skinny" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Skinny</span><span className="categories__link-counter model-filter-link-count">1324</span></a><a href="/girls/athletic" aria-label="Athletic" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Athletic</span><span className="categories__link-counter model-filter-link-count">410</span></a><a href="/girls/medium" aria-label="Medium" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Medium</span><span className="categories__link-counter model-filter-link-count">1326</span></a><a href="/girls/curvy" aria-label="Curvy" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Curvy</span><span className="categories__link-counter model-filter-link-count">778</span></a><a href="/girls/bbw" aria-label="BBW" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">BBW</span><span className="categories__link-counter model-filter-link-count">164</span></a></nav>
                          </div>
                          <div className="tag-group tag-group-hairColor">
                            <div className="group-header">Hair</div>
                            <nav><a href="/girls/blondes" aria-label="Blonde" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Blonde</span><span className="categories__link-counter model-filter-link-count">803</span></a><a href="/girls/black-hair" aria-label="Black" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Black</span><span className="categories__link-counter model-filter-link-count">470</span></a><a href="/girls/brunettes" aria-label="Brunette" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Brunette</span><span className="categories__link-counter model-filter-link-count">2324</span></a><a href="/girls/redheads" aria-label="Redhead" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Redhead</span><span className="categories__link-counter model-filter-link-count">196</span></a><a href="/girls/colorful" aria-label="Colorful" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Colorful</span><span className="categories__link-counter model-filter-link-count">176</span></a></nav>
                          </div>
                          <div className="tag-group tag-group-privatePrice">
                            <div className="group-header">Private Shows</div>
                            <nav><a href="/girls/cheapest-privates" aria-label="8-12 tk" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">8-12 tk</span><span className="categories__link-counter model-filter-link-count">1516</span></a><a href="/girls/cheap-privates" aria-label="16-24 tk" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">16-24 tk</span><span className="categories__link-counter model-filter-link-count">1244</span></a><a href="/girls/middle-priced-privates" aria-label="32-60 tk" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">32-60 tk</span><span className="categories__link-counter model-filter-link-count">1011</span></a><a href="/girls/luxurious-privates" aria-label="90+ tk" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">90+ tk</span><span className="categories__link-counter model-filter-link-count">188</span></a><a href="/girls/recordable-privates" aria-label="Recordable Privates" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Recordable Privates</span><span className="categories__link-counter model-filter-link-count">2593</span></a><a href="/girls/spy" aria-label="Spy on Shows" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Spy on Shows</span><span className="categories__link-counter model-filter-link-count">233</span></a><a href="/girls/cam2cam" aria-label="Video Call (Cam2Cam)" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Video Call (Cam2Cam)</span><span className="categories__link-counter model-filter-link-count">3768</span></a></nav>
                          </div>
                          <div className="tag-group tag-group-allTags">
                            <div className="group-header">Popular</div>
                            <nav>
                              <a href="/girls/interactive-toys" aria-label="Interactive Toy" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">
                                  <svg className="icon icon-interactive-toy-ds">
                                    <use xlinkHref="#icons-interactive-toy-ds" />
                                  </svg>
                                  Interactive Toy
                                </span>
                                <span className="categories__link-counter model-filter-link-count">2346</span>
                              </a>
                              <a href="/girls/mobile" aria-label="Mobile" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">
                                  <svg className="icon icon-mobile">
                                    <use xlinkHref="#icons-mobile" />
                                  </svg>
                                  Mobile
                                </span>
                                <span className="categories__link-counter model-filter-link-count">601</span>
                              </a>
                              <a href="/girls/group-sex" aria-label="Group Sex" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Group Sex</span><span className="categories__link-counter model-filter-link-count">24</span></a><a href="/girls/big-tits" aria-label="Big Tits" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Big Tits</span><span className="categories__link-counter model-filter-link-count">1771</span></a><a href="/girls/hairy" aria-label="Hairy Pussy" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Hairy Pussy</span><span className="categories__link-counter model-filter-link-count">586</span></a><a href="/girls/outdoor" aria-label="Outdoor" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Outdoor</span><span className="categories__link-counter model-filter-link-count">453</span></a>
                              <a href="/girls/anal" aria-label="Anal" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">Anal</span>
                                <svg className="CategoriesGroupsTags__categories__cv-icon#53 CvDetectedIcon__cv-detected-icon#w6 IconV2__icon#YR" style={{height: '20px', width: '20px'}}>
                                  <use xlinkHref="#icons-sparks" />
                                </svg>
                                <span className="categories__link-counter model-filter-link-count">1572</span>
                              </a>
                              <a href="/girls/big-ass" aria-label="Big Ass" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Big Ass</span><span className="categories__link-counter model-filter-link-count">2381</span></a><a href="/girls/squirt" aria-label="Squirt" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Squirt</span><span className="categories__link-counter model-filter-link-count">1734</span></a><a href="/girls/hardcore" aria-label="Hardcore" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Hardcore</span><span className="categories__link-counter model-filter-link-count">94</span></a><a href="/girls/pregnant" aria-label="Pregnant" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Pregnant</span><span className="categories__link-counter model-filter-link-count">14</span></a>
                              <a href="/girls/fuck-machine" aria-label="Fuck Machine" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">Fuck Machine</span>
                                <svg className="CategoriesGroupsTags__categories__cv-icon#53 CvDetectedIcon__cv-detected-icon#w6 IconV2__icon#YR" style={{height: '20px', width: '20px'}}>
                                  <use xlinkHref="#icons-sparks" />
                                </svg>
                                <span className="categories__link-counter model-filter-link-count">256</span>
                              </a>
                              <a href="/girls/lesbians" aria-label="Lesbian" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Lesbian</span><span className="categories__link-counter model-filter-link-count">58</span></a>
                              <a href="/girls/blowjob" aria-label="Blowjob" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">Blowjob</span>
                                <svg className="CategoriesGroupsTags__categories__cv-icon#53 CvDetectedIcon__cv-detected-icon#w6 IconV2__icon#YR" style={{height: '20px', width: '20px'}}>
                                  <use xlinkHref="#icons-sparks" />
                                </svg>
                                <span className="categories__link-counter model-filter-link-count">2582</span>
                              </a>
                              <a href="/girls/small-tits" aria-label="Small Tits" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Small Tits</span><span className="categories__link-counter model-filter-link-count">1220</span></a><a href="/girls/fisting" aria-label="Fisting" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Fisting</span><span className="categories__link-counter model-filter-link-count">420</span></a><a href="/girls/masturbation" aria-label="Masturbation" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Masturbation</span><span className="categories__link-counter model-filter-link-count">478</span></a><a href="/girls/office" aria-label="Office" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Office</span><span className="categories__link-counter model-filter-link-count">627</span></a>
                              <a href="/girls/deepthroat" aria-label="Deepthroat" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">Deepthroat</span>
                                <svg className="CategoriesGroupsTags__categories__cv-icon#53 CvDetectedIcon__cv-detected-icon#w6 IconV2__icon#YR" style={{height: '20px', width: '20px'}}>
                                  <use xlinkHref="#icons-sparks" />
                                </svg>
                                <span className="categories__link-counter model-filter-link-count">2020</span>
                              </a>
                              <a href="/girls/foot-fetish" aria-label="Foot Fetish" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">Foot Fetish</span>
                                <svg className="CategoriesGroupsTags__categories__cv-icon#53 CvDetectedIcon__cv-detected-icon#w6 IconV2__icon#YR" style={{height: '20px', width: '20px'}}>
                                  <use xlinkHref="#icons-sparks" />
                                </svg>
                                <span className="categories__link-counter model-filter-link-count">2142</span>
                              </a>
                              <a href="/girls/shaven" aria-label="Shaven" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Shaven</span><span className="categories__link-counter model-filter-link-count">2027</span></a><a href="/girls/dildo-or-vibrator" aria-label="Dildo or Vibrator" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Dildo or Vibrator</span><span className="categories__link-counter model-filter-link-count">2745</span></a><a href="/girls/jerk-off-instruction" aria-label="Jerk-off Instruction" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Jerk-off Instruction</span><span className="categories__link-counter model-filter-link-count">1299</span></a><a href="/girls/goth" aria-label="Goth" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Goth</span><span className="categories__link-counter model-filter-link-count">143</span></a><a href="/girls/swingers" aria-label="Swingers" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Swingers</span><span className="categories__link-counter model-filter-link-count">81</span></a><a href="/girls/mistresses" aria-label="Mistress" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Mistress</span><span className="categories__link-counter model-filter-link-count">826</span></a><a href="/girls/cuckold" aria-label="Cuckold" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Cuckold</span><span className="categories__link-counter model-filter-link-count">439</span></a><a href="/girls/dirty-talk" aria-label="Dirty Talk" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Dirty Talk</span><span className="categories__link-counter model-filter-link-count">2826</span></a><a href="/girls/sex-toys" aria-label="Sex Toys" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Sex Toys</span><span className="categories__link-counter model-filter-link-count">2482</span></a>
                              <a href="/girls/cosplay" aria-label="Cosplay" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">Cosplay</span>
                                <svg className="CategoriesGroupsTags__categories__cv-icon#53 CvDetectedIcon__cv-detected-icon#w6 IconV2__icon#YR" style={{height: '20px', width: '20px'}}>
                                  <use xlinkHref="#icons-sparks" />
                                </svg>
                                <span className="categories__link-counter model-filter-link-count">522</span>
                              </a>
                              <a href="/girls/asmr" aria-label="ASMR" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">ASMR</span><span className="categories__link-counter model-filter-link-count">130</span></a><a href="/girls/emo" aria-label="Emo" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Emo</span><span className="categories__link-counter model-filter-link-count">96</span></a><a href="/girls/striptease" aria-label="Striptease" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Striptease</span><span className="categories__link-counter model-filter-link-count">2820</span></a><a href="/girls/yoga" aria-label="Yoga" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Yoga</span><span className="categories__link-counter model-filter-link-count">749</span></a>
                              <a href="/girls/video-games" aria-label="Video Games" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">Video Games</span>
                                <svg className="CategoriesGroupsTags__categories__cv-icon#53 CvDetectedIcon__cv-detected-icon#w6 IconV2__icon#YR" style={{height: '20px', width: '20px'}}>
                                  <use xlinkHref="#icons-sparks" />
                                </svg>
                                <span className="categories__link-counter model-filter-link-count">69</span>
                              </a>
                              <a href="/girls/cooking" aria-label="Cooking" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Cooking</span><span className="categories__link-counter model-filter-link-count">471</span></a>
                              <a href="/girls/flirting" aria-label="Flirting" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item">
                                <span className="model-filter-link-badge-first model-filter__link-label">
                                  <svg className="icon icon-candy-ds">
                                    <use xlinkHref="#icons-candy-ds" />
                                  </svg>
                                  Flirting
                                </span>
                                <span className="categories__link-counter model-filter-link-count">23</span>
                              </a>
                              <a href="/girls/interracial" aria-label="Interracial" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Interracial</span><span className="categories__link-counter model-filter-link-count">1</span></a><a href="/girls/tattoos" aria-label="Tattoos" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Tattoos</span><span className="categories__link-counter model-filter-link-count">423</span></a><a href="/girls/lovense" aria-label="Lovense" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Lovense</span><span className="categories__link-counter model-filter-link-count">2345</span></a><a href="/girls/piercings" aria-label="Piercing" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Piercing</span><span className="categories__link-counter model-filter-link-count">314</span></a><a href="/girls/latex" aria-label="Latex" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Latex</span><span className="categories__link-counter model-filter-link-count">448</span></a><a href="/girls/role-play" aria-label="Role Play" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Role Play</span><span className="categories__link-counter model-filter-link-count">1467</span></a><a href="/girls/leather" aria-label="Leather" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Leather</span><span className="categories__link-counter model-filter-link-count">590</span></a><a href="/girls/kiiroo" aria-label="Kiiroo" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Kiiroo</span><span className="categories__link-counter model-filter-link-count">1</span></a><a href="/girls/corset" aria-label="Corset" className="CategoriesGroupsTags__link#W6 model-filter-link tag-group-item"><span className="model-filter-link-badge-first model-filter__link-label">Corset</span><span className="categories__link-counter model-filter-link-count">460</span></a>
                            </nav>
                          </div>
                        </div>
                        <div className="model-filter-show-more-container"><a className="model-filter-show-more" href="/tags/girls">ALL CATEGORIES +</a></div>
                      </div>
                    </div>
                    <div className="categories__bottom-fade" />
                  </div>
                  <ul className="app-sidebar-full-content-links app-sidebar-links">
                    <li className="app-sidebar-links-item"><a href="/api/front/support/login" rel="nofollow" target="_blank">Support &amp; FAQ</a></li>
                    <li className="app-sidebar-links-item"><a rel="nofollow noopener" href="/support/billing">Billing Support</a></li>
                    <li className="app-sidebar-links-item"><a href="/report">Report Content</a></li>
                    <li className="app-sidebar-links-item"><a href="mailto:press@stripchat.com" target="_blank">Media Inquiries</a></li>
                    <li className="app-sidebar-links-item"><a rel="nofollow noopener" href="/privacy">Privacy Policy</a></li>
                    <li className="app-sidebar-links-item"><a rel="nofollow noopener" href="/terms">Terms of Use</a></li>
                    <li className="app-sidebar-links-item"><a href="https://go.rmishe.com/signup/model?userId=7b093f4f244a1d1bdcfdae44769160b182b8a6a066b46574d3d3cfb224974fc8&sourceId=stripchat.global" rel="noopener" target="_blank">Become a Model</a></li>
                    <li className="app-sidebar-links-item"><a href="https://go.rmishe.com/?userId=7b093f4f244a1d1bdcfdae44769160b182b8a6a066b46574d3d3cfb224974fc8&sourceId=stripchat.global&path=/signup/studio" rel="noopener" target="_blank">Studio Signup</a></li>
                    <li className="app-sidebar-links-item"><a rel="nofollow noopener" href="/2257">18 U.S.C. 2257 Record-Keeping Statement</a></li>
                  </ul>
                  <div className="app-sidebar-full-content-lang app-sidebar-lang-select collapse-section collapse-section-collapsed">
                    <button className="a11y-button app-sidebar-lang-select-trigger collapse-section-header collapse-section-header-collapsed" type="button">
                      <svg className="app-sidebar-lang-select-trigger-icon icon icon-i18n" style={{height: '14px', width: '14px'}}>
                        <use xlinkHref="#icons-i18n" />
                      </svg>
                      <span className="app-sidebar-lang-select-trigger-text">English</span>
                      <svg className="collapse-section-icon-close collapse-section-icon-close-collapsed icon icon-close-arrow">
                        <use xlinkHref="#icons-close-arrow" />
                      </svg>
                    </button>
                    <div className="app-sidebar-lang-select-content collapse-section-content collapse-section-content-collapsed" />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-layout-main-right">
              <div className="header-notifications-wrapper header-notifications-wrapper--with-header-top" style={{height: '0px'}}>
                <div className="header-notifications" />
              </div>
              <div className="toast-notifications" />
              <div className="main-layout-main-content">
                <div className="page-wrapper">
                  <div className="index-page index-page-multiple page page-columns">
                    <div className="model-list-wrapper multiple-categories-wrapper">
                      <div className="model-list-container">
                        <div className="model-list-container" style={{display: 'none'}}>
                          <div className="model-list-item" />
                        </div>
                        <div className="media-after-l-hidden">
                          <div className="tokens-giveaway-banner">
                            <div className=" tokens-giveaway-banner-container">
                              <svg className="icon icon-tokens-2 tokens-giveaway-icon">
                                <use xlinkHref="#icons-tokens-2" />
                              </svg>
                              <div className="tokens-giveaway-description">
                                <div className="tokens-giveaway-amount">50</div>
                                <div className="tokens-giveaway-title"><span className><span className="tokens-giveaway-title-part">free tokens</span> <span className="tokens-giveaway-title-part">in giveaway</span></span></div>
                              </div>
                            </div>
                          </div>
                          <div className="tags-inline-badges tags-inline-badges-with-scroll">
                            <div className="scroll-bar-container ps">
                              <div className="tags-inline-badges-container">
                                <button className="btn btn-categories btn-categories_wrap-on-small btn-default btn-inline-block" type="button">
                                  <svg className="icon icon-categories-2">
                                    <use xlinkHref="#icons-categories-2" />
                                  </svg>
                                  <span className="btn-categories__label">Categories</span>
                                  <svg className="icon icon-arrow-down-filled">
                                    <use xlinkHref="#icons-arrow-down-filled" />
                                  </svg>
                                </button>
                                <span className="is-mobile tags-inline-badges__divider tags-inline-badges__divider_categories" /><a href="/girls/german" aria-label="German" className="btn-tags-inline-badge inline-badge inline-badge__button inline-badge__override is-mobile-tag model-filter-link"><span className="country-flag country-flag--medium" style={{backgroundImage: 'url("https://assets.strpst.com/assets/common/components/ui/CountryFlag/images/de.svg")'}} /></a><a href="/girls/ukrainian" aria-label="Ukrainian" className="btn-tags-inline-badge inline-badge inline-badge__button inline-badge__override is-mobile-tag model-filter-link"><span className="country-flag country-flag--medium" style={{backgroundImage: 'url("https://assets.strpst.com/assets/common/components/ui/CountryFlag/images/ua.svg")'}} /></a>
                                <a href="/discover" aria-label="tagGenders.girls.userFeed" className="btn-tags-inline-badge inline-badge inline-badge__button inline-badge__override is-mobile-tag model-filter-link">
                                  <svg className="IconV2__icon#YR Label__icon#ra" style={{height: '16px', width: '16px'}}>
                                    <use xlinkHref="#icons-feed" />
                                  </svg>
                                  <span>Feed</span>
                                </a>
                                <a href="/favorites" aria-label="tagGenders.girls.userFavorites" className="btn-tags-inline-badge inline-badge inline-badge__button inline-badge__override is-mobile-tag model-filter-link">
                                  <svg className="IconV2__icon#YR Label__icon#ra" style={{height: '16px', width: '16px'}}>
                                    <use xlinkHref="#icons-heart-fill" />
                                  </svg>
                                  <span>Favorites</span>
                                </a>
                                <a href="/girls/best" aria-label="Best for Privates" className="btn-tags-inline-badge inline-badge inline-badge__button inline-badge__override is-mobile-tag model-filter-link">
                                  <svg className="IconV2__icon#YR Label__icon#ra" style={{height: '16px', width: '16px'}}>
                                    <use xlinkHref="#icons-locked" />
                                  </svg>
                                  <span>Best for Privates</span>
                                </a>
                                <a href="/girls/bdsm" aria-label="BDSM" className="btn-tags-inline-badge inline-badge inline-badge__button inline-badge__override is-mobile-tag model-filter-link">
                                  <svg className="IconV2__icon#YR Label__icon#ra" style={{height: '16px', width: '16px'}}>
                                    <use xlinkHref="#icons-bunny-mask" />
                                  </svg>
                                  <span>BDSM</span>
                                </a>
                                <a className="btn btn-default btn-inline-block btn-tags-inline-badge btn-tags-inline-badge-show-more" href="/tags/girls">ALL CATEGORIES +</a>
                              </div>
                              <div className="ps__rail-x" style={{left: '0px', bottom: '0px'}}>
                                <div className="ps__thumb-x" tabIndex={0} style={{left: '0px', width: '0px'}} />
                              </div>
                              <div className="ps__rail-y" style={{top: '0px', right: '0px'}}>
                                <div className="ps__thumb-y" tabIndex={0} style={{top: '0px', height: '0px'}} />
                              </div>
                            </div>
                            <div className="tags-inline-badges-shade" />
                          </div>
                        </div>
                        <ModelsGrid/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="sticky-bottom sticky-bottom__with-navbar sticky-bottom__with-navbar-ios-safe-space" />
          <div id="bs-actions-menu-portal-container" />
        </div>
        <footer id="MAIN_FOOTER_ID" className="footer-container#jW">
          <div className="Footer__inner#zr">
            <div className="Footer__row-top#m1 RowTopContainer#yN">
              <div className="RowTopContainer__left#HV">
                <div className="LogoWithLanguageSection#mr">
                  <a aria-current="page" className="LogoWithLanguageSection__logoContainer#EL active" aria-label="Go to Main Page" href="/">
                    <div className="LogoWithLanguageSection__logo#YX monochrome site-logo">
                      <svg>
                        <use xlinkHref="#site_logo_footer" />
                      </svg>
                    </div>
                  </a>
                  <div className="LogoWithLanguageSection__dropdown#bC">
                    <div className="language-dropdown">
                      <label htmlFor="language_dropdown" className="LanguageMenuDropdown__trigger#B1 trigger">
                        <svg style={{height: '14px', width: '14px'}} className="LanguageMenuDropdown__icon#H9 icon icon-i18n">
                          <use xlinkHref="#icons-i18n" />
                        </svg>
                        English
                        <span className="selectbox-arrow">
                          <svg style={{height: '10px', width: '10px'}} className="LanguageMenuDropdown__icon#H9 icon icon-sort">
                            <use xlinkHref="#icons-sort" />
                          </svg>
                        </span>
                        <select id="language_dropdown" className="language-mobile-list">
                          <option value="en" selected>English</option>
                          <option value="de">Deutsch</option>
                          <option value="fr">Français</option>
                          <option value="es">Español</option>
                          <option value="it">Italiano</option>
                          <option value="ru">Русский</option>
                          <option value="pt">Português (EU)</option>
                          <option value="br">Português (BR)</option>
                          <option value="ja">日本語</option>
                          <option value="ko">한국어</option>
                          <option value="nl">Nederlands</option>
                          <option value="pl">Polski</option>
                          <option value="ro">Română</option>
                          <option value="no">Norsk</option>
                          <option value="sv">Svenska</option>
                          <option value="el">Ελληνικά</option>
                          <option value="ar">العربية</option>
                          <option value="hu">Magyar</option>
                          <option value="cs">Čeština</option>
                          <option value="tr">Türkçe</option>
                          <option value="zh">中文</option>
                        </select>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="NavigationsListSection#ND RowTop__left-nav#ev">
                  <div className="BlockContainer#ay NavigationsListSection__item#fU"><span className="BlockTitle#z1">Legal &amp; Safety</span><a className="BlockListItem#fA" rel="nofollow noopener" href="/privacy">Privacy Policy</a><a className="BlockListItem#fA" rel="nofollow noopener" href="/terms">Terms of Use</a><a className="BlockListItem#fA" rel="nofollow noopener" href="/dmca">DMCA Policy</a><a className="BlockListItem#fA" rel="nofollow noopener" href="/cookies-policy">Cookies Policy</a><a className="BlockListItem#fA" rel="nofollow noopener" href="/parental-control">Parental Control Guide</a><a className="BlockListItem#fA" rel="nofollow noopener" href="/eu-research">EU Research Program</a><a className="BlockListItem#fA" rel="nofollow noopener" href="https://www.unseenuk.org/" target="_blank">Anti-Slavery Help</a></div>
                  <div className="BlockContainer#ay NavigationsListSection__item#fU">
                    <span className="BlockTitle#z1">Work with us</span>
                    <li className="BlockListItem#fA"><a href="https://go.rmishe.com/signup/model?userId=7b093f4f244a1d1bdcfdae44769160b182b8a6a066b46574d3d3cfb224974fc8&sourceId=stripchat.global" rel="noopener" target="_blank">Become a Model</a></li>
                    <li className="BlockListItem#fA"><a href="https://go.rmishe.com/?userId=7b093f4f244a1d1bdcfdae44769160b182b8a6a066b46574d3d3cfb224974fc8&sourceId=stripchat.global&path=/signup/studio" rel="noopener" target="_blank">Studio Signup</a></li>
                    <a className="BlockListItem#fA" href="https://stripcash.com/sign-up/?userId=7b093f4f244a1d1bdcfdae44769160b182b8a6a066b46574d3d3cfb224974fc8" rel="nofollow noopener" target="_blank">Affiliate Program</a>
                  </div>
                  <div className="BlockContainer#ay NavigationsListSection__item#fU">
                    <span className="BlockTitle#z1">
                      Help{/* */} &amp; {/* */}Support
                    </span>
                    <div className="BlockListItem#fA"><a href="/api/front/support/login" rel="nofollow" target="_blank">Support &amp; FAQ</a></div>
                    <a className="BlockListItem#fA" rel="nofollow noopener" href="/support/billing">Billing Support</a>
                  </div>
                </div>
                <div className="SeoDescriptionSection#wz">
                  <p>Welcome to Stripchat Global! We're a free online community where you can come and watch our amazing amateur models perform live interactive shows.</p>
                  <p>Stripchat Global is 100% free and access is instant. Browse through hundreds of models from Women, Men, Couples, and Transsexuals performing live sex shows 24/7. Besides watching free live cam shows, you also have the option for Private shows, spying, Cam to Cam, and messaging models.</p>
                  <p>All models appearing on this site have contractually confirmed to us that they are 18 years of age or older.</p>
                </div>
                <div className="RowTop__labels#M0">
                  <div className="LabelSection__label#DR RowTop__labels-item#ck"><img alt="rta-logo" className="LabelSection__logo#ZX LabelSection__logo-rta#YO icon icon-rta-logo icon-static" src="https://assets.strpst.com/assets/common/images/static-icons/rta-logo.png" fetchpriority="low" /></div>
                  <div className="LabelSection__label#DR RowTop__labels-item#ck"><img alt="safe-labeling" className="LabelSection__logo#ZX LabelSection__logo-safe#yd icon icon-safe-labeling icon-static" src="https://assets.strpst.com/assets/common/images/static-icons/safe-labeling.png" fetchpriority="low" /></div>
                  <div className="LabelSection__label#DR RowTop__labels-item#ck"><img alt="asacp" className="LabelSection__logo#ZX LabelSection__logo-asacp#I7 icon icon-asacp icon-static" src="https://assets.strpst.com/assets/common/images/static-icons/asacp.png" fetchpriority="low" /></div>
                  <a aria-label="Go to Pineapple support" href="https://pineapplesupport.org/about-pineapple-support/" className="LabelSection__label#DR LabelSection__label-support#io RowTop__labels-item#ck" rel="nofollow noreferrer noopener" target="_blank"><img alt="pineapple-support" className="LabelSection__logo#ZX LabelSection__logo-support#Ym icon icon-pineapple-support icon-static" src="https://assets.strpst.com/assets/common/images/static-icons/pineapple-support.png" fetchpriority="low" /></a>
                </div>
                <div className="PWAQrCodeSection#m7">
                  <div className="PWAQrCodeSection__qrCode#mj">
                    <div className="PWAQrCodeSection__qrCode#mj qr-code"><img data-qr-link="https://stripchat.global?action=showInstallPwaModal" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MSA0MSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQxdjQxSDB6Ii8+PHBhdGggc3Ryb2tlPSIjMDAwMDAwIiBkPSJNNCA0LjVoN20yIDBoMm01IDBoMW0xIDBoNG0xIDBoMW0yIDBoN000IDUuNWgxbTUgMGgxbTIgMGgybTEgMGgxbTIgMGgybTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTEgMGgxbTUgMGgxTTQgNi41aDFtMSAwaDNtMSAwaDFtMSAwaDFtMSAwaDJtMiAwaDJtMyAwaDRtMSAwaDFtMSAwaDFtMSAwaDNtMSAwaDFNNCA3LjVoMW0xIDBoM20xIDBoMW0xIDBoNW01IDBoMm0yIDBoMW0zIDBoMW0xIDBoM20xIDBoMU00IDguNWgxbTEgMGgzbTEgMGgxbTEgMGgxbTIgMGg2bTMgMGgybTEgMGgxbTIgMGgxbTEgMGgzbTEgMGgxTTQgOS41aDFtNSAwaDFtMSAwaDJtMSAwaDFtMSAwaDJtMiAwaDNtNCAwaDFtMSAwaDFtNSAwaDFNNCAxMC41aDdtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDFtMSAwaDdNMTIgMTEuNWgxbTIgMGgxbTIgMGgxbTEgMGgxbTEgMGg1bTEgMGgxTTQgMTIuNWgxbTEgMGg1bTYgMGgybTIgMGgxbTEgMGgxbTIgMGgxbTMgMGg1TTcgMTMuNWgxbTMgMGgxbTIgMGgxbTEgMGgybTIgMGg2bTEgMGgxbTIgMGgybTEgMGgybTEgMGgxTTQgMTQuNWgxbTEgMGgzbTEgMGgybTMgMGgxbTEgMGgzbTEgMGgxbTMgMGgxbTYgMGgxbTEgMGgyTTQgMTUuNWgxbTIgMGgxbTYgMGg0bTEgMGg0bTEgMGgzbTEgMGgzbTEgMGg1TTcgMTYuNWgybTEgMGgxbTIgMGgxbTEgMGgybTEgMGgzbTIgMGgxbTEgMGgzbTEgMGgxbTIgMGgyTTQgMTcuNWgxbTIgMGgybTMgMGgzbTEgMGgxbTIgMGgxbTIgMGgxbTYgMGgybTQgMGgyTTQgMTguNWgxbTEgMGgybTEgMGgybTEgMGgybTMgMGgxbTEgMGgybTEgMGgxbTIgMGgxbTIgMGg1bTEgMGgyTTcgMTkuNWgxbTEgMGgxbTEgMGgzbTIgMGgybTEgMGgxbTQgMGgybTMgMGgybTEgMGgzTTcgMjAuNWg5bTIgMGg0bTEgMGgxbTIgMGg0bTEgMGgybTMgMGgxTTQgMjEuNWgzbTEgMGgxbTMgMGgxbTEgMGgxbTEgMGgxbTMgMGgxbTEgMGgzbTIgMGgxbTEgMGgzbTEgMGg0TTQgMjIuNWgzbTMgMGgxbTEgMGgzbTMgMGgzbTEgMGgxbTEgMGgzbTEgMGgybTEgMGgybTEgMGgyTTcgMjMuNWgxbTEgMGgxbTIgMGgybTQgMGgxbTQgMGg2bTIgMGg1TTYgMjQuNWgxbTEgMGg3bTQgMGgxbTIgMGgxbTMgMGgxbTEgMGgybTEgMGgzbTEgMGgyTTQgMjUuNWgxbTMgMGgxbTIgMGgxbTEgMGgxbTEgMGgybTIgMGgzbTEgMGgzbTEgMGgxbTIgMGgxbTIgMGgxbTIgMGgxTTQgMjYuNWgxbTEgMGg2bTYgMGgxbTUgMGgybTIgMGgxbTQgMGgxbTEgMGgxTTQgMjcuNWgxbTIgMGgxbTEgMGgxbTIgMGgybTYgMGgxbTEgMGgxbTIgMGgybTIgMGg4TTQgMjguNWgxbTEgMGgxbTEgMGg0bTEgMGgxbTIgMGgxbTQgMGgybTMgMGg4TTEyIDI5LjVoNW0zIDBoMm0xIDBoMm0xIDBoM20zIDBoMW0xIDBoM000IDMwLjVoN20yIDBoMm0yIDBoMW0xIDBoM200IDBoM20xIDBoMW0xIDBoMW0xIDBoMU00IDMxLjVoMW01IDBoMW0xIDBoMm0xIDBoMW0xIDBoMW0xIDBoMW0xIDBoOG0zIDBoM20xIDBoMU00IDMyLjVoMW0xIDBoM20xIDBoMW0xIDBoMm0xIDBoMW0xIDBoNG0yIDBoMW0yIDBoMW0xIDBoNm0xIDBoMk00IDMzLjVoMW0xIDBoM20xIDBoMW0xIDBoMW0yIDBoMW0yIDBoMm0xIDBoNW0yIDBoMm0yIDBoNU00IDM0LjVoMW0xIDBoM20xIDBoMW0xIDBoM20yIDBoNW0zIDBoN20xIDBoMU00IDM1LjVoMW01IDBoMW0yIDBoMW0xIDBoNW00IDBoMm02IDBoM000IDM2LjVoN20xIDBoMm0xIDBoNW0xIDBoMW01IDBoM20xIDBoMW0yIDBoMiIvPjwvc3ZnPgo=" alt="qr code" className="qr-code__image" /></div>
                  </div>
                  <div className="PWAQrCodeSection__textWrapper#uK">
                    <div className="PWAQrCodeSection__title#xz">Get Stripchat Global App</div>
                    <div className="PWAQrCodeSection__description#st">For quick mobile access &amp; notifications, scan the QR code with your phone camera</div>
                  </div>
                </div>
              </div>
              <div className="RowTopContainer__right#rG">
                <div className="NavigationsListSection#ND">
                  <div className="BlockContainer#ay NavigationsListSection__item#fU"><span className="BlockTitle#z1">Legal &amp; Safety</span><a className="BlockListItem#fA" rel="nofollow noopener" href="/privacy">Privacy Policy</a><a className="BlockListItem#fA" rel="nofollow noopener" href="/terms">Terms of Use</a><a className="BlockListItem#fA" rel="nofollow noopener" href="/dmca">DMCA Policy</a><a className="BlockListItem#fA" rel="nofollow noopener" href="/cookies-policy">Cookies Policy</a><a className="BlockListItem#fA" rel="nofollow noopener" href="/parental-control">Parental Control Guide</a><a className="BlockListItem#fA" rel="nofollow noopener" href="/eu-research">EU Research Program</a><a className="BlockListItem#fA" rel="nofollow noopener" href="https://www.unseenuk.org/" target="_blank">Anti-Slavery Help</a></div>
                  <div className="BlockContainer#ay NavigationsListSection__item#fU">
                    <span className="BlockTitle#z1">Work with us</span>
                    <li className="BlockListItem#fA"><a href="https://go.rmishe.com/signup/model?userId=7b093f4f244a1d1bdcfdae44769160b182b8a6a066b46574d3d3cfb224974fc8&sourceId=stripchat.global" rel="noopener" target="_blank">Become a Model</a></li>
                    <li className="BlockListItem#fA"><a href="https://go.rmishe.com/?userId=7b093f4f244a1d1bdcfdae44769160b182b8a6a066b46574d3d3cfb224974fc8&sourceId=stripchat.global&path=/signup/studio" rel="noopener" target="_blank">Studio Signup</a></li>
                    <a className="BlockListItem#fA" href="https://stripcash.com/sign-up/?userId=7b093f4f244a1d1bdcfdae44769160b182b8a6a066b46574d3d3cfb224974fc8" rel="nofollow noopener" target="_blank">Affiliate Program</a>
                  </div>
                  <div className="BlockContainer#ay NavigationsListSection__item#fU">
                    <span className="BlockTitle#z1">
                      Help{/* */} &amp; {/* */}Support
                    </span>
                    <div className="BlockListItem#fA"><a href="/api/front/support/login" rel="nofollow" target="_blank">Support &amp; FAQ</a></div>
                    <a className="BlockListItem#fA" rel="nofollow noopener" href="/support/billing">Billing Support</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="Footer__row-labels#nK RowLabels#QP">
              <div className="RowLabels__labels-container#zh">
                <div className="LabelSection__label#DR"><img alt="rta-logo" className="LabelSection__logo#ZX LabelSection__logo-rta#YO icon icon-rta-logo icon-static" src="https://assets.strpst.com/assets/common/images/static-icons/rta-logo.png" fetchpriority="low" /></div>
                <div className="LabelSection__label#DR"><img alt="safe-labeling" className="LabelSection__logo#ZX LabelSection__logo-safe#yd icon icon-safe-labeling icon-static" src="https://assets.strpst.com/assets/common/images/static-icons/safe-labeling.png" fetchpriority="low" /></div>
                <div className="LabelSection__label#DR"><img alt="asacp" className="LabelSection__logo#ZX LabelSection__logo-asacp#I7 icon icon-asacp icon-static" src="https://assets.strpst.com/assets/common/images/static-icons/asacp.png" fetchpriority="low" /></div>
                <a aria-label="Go to Pineapple support" href="https://pineapplesupport.org/about-pineapple-support/" className="LabelSection__label#DR LabelSection__label-support#io" rel="nofollow noreferrer noopener" target="_blank"><img alt="pineapple-support" className="LabelSection__logo#ZX LabelSection__logo-support#Ym icon icon-pineapple-support icon-static" src="https://assets.strpst.com/assets/common/images/static-icons/pineapple-support.png" fetchpriority="low" /></a>
              </div>
              <div className="RowLabels__statement-container#F3"><a className="RowLabels__statement-link#NX" rel="nofollow" href="/2257">18 U.S.C. 2257 Record-Keeping Requirements Compliance Statement</a><img alt="agreement" className="RowLabels__agreement-icon#sZ icon icon-agreement icon-static" src="https://assets.strpst.com/assets/common/images/static-icons/agreement.png" fetchpriority="low" /></div>
            </div>
            <div className="Footer__row-copyright#WT RowBottom#qj">
              <div className="RowBottom__item#l9">
              </div>
              <div className="RowBottom__address#lY RowBottom__item#l9"><span><span className="not-indexed-company-name" />&nbsp;<span className="not-indexed-company-address" /></span></div>
            </div>
          </div>
          <div className="tooltip-v2-portal-container" id="footer-portal-container" />
        </footer>
      </div>
      <div className="hidden" id="client-render" />
    </div>
    <svg style={{display: 'none'}}>
      <defs id="svgDefs">
        <symbol id="icons-categories-2" viewBox="0 0 14 14">
          <rect width={6} height={6} rx={2} />
          <rect y={8} width={6} height={6} rx={2} />
          <rect x={8} width={6} height={6} rx={2} />
          <rect x={8} y={8} width={6} height={6} rx={2} />
        </symbol>
        <symbol id="icons-bunny-mask" viewBox="0 1 16 16">
          <path fillRule="evenodd" d="M14.831 6.804C16.314 4.237 15.964.998 15.964.998s-3.031 1.287-4.513 3.854c-.478.828-.802 1.795-1.021 2.725A5.685 5.685 0 008 7.048c-.85 0-1.66.175-2.39.51-.219-.923-.682-2.065-1.157-2.888C2.97 2.103.079.998.079.998s-.489 3.057.993 5.624c.562.973 1.538 2.04 2.357 2.763-.716 1.009-1.176 2.52-1.267 4.103a3.187 3.187 0 002.516 3.45c.67.133 1.314.055 1.877-.178a3.77 3.77 0 012.892 0 3.221 3.221 0 001.877.177 3.188 3.188 0 002.516-3.449c-.09-1.57-.544-3.073-1.25-4.08.827-.728 1.674-1.62 2.241-2.604zm-2.926 5.319v.976a1.952 1.952 0 01-1.952 1.952h-.976v-.976c0-1.078.874-1.952 1.952-1.952h.976zm-4.88 1.952v.976h-.976a1.952 1.952 0 01-1.952-1.952v-.976h.976c1.078 0 1.952.874 1.952 1.952z" fill="currentColor" />
        </symbol>
        <symbol id="icons-home" viewBox="0 0 16 16">
          <defs />
          <path fill="currentColor" d="M15.669 7.93L8.399.665a.564.564 0 00-.798 0L.331 7.93a1.13 1.13 0 00.798 1.929h.767v5.183c0 .313.252.565.564.565h3.281v-5.083h4.236v5.083h3.563a.564.564 0 00.565-.565V9.86h.766a1.13 1.13 0 00.798-1.929z" />
        </symbol>
        <symbol id="icons-badge-vr-ds" viewBox="0 0 25 20">
          <rect width={25} height={20} fill="#477DD2" rx={4} />
          <path fill="#F8F8F8" d="m9.1 14.3 2.8-8.6H10l-2 6-1.9-6H4.2L7 14.3H9Zm5.7-4.7V7.2h2c.5 0 .8 0 1 .3.2.2.3.5.3.9s0 .7-.3.9c-.2.2-.5.3-1 .3h-2Zm-2-3.9v8.6h2v-3.4h1.8c.5 0 .9.1 1 .3.3.3.4.6.5 1v1.1l.3 1h1.9l-.3-.4a5.7 5.7 0 0 1 0-1.2 32 32 0 0 0-.2-1 2 2 0 0 0-.2-.7 1.5 1.5 0 0 0-1-.7 2 2 0 0 0 1-1c.3-.3.4-.7.4-1.2a2.3 2.3 0 0 0-1.5-2.2l-1-.2h-4.6Z" />
        </symbol>
        <symbol id="icons-best-models" viewBox="0 0 100 100">
          <path fill="currentColor" d="M50.8.5l3.2 10c.1.3.4.6.7.6h10.4c.8 0 1.1 1 .4 1.5l-8.4 6.2c-.3.1-.4.6-.3 1l3.2 10c.3.7-.6 1.4-1.3 1l-8.4-6.2c-.3-.1-.7-.1-1 0L41 30.8c-.7.4-1.5-.1-1.3-1l3.2-10c.1-.3 0-.7-.3-1l-8.4-6.2c-.7-.4-.3-1.5.4-1.5H45c.3 0 .7-.3.7-.6l3.7-10c.2-.7 1.3-.7 1.4 0zm34 19.3l3.2 10c.1.3.4.6.7.6h10.4c.8 0 1.1 1 .4 1.5l-8.4 6.2c-.3.1-.4.6-.3 1l3.2 10c.3.7-.6 1.4-1.3 1l-8.4-6.2c-.3-.1-.7-.1-1 0L75 50c-.7.4-1.5-.1-1.3-1L77 39c.1-.3 0-.7-.3-1l-8.4-6.2c-.7-.4-.3-1.5.4-1.5h10.4c.3 0 .7-.3.7-.6l3.2-10c.4-.6 1.6-.6 1.8.1zm-67.8 0l3.2 10c.1.3.4.6.7.6h10.4c.8 0 1.1 1 .4 1.5l-8.4 6.2c-.3.1-.4.6-.3 1l3.2 10c.3.7-.6 1.4-1.3 1l-8.4-6.2c-.3-.1-.7-.1-1 0L7.1 50c-.7.4-1.5-.1-1.3-1L9 39c.1-.3 0-.7-.3-1L.3 31.8c-.7-.4-.3-1.5.4-1.5h10.4c.3 0 .7-.3.7-.6l3.2-10c.7-.6 1.8-.6 2 .1zm8.9 79.7H6.5C5.1 99.5 4 98.4 4 97V69c0-1.4 1.1-2.5 2.5-2.5h19.4c1.4 0 2.5 1.1 2.5 2.5v28c.1 1.4-1 2.5-2.5 2.5zm33.9 0H40.4c-1.4 0-2.5-1.1-2.5-2.5V51.8c0-1.4 1.1-2.5 2.5-2.5h19.4c1.4 0 2.5 1.1 2.5 2.5V97c.1 1.4-1.1 2.5-2.5 2.5zm33.9 0H74.3c-1.4 0-2.5-1.1-2.5-2.5V69c0-1.4 1.1-2.5 2.5-2.5h19.4c1.4 0 2.5 1.1 2.5 2.5v28c0 1.4-1.1 2.5-2.5 2.5z" />
        </symbol>
        <symbol id="icons-feed" viewBox="0 0 20 20">
          <path clipRule="evenodd" d="m17.2727 1c.7233 0 1.417.31607 1.9285.87868s.7988 1.32567.7988 2.12132v2h-2v10c0 .7956-.2873 1.5587-.7988 2.1213s-1.2052.8787-1.9285.8787h-12.54543c-.72332 0-1.41701-.3161-1.92847-.8787-.511463-.5626-.7988-1.3257-.7988-2.1213v-2h14v2c0 .5523.4477 1 1 1s1-.4477 1-1v-4h-14v-8c0-.79565.28734-1.55871.7988-2.12132s1.20515-.87868 1.92847-.87868zm-7.27487 3.60679s-.79783-1.10679-1.99783-1.10679c-.8 0-2 .82081-2 2.41864 0 1.68538 4.0056 4.69246 4.0056 4.69246s3.9944-3.00708 3.9944-4.70312c0-1.58717-1.2-2.40798-2-2.40798-1.2 0-2.00217 1.10679-2.00217 1.10679z" fill="currentColor" fillRule="evenodd" />
        </symbol>
        <symbol id="icons-mobile" viewBox="0 0 10 16">
          <path fill="currentColor" d="M0 14.756V1.244C0 .557.627 0 1.4 0h7.2c.773 0 1.4.557 1.4 1.244v13.512C10 15.443 9.373 16 8.6 16H1.4C.627 16 0 15.443 0 14.756zM1 13h8V2H1v11zm5 1.5c0-.276-.448-.5-1-.5s-1 .224-1 .5.448.5 1 .5 1-.224 1-.5z" />
        </symbol>
        <symbol id="icons-lightning" viewBox="0 0 100 100">
          <path fill="currentColor" stroke="null" d="M83.3 37.2a2 2 0 0 0-1.7-1H55.9v-32c0-1.9 0-3.6-2-3.6a2 2 0 0 0-1.6 1L16.7 60.8a2 2 0 0 0 1.7 3h25.7v33.6a2 2 0 0 0 3.6 1l35.6-59.2a2 2 0 0 0 0-2z" />
        </symbol>
        <symbol id="icons-chevron-right" viewBox="0 0 8 13">
          <path d="M1 1.2a1 1 0 011.4 0L7 5.77A1 1 0 017 7.2l-4.6 4.6A1 1 0 111 10.36l3.87-3.89L1 2.6a1 1 0 010-1.4z" fill="currentColor" />
        </symbol>
        <symbol id="icons-ticket" viewBox="0 0 26 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.54 7.07l-3.47 2a2 2 0 00-.73 2.73l2 3.47a2 2 0 012 3.46l2 3.47a2 2 0 002.73.73l3.47-2-.5-.87 1.73-1 .5.87 8.66-5a2 2 0 00.73-2.73l-2-3.47a2 2 0 01-2-3.46l-2-3.47a2 2 0 00-2.73-.73l-8.66 5 .5.87-1.73 1-.5-.87zm5.23 5.06l-1.73 1 1 1.74 1.73-1-1-1.74zM7.04 9.67l1.73-1 1 1.73-1.73 1-1-1.73zm4 6.93l1.73-1 1 1.73-1.73 1-1-1.73z" fill="currentColor" />
        </symbol>
        <symbol id="icons-arrow-down-filled" viewBox="0 0 8 4">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.666748 0.666687L4.00008 4.00002L7.33341 0.666687H0.666748Z" />
        </symbol>
        <symbol id="icons-dot" viewBox="0 0 100 100">
          <path d="M.2 49.95C.2 22.617 22.467.5 49.984.5c27.505 0 49.784 22.117 49.784 49.45S77.489 99.4 49.984 99.4C22.467 99.4.2 77.283.2 49.95z" />
        </symbol>
        <symbol id="icons-heart-fill" viewBox="0 0 17 15">
          <path d="M4.5 0.800049C6.9 0.800049 8.49567 2.95751 8.49567 2.95751C8.49567 2.95751 10.1 0.800049 12.5 0.800049C14.1 0.800049 16.5 2.40005 16.5 5.49395C16.5 8.80005 8.51125 14.6618 8.51125 14.6618C8.51125 14.6618 0.5 8.80005 0.5 5.51472C0.5 2.40005 2.9 0.800049 4.5 0.800049Z" fill="currentColor" />
        </symbol>
        <symbol id="icons-award-hall-of-fame-by-year" viewBox="0 0 28 28">
          <path d="M2.927 15.1L.754 7.733c-.243-.826.602-1.553 1.382-1.19l4.267 1.992a1 1 0 0 0 1.214-.294l5.592-7.22a1 1 0 0 1 1.582 0l5.592 7.22a1 1 0 0 0 1.214.294l4.267-1.991c.78-.364 1.625.363 1.381 1.189L25.073 15.1H26.6a1.4 1.4 0 0 1 1.4 1.402v10.103a1.403 1.403 0 0 1-1.554 1.386 1.399 1.399 0 0 1-.714-.293l-10.864-4.382a1.4 1.4 0 0 0-1.736 0L2.268 27.698A1.399 1.399 0 0 1 0 26.605V16.502A1.403 1.403 0 0 1 1.4 15.1h1.527z" fill="currentColor" />
        </symbol>
        <symbol id="icons-search-3" viewBox="0 0 16 16">
          <path fill="currentColor" d="M5.75 9.8A4.045 4.045 0 011.7 5.75 4.045 4.045 0 015.75 1.7 4.045 4.045 0 019.8 5.75 4.045 4.045 0 015.75 9.8zm5.4 0h-.711l-.252-.243A5.824 5.824 0 0011.6 5.75a5.85 5.85 0 10-5.85 5.85 5.824 5.824 0 003.807-1.413l.243.252v.711l4.5 4.491 1.341-1.341z" />
        </symbol>
        <symbol id="icons-candy-ds" viewBox="0 0 16 16">
          <g clipPath="url(#a)">
            <path fill="#fff" d="M6.555 8.688.422 14.821a.533.533 0 0 0 0 .755l.003.002a.533.533 0 0 0 .754 0l6.133-6.133-.757-.757ZM10.438 5.507c-.1.058-.205.108-.313.149a2.722 2.722 0 0 0-.322-1.104A2.788 2.788 0 0 0 6.8 3.117 2.803 2.803 0 0 0 4.536 5.72a5.602 5.602 0 0 1 1.638-3.813c.034-.035.069-.067.104-.099a2.81 2.81 0 0 1 1.341-.672h.003a2.801 2.801 0 0 1 2.816 4.37Z" />
            <path fill="#fff" d="M12.934 3.067a2.8 2.8 0 0 1-2.8 2.8 1.81 1.81 0 0 0 .152-.169 2.799 2.799 0 0 0-2.528-4.583h-.003a2.8 2.8 0 0 0-1.477.693c.285-.274.6-.516.938-.72a5.524 5.524 0 0 1 2.45-.8 4.553 4.553 0 0 1 .614-.019 2.802 2.802 0 0 1 2.654 2.798Z" />
            <path fill="#fff" d="M14.803 4.669v.003a.016.016 0 0 0-.003.01c-.016.05-.032.102-.05.15-.02.048-.038.1-.06.152-.026.058-.053.12-.082.178-.027.048-.05.094-.08.142a2.556 2.556 0 0 1-.312.429 2.8 2.8 0 0 1-2.304.947c-.066-.006-.13-.014-.197-.022h-.003a2.795 2.795 0 0 1-1.579-.792A2.8 2.8 0 0 0 10.28.27c1.435.035 2.8.621 3.813 1.637.035.035.067.07.099.104.65.721.88 1.727.61 2.659Z" />
            <path fill="#fff" d="M15.733 5.867c0 .048 0 .098-.002.146a2.8 2.8 0 0 1-5.598-.146c.427.427.981.705 1.58.792h.002a2.8 2.8 0 0 0 2.477-4.648 5.568 5.568 0 0 1 1.541 3.856Z" />
            <path fill="#fff" d="M15.73 6.013a5.573 5.573 0 0 1-1.74 3.912c-.654.59-1.547.84-2.411.672h-.003a2.801 2.801 0 0 1-1.84-4.232c.156.08.319.146.486.2a2.802 2.802 0 0 0 5.509-.552Z" />
            <path fill="#fff" d="M11.71 10.618A2.798 2.798 0 0 1 9.18 6.034c.051-.018.102-.037.155-.053l.093-.024c.119.11.247.208.384.293a2.803 2.803 0 0 0 1.896 4.368Z" />
            <path fill="#fff" d="M13.99 9.925a5.568 5.568 0 0 1-3.857 1.541c-.047 0-.098 0-.146-.002a1.425 1.425 0 0 1-.187-.019 2.798 2.798 0 0 1-.618-5.41 2.798 2.798 0 0 0 2.527 4.583h.003a2.8 2.8 0 0 0 2.277-.693Z" />
            <path fill="#fff" d="M9.987 11.464a5.574 5.574 0 0 1-3.09-1.027l-.003-.002a2.8 2.8 0 0 1 2.17-4.568c.053.052.108.102.166.149-.054.019-.107.04-.158.061a2.8 2.8 0 0 0 .915 5.386Z" />
            <path fill="#F5F5F5" d="M9.803 4.552a2.73 2.73 0 0 1-.344.816 2.71 2.71 0 0 0-.483-.2A2.802 2.802 0 0 0 5.16 3.293c.264-.512.606-.98 1.014-1.387.034-.034.069-.066.104-.098a2.81 2.81 0 0 1 1.341-.672h.003a2.804 2.804 0 0 1 2.18 3.416Z" />
            <path fill="#F5F5F5" d="M10.133 5.866c0 .236.03.47.089.699a2.68 2.68 0 0 1-.992-.55 2.141 2.141 0 0 1-.166-.149 2.8 2.8 0 0 0-2.17 4.568 5.503 5.503 0 0 1-.72-.608c-.035-.034-.067-.07-.099-.104a2.803 2.803 0 0 1 1.544-4.626 2.853 2.853 0 0 1 1.357.072c.167.05.329.118.483.2a2.73 2.73 0 0 0 .344-.816c.185.34.295.717.322 1.104.108-.041.213-.091.313-.15a2.786 2.786 0 0 1-.305.36Z" />
            <path fill="#F5F5F5" d="M10.208 6.512a.31.31 0 0 0 .016.054h-.002c-.006-.02-.008-.035-.014-.054ZM13.024 5.867a2.805 2.805 0 0 1-1.445.77 2.795 2.795 0 0 1-1.446-.77 2.8 2.8 0 0 0 2.171-4.568c.257.182.498.385.72.608.035.034.067.07.099.104a2.8 2.8 0 0 1-.099 3.856ZM14.037 8.44a5.493 5.493 0 0 1-1.117 1.485 2.81 2.81 0 0 1-1.341.672h-.003a2.807 2.807 0 0 1-2.184-3.416 2.796 2.796 0 0 0 3.005 1.435c.177.033.357.05.536.05.38.001.756-.076 1.104-.226Z" />
            <path fill="#fff" d="M9.963 4.904c-.079.205-.183.4-.31.579a2.804 2.804 0 0 0-1.899-.408h-.002a2.8 2.8 0 0 0-1.677 4.648 5.61 5.61 0 0 1-1.541-3.856c0-.048 0-.099.002-.147a2.8 2.8 0 0 1 5.427-.816ZM10.133 5.867a2.972 2.972 0 0 0-.095-.091l.093-.024c.002.037.002.077.002.115Z" />
            <path fill="#fff" d="M12.133 3.067a2.795 2.795 0 0 1-1.847 2.632 2.798 2.798 0 0 0-2.528-4.584h-.003a3.038 3.038 0 0 0-.539-.027 5.524 5.524 0 0 1 2.45-.8 2.796 2.796 0 0 1 2.467 2.779ZM9.43 5.957l-.094.024c-.002-.037-.002-.077-.002-.114.032.032.063.061.095.09ZM14.933 5.866c0 .048 0 .099-.002.147a2.8 2.8 0 0 1-2.395 2.624 2.792 2.792 0 0 1-2.312-2.072.45.45 0 0 1-.027-.112 2.631 2.631 0 0 1-.063-.587c.393.395.897.664 1.445.77a2.916 2.916 0 0 1-.373.046c.169.008.338 0 .506-.024h.003c.064.01.13.016.197.021a2.8 2.8 0 0 0 2.616-1.376c.03-.045.056-.092.08-.141.03-.059.056-.12.083-.179a3.348 3.348 0 0 0 .112-.312c.087.393.13.793.13 1.195Z" />
            <path fill="#fff" d="M10.197 6.453c.003.02.006.04.011.059l-.013-.059h.002ZM11.712 10.618h-.003a2.799 2.799 0 0 1-2.527-4.583 2.798 2.798 0 0 0 .618 5.41 5.523 5.523 0 0 0 2.45-.8l-.538-.027ZM9.272 5.28a2.804 2.804 0 0 0-1.517-.205h-.003a2.803 2.803 0 0 0-3.088 1.989 5.489 5.489 0 0 1-.13-1.197c0-.048 0-.099.002-.147a2.8 2.8 0 0 1 2.395-2.624A2.8 2.8 0 0 1 9.272 5.28Z" />
            <path fill="#262626" d="M15.996 5.848a5.845 5.845 0 0 0-1.504-3.897 3.08 3.08 0 0 0-.21-.233 5.836 5.836 0 0 0-3.819-1.7 3.06 3.06 0 0 0-.33-.018c-.006 0-.01.003-.017.003a5.847 5.847 0 0 0-3.898 1.505c-.08.066-.158.136-.233.21a5.835 5.835 0 0 0-1.7 3.818c-.011.11-.018.22-.018.33 0 .007.003.012.004.019a5.852 5.852 0 0 0 1.19 3.52L.233 14.631a.803.803 0 0 0 1.135 1.135l5.228-5.229a5.837 5.837 0 0 0 3.208 1.177c.11.012.22.018.33.018.006 0 .011-.003.017-.004a5.847 5.847 0 0 0 3.898-1.504c.08-.066.158-.136.233-.21a5.835 5.835 0 0 0 1.7-3.818c.011-.11.018-.22.018-.33 0-.007-.003-.012-.004-.019Zm-.545.294a2.531 2.531 0 0 1-4.973.337 3.06 3.06 0 0 0 4.69-2.353c.222.647.318 1.331.283 2.015Zm-1.546 3.497a2.532 2.532 0 0 1-3.96-3.096 3.06 3.06 0 0 0 4.982 1.648 5.308 5.308 0 0 1-1.022 1.447Zm-4.047 1.546a2.531 2.531 0 0 1-.337-4.973 3.06 3.06 0 0 0 2.354 4.69 5.357 5.357 0 0 1-2.017.282v.001ZM6.362 9.64c-.062-.062-.116-.129-.174-.193a2.532 2.532 0 0 1 3.269-3.768 3.06 3.06 0 0 0-1.649 4.983 5.294 5.294 0 0 1-1.446-1.023Zm0-7.543a2.532 2.532 0 0 1 3.96 3.094A3.06 3.06 0 0 0 5.34 3.542a5.31 5.31 0 0 1 1.022-1.447v.001Zm3.772-1.56c.091 0 .183.008.274.013a2.531 2.531 0 0 1 .339 4.973A3.06 3.06 0 0 0 8.392.832a5.361 5.361 0 0 1 1.742-.296Zm3.944 1.752a2.532 2.532 0 0 1-3.268 3.768 3.06 3.06 0 0 0 1.649-4.983 5.297 5.297 0 0 1 1.446 1.022c.062.062.115.129.174.193ZM4.816 5.592a2.531 2.531 0 0 1 4.973-.337 3.06 3.06 0 0 0-4.69 2.353 5.355 5.355 0 0 1-.283-2.016ZM.99 15.39a.267.267 0 0 1-.38-.003.267.267 0 0 1 0-.378l5.194-5.194c.057.068.116.136.18.2.064.063.134.12.2.18L.991 15.39Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </symbol>
        <symbol id="icons-menu" viewBox="0 0 100 100">
          <path fill="currentColor" stroke="null" d="M.658 44.518h98.684v10.964H.658V44.518zm0 32.894h98.684v10.965H.658V77.412zm0-65.789h98.684v10.965H.658V11.623z" fillRule="evenodd" />
        </symbol>
        <symbol id="icons-close-3" viewBox="0 0 100 100">
          <path fill="currentColor" d="M95.497 82.93l-32.7-32.7 32.7-32.701a8.992 8.992 0 0 0 0-12.745 8.992 8.992 0 0 0-12.744 0l-32.701 32.7-32.701-32.7a8.992 8.992 0 0 0-12.745 0 8.992 8.992 0 0 0 0 12.745l32.7 32.7-32.7 32.702a8.992 8.992 0 0 0 0 12.744 8.992 8.992 0 0 0 12.745 0l32.7-32.7 32.702 32.7a8.992 8.992 0 0 0 12.744 0c3.506-3.53 3.506-9.239 0-12.744z" />
        </symbol>
        <symbol id="icons-chevron-down" viewBox="0 0 10 8">
          <path opacity=".6" clipRule="evenodd" d="M1.41.795L5 4.375 8.59.795 10 2.205l-5 5-5-5L1.41.795z" />
        </symbol>
        <symbol id="icons-medal-1" viewBox="0 0 77 100">
          <g stroke="null" fillRule="evenodd" fill="none">
            <path opacity=".3" fill="#000" d="M61.6 69.3v30.8L38.5 88.55 15.4 100.1V69.3a38.5 38.5 0 1146.2 0z" />
            <path opacity=".3" fill="#000" d="M3.85 42.35a34.65 34.65 0 1169.3 0 34.65 34.65 0 01-69.3 0z" />
            <path fill="#FA4D5C" d="M19.25 38.5h38.5v57.75L39.44 84.7 19.25 96.25z" />
            <path fill="#C73540" d="M57.75 71.17V42.35h-38.5v28.82A34.5 34.5 0 0038.5 77a34.5 34.5 0 0019.25-5.83z" />
            <path fill="#FFD54F" d="M3.85 38.5a34.65 34.65 0 1169.3 0 34.65 34.65 0 01-69.3 0z" />
            <path fill="#F2A601" d="M11.55 38.5A26.97 26.97 0 0138.5 11.55 26.97 26.97 0 0165.45 38.5 26.97 26.97 0 0138.5 65.45 26.97 26.97 0 0111.55 38.5z" />
            <path fill="#F28E02" d="M57.75 21.13a25.99 25.99 0 00-20.17-9.58 26.05 26.05 0 00-26.03 26.03 26 26 0 009.58 20.17 25.92 25.92 0 01-5.86-16.45A26.05 26.05 0 0141.3 15.27a25.92 25.92 0 0116.45 5.86z" />
            <path fill="#F28E02" d="M38.5 26.95l2.63-3.83 3.47 2.2v30.8l-4.67.04-3.95-2.29z" />
            <path fill="#FFE17A" d="M35.91 23.1h5.16v30.79h-5.16z" />
            <path fill="#FFE17A" d="M35.91 23.1h5.16v30.79h-5.16z" />
          </g>
        </symbol>
        <symbol id="icons-group-ds" viewBox="0 0 32 32">
          <path fill="currentColor" d="M19.42 17.095c2.51 0 4.567 2.057 4.567 4.577v3.233c0 .737-.597 1.334-1.333 1.334H9.336a1.333 1.333 0 0 1-1.333-1.334v-3.233c0-2.52 2.057-4.578 4.567-4.578h6.85ZM28 15.953c2.2 0 3.847 1.83 4.001 3.908v2.761c0 .736-.597 1.333-1.333 1.333H26.29v-2.283c0-2.263-1.131-4.28-2.839-5.534.36-.103.72-.185 1.121-.185H28Zm-20.572 0c.4 0 .771.072 1.131.185a6.86 6.86 0 0 0-2.839 5.534v2.283H1.333A1.333 1.333 0 0 1 0 22.622v-2.678a4.012 4.012 0 0 1 4.001-3.991h3.426Zm22.3-4.567a3.446 3.446 0 0 1-3.425 3.425 3.446 3.446 0 0 1-3.436-3.425 3.446 3.446 0 0 1 3.436-3.436 3.446 3.446 0 0 1 3.425 3.436Zm-20.572 0a3.446 3.446 0 0 1-3.426 3.425 3.446 3.446 0 0 1-3.435-3.425A3.446 3.446 0 0 1 5.729 7.95a3.446 3.446 0 0 1 3.426 3.436Zm6.85-5.72a4.583 4.583 0 0 1 4.567 4.568c0 2.52-2.057 4.577-4.567 4.577a4.588 4.588 0 0 1-4.577-4.577c0-2.51 2.057-4.567 4.577-4.567Z" />
        </symbol>
        <symbol id="icons-locked" viewBox="0 0 100 100">
          <g fill="currentColor" stroke="null">
            <path d="M91.7 73.3a25.3 25.3 0 0 0-13.4-37.6A30 30 0 0 1 80.2 46c0 15-11 27.6-26.3 32.7 8 6.9 19.4 8.1 28.7 3A76.4 76.4 0 0 0 98.8 84c.4-.4-2-4-7.1-10.7z" />
            <path d="M39.4 15c20.3 0 36.9 14 36.9 31.1 0 17.2-16.6 31.1-37 31.1-6.2 0-12.4-1.4-18.1-4.1a217 217 0 0 1-20 7.6c-.4-.4 2.1-6 7.6-17.1-4-5-6.3-11.1-6.3-17.5 0-17.1 16.5-31 36.9-31zM21.7 34.2a12.6 12.6 0 0 0 0 17.7l16.6 15.7c.3.3.7.5 1 .5.5 0 .8-.2 1.1-.5L57.1 52a12.5 12.5 0 0 0 0-17.6c-2.2-2.2-5-3.2-7.8-3.2-3.6 0-7.1 1.5-9.8 4.1-2.7-2.3-5.9-4.6-9-4.6-3.2 0-6.4 1.2-8.8 3.6z" />
          </g>
        </symbol>
        <symbol id="icons-menu-mobile" viewBox="0 0 100 100">
          <g fill="currentColor" fillRule="evenodd" stroke="null">
            <circle cx={50} cy="11.5" r="9.6" />
            <circle cx={50} cy={50} r="9.6" />
            <circle cx={50} cy="88.5" r="9.6" />
          </g>
        </symbol>
        <symbol id="icons-sort" viewBox="0 0 10 5">
          <path fill="currentColor" d="m10 0-5 5-5-5z" />
        </symbol>
        <symbol id="icons-medal-3" viewBox="0 0 77 100">
          <g stroke="null" fillRule="evenodd" fill="none">
            <path opacity=".3" fill="#000" d="M61.6 69.3v30.8L38.5 88.55 15.4 100.1V69.3a38.5 38.5 0 1146.2 0z" />
            <path opacity=".3" fill="#000" d="M3.85 42.35a34.65 34.65 0 1169.3 0 34.65 34.65 0 01-69.3 0z" />
            <path d="M19.25 38.5h38.5v57.75L39.44 84.7 19.25 96.25" fill="#FA4D5C" />
            <path fill="#C73540" d="M57.75 71.17V42.35h-38.5v28.82C24.75 74.85 31.38 77 38.5 77s13.74-2.15 19.25-5.83z" />
            <path fill="#E6AA88" d="M3.85 38.5a34.65 34.65 0 1169.3 0 34.65 34.65 0 01-69.3 0z" />
            <path fill="#A8573F" d="M11.55 38.5A26.97 26.97 0 0138.5 11.55 26.97 26.97 0 0165.45 38.5 26.97 26.97 0 0138.5 65.45 26.97 26.97 0 0111.55 38.5z" />
            <path fill="#9B4730" d="M59.38 21.47a26.91 26.91 0 00-20.88-9.92A26.97 26.97 0 0011.55 38.5a26.9 26.9 0 009.92 20.88 26.83 26.83 0 01-6.07-17.03 26.97 26.97 0 0143.98-20.88z" />
            <path d="M38.41 26.93l2.63-3.83 3.47 2.2v30.8l-4.67.04-3.95-2.27" fill="#9B4730" />
            <path d="M35.91 23.1h5.16v30.8h-5.16" fill="#F3C5AE" />
            <path d="M26.86 26.93l2.63-3.83 3.47 2.2v30.8l-4.67.04-3.95-2.27" fill="#9B4730" />
            <path d="M24.36 23.1h5.16v30.8h-5.16" fill="#F3C5AE" />
            <path d="M49.97 26.93l2.62-3.83 3.47 2.2v30.8l-4.67.04-3.95-2.27" fill="#9B4730" />
            <path d="M47.46 23.1h5.16v30.8h-5.16" fill="#F3C5AE" />
          </g>
        </symbol>
        <symbol id="icons-sparks" viewBox="0 0 16 16">
          <path fill="currentColor" d="m13 5.3.5-1.1 1.2-.6c.2 0 .2-.4 0-.6l-1.2-.5-.5-1.2a.3.3 0 0 0-.6 0l-.6 1.2-1.1.5c-.3.1-.3.5 0 .6l1.1.6.6 1.1c0 .3.5.3.6 0Zm-5.3 1L6.7 4a.7.7 0 0 0-1.3 0l-1 2.3-2.4 1c-.5.3-.5 1 0 1.3l2.3 1 1 2.4c.3.5 1 .5 1.3 0l1-2.3 2.4-1c.5-.3.5-1 0-1.3l-2.3-1Zm4.7 4.4-.6 1.1-1.1.6c-.3 0-.3.4 0 .6l1.1.5.6 1.2c0 .2.4.2.6 0l.5-1.2 1.2-.5c.2-.1.2-.5 0-.6l-1.2-.6-.5-1.1a.3.3 0 0 0-.6 0Z" />
        </symbol>
        <symbol id="icons-i18n" viewBox="0 0 100 100">
          <path d="m50 2c-26.7 0-48 21.7-48 48s21.4 48 48 48c26.4 0 48-21.4 48-48 0-26.3-21.7-48-48-48zm-9.3 17.3 2.2.7v-3l.8-1 1 2 1.8 2-.8 1-3 .7v-1.7l-2 1.7-.8-1 .7-1.4zm-34.5 29.7c.2-9.3 3.3-17.8 8.5-24.8h.3c0 .8-1 1 0 2.6 1.2 2 .2 3 .2 3l-3.2 2.6c-.5.2-2 2-1 1.6.8-.6 1.8-1 1 .2-1 1.3-2.4 3.4-2.8 4.3-.2.8-2 2.8-2 3.8s-.6 3-.4 4c0 .3-.3 2-.6 2.7zm17 27.6-.6 2.5.6 2s-1 1-1.6 1-.8.3-1.4 0c-6.4-5.8-11-13.5-13-22 .2 0 .5 0 1 .4.6.6 1 1 1.8 1.2 1 .3 1.2 1 2 1.3 1 .4.8 0 2 1.6 1.5 1.4 1.3 1.4 1.6 2.3l1 2 2 1c.4.4 1.3.8 1.8.8s2 1.4 2.8 1.6.8 2 .8 2l-.8 2.2zm6.6-63.6c-2 2.2-1.7 1.5-2 2.2-.6.7-.4.8-1.7 1.6-1 1-1.5 1.8-1.5 1.8l-1.8.7-1.5-.7s-1.3.5-1-.2v-.4c4-4 8.8-6.8 14-9-.4.8-1 1.5-1 1.5s-1.2 0-3.4 2.4zm50.2 59c0 .8-.4 2-.5 2.6-.2.7-1 2-1.5 2.3-.5.2-1.3 1.3-1.8 1.5s-1-1.2-.7-1.8l1-2.5.3-1.7c.2-.6 2-1.4 2-1.4l1.4-2.4.2 1c0 .5 0 2-.3 2.5zm.7-15.4-1.7 2.4c-.6.8-1.3 1.7-2.2 2.6-1 1-1 1.6-1.5 2.3-.5.6-1 2-1 2s.2 3.3.4 4c0 .6-1.2 2.4-1.2 2.4l-1.5 1.7-2 2.6.2 2.5-2.3 2c-1 .5-.7 1-1.4 1.7s-2.4 1.8-3 2l-3.5.7v-1.5l-1-1.7s-.8-2-1.3-2.7c-.5-.6-.5-1.6-1.4-2.5-.8-.7-1.2-1.3-1.4-2-.3-.4 0-2 0-2l1-2.4c.2-.7 0-1.6-.4-2.3-.3-.7-.5-2.3-.5-2.8 0-.4-1.3-1.3-1.7-1.8-.5-.5-.3-1-.3-1.8s-.5-2.2-.3-3.4c.2-1-1.4-.3-2.5 0-1 .3-1.6-.3-1.6-1.3s-2-.2-3 .5c-1.2.6-2.5.6-3.8 1-1.4.6-2-.4-2-.4s-1.2-1-2-1.4c-1-.5-1.7-1.4-2.4-2.3-.6-1-2.3-3.3-2.5-4.3-.3-1 0-1.7 0-2.8v-2.6c.3-1 .8-2 1.3-2.8s2.3-1.8 2.8-2c.5-.4 1.7-1.4 1.7-2 0-.8.7-1 1-1.7.2-.7 1.5-2.3 3-1.7l1.7-.2 2.5-1c.6-.3 2.2-.5 2.2-.5s1.4.6 2 .6l2-.3s.7 2.4.7 3 .4.8 1.3 1.2c.8.3 4.6 1.2 6.2-.2.4-.3 1.6.5 1.6.5s4.3 1 5 1.4c.6.4 1.8.8 2 1.3.3.5 1.5 2 1.7 2.5s1 2.3 1 3c.3.6.8 2.3 1.3 3 .5 1 3.2 4.5 4.3 6.3l3-.5c0-.2-.3 1.3-.6 1.8zm12-6.2-1.2-3s-1-1.3-1.6-1.6c-.8-.3-1.2-1.2-2.4-1.8-1-.7-1.6-1-2.6-1s-2-1.4-3.2-2c-1-.7-1.3-.3-1.3-.3s1.3 2 1.3 2.5 1.5 1.3 3 1c0 0 1 1.8 1.5 2.2.4.5-.2 1-1.2 1.7s-.8.6-1.2 1c-.5.5-2 1.4-2.7 1.7-.3.3-2.3 1.3-3.3.3-.5-.5-.4-1.5-.6-2.2-.2-.6-3.8-5.7-5.4-8-.3-.4-1-1.6-1.5-2-.3-.3 1.3-.3 1.3-.3s0-1.2-.2-2c0-1 .3-2 .3-2l-2 1.3c-.6.3-1-.7-1.7-1.4-.7-1-1.4-2-1.5-2.7 0-1 1-1.2 1-1.2l1.4-.8s1.8-.3 3-.2l3 .3s.4-1.2-.2-1.7c-.7-.4-2-1.2-2.8-1-.7.2.3-1 1-1.5l-1.7-.3s-1.6 1-2.2 1c-.5.2-1.3.5-2 1.4-.7.8.3 2-.4 2.3-.6 0-1 .3-1.5.5s-2 0-2 0c-1.8 0-.6 1.6-.2 2l-1.9-1.6-1-2.3-2-1.3c-1-.4-3-1.4-3-1.4v1.4l2 2h.2l1 1.2-2 .2v-1.3c-3.2-.5-1.6-1-1.8-1.2l-1.8-1-2.5.4c-.5.2-.7.7-1.6 1-1 .3-1.5 1-2 1.3 0 .5-1.3 2-2 2.7-.5.7-1.8.5-2.3.5l-2.8-.7v-2.7s.2-1.6 0-2.2l1.6-.2 2.4-.5.7-.6 1-1.3s-1-.8-.3-2c.4-.5 1.8-.6 2.5-1 .7-.6 1.6-1 1.6-1l2.4-2 2-1s2.6 2.5 3 2.5 2.4-1 2.4-1 .5-1.5.3-2c0-.6-.8-2.2-.8-2.2l-1 1.4-1 1.5s-2.2-.2-2.2-.7-.4-1.4-.6-1.8c-.2-.5-1.5-.5-2.5-.2s.2-2 .2-2 .8-1 1.5-1 2-1 2.8-1.2c.7 0 2.7-1.4 3.4-1.4 1 0 2-.3 2.3-.3h2.5l3.7.6s3 1.3 2 2c0 0 1 1 1.6 1.3.5.5 1.6-.3 2.3-.7 12.5 7.6 20.7 21.5 20.7 37v2.6c-.4-.8-1-1.8-1-2.2z" />
        </symbol>
        <symbol id="icons-ticket-ds" viewBox="0 0 16 16">
          <path fill="currentColor" fillRule="evenodd" d="m3.41 4.964-2.136 1.23a1.23 1.23 0 0 0-.45 1.68l1.231 2.136a1.23 1.23 0 0 1 1.231 2.129l1.23 2.135a1.23 1.23 0 0 0 1.68.45l2.136-1.231-.307-.536 1.064-.615.308.535 5.33-3.076a1.23 1.23 0 0 0 .448-1.68l-1.23-2.136a1.23 1.23 0 0 1-1.231-2.129l-1.231-2.135a1.23 1.23 0 0 0-1.68-.45l-5.33 3.077.309.536-1.065.615-.308-.535Zm3.218 3.114-1.065.615.615 1.07 1.065-.615-.615-1.07ZM4.332 6.564l1.065-.616.615 1.065-1.064.615-.616-1.064Zm2.462 4.264 1.064-.615.616 1.065-1.065.615-.615-1.065Z" clipRule="evenodd" />
        </symbol>
        <symbol id="icons-close-arrow" viewBox="0 0 12 8">
          <path d="M6 0L0 6l1.41 1.41L6 2.83l4.59 4.58L12 6z" opacity=".8" />
        </symbol>
        <symbol id="icons-watch-history" viewBox="0 0 100 100">
          <g fill="currentColor" stroke="null">
            <path d="M23.5 50.5v-.2a33.7 33.7 0 1 1 67.2 0c0 9.6-4.4 18.6-10.3 24.4A33.3 33.3 0 0 1 57.3 84c-13.8 0-23.4-9.8-23.4-9.8L27.7 80s6.3 5.6 11.4 8c5 2.4 6.6 3.8 17.8 4 9.6.3 18.5-4 24.4-8a38.6 38.6 0 0 0 17.6-33.6c0-7.1-1.4-21.1-15-32.7A40.3 40.3 0 0 0 56 7.9a41.8 41.8 0 0 0-27.6 11C14.2 31.2 14.8 50.3 14.8 50.3v.1H1.2l18.6 19.2 19.1-19.2H23.5z" />
            <path d="M53 32.7V55l20 12 3.4-4.6-16.8-10.2V32.7z" />
          </g>
        </symbol>
        <symbol id="icons-filter" viewBox="0 0 16 16">
          <path d="M12.1667 8.83333C14.0076 8.83333 15.5 10.3257 15.5 12.1667C15.5 14.0076 14.0076 15.5 12.1667 15.5C10.6137 15.5 9.30877 14.438 8.93851 13.0006L1.33329 13.0001C0.873068 13 0.5 12.6269 0.5 12.1667C0.5 11.7065 0.873118 11.3333 1.33338 11.3334L8.9383 11.3335C9.30826 9.89574 10.6134 8.83333 12.1667 8.83333ZM12.1667 10.5C11.2462 10.5 10.5 11.2462 10.5 12.1667C10.5 13.0871 11.2462 13.8333 12.1667 13.8333C13.0871 13.8333 13.8333 13.0871 13.8333 12.1667C13.8333 11.2462 13.0871 10.5 12.1667 10.5ZM3.83333 0.5C5.38661 0.5 6.69174 1.56241 7.0617 3.0002L14.6666 3.00002C15.1269 3.00001 15.5 3.37312 15.5 3.83337C15.5 4.2936 15.1269 4.66669 14.6667 4.66673L7.06149 4.6673C6.69123 6.10467 5.3863 7.16667 3.83333 7.16667C1.99238 7.16667 0.5 5.67428 0.5 3.83333C0.5 1.99238 1.99238 0.5 3.83333 0.5ZM3.83333 2.16667C2.91286 2.16667 2.16667 2.91286 2.16667 3.83333C2.16667 4.75381 2.91286 5.5 3.83333 5.5C4.75381 5.5 5.5 4.75381 5.5 3.83333C5.5 2.91286 4.75381 2.16667 3.83333 2.16667Z" fill="currentColor" />
        </symbol>
        <symbol id="icons-recommended" viewBox="0 0 100 100">
          <path stroke="null" d="M4.5 94.5H19a4 4 0 0 0 4-4V42.3a4 4 0 0 0-4-4H4.5a4 4 0 0 0-4 4v48.2a4 4 0 0 0 4 4zm95-49.5c0-5-4-9-9-9H65.8a3 3 0 0 1-3-3.7s7.5-18.5 7.5-20.9c0-2.4-1-4-2.9-4.4l-6-1.3c-1.7-.4-3 0-3.8.8L30.2 34.1a9 9 0 0 0-2.7 6.4V91c0 2 1.6 3.5 3.4 3.5h46c3.7 0 6.3-2.6 8.3-5.6l12.5-16.4c.7-1 1.7-3.2 1.7-5.1V45z" fill="currentColor" />
        </symbol>
        <symbol id="icons-favorited" viewBox="0 0 100 100">
          <path fill="currentColor" d="M69.02 9.97c-7.42 0-14.14 3-19.04 7.84C45.08 13 38.34 10 30.9 10c-14.97.04-27.1 12.2-27.1 27.2.03 34.46 46.27 52.83 46.27 52.83s46.2-18.48 46.14-52.95c0-15-12.16-27.13-27.16-27.1z" />
        </symbol>
        <symbol id="icons-close-2" viewBox="0 0 100 100">
          <path fill="currentColor" d="M64 50l35-35c1.3-1.3 1.3-3.5 0-4.8L89.8 1C88.5-.3 86.3-.3 85 1L50 35.9 15.1 1c-1.3-1.3-3.5-1.3-4.9 0L1 10.2C-.3 11.5-.3 13.7 1 15l35 35L1 84.9c-1.3 1.3-1.3 3.5 0 4.8l9.2 9.2c1.3 1.3 3.5 1.3 4.9 0L50 64l34.9 35c1.3 1.3 3.5 1.3 4.8 0l9.2-9.2c1.3-1.3 1.3-3.5 0-4.8L64 50z" />
        </symbol>
        <symbol id="icons-interactive-toy-ds" viewBox="0 0 16 16">
          <path fill="currentColor" d="M14.17 1.933c.63.59.055 2.304-.627 2.971l-8.165 7.99a.18.18 0 0 1-.24 0l-2.232-2.183a.17.17 0 0 1 .001-.235l8.165-7.989c.682-.667 2.469-1.144 3.098-.554Z" />
          <path fill="currentColor" d="m2.38 11.243 2.233 2.185a.168.168 0 0 1-.004.237L3.52 14.733a.182.182 0 0 1-.242.004l-2.232-2.184a.167.167 0 0 1 .004-.238l1.088-1.067a.182.182 0 0 1 .243-.005ZM7.463 1.076a.611.611 0 0 1-.451.65S4.806 1.969 3.39 3.29c-1.415 1.32-1.61 3.658-1.61 3.658a.611.611 0 0 1-.67.448l-.026-.003c-.298-.041-.482-.299-.398-.586 0 0 .069-2.487 1.878-4.258C4.375.78 6.877.683 6.877.683c.287-.074.55.11.586.393Z" />
          <path fill="currentColor" d="M7.387 3.292a.497.497 0 0 1 .57.422c.035.276-.166.528-.455.577 0 0-1.297-.11-2.289.841-.992.951-.873 2.118-.873 2.118a.516.516 0 0 1-.587.435l-.025-.004c-.283-.038-.482-.288-.434-.56 0 0-.054-1.512 1.18-2.696 1.234-1.184 2.913-1.133 2.913-1.133ZM8.537 14.925a.611.611 0 0 1 .451-.65s2.206-.244 3.621-1.565c1.415-1.32 1.61-3.658 1.61-3.658a.611.611 0 0 1 .67-.448l.026.003c.299.041.482.299.398.586 0 0-.069 2.487-1.878 4.258-1.81 1.77-3.878 1.887-4.312 1.866a.462.462 0 0 1-.586-.393ZM8.166 11.958c-.03-.277.175-.526.465-.57 0 0 1.295.133 2.303-.802 1.009-.934.911-2.102.911-2.102a.517.517 0 0 1 .595-.425l.025.004c.282.043.477.297.423.568 0 0 .028 1.512-1.227 2.675-1.255 1.163-2.933 1.083-2.933 1.083a.496.496 0 0 1-.562-.431Z" />
        </symbol>
        <symbol id="icons-tokens-2" viewBox="0 0 32 27">
          <rect width="100%" height="100%" fill="none" />
          <path fill="currentColor" d="M11.16.57c-2.78 0-5.3.5-7.23 1.4C2.13 2.8.76 4.04.6 5.63L.57 17.37v3.76c0 1.73 1.45 3.08 3.36 3.97 1.92.89 4.45 1.4 7.23 1.4 2.57 0 4.91-.44 6.77-1.21 1.08.38 2.25.58 3.48.58 5.46 0 9.9-4.11 9.9-9.17 0-4.95-4.26-9-9.56-9.16v-1.9h-.02c-.17-1.6-1.55-2.84-3.34-3.67a17.54 17.54 0 00-7.23-1.4zm0 1.9c2.5 0 4.76.48 6.3 1.2 1.55.71 2.24 1.57 2.24 2.28S19 7.52 17.47 8.23c-1.54.72-3.8 1.2-6.31 1.2-2.5 0-4.76-.48-6.3-1.2-1.05-.59-2.14-1.32-2.23-2.37.06-.7.74-1.5 2.22-2.2 1.55-.71 3.8-1.2 6.31-1.2zM2.63 9.2c.4.27.84.52 1.3.73 1.92.89 4.45 1.4 7.23 1.4.8 0 1.58-.05 2.34-.13a9.05 9.05 0 00-1.24 1.98 15.63 15.63 0 01-7.4-1.16c-1.5-.69-2.19-1.51-2.23-2.2V9.2zm18.78.23c4.35 0 7.85 3.24 7.85 7.27 0 4.03-3.5 7.28-7.85 7.28s-7.86-3.25-7.86-7.28 3.5-7.27 7.86-7.27zM2.63 12.98c.4.27.84.52 1.3.74 1.92.88 4.45 1.4 7.23 1.4l.5-.01a8.51 8.51 0 00-.16 1.6l.01.3h-.35c-2.5 0-4.76-.47-6.3-1.19-1.52-.7-2.2-1.53-2.23-2.23v-.6zm0 3.8c.4.27.84.51 1.32.73a17.5 17.5 0 007.84 1.4c.17.65.43 1.26.75 1.85-.45.04-.91.05-1.38.05-2.5 0-4.76-.48-6.3-1.2-1.54-.7-2.23-1.55-2.24-2.26v-.58zm0 3.79c.4.27.83.52 1.3.74 1.92.89 4.45 1.4 7.23 1.4.9 0 1.78-.06 2.62-.17a9.7 9.7 0 001.76 1.54c-1.28.33-2.78.53-4.38.53-2.5 0-4.76-.48-6.3-1.2-1.55-.71-2.24-1.57-2.24-2.28v-.56z" />
        </symbol>
        <symbol id="icons-next" viewBox="0 0 100 100">
          <path d="M90.836 54.056c-.492.502-37.398 43.35-37.446 43.407a5.788 5.788 0 0 1-5.97-9.964l32.4-37.525L47.41 12.51a5.788 5.788 0 0 1 5.97-9.973c.048 0 36.954 42.876 37.446 43.407a5.788 5.788 0 0 1 .01 8.112z" />
          <path d="M53.814 54.056c-.492.502-37.398 43.35-37.446 43.407a5.788 5.788 0 0 1-5.97-10.012l32.41-37.473-32.42-37.456a5.788 5.788 0 0 1 5.94-9.963c.05 0 36.955 42.877 37.447 43.407a5.71 5.71 0 0 1 .04 8.093z" />
        </symbol>
        <symbol id="icons-settings" viewBox="0 0 20 20">
          <path d="M17.71 10c0-.34-.02-.66-.07-.97l2.17-1.65a.5.5 0 00.13-.64l-2.06-3.47a.53.53 0 00-.63-.22l-2.56 1a7.59 7.59 0 00-1.73-.97L12.57.41a.51.51 0 00-.51-.42H7.94a.5.5 0 00-.5.42l-.38 2.65a7.77 7.77 0 00-1.74.98l-2.56-1a.52.52 0 00-.63.23L.07 6.73a.48.48 0 00.13.63l2.18 1.65a6.05 6.05 0 00-.02 1.96L.2 12.62a.5.5 0 00-.13.64l2.06 3.47a.53.53 0 00.63.22l2.56-1c.54.4 1.1.73 1.73.98l.39 2.65c.05.25.26.42.51.42h4.12c.25 0 .47-.17.5-.42l.38-2.65a7.8 7.8 0 001.74-.98l2.56 1c.23.09.5 0 .63-.22l2.06-3.47a.48.48 0 00-.13-.63l-2.15-1.66c.04-.3.06-.63.06-.97zM10 13.75A3.82 3.82 0 016.14 10 3.82 3.82 0 0110 6.25 3.82 3.82 0 0113.86 10 3.82 3.82 0 0110 13.75z" />
        </symbol>
        <symbol id="icons-volume-off" viewBox="0 0 100 100">
          <path d="M70.1 29.9l-5.5 5.5c2.9 2.9 4.7 6.4 4.7 10.7 0 4.3-1.8 7.8-4.7 10.7l5.5 5.5c4.1-4.1 6.9-9.7 6.9-16.2-.1-6.4-2.9-12.1-6.9-16.2zm16.4-16.4l-5.4 5.4c7 7 11.2 16.4 11.2 27.3s-4.2 20.3-11.2 27.3l5.4 5.4c8.4-8.4 13.5-19.8 13.5-32.7s-5.1-24.4-13.5-32.7zM51.9 0c-1.2 0-2.7.4-3.5 1.2L20.8 25.7c-.8.8-2.3 1.2-3.5 1.2H1.9c-1.2 0-1.9.8-1.9 1.9v34.6c0 1.2.8 1.9 1.9 1.9h15.4c1.2 0 2.7.4 3.5 1.2l27.6 24.2c.8.8 2.3 1.2 3.5 1.2s1.9-.8 1.9-1.9V1.6c0-.8-.7-1.6-1.9-1.6z" />
        </symbol>
        <symbol id="icons-lightning-2" viewBox="0 0 8 16">
          <path fill="currentColor" d="M7.949 6.816a.441.441 0 00-.393-.256H4.57l1.194-5.164a.492.492 0 00-.248-.554.427.427 0 00-.549.166L.078 8.688a.513.513 0 00-.027.495.442.442 0 00.394.257H3.03l-.803 5.201a.488.488 0 00.272.524c.055.024.111.035.167.035a.436.436 0 00.366-.208l4.889-7.68a.513.513 0 00.027-.496z" />
        </symbol>
        <symbol id="icons-next-small" viewBox="0 0 100 100">
          <path d="m28.66 8.85 8.78-7.32 40.54 48.67-40.92 48.24-8.72-7.4 34.7-40.9" />
        </symbol>
        <symbol id="icons-badge-off" viewBox="0 0 26 14">
          <g fill="none" fillRule="evenodd">
            <rect fill="#202020" height={14} rx={2} width={26} />
            <path d="M6.82 10.1a3.26 3.26 0 10.01-6.5 3.27 3.27 0 00-2.4 5.56c.63.63 1.43.95 2.39.95zm.01-1.27c-.55 0-1-.2-1.36-.58s-.54-.85-.54-1.4c0-.56.17-1.03.53-1.4s.8-.58 1.36-.58 1 .2 1.36.58.54.85.54 1.4c0 .56-.17 1.03-.53 1.4s-.8.58-1.36.58zM12.8 10V7.56h3V6.3h-3V4.96h3.41V3.7h-4.8V10zm5.9 0V7.56h3.01V6.3h-3V4.96h3.4V3.7h-4.79V10z" fill="#f8f8f8" fillRule="nonzero" />
          </g>
        </symbol>
        <symbol id="icons-fullscreen-on" viewBox="0 0 100 100">
          <path d="M0 0v39h11V11h28V0H11zm11 61H0v39h39V89H11zm78 28H61v11h39V61H89zm0-89H61v11h28v28h11V0z" />
          <path d="M0 0v39h11V11h28V0H11zm11 61H0v39h39V89H11zm78 28H61v11h39V61H89zm0-89H61v11h28v28h11V0z" />
        </symbol>
        <symbol id="icons-king" viewBox="0 0 16 12">
          <path d="M15.84 3.445a.275.275 0 00-.328.054l-3.45 3.545L8.249.136a.307.307 0 00-.108-.1.293.293 0 00-.39.1L3.94 7.044.49 3.5a.275.275 0 00-.332-.057.292.292 0 00-.126.13.31.31 0 00-.027.183l1.142 7.991c.01.072.045.136.097.183.053.047.12.072.189.071h13.137a.278.278 0 00.188-.071.302.302 0 00.098-.183l1.142-7.99a.31.31 0 00-.03-.182.292.292 0 00-.127-.129z" />
        </symbol>
        <symbol id="icons-badge-hd-red" viewBox="0 0 20 14">
          <g fill="none" fillRule="evenodd">
            <rect width={20} height={14} fill="#FF0010" rx={2} />
            <path fill="#F8F8F8" fillRule="nonzero" d="M5.142 10V7.471h2.556V10h1.386V3.7H7.698v2.493H5.142V3.7H3.756V10h1.386zm7.911 0c.978 0 1.78-.3 2.407-.9.627-.6.941-1.35.941-2.25 0-.906-.312-1.657-.936-2.254-.624-.598-1.428-.896-2.412-.896h-2.457V10h2.457zm0-1.251h-1.071V4.951h1.071c.564 0 1.021.177 1.372.531.351.354.527.81.527 1.368 0 .564-.174 1.022-.522 1.373-.348.35-.807.526-1.377.526z" />
          </g>
        </symbol>
        <symbol id="icons-stripchat-logo" viewBox="0 0 320 292.2">
          <path fill="currentColor" d="M172.84 172.81l60.99-63.94c.39-.4.68-1.17.58-1.65l-.1-3.21c0-.68-.58-1.26-1.36-1.26l-149.88.1a1.3 1.3 0 00-1.27 1.26l-.1 3.1c0 .5.3 1.27.69 1.66l60.5 63.45c.68.78 1.66 1.75 2.25 2.43a10.16 10.16 0 012.93 6.9s0 53.74.1 76.68c0 3.98-4.01 5.44-5.97 5.24a191.52 191.52 0 01-18.2-2.81s-1.87-.3-2.16-.4c-5.48-1.45-11.06 0-15.08 1.95-3.91 1.94-2.25 1.07-2.25 1.07a237.35 237.35 0 01-20.75 8.94c-19.77 7.38-41.21 12.73-62.75 16.13 1.96-2.82 3.72-5.54 5.29-8.16 4.3-7 9.88-17 16.35-29.16 0 0 5.28-9.23 7.44-14.09 2.15-4.76-.3-9.33-3.33-12.24-3.04-2.92-9.2-9.52-9.2-9.52C15.13 192.34 3 164.06 3 134.33 3 63.78 72.2 4.5 159.63 4.5s156.62 59.28 156.62 129.83c0 66.66-61.77 123.31-142.43 129.34a5.31 5.31 0 01-5.38-5.54c-.2-22.84-.5-75.8-.5-75.8.1-2.91.89-5.15 2.35-6.8.2-.3 2.06-2.23 2.55-2.72z" />
        </symbol>
        <symbol id="icons-user-tab" viewBox="0 0 100 100">
          <path fill="currentColor" stroke="null" d="M92.6 77.4c-5.4-4.6-24.4-12.2-24.4-12.2s-12.1-6-6-12.2c2.4-2.4 3.9-6.9 4.7-11.7 1.4 0 3.3-3 4.3-7.2 1.1-4.3.8-8.1-.6-8.5-.7-.2-1.6.5-2.4 1.8v-4.8c0-6-6-18.2-18.2-18.2S31.8 16.6 31.8 22.6v4.8c-.8-1.3-1.7-2-2.4-1.8-1.4.4-1.7 4.2-.6 8.5 1 4.1 2.9 7.2 4.3 7.2.9 4.8 2.3 9.3 4.8 11.7 6 6.1-6.1 12.2-6.1 12.2s-19 7.6-24.3 12.2C2 81.9 1.4 95.6 1.4 95.6h97.2s-.7-13.7-6-18.2z" />
        </symbol>
        <symbol id="icons-send-ds" viewBox="0 0 24 24">
          <path fill="currentColor" d="m21.8 11-15-6.2a.8.8 0 0 0-.8 0 .9.9 0 0 0-.4.8v4a.8.8 0 0 0 .6.8l8.2 1.5a.1.1 0 0 1 .1.2l-8.3 1.6a.8.8 0 0 0-.6.8v4a.8.8 0 0 0 .8.8h.3l15-6.2a1.1 1.1 0 0 0 0-2.1Z" />
        </symbol>
        <symbol id="icons-emoji-ds" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.2 5.8a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm-6.4 0a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm7.8 6.8a6 6 0 0 1-9.2 0c-.6-.6.4-1.4 1-.8a4.7 4.7 0 0 0 7.2 0c.6-.6 1.6.2 1 .8Z" />
        </symbol>
        <symbol id="icons-chevron-down-2" viewBox="0 0 100 100">
          <path d="M90 21l10 10.2-50 50L0 31l10-10 40 39.7" />
        </symbol>
        <symbol id="icons-xhamster-original" viewBox="0 0 16 15">
          <path d="M12.48.28c1.08 0 1.43 1.36 1.43 2.22a5.38 5.38 0 01-.33 1.8c-.05.14-.07.29-.08.44a.68.68 0 00.1.34c.15.2.33.37.54.5.59.42 1.07.7 1.45 1.57.1.26.16.54.15.82 0 .47-.18.86-.42 1.35a11.13 11.13 0 01-2.37 2.97c-1.43 1.25-3.22 2.13-4.78 2.22a4.26 4.26 0 01-.17.01 4.26 4.26 0 01-.17 0c-1.56-.1-3.35-.98-4.78-2.23A11.15 11.15 0 01.68 9.32a3.02 3.02 0 01-.42-1.35 2.01 2.01 0 01.15-.82C.8 6.28 1.27 6 1.86 5.57c.2-.12.4-.3.54-.49a.68.68 0 00.1-.34 1.42 1.42 0 00-.08-.45 5.38 5.38 0 01-.33-1.79c0-.86.35-2.22 1.43-2.22.14 0 .3.02.43.07.25.1.46.25.63.45.21.24.84 1.18 1.06 1.27l.05.01a.29.29 0 00.08-.01c1.45-.5 3.02-.5 4.46 0a.29.29 0 00.08.01h.05c.22-.1.85-1.04 1.06-1.28.17-.2.38-.35.63-.45.14-.05.29-.07.43-.07zM12.34 0c-.2 0-.41.03-.6.1a2 2 0 00-.82.57 7.1 7.1 0 00-.34.43c-.11.16-.32.44-.46.6a7.17 7.17 0 00-2.11-.33h-.02a7.17 7.17 0 00-2.11.33 12.57 12.57 0 01-.46-.6L5.08.68A1.98 1.98 0 004.26.1a1.77 1.77 0 00-.6-.1c-.42 0-.84.17-1.14.47-.56.56-.75 1.5-.75 2.2 0 .64.12 1.27.34 1.88.03.09.05.17.05.27a.14.14 0 01-.02.07 1.5 1.5 0 01-.32.28l-.07.05-.14.1C1.08 5.7.58 6.06.19 6.95a2.44 2.44 0 00-.19 1c.03.54.19 1.06.45 1.53a11.35 11.35 0 002.42 3.04A8.86 8.86 0 008 14.8h.02a5.61 5.61 0 00.19 0c1.55-.1 3.4-.95 4.93-2.28.8-.7 1.88-1.96 2.42-3.04.27-.47.42-.99.45-1.53a2.44 2.44 0 00-.19-1c-.4-.9-.89-1.25-1.42-1.63l-.14-.1-.07-.05a1.51 1.51 0 01-.32-.27.15.15 0 01-.02-.08.95.95 0 01.05-.27 5.68 5.68 0 00.34-1.89c0-.69-.2-1.63-.75-2.19A1.59 1.59 0 0012.34 0zm2.6 7.48a2.63 2.63 0 00-.95-1.2.65.65 0 00-.42-.15c-.34.05-.53.52-.66.78.1.1.2.16.28.26.58.63.5 1.42.14 2.18-.49 1-1.44 2-2.28 2.73.6-1.4.37-3.18-1.06-3.99-.14 2.03-4.1 1.73-3.98 0-1.43.8-1.65 2.6-1.06 3.99a9.34 9.34 0 01-2.28-2.73c-.35-.76-.44-1.55.14-2.18.09-.1.19-.17.28-.26-.13-.26-.32-.73-.66-.78a.65.65 0 00-.42.15 2.63 2.63 0 00-.96 1.2 1.24 1.24 0 00.01.84c.24.66.99 1.72 1.59 2.44a8.55 8.55 0 002.23 1.95c.86.51 2.1 1.02 3.12 1.05a7.15 7.15 0 003.12-1.05 8.55 8.55 0 002.23-1.95c.6-.72 1.35-1.78 1.59-2.44.1-.27.1-.57 0-.84zm-6.92 5.26H8c-1.05 0-1.98-1-2.57-2.36.64-.01.66.07 1.24.24.16.06.33.08.5.07a.7.7 0 00.63-.38c.03-.05.07-.05.2-.05h.04c.12 0 .17 0 .2.05a.7.7 0 00.63.38c.17 0 .34-.01.5-.07.57-.17.6-.25 1.24-.24-.6 1.35-1.52 2.37-2.58 2.36zm.13-1.95c.02 0 .02-.02 0 0 .32.2.7.3 1.09.25a6.93 6.93 0 01-.38 1.1.38.38 0 01-.11.14.82.82 0 01-.28.12 1.58 1.58 0 01-.32.08v-1.7zm1.44-5.1c-.07-.09-.12-.2-.16-.3-.13-.4-.09-.88.2-1.13.35-.3.97-.23 1.32-.02.43.26.71.7.75 1.2a.7.7 0 01-.15.52.41.41 0 01-.28.13.88.88 0 00-.04-1.1.83.83 0 00-.63-.34c-.6-.02-1 .46-1 1.05zm3.07-1.03a4.04 4.04 0 01-1-1 1.04 1.04 0 01.16-1.29c.2-.24.71-.57 1.04-.37.37.22.33 1.01.25 1.38a3.79 3.79 0 01-.22.69 8.44 8.44 0 00-.23.59zm-4.8 6.13c-.03 0-.03-.02 0 0-.33.2-.71.3-1.1.25.1.38.23.75.38 1.1.03.06.06.1.1.14a.82.82 0 00.29.12c.1.04.21.06.32.08v-1.7zM6.4 5.69c.07-.09.13-.2.16-.3.14-.4.09-.88-.2-1.13-.35-.3-.97-.23-1.32-.02-.43.26-.7.7-.75 1.2a.7.7 0 00.15.52.41.41 0 00.28.13.88.88 0 01.04-1.1c.15-.2.38-.32.63-.34.61-.02 1.01.46 1.01 1.05zM3.35 4.67c.38-.28.72-.62.98-1 .26-.41.2-.94-.15-1.28-.2-.25-.71-.58-1.04-.38-.37.23-.33 1.01-.25 1.38.05.23.12.46.22.69.08.17.16.37.24.59zM8 2.27h.03c.52 0 1.04.08 1.54.22a.45.45 0 01.26.16c.02.05.02.1 0 .14a2.9 2.9 0 01-.47.44c-.55.45-.9.8-1.1 1.53-.09.37-.07.76.05 1.12.19.59.61.94.81 1.47.12.25.13.53.03.8-.18.38-.73.44-1.1.45h-.1c-.37 0-.92-.07-1.1-.46a1.03 1.03 0 01.02-.8c.2-.53.63-.87.82-1.46.12-.36.14-.75.04-1.12-.19-.72-.54-1.08-1.1-1.53a2.9 2.9 0 01-.46-.44.15.15 0 010-.14.45.45 0 01.27-.16 5.91 5.91 0 011.53-.22H8z" />
        </symbol>
        <symbol id="icons-diamond" viewBox="0 0 32 28">
          <path fill="currentColor" d="M16 28L0 12 6 0h20l6 12zm11.133-16.79L23.528 4H8.472l-3.605 7.21L16 22.343zm-11.142 5.494l-6.257-6.279L10.943 8h3.55l1.498 2.505L17.49 8h3.55l1.21 2.425z" />
        </symbol>
        <symbol id="icons-amazon-square" viewBox="0 0 100 100">
          <path stroke="null" d="M80.34 67.27c-.76-.93-7.08-1.7-11 1.09-.6.38-.55.98.16.87 2.18-.28 7.08-.82 7.9.27.87 1.09-.93 5.72-1.74 7.8-.27.6.27.86.82.37 3.65-3.05 4.57-9.48 3.81-10.35l.05-.05zm-6.59 3.97a49.48 49.48 0 01-23 6c-11 0-21.63-3.82-30.24-10.14-.7-.54-1.3.44-.65 1.1a40.05 40.05 0 0030.19 14.54c8.33 0 17.98-3.27 24.68-9.53 1.1-1.04.16-2.56-.98-1.97zM55.39 36.1c-4.96.55-11.5.93-16.19 3-5.45 2.3-9.2 7.09-9.2 14.06 0 8.94 5.66 13.4 12.9 13.4 6.16 0 9.49-1.46 14.23-6.26 1.58 2.29 2.07 3.38 4.9 5.72a1.9 1.9 0 002.13-.16l6.54-5.72c.76-.55.6-1.48.05-2.3-1.58-2.17-3.27-3.92-3.27-7.95v-13.4c0-5.73.44-10.9-3.81-14.83-3.27-3.21-8.72-4.3-12.92-4.3-8.17 0-17.38 3.05-19.29 13.19-.21 1.09.55 1.63 1.31 1.8l8.34.92c.76-.05 1.36-.82 1.47-1.63.7-3.44 3.65-5.13 6.92-5.13 1.8 0 3.82.66 4.9 2.18 1.15 1.8.99 4.25.99 6.27v1.15zm43.7-14.65v57.22a20.43 20.43 0 01-20.44 20.43H21.44A20.43 20.43 0 011 78.65V21.44A20.43 20.43 0 0121.43 1h57.22A20.43 20.43 0 0199.1 21.43zm-43.7 21.52v1.9c0 3.33.05 6.11-1.64 9.1-1.36 2.46-3.54 3.93-5.94 3.93-3.27 0-5.23-2.5-5.23-6.26 0-7.3 6.54-8.67 12.8-8.67z" />
        </symbol>
        <symbol id="icons-instagram-original" viewBox="0 0 100 100">
          <path d="M49.931 35.889a14.151 14.151 0 0 1 14.26 14.151A14.151 14.151 0 0 1 49.987 64.3a14.151 14.151 0 0 1-14.26-14.205 14.151 14.151 0 0 1 14.26-14.26l-.055.054zm.055-10.396a24.547 24.547 0 0 0-24.493 24.493c0 13.444 11.049 24.493 24.493 24.493s24.493-11.05 24.493-24.493-11.05-24.493-24.493-24.493zm25.8-6.423a5.17 5.17 0 1 0-.001 10.287 5.17 5.17 0 0 0 0-10.341v.054zm-48.987-7.783h46.428c8.708 0 15.512 6.858 15.512 15.512v46.428c0 8.708-6.858 15.512-15.512 15.512H26.799a15.349 15.349 0 0 1-15.512-15.512V26.799c0-8.708 6.858-15.512 15.512-15.512zM26.8 1A25.854 25.854 0 0 0 1 26.8v46.372c0 14.206 11.593 25.8 25.8 25.8h46.372c14.206 0 25.8-11.594 25.8-25.8V26.8C98.972 12.593 87.378 1 73.172 1H26.8z" />
        </symbol>
        <symbol id="icons-goal" viewBox="0 0 22 22">
          <path d="M11 1C5.477 1 1 5.477 1 11a10 10 0 0 0 20 0c0-1.16-.21-2.31-.61-3.39l-1.6 1.6c.14.59.21 1.19.21 1.79a8 8 0 1 1-8-8c.6 0 1.2.07 1.79.21L14.4 1.6C13.31 1.21 12.16 1 11 1zm7 0l-4 4v1.5l-2.55 2.55C11.3 9 11.15 9 11 9a2 2 0 1 0 2 2c0-.15 0-.3-.05-.45L15.5 8H17l4-4h-3V1zm-7 4a6 6 0 1 0 6 6h-2a4 4 0 1 1-4-4V5z" fill="currentColor" />
        </symbol>
        <symbol id="icons-lovense" viewBox="0 0 100 100">
          <path d="M70.25 12.6c4.5-4.5 16.26-7.7 20.41-3.73 4.15 3.97.36 15.52-4.13 20.01L32.72 82.69c-.44.44-1.2.4-1.58 0L16.44 68a1.16 1.16 0 010-1.58l53.8-53.81zm-58.88 59a1.18 1.18 0 011.6-.02l14.71 14.7c.44.44.4 1.17-.03 1.6l-7.17 7.2c-.45.45-1.22.41-1.6.03L4.17 80.39c-.43-.43-.4-1.16.03-1.6l7.17-7.19zM42.6.45c1.89-.5 3.62.74 3.86 2.64a4.11 4.11 0 01-2.97 4.38S28.95 9.11 19.63 18C10.3 26.9 9.02 42.64 9.02 42.64a4.03 4.03 0 01-4.42 3.02l-.17-.02c-1.97-.28-3.18-2.01-2.62-3.95 0 0 .45-16.75 12.37-28.68C26.11 1.1 42.6.45 42.6.45zm3.36 17.57a3.29 3.29 0 013.75 2.84 3.54 3.54 0 01-3 3.89S38.18 24 31.64 30.4c-6.53 6.4-5.75 14.27-5.75 14.27A3.42 3.42 0 0122 47.6l-.16-.02a3.29 3.29 0 01-2.86-3.78s-.36-10.17 7.77-18.15c8.13-7.98 19.2-7.63 19.2-7.63zm11.44 81a3.05 3.05 0 01-3.86-2.65 4.11 4.11 0 012.97-4.38s14.54-1.64 23.86-10.53c9.33-8.9 10.61-24.64 10.61-24.64a4.03 4.03 0 014.42-3.02l.17.02c1.97.27 3.18 2.01 2.62 3.94 0 0-.45 16.76-12.38 28.68C73.9 98.37 60.27 99.16 57.4 99.01zm-2.6-19.73a3.29 3.29 0 01-3.7-2.9 3.54 3.54 0 013.06-3.84s8.53.9 15.18-5.4c6.64-6.3 6-14.16 6-14.16a3.41 3.41 0 013.92-2.86l.16.02c1.86.3 3.15 2 2.8 3.83 0 0 .18 10.18-8.1 18.02-8.26 7.83-19.33 7.3-19.33 7.3z" fill="currentColor" />
        </symbol>
        <symbol id="icons-close-ds" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20.027 3.985a1.269 1.269 0 0 0-1.796 0L12 10.203l-6.23-6.23a1.269 1.269 0 0 0-1.797 0 1.269 1.269 0 0 0 0 1.796L10.203 12l-6.23 6.23a1.269 1.269 0 0 0 0 1.797c.497.497 1.3.497 1.796 0L12 13.797l6.23 6.23c.498.497 1.3.497 1.797 0 .497-.497.497-1.3 0-1.796L13.797 12l6.23-6.23c.485-.485.485-1.3 0-1.785Z" />
        </symbol>
        <symbol id="icons-switcher-ds" viewBox="0 0 11 8">
          <path fill="currentColor" d="M4.37 5.04 2.03 2.69A1.18 1.18 0 1 0 .35 4.37l3.19 3.19c.46.46 1.2.46 1.67 0l5.44-5.44A1.18 1.18 0 1 0 8.97.44l-4.6 4.6Z" />
        </symbol>
        <symbol id="icons-exclamation-circle" viewBox="0 0 12 13">
          <path clipRule="evenodd" d="m12 6.5c0 3.312-2.688 6-6 6s-6.00000453-2.688-6.00000424-6 2.68800424-6.000003 6.00000424-6.000002c3.312 0 6 2.688002 6 6.000002zm-7 4.2841v-1.84795h2v1.84795zm1.93631-8.56795v2.304l-.49682 3.696h-.90446l-.48408-3.696v-2.30401z" fill="currentColor" fillRule="evenodd" />
        </symbol>
        <symbol id="icons-heart-2" viewBox="0 0 22 22">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.54 3.00041C14.0983 2.99243 12.7177 3.64755 11.7757 4.80556L10.9949 5.76557L10.2202 4.80058C9.28658 3.63766 7.90592 2.98276 6.46662 3.00035L6.4544 3.0005C3.75057 3.0005 1.5 5.27971 1.5 8.16508C1.5 9.34551 2.00106 10.5983 2.86856 11.8674C3.73133 13.1295 4.90528 14.3322 6.12366 15.3915C8.20177 17.1982 10.3205 18.5115 11.0011 18.9153C11.6849 18.5142 13.8021 17.2172 15.8781 15.4209C17.0956 14.3674 18.2686 13.168 19.1307 11.9033C19.9968 10.6327 20.5 9.3688 20.5 8.16508C20.5 5.27972 18.2494 3.00042 15.5456 3.00042L15.54 3.00041ZM10.3055 3.44546C9.24175 2.50413 7.87573 1.98305 6.4544 2.00042C3.16586 2.00042 0.5 4.76042 0.5 8.16508C0.5 13.9996 10.3354 19.6963 10.7342 19.9165C10.8951 20.0278 11.1049 20.0278 11.2658 19.9165C11.6646 19.6963 21.5 14.0821 21.5 8.16508C21.5 4.76042 18.8341 2.00042 15.5456 2.00042C14.1267 1.99257 12.7645 2.51362 11.6984 3.44908C11.4483 3.66858 11.2144 3.91089 11 4.17455C10.7872 3.90948 10.5546 3.66594 10.3055 3.44546Z" fill="currentColor" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6.45287 1.75042C7.93727 1.73267 9.36246 2.27712 10.4711 3.25824C10.6571 3.42283 10.8342 3.5997 11.0012 3.78825C11.1691 3.6008 11.3469 3.42491 11.5335 3.26117C12.6443 2.2865 14.065 1.7424 15.5462 1.75042C18.9806 1.75081 21.75 4.63083 21.75 8.16508C21.75 9.71321 21.1074 11.2226 20.1636 12.6073C19.2187 13.9935 17.9596 15.2728 16.696 16.3662C14.2045 18.522 11.6662 19.9795 11.3968 20.1298C11.1555 20.2901 10.8443 20.2901 10.6031 20.1297C10.332 19.978 7.79425 18.5002 5.30353 16.3348C4.04019 15.2365 2.78132 13.9547 1.83663 12.5728C0.893127 11.1926 0.25 9.69324 0.25 8.16508C0.25 4.63112 3.01886 1.75127 6.45287 1.75042ZM10.1398 3.63267C9.12141 2.73148 7.81517 2.23381 6.45745 2.2504L6.4544 2.25042C3.31204 2.25042 0.75 4.89024 0.75 8.16508C0.75 9.55415 1.3363 10.9549 2.2494 12.2906C3.16132 13.6246 4.38623 14.8748 5.63158 15.9575C8.12258 18.1231 10.6649 19.5927 10.855 19.6977L10.8661 19.7038L10.8764 19.7109C10.9517 19.763 11.0482 19.763 11.1236 19.7109L11.134 19.7038L11.145 19.6977C11.3364 19.5919 13.8784 18.143 16.3689 15.9881C17.614 14.9107 18.8387 13.6633 19.7504 12.3257C20.6632 10.9867 21.25 9.57545 21.25 8.16508C21.25 4.89024 18.6879 2.25042 15.5456 2.25042L15.5442 2.25042C14.1879 2.24291 12.8846 2.74088 11.8633 3.63699C11.6237 3.84727 11.3995 4.0795 11.1939 4.3323L10.9987 4.5723L10.805 4.33106C10.6011 4.07704 10.3783 3.84377 10.1398 3.63267ZM10.0252 4.95709C9.13859 3.85266 7.83028 3.2337 6.46967 3.25033L6.33627 3.25196C3.83054 3.31722 1.75 5.45255 1.75 8.16508C1.75 9.276 2.22268 10.4795 3.07495 11.7263C3.92133 12.9644 5.07829 14.1514 6.28769 15.2028C8.23407 16.895 10.2182 18.1522 11.0018 18.6245C11.7879 18.1561 13.7704 16.9141 15.7145 15.2318C16.9228 14.1863 18.0786 13.0029 18.9241 11.7625C19.7746 10.5148 20.25 9.29995 20.25 8.16508C20.25 5.41004 18.1037 3.25042 15.5456 3.25042H15.4861C14.1409 3.25885 12.8535 3.87678 11.9697 4.96331L10.9936 6.16332L10.0252 4.95709ZM15.5435 2.75042H15.5456C15.565 2.75042 15.5843 2.75053 15.6037 2.75075L15.79 2.75178V2.75633C18.5285 2.88885 20.75 5.23609 20.75 8.16508C20.75 9.43765 20.2189 10.7507 19.3373 12.0441C18.4586 13.3331 17.2684 14.5485 16.0417 15.61C13.9494 17.4204 11.8177 18.7261 11.1276 19.131L11.0004 19.2056L10.8735 19.1303C10.1866 18.7228 8.0537 17.4007 5.95963 15.5802C4.73227 14.5131 3.54133 13.2945 2.66218 12.0084C1.77945 10.7171 1.25 9.41503 1.25 8.16508C1.25 5.14939 3.60488 2.75042 6.4544 2.75042H6.45897L6.46356 2.75036C6.50483 2.74986 6.54604 2.74988 6.5872 2.75042H6.7044V2.75337C8.13431 2.80656 9.48656 3.48742 10.4151 4.64407L10.9962 5.36781L11.5818 4.64781C12.5704 3.43245 14.0222 2.742 15.5414 2.75041L15.5435 2.75042Z" fill="currentColor" />
        </symbol>
        <symbol id="icons-camera-3" viewBox="0 0 48 34">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.58 21.042v9.768c0 1.297 1.01 2.358 2.245 2.358H34.75c1.235 0 2.246-1.06 2.246-2.357v-6.232L48 31.989V10.096l-11.003 7.41v-6.231c0-1.297-1.01-2.358-2.246-2.358h-14.55c-.265 6.742-5.815 12.126-12.622 12.126z" fill="currentColor" />
          <path d="M15.158 8.41A7.579 7.579 0 110 8.41a7.579 7.579 0 0115.158 0z" fill="red" style={{fill: 'var(--camera-3-circle-color, red)'}} />
        </symbol>
        <symbol id="icons-notifications-off-2" viewBox="0 0 22 25">
          <path d="M9.84615 24.2354C11.2 24.2354 12.3077 23.1277 12.3077 21.7738H7.38461C7.38461 23.1277 8.48 24.2354 9.84615 24.2354ZM17.2308 10.6969C17.2308 6.91843 15.2123 3.75535 11.6923 2.91843V2.08151C11.6923 1.05997 10.8677 0.235352 9.84615 0.235352C8.82461 0.235352 8 1.05997 8 2.08151V2.91843C7.70462 2.99227 7.42154 3.10304 7.15077 3.20151L17.2308 13.2815V10.6969ZM1.73538 1.28151L0 3.01689L3.45846 6.47535C2.81846 7.70612 2.46154 9.13381 2.46154 10.6969V16.8507L0.873846 18.4384C0.0984616 19.2138 0.64 20.543 1.73538 20.543H17.5262L19.6677 22.6846L21.4031 20.9492L1.73538 1.28151Z" fill="currentColor" />
        </symbol>
        <symbol id="icons-chat-actions" viewBox="0 0 22 24">
          <g fillRule="evenodd">
            <path d="M7.002 4a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
            <path fill="currentColor" fillRule="nonzero" d="M22 14c.003.218-.102.381-.316.491L11.608 18.27a1.97 1.97 0 0 1-.608.094v5.486c.5 0 1.5-.35 1.5-.35l9.133-3.845a.6.6 0 0 0 .367-.553V14z" opacity=".6" />
            <path fill="currentColor" fillRule="nonzero" d="M0 14c-.003.218.102.381.316.491l10.076 3.779c.195.063.397.094.608.094v5.486c-.5 0-1.5-.35-1.5-.35L.367 19.655A.6.6 0 0 1 0 19.102V14z" opacity=".4" />
            <path fill="#D4D4D4" d="M.35 13.494l9.652-3.619V14a1 1 0 1 0 2 0V9.875l9.652 3.62a.54.54 0 0 1 0 1.01l-9.95 3.732c-.452.17-.951.17-1.404 0L.35 14.506a.54.54 0 0 1 0-1.012zm5.4 1.406c.966 0 1.75-.403 1.75-.9s-.784-.9-1.75-.9S4 13.503 4 14s.784.9 1.75.9z" />
          </g>
        </symbol>
        <symbol id="icons-chevron-down-ds" viewBox="0 0 24 24">
          <path fill="currentColor" d="M15.88 9.29 12 13.17 8.12 9.29a1 1 0 1 0-1.41 1.41l4.59 4.59a1 1 0 0 0 1.41 0l4.59-4.59a1 1 0 0 0 0-1.41 1.02 1.02 0 0 0-1.42 0Z" />
        </symbol>
        <symbol id="icons-lovense-low" viewBox="0 0 20 20">
          <g fill="currentColor">
            <path d="M18.41 1.73c.86.8.08 3.14-.85 4.05L6.42 16.68a.24.24 0 01-.32 0L3.05 13.7a.23.23 0 010-.32L14.2 2.48c.93-.9 3.37-1.56 4.22-.75zM2.34 14.43l3.04 2.97a.23.23 0 010 .33l-1.49 1.45a.25.25 0 01-.33 0L.52 16.22a.23.23 0 010-.33l1.49-1.45a.25.25 0 01.33 0z" />
            <path d="M9.16 3.58c.38-.06.73.21.78.57.05.38-.23.72-.62.8 0 0-1.77-.16-3.12 1.14C4.85 7.39 5 8.98 5 8.98a.7.7 0 01-.8.59h-.02c-.4-.06-.66-.4-.6-.77 0 0-.07-2.06 1.61-3.68 1.68-1.61 3.97-1.54 3.97-1.54zm1.07 11.82a.72.72 0 01.63-.78s1.77.18 3.14-1.1c1.38-1.27 1.24-2.86 1.24-2.86a.7.7 0 01.81-.58h.04c.38.07.65.41.58.78 0 0 .03 2.06-1.68 3.65-1.7 1.58-4 1.48-4 1.48a.68.68 0 01-.76-.6z" opacity=".6" />
            <path d="M9.27.56c.05.4-.23.78-.62.88 0 0-3 .34-4.93 2.14-1.94 1.8-2.2 4.99-2.2 4.99a.83.83 0 01-.91.6H.57c-.4-.05-.66-.4-.54-.8 0 0 .1-3.39 2.56-5.8C5.06.15 8.47.02 8.47.02a.63.63 0 01.8.54zm1.46 18.88a.83.83 0 01.62-.88s3-.34 4.94-2.14c1.93-1.8 2.19-4.99 2.19-4.99a.83.83 0 01.91-.6h.04c.4.05.66.4.54.8 0 0-.1 3.39-2.56 5.8a8.56 8.56 0 01-5.88 2.55.63.63 0 01-.8-.54z" opacity=".2" />
          </g>
        </symbol>
        <symbol id="icons-info" viewBox="0 0 100 100">
          <path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50zm5.455-66.145v-8.51H45.127v8.51h10.328zm-10.328 5.818v37.6h10.328v-37.6H45.127z" fillRule="evenodd" />
        </symbol>
        <symbol id="icons-playing-dices" viewBox="0 0 100 100">
          <path d="M42.91 15.395c1.98-2.293 4.679-4 7.851-4.733l23.906-5.52c7.956-1.836 15.897 3.14 17.73 11.08l5.52 23.906c1.837 7.956-3.138 15.898-11.08 17.73l-6.352 1.467 2.902-10.83a4.527 4.527 0 1 0 1.147-6.932c-.03-8.66-5.82-16.574-14.587-18.923l-27.038-7.245zm38.126 5.225A4.527 4.527 0 1 0 79 11.798a4.527 4.527 0 0 0 2.037 8.822zM12.2 28.148c2.103-7.85 10.197-12.5 18.02-10.404L68.425 27.98c7.849 2.103 12.5 10.196 10.404 18.02L68.592 84.206c-2.104 7.849-10.197 12.5-18.02 10.404L12.367 84.373c-7.85-2.104-12.5-10.197-10.404-18.02L12.2 28.148zm26.669 33.546a5.772 5.772 0 1 0 2.987-11.15 5.772 5.772 0 0 0-2.987 11.15zm-13.55-23.467a5.772 5.772 0 1 0 2.989-11.15 5.772 5.772 0 0 0-2.988 11.15zm37.017 9.919a5.772 5.772 0 1 0 2.987-11.15 5.772 5.772 0 0 0-2.987 11.15zM15.4 75.243a5.772 5.772 0 1 0 2.988-11.15 5.772 5.772 0 0 0-2.988 11.15zm37.016 9.918a5.772 5.772 0 1 0 2.988-11.15 5.772 5.772 0 0 0-2.988 11.15z" />
        </symbol>
        <symbol id="icons-camera" viewBox="0 0 20 13">
          <path d="M19.2 1l-4.5 2.6v-1a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v7.9c0 1 1 2 2 2h10a2 2 0 0 0 2-2v-1l4.5 2.6V.9z" />
        </symbol>
        <symbol id="icons-lovense-medium" viewBox="0 0 20 20">
          <g fill="currentColor">
            <path d="M18.41 1.73c.86.8.08 3.14-.85 4.05L6.42 16.68a.24.24 0 01-.32 0L3.05 13.7a.23.23 0 010-.32L14.2 2.48c.93-.9 3.37-1.56 4.22-.75zM2.34 14.43l3.04 2.97a.23.23 0 010 .33l-1.49 1.45a.25.25 0 01-.33 0L.52 16.22a.23.23 0 010-.33l1.49-1.45a.25.25 0 01.33 0zM9.16 3.57c.38-.06.73.21.78.57.05.38-.23.72-.62.8 0 0-1.77-.16-3.12 1.14C4.85 7.39 5 8.98 5 8.98a.7.7 0 01-.8.59h-.02c-.4-.06-.66-.4-.6-.77 0 0-.07-2.06 1.61-3.68 1.68-1.61 3.97-1.54 3.97-1.54zm1.07 11.82a.72.72 0 01.63-.78s1.77.18 3.14-1.1c1.38-1.27 1.24-2.86 1.24-2.86a.7.7 0 01.81-.58h.04c.38.07.65.41.58.78 0 0 .03 2.06-1.68 3.65-1.7 1.58-4 1.48-4 1.48a.68.68 0 01-.76-.6z" />
            <path d="M9.27.56c.05.4-.23.78-.62.88 0 0-3 .34-4.93 2.14-1.94 1.8-2.2 4.99-2.2 4.99a.83.83 0 01-.91.6H.57c-.4-.05-.66-.4-.54-.8 0 0 .1-3.39 2.56-5.8C5.06.15 8.47.02 8.47.02a.63.63 0 01.8.54zm1.46 18.88a.83.83 0 01.62-.88s3-.34 4.94-2.14c1.93-1.8 2.19-4.99 2.19-4.99a.83.83 0 01.91-.6h.04c.4.05.66.4.54.8 0 0-.1 3.39-2.56 5.8a8.56 8.56 0 01-5.88 2.55.63.63 0 01-.8-.54z" opacity=".4" />
          </g>
        </symbol>
        <symbol id="icons-invisible" viewBox="0 0 100 100">
          <path d="M49.9 67.8c-4.1-.07-4.66-2.48-18.51-2.36-13.94.13-19.4 4.26-19.4 4.26l.05 2.83s1.44.43 2.36 1.4c3.24 3.45 4.1 12.65 9.36 14.07s9.26 1.78 15.5-1.2a12.73 12.73 0 007.07-9.52c0-.05.05-2.42 3.24-2.48a2.59 2.59 0 00.34 0h.06c.1.01.19 0 .28 0 3.18.06 3.24 2.43 3.24 2.48.03.84 1.19 6.72 7.06 9.52 6.24 2.98 10.24 2.62 15.5 1.2 5.26-1.42 6.12-10.62 9.37-14.06.91-.98 2.36-1.4 2.36-1.4l.05-2.84s-5.46-4.13-19.4-4.26c-13.86-.12-14.41 2.29-18.52 2.35zM100 42.6c.18 8.24-19.27 13.66-49.99 13.76C19.3 56.46-.13 49.71 0 42.93c.13-6.79 20.78-10.36 20.78-10.36s7.06-20.1 10.42-22.09c3.37-1.99 10.82 2.8 17.8 2.98 6.97.18 15.97-5.48 19.07-2.24 3.1 3.24 10.79 21.9 10.79 21.9S99.8 34.37 100 42.6z" fill="currentColor" />
        </symbol>
        <symbol id="icons-camera-5" viewBox="0 0 16 16">
          <path fillRule="evenodd" clipRule="evenodd" d="M2 9C4.76142 9 7 6.76142 7 4C7 3.65753 6.96557 3.32311 6.89998 3H10.5833C12.2499 3 12.6666 3.41667 12.6666 5.08333V6.75L14.5749 4.83333C15.0999 4.30833 15.9999 4.68333 15.9999 5.425V10.5667C15.9999 11.3083 15.0999 11.6833 14.5749 11.1583L12.6666 9.25V10.9167C12.6666 12.5833 12.2499 13 10.5833 13H3.08327C1.41661 13 0.999939 12.5833 0.999939 10.9167V8.89997C1.32307 8.96557 1.65751 9 2 9Z" fill="currentColor" />
          <path d="M4 4C4 5.10457 3.10457 6 2 6C0.895431 6 0 5.10457 0 4C0 2.89543 0.895431 2 2 2C3.10457 2 4 2.89543 4 4Z" fill="currentColor" />
        </symbol>
      </defs>
    </svg>
  </div>
  )
}

export default Front