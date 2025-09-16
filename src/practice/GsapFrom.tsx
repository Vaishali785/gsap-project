import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapFrom = () => {
	useGSAP(() => {
		gsap.from("#red-box", {
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
			<h2 className="text-xs ">2. GSAP From</h2>
			<div className="bg-slate-300  w-[400px] h-fit p-4 rounded-2xl  ">
				<div id="red-box" className="w-20 h-20 bg-red-500 rounded-xl"></div>
			</div>
		</div>
	)
}

export default GsapFrom
