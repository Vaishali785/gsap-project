import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger) // ScrollTrigger is a plugin, so it needs to be registered

const GsapScrollTrigger = () => {
	const scrollRef = useRef<HTMLDivElement | null>(null)

	useGSAP(
		() => {
			const boxes = gsap.utils.toArray<HTMLElement>(
				scrollRef.current?.children ?? []
			)
			boxes.forEach((box, index) => {
				gsap.to(box, {
					x: 150 * (index + 5),
					rotation: 360,
					borderRadius: index + 10,
					scale: 4,
					scrollTrigger: {
						trigger: box,
						start: "bottom bottom",
						end: "top 5%",
						scrub: true, //smooth animation
					},
				})
			})
		},
		{ scope: scrollRef }
	)
	return (
		<div>
			<h2 className="text-xs ">6. GSAP ScrollTrigger</h2>
			<div
				className="bg-slate-300  w-full h-[2000px] p-4 rounded-2xl items-center flex "
				ref={scrollRef}
			>
				<div
					id="big-box"
					className="w-20 h-20 bg-amber-500 rounded-xl static z-10"
				></div>
				<div id="small-box" className="w-20 h-20 bg-amber-600 rounded-xl"></div>
			</div>
		</div>
	)
}

export default GsapScrollTrigger
