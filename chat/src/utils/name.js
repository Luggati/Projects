
import Chance from 'chance';

const chance = new Chance();

export default function generateUsername() {
  return chance.name({ nationality: 'en' }); 
}

