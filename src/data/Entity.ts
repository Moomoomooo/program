import { SkillUser } from '#data/SkillUser.ts';
import { DicePool } from '#DicePool.ts';

export abstract class Entity extends SkillUser {
  
  tempStats: number[]; // total change in base stats
  this.tempDmgResists: // total changes in dmg resistances
  hp: number;

  constructor(name: string, stats: number[], dice: string) {
    super();
    this.tempStatChanges = new Array(6);
    this.tempDmgResists = new Array(8);
    this.hp = this.stats[0];
  }

  public calcRawBaseAttackDmg(): number {
    return this.dice.rollAll() + this.
  }
  
}
