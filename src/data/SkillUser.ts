import { Skill } from '#data/Skill.ts';
import { Die } from '#data/Die.ts';

export abstract class SkillUser {
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
  
  
  public addSkill(name: String, cooldown: number, target: SkillTarget, flags: SkillFlags[] ,effect: (target) => void): void {

    const s = {
      name: name,
      cooldown: cooldown,
      time: 0,
      flags: flags,
      effect: effect,
    };
    skills.push(
  }
  
}
