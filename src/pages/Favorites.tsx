import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { menuItems } from '@/data/menuData';
import { MenuItem } from '@/types/menu';
import FoodCard from '@/components/FoodCard';
import { Heart } from 'lucide-react';

const Favorites = () => {
  const [favorites, setFavorites] = useState<MenuItem[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      const favoriteIds = JSON.parse(savedFavorites);
      const favoriteItems = menuItems.filter((item) => favoriteIds.includes(item.id));
      setFavorites(favoriteItems);
    }
  }, []);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="text-destructive fill-destructive" size={40} />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              {t('My Favorites', 'எனது விருப்பங்கள்')}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            {t('Your saved favorite dishes', 'உங்கள் விருப்பமான உணவுகள்')}
          </p>
        </motion.div>

        {/* Favorites Grid */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((item, index) => (
              <FoodCard key={item.id} item={item} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="text-muted-foreground mx-auto mb-4" size={60} />
            <p className="text-muted-foreground text-lg">
              {t('No favorites yet. Start adding your favorite dishes!', 'இன்னும் விருப்பங்கள் இல்லை. உங்கள் விருப்பமான உணவுகளைச் சேர்க்கத் தொடங்குங்கள்!')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
