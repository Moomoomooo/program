import { Ally } from '#allies/Ally.ts';
import { Skill } from '#types/Skill.ts';
import { SkillFlags } from '#enums/SkillFlags.ts';
import { SkillPhases } from '#enums/SkillPhases.ts';
import { SkillTargets } from '#enums/SkillTargets.ts';
import { niam } from '#player/Niam.ts';

export const AllAllies: Ally[] = {};


const fido = new Ally("Fido", [5, 0, 0, 2, 4], 4, niam.level, (): number => {
  for (let i = 0; i < 6; i++) {
    this.stats[i] = this.baseStats[i] + this.level;
  }
  this.attackPower = this.baseAttackPower + this.level;
});

AllAllies.push(fido);


