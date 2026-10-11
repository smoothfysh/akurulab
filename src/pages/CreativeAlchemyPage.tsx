import React from 'react';
import { BookHero } from '../components/BookHero';
import { WhereToBuy } from '../components/WhereToBuy';
import { CroatianEdition } from '../components/CroatianEdition';

interface CreativeAlchemyPageProps {
  onBackHome?: () => void;
  onOpenExcerpt: () => void;
  onOpenCroatianOrder: () => void;
}

export const CreativeAlchemyPage: React.FC<CreativeAlchemyPageProps> = ({
  onOpenExcerpt,
  onOpenCroatianOrder,
}) => {
  return (
    <div className="pt-16 animate-in fade-in duration-300">
      {/* Section 1: Book Showcase Hero ("It's just tits" / "To su samo sise") */}
      <BookHero
        onOpenExcerpt={onOpenExcerpt}
        onOpenCroatianOrder={onOpenCroatianOrder}
      />

      {/* Section 2: Global Availability - Amazon Stores */}
      <WhereToBuy />

      {/* Section 3: Croatian Edition ("To su samo sise") */}
      <CroatianEdition onOpenOrderModal={onOpenCroatianOrder} />
    </div>
  );
};
