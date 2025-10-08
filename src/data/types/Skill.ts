import { SkillFlags } from '#enums/SkillFlags.ts';
import { SkillTargets } from '#enums/SkillTargets.ts';
import { SkillPhases } from '#enums/SkillPhases.ts';
import { Entity } from '#enums/Entity.ts';

export type Skill {
  readonly name: string;
  readonly master: Entity;
  readonly cooldown: number;
  time: number;
  ready: boolean;
  readonly phase: SkillPhases;
  readonly targets: SkillTargets;
  readonly flags: SkillFlags[];
  use: () => any;
}
 
export function newSkill(name: string, master: Entity, cooldown: number, flags: SkillFlags[], phase: SkillPhases, targets: SkillTargets , effect: () => any): Skill {

    const s = {
      name: name,
      master: Entity;
      cooldown: cooldown,
      time: 0,
      ready: true,
      targets: targets,
      flags: flags,
      phase: phase,
      use: effect,
    };
    return(s);
  }
}
