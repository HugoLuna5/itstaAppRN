import {images} from '..';

const {teacher1, teacher2, teacher3, teacher4, school1, school2, school3} =
  images;
export const welcomeScreenData = {
  title: `Let's find the "A" with us`,
  subtitle: `Please Sign in to view personalized recommendations`,
};

export const gradesData = [
  'Grade 1-5',
  'Grade 6-9',
  'Grade 10-11',
  'Grade 12-13',
];

export const provincesData = [
  'Central',
  'Eastern',
  'North Central',
  'northern',
  'north western',
  'sabaragamuwa',
  'southern',
  'uva',
  'western',
];

export const teacherData = [
  {
    name: 'Cassie Valdez',
    subject: 'Biology',
    image: teacher1,
  },
  {
    name: 'Paul Simons',
    subject: 'Chemistry',
    image: teacher2,
  },
  {
    name: 'Simon Patrick',
    subject: 'Computer Science',
    image: teacher4,
  },
  {
    name: 'Graham Osbor',
    subject: 'Physics',
    image: teacher3,
  },
];

export const institutionData = [
  {
    name: 'Victory College',
    field: 'Bio Science',
    description:
      'Studying how CBD awareness and availability as it related to pain management alternatives.',
    rating: '4.5',
    reviews: '413',
    image: school1,
  },
  {
    name: 'New Montana',
    field: 'Bio Science',
    description:
      'Montana Higher Educational Institute. Gampaha montana.gampaha@gmail.com',
    rating: '4.1',
    reviews: '354',
    image: school2,
  },
  {
    name: 'Susipwan College',
    field: 'Bio Science',
    description:
      'This is a private higher education center which conducting classes for GCE AL Students.',
    rating: '3.0',
    reviews: '745',
    image: school3,
  },
  {
    name: `Simon's Rock College`,
    field: 'Computer Science',
    description: 'Early college for gifted high schoolers',
    rating: '4.1',
    reviews: '354',
    image: school2,
  },
];

export const areaFilters = ['Island', 'Province', 'Districts'];

export const subjectFilters = [
  'All Subjects',
  'Biology',
  'Chemistry',
  'Physics',
  'Science for Technology',
];

export const careers = [
  {
    id: 1,
    name: 'Agronomía',
    url: 'https://itsta.edu.mx/agronomia/',
    image: 'https://itsta.edu.mx/wp-content/uploads/2024/04/AGRONOMIA.png',
  },

  {
    id: 2,
    name: 'Ambiental',
    url: 'https://itsta.edu.mx/ambiental/',
    image: 'https://itsta.edu.mx/wp-content/uploads/2024/04/AMBIENTAL.png',
  },

  {
    id: 3,
    name: 'Contador Publico',
    url: 'https://itsta.edu.mx/contador-publico/',
    image:
      'https://itsta.edu.mx/wp-content/uploads/2024/05/contador-publico.png',
  },

  {
    id: 4,
    name: 'Electrónica',
    url: 'https://itsta.edu.mx/electronica/',
    image: 'https://itsta.edu.mx/wp-content/uploads/2024/04/ELECTRONICA.png',
  },

  {
    id: 5,
    name: 'Gestion Empresarial',
    url: 'https://itsta.edu.mx/gestion-empresarial/',
    image: 'https://itsta.edu.mx/wp-content/uploads/2024/04/GESTION.png',
  },

  {
    id: 6,
    name: 'Industrial',
    url: 'https://itsta.edu.mx/industrial/',
    image: 'https://itsta.edu.mx/wp-content/uploads/2024/04/INDUSTRIAL.png',
  },

  {
    id: 7,
    name: 'Mecatrónica',
    url: 'https://itsta.edu.mx/mecatronica-2/',
    image: 'https://itsta.edu.mx/wp-content/uploads/2024/04/mecatronica-1.png',
  },

  {
    id: 8,
    name: 'Petrolera',
    url: 'https://itsta.edu.mx/petrolera/',
    image: 'https://itsta.edu.mx/wp-content/uploads/2024/04/petrolera.png',
  },

  {
    id: 9,
    name: 'Sistemas Computacionales',
    url: 'https://itsta.edu.mx/sistemas-computacionales/',
    image:
      'https://itsta.edu.mx/wp-content/uploads/2024/04/INGENIERIA-EN-SISTEMAS-COMPUTACIONALES.png',
  },
];
