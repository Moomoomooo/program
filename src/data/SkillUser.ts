import { Skill } from '#data/Skill.ts';
import { Die } from '#data/Die.ts';

export interface SkillUser {
  name: string;
  stats: number[]; // maxHp, rollMod, spellMod, initiative, armor, statusResist

  
}
