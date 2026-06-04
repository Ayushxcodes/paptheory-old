import React, { useEffect, useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'

type Banner = {
	id: number
	tag?: string
	title: string
	subtitle?: string
	cta?: { label: string; href?: string }
	// if `image` is provided it will be used as background-image, otherwise `bg` (gradient/color)
	image?: string
	bg?: string
}

const defaultBanners: Banner[] = [
	{ id: 1, tag: 'Discipline 1', title: 'Communications', subtitle: 'Strategy-first communications that build reputation, protect brand equity, and shift how audiences think — at national and enterprise scale.', cta: { label: 'Explore Communications', href: '/communications' }, image: '/banner1.png' },
	{ id: 2, tag: 'Discipline 2', title: 'Creative', subtitle: 'We engineer perception in the age of visibility. Idea-led creative across campaigns, identity and content — work built to be remembered, not just noticed.', cta: { label: 'Explore Creative', href: '/creative' }, image: '/banner2.png' },
	{ id: 3, tag: 'Discipline 3', title: 'Media', subtitle: 'Data-driven media planning and buying that gets the right creative in front of the right audience — broadcast, digital and OOH, with analytics to close the loop.', cta: { label: 'Explore Media', href: '/media' }, image: '/banner3.png' },
	{ id: 4, tag: 'Discipline 4', title: 'Technology', subtitle: 'Enterprise-grade consulting and product engineering. We have built field-operations platforms for global companies across 4 regions and we bring that rigour to every engagement', cta: { label: 'Explore Technology', href: '/technology' }, image: '/banner4.png' },
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
					const bgStyle = b.image ? { backgroundImage: `url(${b.image})` } : b.bg ? { background: b.bg } : {}
					return (
						<div key={b.id} className={`slide banner-slide-bg ${i === index ? 'active animate-zoom' : ''}`} style={bgStyle}>
							<div className="banner-overlay" />
							<div className="container">
								<div className="left">
									{b.tag && <div className="tag">{b.tag}</div>}
									<h1 className="title">{b.title.split('\n').map((line, idx) => (<span key={idx}>{line}<br/></span>))}</h1>
									{b.subtitle && <p className="subtitle">{b.subtitle}</p>}
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
