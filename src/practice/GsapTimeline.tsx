import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapTimeline = () => {
	const timeline = gsap.timeline({
		repeat: -1,
		repeatDelay: 1,
		yoyo: true,
	})
	useGSAP(() => {
		timeline.to("#pink-box", {
			x: 250,
			// repeat: -1,
			// yoyo: true,
			rotation: 360,
			borderRadius: "100%",
			duration: 2,
			ease: "back.inOut",
		})
		timeline.to("#pink-box", {
			y: 200,
			ease: "circ",
		})
		timeline.to("#pink-box", {
			y: 0,
			ease: "bounce.out",
		})
		timeline.to("#pink-box", {
			x: 500,
			y: 0,
			scale: 1,
			rotation: 360,
			borderRadius: "8px",
			duration: 1,

			// repeat: -1,
			// yoyo: true,
		})
	}, [])
	return (
		<div>
			<div className="flex gap-4 items-center">
				<h2 className="text-xs ">4. GSAP timeline</h2>
				<button
					onClick={() => {
						if (timeline.paused()) {
							timeline.play()
						} else {
							timeline.pause()
						}
					}}
					className="bg-blue-600 text-white rounded-md p-2 text-xs"
				>
					Play/Pause
				</button>
			</div>
			<div className="bg-slate-300  w-[630px] h-[300px] p-4 rounded-2xl  ">
				<div id="pink-box" className="w-20 h-20 bg-pink-400 rounded-xl"></div>
			</div>
		</div>
	)
}

export default GsapTimeline
