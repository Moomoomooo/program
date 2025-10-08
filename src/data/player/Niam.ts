import { Entity } from '#data/Entity.ts';
import { SkillFlags } from '#enums/SkillFlags.ts';
import { SkillPhases } from '#enums/SkillPhases.ts';
import { SkillTargets } from '#enums/SkillTargets.ts';

export const Niam: Entity = new Entity("Niam", [10, 0, 0, 1, 5], 10);

Niam.addSkill("power attack", 3, [SkillFlags.PHYSICAL, SkillFlags.DAMAGING], SkillPhases.ATTACK, SkillTargets.ENEMY, (): number => {
  return 2 * master.calcVariableAttackPower(0.85) + master.stats[1];
});
Niam.addSkill("fire bolt", 2, [SkillFlags.SPELL, SkillFlags.FIRE, SkillFlags.DAMAGING], SkillPhases.ACTIVATE, SkillTargets.ENEMY, (): number => {
  return 0.25 * master.calcVariableAttackPower(0.75) + master.stats[2];
});
