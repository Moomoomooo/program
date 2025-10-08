import { Entity } from '#data/Entity.ts';
import { Skill } from "#data/Skill.ts';
  
export class Ally extends Entity {
  level: number;
  baseAttackPower: number;
  skillData: [number, skill][];
  powerScale: (lv: number, power: number) => number;
  
  
  constructor(name: string, stats: number[], attackPower: number, level: number, powerscale: (lv: number, power: number) => number) {
    super();
    this.baseAttackPower = attackPower;
    this.level = level;
    this.skillData = [];
    
    this.rescaleAttackPower();
  }

  public rescaleAttackPower() {
    this.powerscale(this.level, this.baseAttackPower);
  }

}
