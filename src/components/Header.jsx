import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between pt-7 px-5 bg-white">
      <div>
        <div className="flex items-center font-semibold text-base text-gray-800">
          Delivery <span className="ml-2 text-base">▼</span>
        </div>
        <div className="mt-1">
          <span className="font-bold">Home:</span>
          <span className="text-gray-500 ml-2 text-sm">
            836, 6B, Shree colony
          </span>
        </div>
      </div>
      <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center bg-white">
        {/* Replace with avatar if needed */}
        <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M12 14c-4 0-6 2-6 3.5V20h12v-2.5c0-1.5-2-3.5-6-3.5z"/>
        </svg>
      </div>
    </div>

  )
}

export default Header