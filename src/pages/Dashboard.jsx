import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DashMainContent from '../components/DashMainContent'

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <main>
        <DashMainContent/>
      </main>
      <Footer/>
    </div>
  )
}

export default Dashboard





