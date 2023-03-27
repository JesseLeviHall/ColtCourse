interface Chicken {
  breed: string
  layEggs: () => number
  eggsPerWeek: number;
}

//a function that devides eggsPerWeek by 7
const eggsPerDay = (eggLayer: Chicken) => {
  return eggLayer.eggsPerWeek / 7;
}

const norma: Chicken = {
  breed: 'Jersey Giant',
  eggsPerWeek: 5,
  layEggs: () => 5 / 7,
}

const debra: Chicken = {
  breed: 'Mini Teacup',
  layEggs: () => 12 / 7,
  eggsPerWeek: 12
}

//write a funciton that calls the layEggs method
const lay = (eggLayer: Chicken) => {
  eggLayer.layEggs();
}

lay(norma);
lay(debra);
