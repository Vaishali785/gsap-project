import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapTo = () => {
	useGSAP(() => {
		gsap.to("#blue-box", {
			x: 250,
			repeat: -1,
			yoyo: true,
			rotation: 360,
			duration: 2,
			ease: "back.inOut",
		})
	}, [])
	return (
		<div>
			<h2 className="text-xs ">1. GSAP to</h2>
			<div className="bg-slate-300  w-[400px] h-fit p-4 rounded-2xl  ">
				<div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-xl"></div>
			</div>
		</div>
	)
}

export default GsapTo
