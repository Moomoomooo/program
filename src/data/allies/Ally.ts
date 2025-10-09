import { Entity } from '#data/Entity.ts';
import { Skill } from '#types/Skill.ts';
import { LevelUpSkill } from '#types/LevelUpSkill.ts';
import { RegionId } from '#enums/RegionId.ts';
  
export class Ally extends Entity {
  level: number;
  readonly baseAttackPower: number;
  readonly baseStats: number[];
  skillData: LevelUpSkill[];
  powerScale: () => number;
  location: RegionId;
  
  
  constructor(name: string, stats: number[], attackPower: number, level: number, powerScale: () => number) {
    super();
    this.baseAttackPower = attackPower;
    this.baseStats = stats[];
    this.level = level;
    this.skillData = [];
    this.powerScale = powerScale;
    
    this.powerScale();
  }

  public isHireable(): boolean {
    
  }

}
