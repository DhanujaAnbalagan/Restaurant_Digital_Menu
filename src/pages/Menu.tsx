import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { menuItems } from '@/data/menuData';
import { MenuCategory } from '@/types/menu';
import FoodCard from '@/components/FoodCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const categories: { id: MenuCategory; label: string; labelTamil: string }[] = [
  { id: 'breakfast', label: 'Tiffin', labelTamil: 'டிஃபின்' },
  { id: 'lunch', label: 'Rice & Meals', labelTamil: 'சாதம் & மீல்ஸ்' },
  { id: 'snacks', label: 'Tea & Coffee', labelTamil: 'டீ & காபி' },
  { id: 'dinner', label: 'Chinese Varieties', labelTamil: 'சீன வகைகள்' },
  { id: 'juice', label: 'Juice', labelTamil: 'ஜூஸ்' },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('breakfast');
  const [searchQuery, setSearchQuery] = useState('');
  const { language, t } = useLanguage();

  const filteredItems = useMemo(() => {
    let items = menuItems.filter((item) => item.category === selectedCategory);
    
    if (searchQuery.trim()) {
      items = items.filter((item) => {
        const searchLower = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(searchLower) ||
          item.nameTamil.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          item.descriptionTamil.toLowerCase().includes(searchLower)
        );
      });
    }
    
    return items;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            {t('Our Menu', 'எங்கள் மெனு')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('Delicious vegetarian dishes made with love', 'அன்புடன் தயாரிக்கப்பட்ட சுவையான சைவ உணவுகள்')}
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder={t('Search dishes...', 'உணவுகளைத் தேடுங்கள்...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className="transition-smooth"
            >
              {language === 'en' ? category.label : category.labelTamil}
            </Button>
          ))}
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <FoodCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {t('No items in this category yet', 'இந்த வகையில் இன்னும் பொருட்கள் இல்லை')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
