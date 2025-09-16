import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapFromTo = () => {
	useGSAP(() => {
		gsap.fromTo(
			"#green-box",
			{
				x: 0,
				rotation: 0,
				borderRadius: 0,
			},
			{
				x: 250,
				repeat: -1,
				yoyo: true,
				rotation: 360,
				borderRadius: "100%",
				duration: 2,
				ease: "power1.inOut",
			}
		)
	}, [])
	return (
		<div>
			<h2 className="text-xs">3. GSAP FromTo</h2>
			<div className="bg-slate-300  w-[400px] h-fit p-4 rounded-2xl  ">
				<div id="green-box" className="w-20 h-20 bg-green-500 rounded-xl"></div>
			</div>
		</div>
	)
}

export default GsapFromTo
