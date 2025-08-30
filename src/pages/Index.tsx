import { useState } from 'react'
import CyberSOSApp from '@/components/CyberSOSApp'
import About from './About'
import HowToUse from './HowToUse'

const Index = () => {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const handleNavigation = (page: string) => {
    setCurrentPage(page)
  }

  if (currentPage === 'about') {
    return <About onNavigate={handleNavigation} />
  }

  if (currentPage === 'help') {
    return <HowToUse onNavigate={handleNavigation} />
  }

  return <CyberSOSApp onNavigate={handleNavigation} />
};

export default Index;
