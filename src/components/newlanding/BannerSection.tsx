import React, { useEffect, useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'

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
		tag: 'Discipline 1', 
		title: 'Communications', 
		subtitle: 'We make your brand talkable', 
		cta: { label: 'Explore Communications', href: '/communications' },
		videoType: 'gumlet',
		videoSrc: '6904627fa5b40b283e125f54'
	},
	{ 
		id: 2, 
		tag: 'Discipline 2', 
		title: 'Creative', 
		subtitle: 'We turn ideas into culture — not ads.', 
		cta: { label: 'Explore Creative', href: '/creative' },
		videoType: 'local',
		videoSrc: '/vid2.mp4'
	},
	{ 
		id: 3, 
		tag: 'Discipline 3', 
		title: 'Media', 
		subtitle: 'We put your message in the right place.', 
		cta: { label: 'Explore Media', href: '/media' },
		videoType: 'gumlet',
		videoSrc: '68a58031faf881d01d012b62'
	},
	{ 
		id: 4, 
		tag: 'Discipline 4', 
		title: 'Technology', 
		subtitle: 'We build software that matters.', 
		cta: { label: 'Explore Technology', href: '/technology' },
		videoType: 'local',
		videoSrc: '/ayurved_cut.mp4'
	},
]

export default function BannerSection({ banners = defaultBanners, interval = 6000 }: { banners?: Banner[]; interval?: number }) {
	const [index, setIndex] = useState(0)
	const [isPlaying, setIsPlaying] = useState(true)
	const hoverRef = useRef(false)
	const progressKey = `${index}-${isPlaying}`

	// Autoplay is driven by the segment fill animation end event below.
	// Keep effect present so React warns less about unused vars if needed in future.
	useEffect(() => {
		// noop: animationend on the `.fill` elements drives the slide change
		return () => {}
	}, [index, isPlaying, interval, banners.length])

	function goTo(i: number) {
		setIndex(((i % banners.length) + banners.length) % banners.length)
	}

	function prev() {
		goTo(index - 1)
	}

	function next() {
		goTo(index + 1)
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
									<h1 className="title">{b.title.split('\n').map((line, idx) => (<span key={idx}>{line}<br/></span>))}</h1>
									{b.subtitle && (
										<p className="subtitle text-xl md:text-2xl font-serif italic text-gray-200 border-l-4 border-orange-500 pl-6 my-6 leading-relaxed max-w-2xl">
											&ldquo;{b.subtitle}&rdquo;
										</p>
									)}
									{b.cta && <a className="cta" href={b.cta.href || '#'}>{b.cta.label} <span className="arrow">→</span></a>}
								</div>
							</div>
						</div>
					)
				})}
			</div>

			<div className="controls">
				<div className="left-controls">
					<button className="icon-btn" onClick={() => setIsPlaying((s) => !s)} aria-label={isPlaying ? 'Pause' : 'Play'}>
						{isPlaying ? <Pause size={14} className="icon" fill="currentColor" /> : <Play size={14} className="icon translate-x-[0.5px]" fill="currentColor" />}
					</button>
					<div className="index">
						<span className="current">{String(index + 1).padStart(2, '0')}</span>
						<span className="divider">/</span>
						<span className="total">{String(banners.length).padStart(2, '0')}</span>
					</div>
				</div>

				<div className="segments">
					{banners.map((_, i) => (
						<div key={i} className={`segment ${i === index ? 'active' : ''}`} onClick={() => goTo(i)}>
							<div
								className="fill"
								style={{ animationDuration: `${interval}ms`, animationPlayState: i === index && isPlaying ? 'running' : 'paused' }}
								data-key={progressKey}
								onAnimationEnd={() => {
									if (i === index && isPlaying) {
										// advance when this segment's fill completes
										goTo(index + 1)
									}
								}}
							/>
						</div>
					))}
				</div>

				<div className="down-arrow">
					<div>⟱</div>
				</div>
			</div>

			
		</section>
	)
}
