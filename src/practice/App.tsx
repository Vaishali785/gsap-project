// import "./App.css"
import GsapFrom from "./GsapFrom"
import GsapFromTo from "./GsapFromTo"
import GsapScrollTrigger from "./GsapScrollTrigger"
import GsapStagger from "./GsapStagger"
import GsapTimeline from "./GsapTimeline"
import GsapTo from "./GsapTo"

function PracticeApp() {
	return (
		<div className="flex flex-col gap-4 p-8">
			<div className="practice-gsap">
				<div className="flex gap-6">
					<GsapTo />
					<GsapFrom />
					<GsapFromTo />
				</div>
				<div className="flex gap-6">
					<GsapTimeline />
					<GsapStagger />
				</div>
				<GsapScrollTrigger />
			</div>
		</div>
	)
}

export default PracticeApp
