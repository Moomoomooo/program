import { SkillFlags } from '#enums/SkillFlags.ts';
import { SkillTargets } from '#enums/SkillTargets.ts';
import { SkillPhases } from '#enums/SkillPhases.ts';
import { Entity } from '#enums/Entity.ts';

export class Skill {
  readonly name: string;
  readonly cooldown: number;
  time: number;
  ready: boolean;
  readonly phase: SkillPhases;
  readonly targets: SkillTargets;
  readonly flags: SkillFlags[];
  effect: (target) => void;

  constructor(name: string, cooldown: number, phase: SkillPhase, targets: SkillTargets, flags: SkillFlags[]) {
    
  }

  public cool(): void {
    this.time++;
    if (this.time >= this.cooldown) {
      this.ready = true;
    }
  }
}
