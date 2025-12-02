import { useState, useEffect } from 'react';
import { MenuItem } from '@/types/menu';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface FoodCardProps {
  item: MenuItem;
  index: number;
}

const FoodCard = ({ item, index }: FoodCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { language, t } = useLanguage();
  const { toast } = useToast();

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      const favoriteIds = JSON.parse(favorites);
      setIsFavorite(favoriteIds.includes(item.id));
    }
  }, [item.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    const favorites = localStorage.getItem('favorites');
    const favoriteIds = favorites ? JSON.parse(favorites) : [];
    
    if (isFavorite) {
      const newFavorites = favoriteIds.filter((id: string) => id !== item.id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      favoriteIds.push(item.id);
      localStorage.setItem('favorites', JSON.stringify(favoriteIds));
      setIsFavorite(true);
      
      // Play "ding" sound
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBzbM8dpxKAUrgc0=');
      audio.play().catch(() => {});
      
      toast({
        description: t('Added to favorites!', 'விருப்பங்களில் சேர்க்கப்பட்டது!'),
      });
    }
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'd like to order: ${item.name}`;
    const whatsappUrl = `https://wa.me/919443052290?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Card
          className="overflow-hidden cursor-pointer hover-lift shadow-food bg-card"
          onClick={() => setIsOpen(true)}
        >
          <div className="relative aspect-square overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <button
              onClick={toggleFavorite}
              className="absolute top-2 right-2 bg-card/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:scale-110 transition-transform z-10"
              aria-label="Toggle favorite"
            >
              <Heart
                size={20}
                className={isFavorite ? 'fill-destructive text-destructive' : 'text-muted-foreground'}
              />
            </button>
            {item.popular && (
              <div className="absolute top-2 left-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                {t('Popular', 'பிரபலம்')}
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">
              {language === 'en' ? item.name : item.nameTamil}
            </h3>
          </div>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {language === 'en' ? item.name : item.nameTamil}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full aspect-video object-cover rounded-lg"
            />
            <p className="text-muted-foreground">
              {language === 'en' ? item.description : item.descriptionTamil}
            </p>
            <div className="flex justify-center mt-4">
              <Button
                onClick={handleWhatsAppOrder}
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2 w-full"
              >
                <FaWhatsapp size={20} />
                {t('Order via WhatsApp', 'வாட்ஸ்அப்பில் ஆர்டர்')}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FoodCard;
