import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ExploreWorkBar() {
  return (
    <Link href="/works">
      <div className="w-full bg-[#f99216] py-1 px-6 flex items-center justify-center text-white hover:bg-[#e54a1a] transition-colors cursor-pointer">
        <span className="text-sm font-medium tracking-wide mr-2">EXPLORE OUR WORK</span>
        <ArrowRight size={16} />
      </div>
    </Link>
  )
}