import { Sparkles } from "lucide-react"
import Image from "next/image"

export function MissionBanner() {
  return (
    <div className="bg-[#eb7622] py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
          {/* Text Section */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-center sm:text-left">
            <span className="text-white font-medium text-base sm:text-lg whitespace-nowrap">Healing</span>
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0" />
            <span className="text-white font-medium text-base sm:text-lg whitespace-nowrap">Hearts</span>
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0" />
            <span className="text-white font-medium text-base sm:text-lg whitespace-nowrap">Aligning Souls</span>
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0" />
            <span className="text-white font-medium text-base sm:text-lg whitespace-nowrap">Restoring</span>
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0" />
            <span className="text-white font-medium text-base sm:text-lg whitespace-nowrap">Purpose</span>
          </div>

          {/* Logo Section - Placeholder for user's logo */}
          <div className="flex-shrink-0">
            <div className="relative h-16 w-40 sm:h-20 sm:w-48">
              {/* User will replace this with their actual logo */}
              <Image src="/aligned-logo.avif" alt="Aligned Heart & Soul" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
