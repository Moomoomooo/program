import { Entity } from '#data/Entity.ts';
import { SkillFlags } from '#enums/SkillFlags.ts';
import { SkillPhases } from '#enums/SkillPhases.ts';
import { SkillTargets } from '#enums/SkillTargets.ts';

export const Niam: Entity = new Entity("Niam", [10, 0, 0, 1, 5], "d10");

Niam.addSkill("power attack", 3, [SkillFlags.PHYSICAL, SkillFlags.DAMAGING], SkillPhases.ATTACK, SkillTargets.ENEMY, (target: Entity): void => {
  
});
Niam.addSkill("fire bolt", 2, [SkillFlags.SPELL, SkillFlags.FIRE, SkillFlags.DAMAGING], SkillPhases.ATTACK, SkillTargets.ENEMY, (target: Entity): void => {
  
});
