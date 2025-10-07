import { SkillUser } from '#data/SkillUser.ts';

export abstract class Entity extends SkillUser {
  
  tempStats: number[];
  hp: number;

  constructor(name: string, stats: number[]) {
    super();
    this.tempStats = [0, 0, 0, 0, 0, 0];
    this.hp = this.stats[0];
    
  }

  
}
