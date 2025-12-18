// NOTE: Place your local image at `src/assets/images/pic1.png`
// then the import below will include it in the bundle.
import ecomImg from '@/assets/images/pic1.png';
import ecomImg2 from '@/assets/images/pic2.png';
// Replace the brand project screenshot images with your local files:
// Put the files at `src/assets/images/pic1.1.png` and `src/assets/images/pic1.2.png`
import brandImg1 from '@/assets/images/pic1.1.png';
import brandImg2 from '@/assets/images/pic1.2.png';

export const projects = [
  {
    id: 1,
    title: 'Boarding House Management',
    category: 'Web Application',
    description:
      'A comprehensive platform for seamless tenant monitoring, automated billing, and real-time occupancy tracking with AI support.',
    image: ecomImg2,
    images: [ecomImg2, ecomImg],
    tags: ['React', 'Tailwind', 'ASP.NET Core', 'MySQL'],
    link: '#',
  },
  {
    id: 2,
    title: 'Pharmacy Management',
    category: 'POS & Inventory System',
    description:
      'A specialized Point of Sale system for RS Pharmacy, featuring real-time sales tracking, low-stock alerts, and expiration monitoring.',
    // Primary screenshot shown in the grid
    image: brandImg1,
    // Additional images used in the gallery/scroll view
    images: [brandImg1, brandImg2],
    tags: ['React', 'Tailwind', 'ASP.NET Core', 'MySQL'],
    link: '#',
  },
  {
    id: 3,
    title: 'Mobile App UI/UX',
    category: 'UI/UX Design',
    description:
      'Intuitive mobile application design focused on user experience and modern interface patterns.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    tags: ['Figma', 'UI/UX', 'Mobile'],
    link: '#',
  },
  // Removed three portfolio items (Editorial Illustration, Corporate Website, Social Media Campaign)
];
