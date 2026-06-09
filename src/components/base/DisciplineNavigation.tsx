"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const disciplines = [
	{ name: "Communications", path: "/communications" },
	{ name: "Creative", path: "/creative" },
	{ name: "Media", path: "/media" },
	{ name: "Technology", path: "/technology" },
];

export default function DisciplineNavigation() {
	const pathname = usePathname() || "";
	// Strip trailing slash for matching
	const normalizedPathname = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
	const currentIndex = disciplines.findIndex((d) => d.path === normalizedPathname);

	if (currentIndex === -1) return null;

	const prevIndex = (currentIndex - 1 + disciplines.length) % disciplines.length;
	const nextIndex = (currentIndex + 1) % disciplines.length;

	const prev = disciplines[prevIndex];
	const next = disciplines[nextIndex];

	return (
		<div className="w-full bg-[#fcfcfc] border-t-4 border-[#e8500a] py-16 md:py-20">
			<div className="mx-auto max-w-[1200px] px-6 flex flex-row justify-between items-center">
				
				{/* Previous Link */}
				<Link href={prev.path} className="group flex flex-col gap-2 cursor-pointer">
					<span className="text-[10px] md:text-xs text-[#e8500a] font-semibold tracking-[0.2em] uppercase">
						Previous
					</span>
					<span className="font-serif text-2xl md:text-4xl text-neutral-800 transition-colors duration-300 group-hover:text-[#e8500a]">
						← {prev.name}
					</span>
				</Link>

				{/* Next Link */}
				<Link href={next.path} className="group flex flex-col gap-2 items-end cursor-pointer">
					<span className="text-[10px] md:text-xs text-[#e8500a] font-semibold tracking-[0.2em] uppercase">
						Next
					</span>
					<span className="font-serif text-2xl md:text-4xl text-neutral-800 transition-colors duration-300 group-hover:text-[#e8500a]">
						{next.name} →
					</span>
				</Link>

			</div>
		</div>
	);
}
