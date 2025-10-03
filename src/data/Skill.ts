import { SkillFlags } from '#enums/SkillFlags.ts';
import { SkillTargets } from '#enums/SkillTargets.ts';
import { SkillPhases } from '#enums/SkillPhases.ts';

export class Skill {
  name: string;
  cooldown: number;
  time: number;
  phase: SkillPhases;
  targets: SkillTargets;
  flags: SkillFlags[];

  
}
