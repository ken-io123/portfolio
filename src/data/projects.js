// NOTE: Place your local image at `src/assets/images/pic1.png`
// then the import below will include it in the bundle.
import ecomImg from '@/assets/images/pic1.png';
import ecomImg2 from '@/assets/images/pic2.png';
// Replace the brand project screenshot images with your local files:
// Put the files at `src/assets/images/pic1.1.png` and `src/assets/images/pic1.2.png`
import brandImg1 from '@/assets/images/pic1.1.png';
import brandImg2 from '@/assets/images/pic1.2.png';
// Mobile app screenshots used for the Mobile App UI/UX card (third card)
// Place your mobile screenshots at `src/assets/images/pic1.3.png` and `src/assets/images/pic1.4.png`
// Note: primary should be pic1.4 then pic1.3 for the gallery
import mobileImg1 from '@/assets/images/pic1.4.png';
import mobileImg2 from '@/assets/images/pic1.3.png';

export const projects = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    category: 'Web Designer',
    description:
      'A sleek and intuitive e-commerce platform with seamless user experience and modern design principles.',
    image: ecomImg2,
    images: [ecomImg2, ecomImg],
    tags: ['React', 'Tailwind', 'Node.js'],
    link: '#',
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    category: 'Branding',
    description:
      'Complete brand identity package including logo, color palette, typography, and brand guidelines.',
    // Primary screenshot shown in the grid
    image: brandImg1,
    // Additional images used in the gallery/scroll view
    images: [brandImg1, brandImg2],
    tags: ['Illustrator', 'Branding', 'Design'],
    link: '#',
  },
  {
    id: 3,
    title: 'Mobile App UI/UX',
    category: 'UI/UX Design',
    description:
      'Intuitive mobile application design focused on user experience and modern interface patterns.',
    // Primary screenshot for the card grid
    image: mobileImg1,
    // Images used in the card's gallery/scroll view
    images: [mobileImg1, mobileImg2],
    tags: ['Figma', 'UI/UX', 'Mobile'],
    link: '#',
  },
  {
    id: 4,
    title: 'Editorial Illustration',
    category: 'Illustration',
    description:
      'Custom illustrations for editorial content, bringing stories to life with unique artistic style.',
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80',
    tags: ['Illustration', 'Digital Art', 'Creative'],
    link: '#',
  },
  {
    id: 5,
    title: 'Corporate Website',
    category: 'Web Developer',
    description:
      'Professional corporate website with responsive design and engaging animations.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Framer'],
    link: '#',
  },
  {
    id: 6,
    title: 'Social Media Campaign',
    category: 'Graphic Design',
    description:
      'Comprehensive social media visual campaign with consistent branding and engaging graphics.',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    tags: ['Photoshop', 'Social Media', 'Marketing'],
    link: '#',
  },
];
