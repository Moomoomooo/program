import { Skill } from '#data/Skill.ts';
import { SkillTargets } from '#enums/SkillTargets.ts';
import { SkillPhases } from '#enums/SkillPhases.ts';
import { SkillFlags } from '#enums/SkillFlags.ts';
import { DmgResistance } from '#enums/DmgResistance.ts';

export abstract class SkillUser {
  name: string;
  stats: number[]; // maxHp, rollMod, spellMod, initiative, armor, statusResist
  attackPower: number;
  skills: Skill[];
  resistances: number[]; // physical, magic, fire, ice, lightning, poison, holy, unholy

  constructor(name: string, stats: number[]) {
    this.name = name;
    this.stats = stats;
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
  
  
  public addSkill(name: string, cooldown: number, flags: SkillFlags[], phase: SkillPhases, targets: SkillTargets , effect: () => any): void {
    const self = this;

    const s = {
      name: name,
      master: self;
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
      /*dmg resistance scales from -1 to 1. The entity absorbs that % of damage. For example, an Entity with a fire resistance of 
      .6 will only take 40% of damage from fire. Inversely, an entity with a -.5 fire resistance takes 150% of that damage.
      */
    }
}
