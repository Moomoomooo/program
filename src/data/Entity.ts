import { SkillUser } from '#data/SkillUser.ts';

export abstract class Entity extends SkillUser {
  
  tempStats: number[];

  constructor(name: string, stats: number[]) {
    super();
    tempStats = [0, 0, 0, 0, 0, 0];
    
  }

  
}
