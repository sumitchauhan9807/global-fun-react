import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

function CamFunctions({session}) {
	
	if(!session) return 
	let goal = session.goals[session.goals.length-1]
	return (
    <div>
				<div className="view-cam-controls with-new-send-tip">
					<div className="view-cam-controls-wrapper">
						<div className="favorite-control">
							<div className="favorite-control__mobile" />
							
						
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
				<GoalBar goal={goal}/>
			</div>
  )
}

const GoalBar = ({goal}) => {
	if(!goal) return
	return (
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
							<span className="epic-goal-progress__tokens">{goal.tokenValue} tk</span>
							<span>{goal.title}</span>
						</div>
						<div className="epic-goal-progress__status epic-goal-progress__status--view-cam">0.3{/* */}%</div>
					</div>
				</div>
			</div>
		
		</div>
		
	</div>
	)
}

export default CamFunctions