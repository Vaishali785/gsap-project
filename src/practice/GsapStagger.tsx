import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapStagger = () => {
	useGSAP(() => {
		gsap.to(".indigo-box", {
			y: 250,
			rotation: 360,
			repeat: -1,
			yoyo: true,
			duration: 2,
			// ease: "back.inOut",
			// stagger: 0.5,
			stagger: {
				amount: 1, //amount of time in secs which is divided equally among elements, so 1/6 secs between each element.
				grid: [6, 1], // to tell the rows and cols in grid
				axis: "y", // change axis of staggering
				from: "center",
			},
		})
	}, [])
	return (
		<div>
			<h2 className="text-xs ">5. GSAP Stagger</h2>
			<div className="bg-slate-300  w-[400px] h-[400px] p-4 rounded-2xl flex gap-2 justify-between ">
				<div
					id="indigo-1"
					className="w-12 h-20 bg-indigo-400 rounded-xl indigo-box"
				></div>
				<div
					id="indigo-2"
					className="w-12 h-20 bg-indigo-500 rounded-xl indigo-box"
				></div>
				<div
					id="indigo-3"
					className="w-12 h-20 bg-indigo-600 rounded-xl indigo-box"
				></div>
				<div
					id="indigo-4"
					className="w-12 h-20 bg-indigo-700 rounded-xl indigo-box"
				></div>
				<div
					id="indigo-5"
					className="w-12 h-20 bg-indigo-800 rounded-xl indigo-box"
				></div>
				<div
					id="indigo-6"
					className="w-12 h-20 bg-indigo-900 rounded-xl indigo-box"
				></div>
				<div
					id="indigo-6"
					className="w-12 h-20 bg-indigo-950 rounded-xl indigo-box"
				></div>
			</div>
		</div>
	)
}

export default GsapStagger
