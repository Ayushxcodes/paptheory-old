import React, { useEffect, useRef, useState } from 'react'

type Banner = {
	id: number
	tag?: string
	title: string
	subtitle?: string
	cta?: { label: string; href?: string }
	bg?: string
	videoType: 'gumlet' | 'local'
	videoSrc: string
}

const defaultBanners: Banner[] = [
	{ 
		id: 1, 
		tag: 'COMMUNICATIONS', 
		title: 'We make your brand talkable.', 
		subtitle: 'Strategy-first communications that build reputation and protect brand equity.', 
		cta: { label: 'Explore Communications', href: '/communications' },
		videoType: 'gumlet',
		videoSrc: '6904627fa5b40b283e125f54'
	},
	{ 
		id: 2, 
		tag: 'CREATIVE', 
		title: 'We turn ideas into culture.', 
		subtitle: 'Scroll-stopping, social-first creative built to reach Gen Z where they actually are.', 
		cta: { label: 'Explore Creative', href: '/creative' },
		videoType: 'local',
		videoSrc: '/vid2.mp4'
	},
	{ 
		id: 3, 
		tag: 'MEDIA', 
		title: 'We put your message in the right place.', 
		subtitle: 'Data-driven planning and buying that gets the right work in front of the right audience.', 
		cta: { label: 'Explore Media', href: '/media' },
		videoType: 'local',
		videoSrc: '/media.mp4'
	},
	{ 
		id: 4, 
		tag: 'TECHNOLOGY', 
		title: 'We build software that matters.', 
		subtitle: 'Enterprise-grade consulting and product engineering — SAP BTP, AI, cloud and full-stack.', 
		cta: { label: 'Explore Technology', href: '/technology' },
		videoType: 'local',
		videoSrc: '/technology.mp4'
	},
]

export default function BannerSection({ banners = defaultBanners, interval = 6000 }: { banners?: Banner[]; interval?: number }) {
	const [index, setIndex] = useState(0)
	const [isPlaying, setIsPlaying] = useState(true)
	const hoverRef = useRef(false)
	const progressKey = `${index}-${isPlaying}`

	// Autoplay is driven by the segment fill animation end event below.
	useEffect(() => {
		// noop: animationend on the `.fill` elements drives the slide change
		return () => {}
	}, [index, isPlaying, interval, banners.length])

	function goTo(i: number) {
		setIndex(((i % banners.length) + banners.length) % banners.length)
	}

	return (
		<section
			className="banner-viewport"
			style={{ paddingTop: 'var(--navbar-height, 80px)' }}
			onMouseEnter={() => {
				hoverRef.current = true
				setIsPlaying(false)
			}}
			onMouseLeave={() => {
				hoverRef.current = false
				setIsPlaying(true)
			}}
		>
			<div className="slides">
				{banners.map((b, i) => {
					return (
						<div
							key={b.id}
							className={`slide banner-slide-bg ${i === index ? 'active' : ''}`}
							style={b.bg ? { background: b.bg } : {}}
						>
							{b.videoType === 'gumlet' ? (
								<div className="absolute inset-0 -z-10 overflow-hidden w-full h-full">
									<iframe
										src={`https://play.gumlet.io/embed/${b.videoSrc}?playsinline=1&autoplay=1&mute=1&loop=1&background=1`}
										className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-full min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
										allow="autoplay; fullscreen"
									/>
								</div>
							) : (
								<video
									autoPlay
									muted
									loop
									playsInline
									className="absolute inset-0 -z-10 w-full h-full object-cover"
								>
									<source src={b.videoSrc} type="video/mp4" />
								</video>
							)}
							<div className="banner-overlay" style={{ zIndex: -5 }} />
							<div className="container">
								<div className="left">
									{b.tag && <div className="banner-tag">{b.tag}</div>}
									<h1 className="title">{b.title}</h1>
									{b.subtitle && (
										<p className="subtitle-desc">{b.subtitle}</p>
									)}
									<div className="banner-actions">
										{b.cta && (
											<a className="cta-primary" href={b.cta.href || '#'}>
												{b.cta.label} <span className="arrow">→</span>
											</a>
										)}
										<a className="cta-secondary" href="/contact">
											Start a Project
										</a>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>

			<div className="controls">
				<div className="controls-header">
					<div className="index-indicator">
						<span className="current">{String(index + 1).padStart(2, '0')}</span>
						<span className="divider">/</span>
						<span className="total">{String(banners.length).padStart(2, '0')}</span>
					</div>
					<div className="scroll-indicator" onClick={() => {
						document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
					}}>
						SCROLL <span className="scroll-arrow">↓</span>
					</div>
				</div>

				<div className="segments-row">
					{banners.map((b, i) => (
						<div key={i} className={`segment-col ${i === index ? 'active' : ''}`} onClick={() => goTo(i)}>
							<div className="segment-line">
								<div
									className="fill"
									style={{
										transform: i < index ? 'scaleX(1)' : i > index ? 'scaleX(0)' : undefined,
										animationDuration: `${interval}ms`,
										animationPlayState: i === index && isPlaying ? 'running' : 'paused'
									}}
									data-key={progressKey}
									onAnimationEnd={() => {
										if (i === index && isPlaying) {
											// advance when this segment's fill completes
											goTo(index + 1)
										}
									}}
								/>
							</div>
							<div className="segment-label">{b.tag}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
