interface Chicken {
  breed: string
  layEggs: () => void
  eggsPerWeek: number;
}

const norma: Chicken = {
  breed: 'Jersey Giant',
  layEggs: () => console.log('Norma laid an egg!'),
  eggsPerWeek: 5
}

const debra: Chicken = {
  breed: 'Mini Teacup',
  layEggs: () => console.log('Debra laid an egg!'),
  eggsPerWeek: 2
}