function FrontHeader() {
	return (
		<div className="header-sub header-sub-with-sidebar">
			<div className="tooltip-v2-portal-container" id="header-sub-portal-container" />
			<div className="container">
				<nav className="model-filter nav-left navbar-dropdown">
					<div className="visible-items">
						<a href="/" aria-label="Girls" className="active model-filter-link model-filter__link model-filter__link--active">
							<span className="model-filter__link-label">Girls</span>
						</a>
						<a href="/couples" aria-label="Couples" className="model-filter-link model-filter__link">
							<span className="model-filter__link-label">Couples</span>
						</a>
						<a href="/men" aria-label="Guys" className="model-filter-link model-filter__link">
							<span className="model-filter__link-label">Guys</span>
						</a>
						<a href="/trans" aria-label="Trans" className="model-filter-link model-filter__link">
							<span className="model-filter__link-label">Trans</span>
						</a>
					</div>
					<div className="navbar-hidden-elements-wrapper">
						<a href="/" aria-label="Girls" className="active model-filter-link model-filter__link model-filter__link--active" aria-hidden="true">
							<span className="model-filter__link-label">Girls</span>
						</a>
						<a href="/couples" aria-label="Couples" className="model-filter-link model-filter__link" aria-hidden="true">
							<span className="model-filter__link-label">Couples</span>
						</a>
						<a href="/men" aria-label="Guys" className="model-filter-link model-filter__link" aria-hidden="true">
							<span className="model-filter__link-label">Guys</span>
						</a>
						<a href="/trans" aria-label="Trans" className="model-filter-link model-filter__link" aria-hidden="true">
							<span className="model-filter__link-label">Trans</span>
						</a>
						<div className="navbar-more-button" aria-hidden="true">
							More
						</div>
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
					<nav className="model-filter nav-left nav-scrollable nav-scrollable--only-for-touch">
						<a href="/" aria-label="Girls" className="active model-filter-link model-filter__link model-filter__link--active">
							<span className="model-filter__link-label">Girls</span>
						</a>
						<a href="/couples" aria-label="Couples" className="model-filter-link model-filter__link">
							<span className="model-filter__link-label">Couples</span>
						</a>
						<a href="/men" aria-label="Guys" className="model-filter-link model-filter__link">
							<span className="model-filter__link-label">Guys</span>
						</a>
						<a href="/trans" aria-label="Trans" className="model-filter-link model-filter__link">
							<span className="model-filter__link-label">Trans</span>
						</a>
					</nav>
					<div className="ps__rail-x" style={{ left: "0px", bottom: "0px" }}>
						<div className="ps__thumb-x" tabIndex={0} style={{ left: "0px", width: "0px" }} />
					</div>
					<div className="ps__rail-y" style={{ top: "0px", right: "0px" }}>
						<div className="ps__thumb-y" tabIndex={0} style={{ top: "0px", height: "0px" }} />
					</div>
				</div>
				<nav className="nav-right nav-right--box-shadow">
					<button type="button" className="all-tags-dropdown-trigger btn dropdown-link media-up-to-xs-hidden">
						<svg className="icon icon-categories-2" style={{ height: "16px", width: "16px" }}>
							<use xlinkHref="#icons-categories-2" />
						</svg>
						<svg className="icon icon-close-2 xs-only" style={{ height: "16px", width: "16px" }}>
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
						<svg className="icon icon-close-3" style={{ height: "14px", width: "14px" }}>
							<use xlinkHref="#icons-close-3" />
						</svg>
					</button>
				</nav>
			</div>
		</div>
	);
}

export default FrontHeader;
