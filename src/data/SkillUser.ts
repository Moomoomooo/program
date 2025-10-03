import { Skill } from '#data/Skill.ts';
import { Die } from '#data/Die.ts';

export interface SkillUser {
  name: string;
  stats: number[]; // maxHp, rollMod, spellMod, initiative, armor, statusResist

  skills: Skill[];

  public getSkillByName(name: string): Skill | Null {
    for (const skill of this.skills) {
      if (skill.name === name) {
        return skill;
      } else {
        return null;
      }
    }
  }
  
}
