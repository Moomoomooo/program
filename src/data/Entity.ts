import { SkillUser } from '#data/SkillUser.ts';
import { DicePool } from '#DicePool.ts';

export abstract class Entity extends SkillUser {
  
  tempStats: number[];
  hp: number;
  dice: DicePool;

  constructor(name: string, stats: number[], dice: string) {
    super();
    this.tempStats = [0, 0, 0, 0, 0, 0];
    this.hp = this.stats[0];
    this.dice = new DicePool(dice);
    
  }

  
}
