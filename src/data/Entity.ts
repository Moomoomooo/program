import { SkillUser } from '#data/SkillUser.ts';

export abstract class Entity extends SkillUser {
  
  tempStats: number[]; // total change in base stats
  this.tempDmgResists: // total changes in dmg resistances
  hp: number;

  constructor(name: string, stats: number[], attackPower: number) {
    super();
    this.tempStatChanges = new Array(6);
    this.tempDmgResists = new Array(8);
    this.hp = this.stats[0];
  }

  public calcRawBaseAttackDmg(): number {
    return this.calcVariableAttackPower(0.85) + this.stats[1]+ this.tempStats[1];
  }

  public calcVariableAttackPower(variability: number): number { // variablity is the lowest % 
    return this.attackPower * (variability/100 + Math.floor(Math.random()*(100-variablity)*2)/100);
  }
  
}
