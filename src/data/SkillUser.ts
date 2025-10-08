import { Skill } from '#data/Skill.ts';
import { DicePool } from '#data/DicePool.ts';
import { SkillTargets } from '#enums/SkillTargets.ts';
import { SkillPhases } from '#enums/SkillPhases.ts';
import { SkillFlags } from '#enums/SkillFlags.ts';
import { DmgResistance } from '#enums/DmgResistance.ts';

export abstract class SkillUser {
  name: string;
  stats: number[]; // maxHp, rollMod, spellMod, initiative, armor, statusResist
  dice: DicePool;
  skills: Skill[];
  resistances: number[]; // physical, magic, fire, ice, lightning, poison, holy, unholy

  constructor(name: string, stats: number[], dice: string) {
    this.name = name;
    this.stats = stats;
    this.dice = new DicePool(dice);
    this.skills = [];
    this.resistances = new Array(8);
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

    public addDmgResist(type: DmgResistance, value: number) {
      this.resistances[type] = value;
    }
}
