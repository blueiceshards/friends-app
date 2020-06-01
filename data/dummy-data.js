import ActivityType from '../models/ActivityType';
import Activity from '../models/Activity';

export const ACTIVITYTYPES = [
  new ActivityType(
    'at1',
    'Romantic Dinner',
    'https://images.unsplash.com/photo-1529521001454-2cf987c34008?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'Unwind with a romantic dinner after work.'),
  new ActivityType(
    'at2',
    'Outdoors',
    'https://images.unsplash.com/photo-1541518926503-a6fdabd94147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'Enjoy an adventurous date surrounded by nature.'),
  new ActivityType(
    'at3',
    'Classes',
    'https://images.unsplash.com/photo-1576097449802-2aa05e59b212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'Explore mutual hobbies through an interactive class.'
  )
];

export const ACTIVITIES = [
  new Activity(
    'a1',
    ['at1'],
    'L\'amuse Steakhouse',
    'https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2028&q=80',
    'Delicious steaks with a Tuscan twist.'),
  new Activity(
    'a2',
    ['at1'],
    'Deluxe Burgers',
    'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
    'Succulent freshly ground beef with homemade buttered buns.'),
  new Activity(
    'a3',
    ['at1'],
    'Pasta Wala',
    'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'Mouthwatering French-Asian fusion pasta.'),
  new Activity(
    'a4',
    ['at2'],
    'Lake Bella Boardwalk',
    'https://images.unsplash.com/photo-1584129495368-9a97c47c4740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80',
    'Enjoy the tranquility of flora and fauna on this romantic trail.'),
  new Activity(
    'a5',
    ['at2'],
    'Playa del Miralles',
    'https://images.unsplash.com/photo-1424581342241-2b1aba4d3462?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    'Feel the sand in your feet and the wind in your hair.'),
  new Activity(
    'a6',
    ['at3'],
    'Gastone\'s Beginner Baking',
    'https://images.unsplash.com/photo-1553993818-564c60f8e705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'Learn how to make decadent pastries completely from scratch.'),
  new Activity(
    'a7',
    ['at3'],
    'Ketogenic Kiosk',
    'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
    'Learn all about food prep and healthy ketogenic cooking.'),
  new Activity(
    'a8',
    ['at3'],
    'Rock & Roll Climbing',
    'https://images.unsplash.com/photo-1578886141033-b9f066572135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'Safely learn the ropes of rock climbing with a qualified instructor.'),
];