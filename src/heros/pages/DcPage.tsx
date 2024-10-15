import React from 'react'
import { HeroList } from '../components/HeroList'
import { HeaderSectionHerosListComponent } from '../components'
import { useAppStore } from '../../stores/useAppStore'

export const DcPage = () => {

  const publisherFilter = useAppStore((state) => state.publisherFilter);

  return (
    <div className="container mx-auto px-4 py-4">
      {/* Header section */}
      <HeaderSectionHerosListComponent publisher={publisherFilter} />
      {/* Hero List */}
      <div className="mt-8">
        <HeroList />
      </div>
    </div>
  )

}
