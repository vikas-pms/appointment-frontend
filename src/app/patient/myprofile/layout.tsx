import SidebarPage from '@/components/patient/layout';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <SidebarPage children={children} />
  )
}

export default layout