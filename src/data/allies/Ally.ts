import { Entity } from '#data/Entity.ts';
import { Skill } from '#types/Skill.ts';
import { LevelUpSkill } from '#types/LevelUpSkill.ts';
import { RegionId } from '#enums/RegionId.ts';
import { AllyId } from '#enums/AllyId.ts';
  
export class Ally extends Entity {
  level: number;
  readonly baseAttackPower: number;
  readonly baseStats: number[];
  skillData: LevelUpSkill[];
  powerScale: () => number;
  allyId: AllyId;
  location: RegionId;
  
  
  constructor(name: string, allyId: AllyId, stats: number[], attackPower: number, level: number, powerScale: () => number) {
    super();
    this.baseAttackPower = attackPower;
    this.allyId = allyId;
    this.baseStats = stats[];
    this.level = level;
    this.skillData = [];
    this.powerScale = powerScale;
    
    this.powerScale();
  }

  public isHireable(): boolean {
    
  }

}
