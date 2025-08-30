import React from 'react'
import { useState } from 'react'
import { featuredImages, freebiesImages } from '../constants/index.js'
import { flatOffImages } from '../constants/index.js'

const tabs = ['All', "Featured", "Freebies", 'Flat Off']

const DealsMainContent = () => {
  const [selectedTab, setSelectedTab] = useState('All')
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col ">

      <div className='fixed top-0 left-0 right-0 bg-gray-100 z-50 border-b border-gray-300'>
        {/* Header */}
        <div className="pt-6 px-6 pb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-lg font-poppins">DEALS</span>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 py-1 px-2 rounded text-sm w-28"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto py-3 whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-1 rounded-full border ${selectedTab === tab
                    ? "border-red-600 text-red-600 font-bold"
                    : "border-transparent text-gray-500"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Featured Grid */}
      <div className='flex-1 pt-[120px] pb-[60px] overflow-y-auto'>
        {(selectedTab === "All" || selectedTab === "Featured") && (
          <div className="p-4 ">
            <div className="font-bold text-xl mb-3">Featured</div>
            <div className='overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded p-1'>
              <div className="grid grid-cols-2 gap-3  ">
                {/* Top Row: 2 cards */}
                <div className="bg-white rounded-xl shadow flex flex-col items-center justify-between p-2 h-28 relative">
                  <img
                    src={featuredImages[0].imgPath}
                    alt={featuredImages[0].alt}
                    className="object-contain w-full h-full mb-2 "
                  />
                  <button className="bg-yellow-400 rounded text-xs px-3 py-1 font-semibold text-black absolute bottom-2">
                    {featuredImages[0].btn}
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow flex flex-col items-center justify-between p-2 h-28 relative">
                  <img
                    src={featuredImages[1].imgPath}
                    alt={featuredImages[1].alt}
                    className="object-contain w-full h-full mb-2"
                  />
                  <button className="bg-yellow-400 rounded text-xs px-3 py-1 font-semibold text-black absolute bottom-2">
                    {featuredImages[1].btn}
                  </button>
                </div>

                {/* Middle: Wide card takes 2 columns */}
                <div className="bg-white rounded-xl shadow flex flex-col items-center justify-between p-2 h-36 col-span-2 relative">
                  <img
                    src={featuredImages[2].imgPath}
                    alt={featuredImages[2].alt}
                    className="object-contain w-full h-full mb-2"
                  />
                  <button className="bg-yellow-400 rounded text-xs px-3 py-1 font-semibold text-black absolute bottom-2">
                    {featuredImages[2].btn}
                  </button>
                </div>

                {/* Third Row: 2 cards side-by-side */}
                <div className="bg-white rounded-xl shadow flex flex-col items-center justify-between p-2 h-28 relative">
                  <img
                    src={featuredImages[3].imgPath}
                    alt={featuredImages[3].alt}
                    className="object-contain w-full h-full mb-2"
                  />
                  <button className="bg-yellow-400 rounded text-xs px-3 py-1 font-semibold text-black absolute bottom-2">
                    {featuredImages[3].btn}
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow flex flex-col items-center justify-between p-2 h-28 relative">
                  <img
                    src={featuredImages[4].imgPath}
                    alt={featuredImages[4].alt}
                    className="object-contain w-full h-full mb-2"
                  />
                  <button className="bg-yellow-400 rounded text-xs px-3 py-1 font-semibold text-black absolute bottom-2">
                    {featuredImages[4].btn}
                  </button>
                </div>

                {/* Fourth Row: 1 card full width */}
                <div className="bg-white rounded-xl shadow flex flex-col items-center justify-between p-2 h-36 col-span-2 relative">
                  <img
                    src={featuredImages[5].imgPath}
                    alt={featuredImages[5].alt}
                    className="object-contain w-full h-full mb-2"
                  />
                  <button className="bg-yellow-400 rounded text-xs px-3 py-1 font-semibold text-black absolute bottom-2">
                    {featuredImages[5].btn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Freebies Grid */}
        <div className="p-4">
          <div className="font-bold text-xl mb-3">Freebies</div>
          <div className='overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded p-1'>
            <div className="grid grid-cols-2 gap-3">
              {/* First row: 2 cards side by side */}
              <div className="bg-white rounded-xl shadow flex flex-col items-center justify-between p-2 h-28 relative">
                <img
                  src={freebiesImages[0].imgPath}
                  alt={freebiesImages[0].alt}
                  className="object-contain w-full h-full mb-2"
                />
                <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 rounded text-xs px-2 py-1 font-semibold text-black">
                  {freebiesImages[0].btn}
                </button>
              </div>
              <div className="bg-white rounded-xl shadow flex flex-col items-center justify-between p-2 h-28 relative">
                <img
                  src={freebiesImages[1].imgPath}
                  alt={freebiesImages[1].alt}
                  className="object-contain w-full h-full mb-2"
                />
                <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 rounded text-xs px-2 py-1 font-semibold text-black">
                  {freebiesImages[1].btn}
                </button>
              </div>

              {/* Second row: wide card spanning 2 columns */}
              <div className="bg-white rounded-xl shadow flex flex-col items-center justify-between p-2 h-32 col-span-2 relative">
                <img
                  src={freebiesImages[2].imgPath}
                  alt={freebiesImages[2].alt}
                  className="object-contain w-full h-full mb-2"
                />
                <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 rounded text-xs px-2 py-1 font-semibold text-black">
                  {freebiesImages[2].btn}
                </button>
              </div>

              {/* Third row: single card on left */}
              <div className="bg-white rounded-xl shadow flex flex-col items-center justify-between p-2 h-28 relative">
                <img
                  src={freebiesImages[3].imgPath}
                  alt={freebiesImages[3].alt}
                  className="object-contain w-full h-full mb-2"
                />
                <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 rounded text-xs px-2 py-1 font-semibold text-black">
                  {freebiesImages[3].btn}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Flat Off Grid */}
         {(selectedTab === "All" || selectedTab === "Flat Off") && (
        <div className="p-4">
      <div className="font-bold text-xl mb-3">Flat Off</div>
      <div className="flex flex-col gap-4">
        {flatOffImages.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow flex flex-col items-center justify-between p-2 h-40 relative"
          >
            <img
              src={item.imgPath}
              alt={item.alt}
              className="object-contain w-full h-full mb-2 rounded-xl"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 rounded text-xs px-4 py-1 font-semibold text-black shadow">
              {item.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
         )}
      </div>
    </div>
  )
}

export default DealsMainContent