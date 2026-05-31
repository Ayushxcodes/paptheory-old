import React, { useEffect, useRef, useState } from 'react'

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
	{ id: 1, tag: 'Tata Stories', title: 'Ten Years of Jaguar\nTCS Racing', subtitle: 'The race-to-innovate strategy behind Formula E\'s most successful team', cta: { label: 'Story and pics' }, image: '' },
	{ id: 2, tag: 'Feature', title: 'Creative Motion', subtitle: 'Interactions that matter', cta: { label: 'Explore' }, bg: 'linear-gradient(120deg,#a18cd1,#fbc2eb)' },
	{ id: 3, tag: 'Project', title: 'Digital Craft', subtitle: 'Pixel-perfect delivery', cta: { label: 'See work' }, bg: 'linear-gradient(120deg,#84fab0,#8fd3f4)' },
	{ id: 4, tag: 'Insight', title: 'Human Stories', subtitle: 'Work that connects', cta: { label: 'Read' }, bg: 'linear-gradient(120deg,#fccb90,#d57eeb)' },
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
						{isPlaying ? '||' : '▶'}
					</button>
					<div className="index">{index + 1} / {banners.length}</div>
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
