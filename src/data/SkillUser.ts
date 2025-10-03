import { Skill } from '#data/Skill.ts'

export abstract class SkillUser {
  name: string;
  stats: number[]; // maxHp, rollMod, spellMod, initiative, armor, statusResist

}
