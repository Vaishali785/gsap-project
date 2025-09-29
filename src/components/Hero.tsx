import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

const Hero = () => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const isMobile = useMediaQuery({ maxWidth: 767 })
	useGSAP(() => {
		const heroTextSplit = new SplitText(".title", { type: "chars,words" })
		const heroParaSplit = new SplitText(".subtitle", { type: "lines" })

		heroTextSplit.chars.forEach((char) => char.classList.add("text-gradient"))

		gsap.from(heroTextSplit.chars, {
			yPercent: "100",
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.05,
		})
		gsap.from(heroParaSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			delay: 1,
			stagger: 0.06,
			ease: "expo.out",
		})

		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#hero",
					start: "center top",
					end: "bottom top",
					scrub: true,
				},
			})
			.to(".right-leaf", { y: 200 }, 0)
			.to(".left-leaf", { y: -200 }, 0)

		const startValue = isMobile ? "top 50%" : "center 60%"
		const endValue = isMobile ? "120% top" : "bottom top"

		const videoTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: "video",
				start: startValue,
				end: endValue,
				scrub: true,
				pin: true,
			},
		})

		if (videoRef.current) {
			videoRef.current.onloadedmetadata = () => {
				if (!videoRef.current) return
				videoTimeline.to(videoRef.current, {
					currentTime: videoRef.current.duration,
				})
			}
		}
	}, [])
	return (
		<>
			<section id="hero" className="noisy">
				<h1 className="title">MOJITO</h1>
				<img
					src="/images/hero-left-leaf.png"
					alt="left-leaf"
					className="left-leaf"
				/>
				<img
					src="/images/hero-right-leaf.png"
					alt="right-leaf"
					className="right-leaf"
				/>

				<div className="body">
					<div className="content">
						<div className="space-y-5 hidden lg:block">
							<p>Cool. Crisp. Classic.</p>
							<p className="subtitle">
								Sip the Spirit <br /> of Summer
							</p>
						</div>

						<div className="view-cocktails">
							<div className="hidden lg:block">
								<p className="subtitle ">
									Every cocktail on our menu is a blend of premium ingredients,
									creative flair, and timeless recipes - designed to delight
									your senses.
								</p>
								<a href="#cocktails">View Cocktails</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<video
				src="/videos/output.mp4"
				muted
				playsInline
				preload="auto"
				ref={videoRef}
			/>
		</>
	)
}

export default Hero
