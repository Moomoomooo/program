import { Entity } from '#data/Entity.ts';
import { Skill } from "#types/Skill.ts';
  
export class Ally extends Entity {
  level: number;
  baseAttackPower: number;
  baseStats: number[];
  skillData: [number, skill][];
  powerScale: () => number;
  
  
  constructor(name: string, stats: number[], attackPower: number, level: number, powerscale: () => number) {
    super();
    this.baseAttackPower = attackPower;
    this.baseStats = stats[];
    this.level = level;
    this.skillData = [];
    
    this.rescaleAlly();
  }

  public rescaleAlly() {
    this.powerscale();
  }

}
