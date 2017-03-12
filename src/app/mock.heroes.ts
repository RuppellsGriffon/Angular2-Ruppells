import { Hero } from './Hero';

function createHero({id, name}) {
  return new Hero(id, name);
}

export const HEROES: Hero[] = [
  createHero({id: 11, name: 'Mr. Nice'}),
  createHero({id: 12, name: 'Narco'}),
  createHero({id: 13, name: 'Bombasto'}),
  createHero({id: 14, name: 'Celeritas'}),
  createHero({id: 15, name: 'Magneta'}),
  createHero({id: 16, name: 'RubberMan'}),
  createHero({id: 17, name: 'Dynama'}),
  createHero({id: 18, name: 'Dr IQ'}),
  createHero({id: 19, name: 'Magma'}),
  createHero({id: 20, name: 'Tornado'})
];