import { Ally } from '#allies/Ally.ts';
import { Skill } from '#types/Skill.ts';
import { SkillFlags } from '#enums/SkillFlags.ts';
import { SkillPhases } from '#enums/SkillPhases.ts';
import { SkillTargets } from '#enums/SkillTargets.ts';
import { niam } from '#player/Niam.ts';

export const AllAllies: Ally[] = {};


const fido = new Ally("Fido", [6, 1, 0, 3, 5], 5, niam.level, )


