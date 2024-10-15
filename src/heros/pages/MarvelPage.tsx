import { HeroList } from '../components/HeroList'
import { useAppStore } from '../../stores/useAppStore';
import { HeaderSectionHerosListComponent } from '../components';

export const MarvelPage = () => {

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
