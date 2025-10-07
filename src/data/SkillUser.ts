import { Skill } from '#data/Skill.ts';
import { Dice } from '#data/Dice.ts';
import { SkillTargets } from '#enums\SkillTargets.ts';
import { SkillPhases } from '#enums\SkillPhases.ts';
import { SkillFlags } from '#enums\SkillFlags.ts';

export abstract class SkillUser {
  name: string;
  stats: number[]; // maxHp, rollMod, spellMod, initiative, armor, statusResist
  skills: Skill[];

  constructor(name: string, stats: number[]) {
    this.name = name;
    this.stats = stats;
    this.skills = [];
  }

  public getSkillByName(name: string): Skill | Null {
    for (const skill of this.skills) {
      if (skill.name === name) {
        return skill;
      } else {
        return null;
      }
    }
  }
  
  
  public addSkill(name: String, cooldown: number, targets: SkillTargets, phase: SkillPhases, flags: SkillFlags[] ,effect: (target) => void): void {

    const s = {
      name: name,
      cooldown: cooldown,
      time: 0,
      ready: true,
      targets: targets,
      flags: flags,
      phase: phase,
      use: effect,
    };
    skills.push(s);
  }

  public cool(): void {
    for (let skill of skills) {
      skill.time++;
      if (skill.time >= skill.cooldown && skill.cooldown !== 0) {
        skill.ready = true;
      }
  }
}
