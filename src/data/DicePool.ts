import { DieSize } from '#enums/DieSize.ts'
class Die {
  size: number;
  constructor(size: string) {
    this.size = Number(size.trim().slice(1));
  }

  public roll(): number {
    return 1 + Math.floor(Math.random()*this.size);
  }
}

export class DicePool {
  dice: Die[];

  public rollAll() {
    total: number = 0;
    for (const die of dice) {
      total += die.roll();
  }
    return total;
}
  
    
