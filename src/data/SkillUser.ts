import { Skill } from '#data/Skill.ts';
import { Die } from '#data/Die.ts';

export abstract class SkillUser {
  name: string;
  dice: Die[];
  stats: number[]; // maxHp, rollMod, spellMod, initiative, armor, statusResist

}
