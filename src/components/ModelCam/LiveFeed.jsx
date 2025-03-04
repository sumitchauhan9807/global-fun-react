import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
function LiveFeed({ videoRef, playing }) {
	return (
		<div className="ViewCamWrapper__videoLayout#EP video view-cam">
			<div className="view-cam-notifications view-cam-notifications-hls" />
			<div className="ViewCamWrapper__video#XY" style={{ minHeight: "400px" }}>
				<div className="ViewCamWrapper#TP ViewCamWrapper__blur#SX">
					<div className="ViewCamWrapper__stub#Vs">
						<div className="ViewCamWrapper__filter#du">
							<div className="ViewCamWrapper__bg#qk" />
							{!playing && <img className="ViewCamWrapper__img#QA" src="https://www.shutterstock.com/image-photo/beautiful-female-fitness-model-studio-260nw-278349863.jpg" alt="June695_'s Live XXX Chat" />}
						</div>
					</div>
					<div className="broadcast-type-webrtc hover player player-type-hls player-wrapper view-cam-resizer-player">
						<div id="player-portals-container" />
						<div className="content">
							<div className="mse-player">
								<div className="video-element-wrapper">
									<video muted autoplay ref={videoRef} className="video-element" playsInline preload="metadata" disableremoteplayback src="blob:https://stripchat.global/6fbd3334-bc37-4e67-be8b-0b74bf54eefb" />
									{!playing && (
										<div className="play-button">
											<RotatingLines visible={true} height="96" width="96" color="grey" strokeWidth="5" animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} wrapperClass="" />
										</div>
									)}
								</div>
							</div>

							<div className="player-controls-layers player-controls-user player__player-controls">
								<div className="player-controls-layers__layer player-controls-layers__layer--main-controls">
									<div className="player-controls-user__main player-controls-user__main--gradient">
										<div className="player-controls-user__main-top">
											<div className="player-controls-user__info-wrapper">
												<div className="player-controls-user__online-info">
													<div className="player-controls-user__live-badge player-live-badge">LIVE</div>
													<div className="player-viewers-count">
														<span className> 58 viewers</span>
													</div>
												</div>
												<h2 className="media-after-s-hidden view-cam-info-goal__title view-cam-info-topic view-cam-info-topic__in-player">
													<span>. </span>
													<span>​</span>
													<span>Insta: </span>
													<span>​</span>
													<span>June</span>
													<span>​</span>
													<span>695_ ♥️ </span>
													<span>​</span>
													<span>Tg: </span>
													<span>​</span>
													<span>Jjune</span>
													<span>​</span>
													<span>695</span>
													<span>​</span>
												</h2>
											</div>
											<div className="player-controls-user__buttons">
												<div className="player-controls-user__left-buttons">
													<div className="player-controls-user__button player-volume player-volume--with-slider">
														<button className="btn ds-btn-inline-block overflow-visible player-top-button player-volume__control" type="button">
															<svg className="icon icon-volume-off player-top-button__icon">
																<use xlinkHref="#icons-volume-off" />
															</svg>
														</button>
														<div className="player-volume-slider">
															<div className="player-volume-slider__container">
																<div className="player-volume-slider__fill" style={{ height: "50%" }} />
																<div className="player-volume-slider__handle" style={{ bottom: "calc(50% - 12px)" }} />
															</div>
														</div>
													</div>
												</div>
												<div className="player-controls-user__right-buttons">
													<button className="btn ds-btn-inline-block overflow-visible player-controls-user__button player-low-latency-button player-top-button" type="button">
														<svg className="icon icon-badge-off player-top-button__badge-icon">
															<use xlinkHref="#icons-badge-off" />
														</svg>
														<svg className="icon icon-lightning-2 player-low-latency-button__icon player-top-button__icon">
															<use xlinkHref="#icons-lightning-2" />
														</svg>
													</button>
													<button title="Video Quality " className="btn ds-btn-inline-block overflow-visible player-controls-user__button player-resolution player-top-button" type="button">
														<svg className="icon icon-badge-hd-red player-top-button__badge-icon">
															<use xlinkHref="#icons-badge-hd-red" />
														</svg>
														<svg className="icon icon-settings player-top-button__icon">
															<use xlinkHref="#icons-settings" />
														</svg>
													</button>
													<button className="btn ds-btn-inline-block overflow-visible player-controls-user__button player-top-button" type="button">
														<svg className="icon icon-fullscreen-on player-top-button__icon">
															<use xlinkHref="#icons-fullscreen-on" />
														</svg>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="player-controls-layers__layer player-controls-layers__layer--alternate-controls player-controls-layers__layer--hidden">
									<div className="player-controls-user__overlay-top-btn" />
								</div>
								<div className="player-controls-layers__layer player-controls-layers__layer--permanent-controls">
									<button className="btn ds-btn-inline-block player-controls-user__join-btn player-join-button" type="button">
										Join Me for Free
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="view-cam-controls with-new-send-tip">
					<div className="view-cam-controls-wrapper">
						<div className="favorite-control">
							<div className="favorite-control__mobile" />
							<div className="favorite-control__desktop">
								<div data-tooltip role="tooltip" className="absolute absolute-top hidden is-optimized notifications-tooltip tooltip" style={{ top: "initial", bottom: "100%" }}>
									<div className="tooltip-inner">
										<div className="collapsed notifications-tooltip-content">
											<div className="visible-wrapper">
												<div className="close">
													<svg className="icon icon-close-ds" style={{ height: "14px", width: "14px" }}>
														<use xlinkHref="#icons-close-ds" />
													</svg>
												</div>
												<div className="main-settings">
													<div className="bell">
														<svg className="icon icon-notifications-off-2">
															<use xlinkHref="#icons-notifications-off-2" />
														</svg>
													</div>
													<span className="notifications-tooltip-title">Notify when model goes live or sends message?</span>
													<div className="light main-switcher medium switcher">
														<div className="switcher-wrapper">
															<span className="switcher-label">
																<svg className="icon icon-switcher-ds">
																	<use xlinkHref="#icons-switcher-ds" />
																</svg>
															</span>
															<span className="switcher-switch" />
															<span className="switcher-label" />
														</div>
													</div>
												</div>
												<div className="animated methods-wrapper">
													<div className="methods">
														<span className="methods-title">Notify me by:</span>
														<div>
															<div className="method method-disabled method-email">
																<span>
																	Email
																	<span id="notification-tooltip-content_1739000883387_notification-tooltip-email-warning" className="notifications-tooltip-warning-hint">
																		<svg className="icon icon-exclamation-circle">
																			<use xlinkHref="#icons-exclamation-circle" />
																		</svg>
																	</span>
																</span>
																<div className="default light method__switcher switcher">
																	<div className="switcher-wrapper">
																		<span className="switcher-label">
																			<svg className="icon icon-switcher-ds">
																				<use xlinkHref="#icons-switcher-ds" />
																			</svg>
																		</span>
																		<span className="switcher-switch" />
																		<span className="switcher-label" />
																	</div>
																</div>
															</div>
															<div className="method">
																<span>Browser Notifications</span>
																<div className="default light method__switcher switcher">
																	<div className="switcher-wrapper">
																		<span className="switcher-label">
																			<svg className="icon icon-switcher-ds">
																				<use xlinkHref="#icons-switcher-ds" />
																			</svg>
																		</span>
																		<span className="switcher-switch" />
																		<span className="switcher-label" />
																	</div>
																</div>
															</div>
														</div>
														<div className="CollapsedV2#B0 CollapsedV2_clickAll#Du CollapsedV2_closed#r2 PWANotificationTooltipQrCode#Xr notifications-tooltip-content__pwa undefined">
															<div className="CollapsedV2__header#eU PWANotificationTooltipQrCode__headerWrapper#zh">
																<div className="PWANotificationTooltipQrCode__header#oh">
																	<div className="PWANotificationTooltipQrCode__logo#Ge pwa-logo pwa-logo--white">
																		<img className="pwa-logo__wl" src="https://assets.strpst.com/assets/icons/appicon_stripchat.global.png?v=28b983cf" alt="Stripchat Global" />
																	</div>
																	<div>
																		<div className="PWANotificationTooltipQrCode__title#z7">Get Stripchat Global App</div>
																		<div className="PWANotificationTooltipQrCode__description#Yk">Quick mobile access &amp; notifications</div>
																	</div>
																</div>
																<svg className="CollapsedV2__iconClose#L8 PWANotificationTooltipQrCode__chevronIcon#Ci icon icon-chevron-down-ds">
																	<use xlinkHref="#icons-chevron-down-ds" />
																</svg>
															</div>
															<div className="CollapsedV2__contentWrapper#gy">
																<div className="CollapsedV2__content#eh">
																	<div className="PWANotificationTooltipQrCode__body#tI">
																		<div className="PWANotificationTooltipQrCode__scanText#wJ">Scan with your phone camera</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="add-to-favorite-control">
								<button aria-label="Add Favorite" className="a11y-button add-to-favorite-control__toggle add-to-favorite-control__toggle-new" type="button">
									<svg className="add-to-favorite-control__favorite-icon add-to-favorite-control__favorite-icon--desktop add-to-favorite-control__favorite-icon-new icon icon-heart-2">
										<use xlinkHref="#icons-heart-2" />
									</svg>
								</button>
								<div className="add-to-favorite-control__favorited-count favorited-count">81.7k</div>
							</div>
							<div className="broken-heart-icons-preloader" />
						</div>
						<div className="view-cam-controls-wrapper__left" />
						<div className="view-cam-controls-wrapper__center" />
						<div className="view-cam-controls-wrapper__right">
							<div className="view-cam-buttons-wrapper">
								<span className="view-cam-controls__btn-wrapper">
									<button className="btn btn-gold-outline-ds btn-inline-block btn-large view-cam-controls-btn view-cam-controls__private-btn" type="button">
										<span className="view-cam-controls-text--short">Private</span>
										<span className="view-cam-controls-text">Private Show</span>
										<span className="view-cam-controls__private-btn-price">
											&nbsp;<span className="btn-gold-outline-ds__accent-text">90 tk</span>
										</span>
									</button>
								</span>
								<span className="view-cam-controls__btn-wrapper">
									<button className="btn ds-btn-apply-2-ds ds-btn-inline-block send-tip-btn send-tip-button send-tip-button--with-icon" type="button">
										<span className="view-cam-controls-text--short">Tip</span>
										<span className="view-cam-controls-text">Send Tip</span>
										<span className="send-tip-button__icon-container">
											<svg className="IconV2__icon#YR send-tip-button__icon">
												<use xlinkHref="#icons-chat-actions" />
											</svg>
										</span>
									</button>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="closed subscriptions-control-panel" />
				<div className="view-cam-info view-cam-info--visible view-cam-info--with-new-goal">
					<div className="view-cam-info-goal">
						<div className="epic-goal-progress__wrap epic-goal-progress__wrap--view-cam">
							<span className="epic-goal-progress__icon-wrap">
								<svg style={{ height: "18px", width: "18px" }} className="epic-goal-progress__icon icon icon-goal">
									<use xlinkHref="#icons-goal" />
								</svg>
							</span>
							<div className="epic-goal-progress__animation-container" />
							<div className="epic-goal-progress__progress-filler epic-goal-progress__progress-filler--active" />
							<div className="epic-goal-progress__content">
								<div className="epic-goal-progress__inner epic-goal-progress__inner--view-cam" style={{ width: "0.3%" }} />
								<div className="epic-goal-progress epic-goal-progress--view-cam">
									<div className="epic-goal-progress__information epic-goal-progress__information--view-cam">
										<span>Goal:{/* */}</span>
										<span className="epic-goal-progress__tokens">553 tk</span>
										<span>{/* */}Dildo fuck</span>
									</div>
									<div className="epic-goal-progress__status epic-goal-progress__status--view-cam">0.3{/* */}%</div>
								</div>
							</div>
						</div>
						<h2 className="media-up-to-xs-hidden view-cam-info-goal__title view-cam-info-topic">
							<span>. </span>
							<span>​</span>
							<span>Insta: </span>
							<span>​</span>
							<span>June</span>
							<span>​</span>
							<span>695_ ♥️ </span>
							<span>​</span>
							<span>Tg: </span>
							<span>​</span>
							<span>Jjune</span>
							<span>​</span>
							<span>695</span>
							<span>​</span>
						</h2>
					</div>
					<div className="view-cam-info-king">
						<div className="view-cam-info-king-content" id="view_cam_info_king">
							King of the room:
							<span className="become-king-info">
								Tip <span className="king-threshold">500 tk</span> in total!
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LiveFeed;
