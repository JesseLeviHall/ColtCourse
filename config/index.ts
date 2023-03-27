interface Chicken {
  breed: string
  layEggs: (days: number) => number
  eggsPerWeek: number;
}

const norma: Chicken = {
  breed: 'Jersey Giant',
  eggsPerWeek: 5,
  layEggs: (days: number) => (days / 7) * norma.eggsPerWeek,
}

const debra: Chicken = {
  breed: 'Mini Teacup',
  layEggs: () => 12 / 7,
  eggsPerWeek: 12
}

//write a funciton that calls the layEggs method
const lay = (eggLayer: Chicken, days: number) => {
  eggLayer.layEggs(days);
}

lay(norma, 3);
lay(debra, 5);
