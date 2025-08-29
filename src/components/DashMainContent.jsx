import React from 'react'
import Dashimg1 from '../images/dashimg1.png'
import { newLanunch } from '../constants/index.js'

const DashMainContent = () => {
  return (
    <div className="bg-gray-200 min-h-screen px-4 pb-6 ">
       <section className="mt-5">
        <h2 className="text-lg font-bold mb-1">Collect contest</h2>
        <p className="text-gray-500 text-sm mb-3">Participate and win amazing prices</p>
        <div className="w-screen h-48">
            <img src={Dashimg1} alt="hi" />
        </div>
      </section>
      {/* Newly Launched */}
       <section className="mt-8">
        <h2 className="text-lg font-bold mb-3">Newly launched</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {newLanunch.map((item, index) => (
            <div key={index} className="min-w-[120px] h-32 bg-white rounded-lg flex-shrink-0 flex items-center justify-center">
              <img src={item.imgPath} alt={`New Launch ${index + 1}`} className="h-35" />
            </div>
          ))}
        </div>
      </section> 
      
       <footer className="w-full flex flex-col items-center mt-10 pb-4">
        <img src="../public/images/dashMac.png" alt="hi" />
      </footer> 
    </div>
  )
}

export default DashMainContent