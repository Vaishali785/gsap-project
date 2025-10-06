// import "./App.css"
import gsap from "gsap"
import Navbar from "./components/Navbar.jsx"
// import PracticeApp from "./practice/App"
import { ScrollTrigger, SplitText } from "gsap/all"
import Hero from "./components/Hero.jsx"
import Cocktails from "./components/Cocktails.jsx"
import About from "./components/About.jsx"
import Art from "./components/Art.jsx"
import Menu from "./components/Menu.jsx"
import Contact from "./components/Contact.jsx"

gsap.registerPlugin(ScrollTrigger, SplitText)
function App() {
	return (
		// <div className="flex flex-col gap-4 p-8">
		// 	<PracticeApp />
		// </div>
		<main>
			<Navbar />
			<Hero />
			<Cocktails />
			<About />
			<Art />
			<Menu />
			<Contact />
		</main>
	)
}

export default App
