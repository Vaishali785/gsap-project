// import "./App.css"
import GsapFrom from "./practice/GsapFrom"
import GsapFromTo from "./practice/GsapFromTo"
import GsapScrollTrigger from "./practice/GsapScrollTrigger"
import GsapStagger from "./practice/GsapStagger"
import GsapTimeline from "./practice/GsapTimeline"
import GsapTo from "./practice/GsapTo"

function App() {
	return (
		<div className="flex flex-col gap-4 p-8">
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
	)
}

export default App
