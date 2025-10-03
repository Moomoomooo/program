import { SkillFlags } from '#enums/SkillFlags.ts';
import { SkillTargets } from '#enums/SkillTargets.ts';
import { SkillPhases } from '#enums/SkillPhases.ts';
import { Entity } from '#enums/Entity.ts';

export interface Skill {
  readonly name: string;
  readonly master: Entity;
  readonly cooldown: number;
  time: number;
  ready: boolean;
  readonly phase: SkillPhases;
  readonly targets: SkillTargets;
  readonly flags: SkillFlags[];
  public use(target): void;
}
