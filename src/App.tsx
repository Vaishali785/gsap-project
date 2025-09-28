// import "./App.css"
import gsap from "gsap"
import Navbar from "./components/Navbar"
// import PracticeApp from "./practice/App"
import { ScrollTrigger, SplitText } from "gsap/all"
import Hero from "./components/Hero"

gsap.registerPlugin(ScrollTrigger, SplitText)
function App() {
	return (
		// <div className="flex flex-col gap-4 p-8">
		// 	<PracticeApp />
		// </div>
		<main>
			<Navbar />
			<Hero />
		</main>
	)
}

export default App
