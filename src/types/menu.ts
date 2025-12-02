export interface MenuItem {
  id: string;
  name: string;
  nameTamil: string;
  price: number;
  description: string;
  descriptionTamil: string;
  image: string;
  category: MenuCategory;
  popular?: boolean;
}

export type MenuCategory = 'breakfast' | 'lunch' | 'snacks' | 'juice' | 'dinner';

export interface Translation {
  en: string;
  ta: string;
}
