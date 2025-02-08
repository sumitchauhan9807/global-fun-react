function Sidebar() {
  return (
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
  )
}
export default Sidebar