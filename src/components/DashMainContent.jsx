import React from 'react'
import Dashimg1 from '../images/dashimg1.png'
// import { products } from '../constants/DashComponents'

const DashMainContent = () => {
  return (
    <div className="bg-white min-h-screen px-4 pb-6">
       <section className="mt-5">
        <h2 className="text-lg font-bold mb-1">Collect contest</h2>
        <p className="text-gray-500 text-sm mb-3">Participate and win amazing prices</p>
        <div className="w-screen h-48">
            <img src={Dashimg1} alt="hi" />
        </div>
      </section>
      {/* Newly Launched */}
      {/* <section className="mt-8">
        <h2 className="text-lg font-bold mb-3">Newly launched</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {products.map((item, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 w-36 rounded-xl shadow ${item.bg} p-2 flex flex-col items-center`}
            >
              <img src={item.img} alt={item.name} className="h-16 mb-3 object-contain" />
              <span className={`font-extrabold text-xs ${item.text} mb-1`}>{item.name}</span>
              <span className="text-black text-sm font-semibold mb-1">Just at {item.price}</span>
              <button className="bg-yellow-400 text-black py-1 px-2 rounded font-semibold text-xs">{item.button}</button>
            </div>
          ))}
        </div>
      </section> */}
      
      {/* <footer className="mt-10 flex flex-col items-center">
        <img src={IMAGES.MCD_LOGO} alt="McDonald's" className="h-12 mb-2" />
        <div className="font-bold text-yellow-500 text-2xl">I'm Lovin' It</div>
        <div className="text-xs text-gray-400 mt-1">DESIGNED BY UX.ALOK</div>
      </footer> */}
    </div>
  )
}

export default DashMainContent