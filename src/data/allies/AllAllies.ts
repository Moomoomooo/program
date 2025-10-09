import { Ally } from '#allies/Ally.ts';
import { Skill, newSkill } from '#types/Skill.ts';
import { SkillFlags } from '#enums/SkillFlags.ts';
import { SkillPhases } from '#enums/SkillPhases.ts';
import { SkillTargets } from '#enums/SkillTargets.ts';
import { niam } from '#player/Niam.ts';
import { LevelUpSkill } from '#types/LevelUpSkill.ts';
import { AllyId } from '#enums/AllyId.ts';

export const AllAllies: Ally[] = {};


const fido = new Ally("Fido", [6, 1, 0, 2, 4], 4, niam.level, (): number => {
  for (let i = 0; i < 6; i++) {
    this.stats[i] = this.baseStats[i] + this.level;
  } 
  this.stats[2] = 0;
  this.attackPower = this.baseAttackPower + this.level;
});
const fidosLevelUpSkillList: LevelUpSkill[] = {
  [1, newSkill("Bark", fido, 3, [Skillflags.DEBUFF],SkillPhase.ATTACK, SkillTargets.ALL_ENEMIES, (): any => {
    
  })],
  [5, newSKill("Rip and Tear", fido, 4, [], SKillPhase.ATTACK, SkillTargets.ENEMY, (): any => {
    
  })],
  
};
fido.setLevelUpSkillData(fidosLevelupSkillList)
AllAllies.push(fido);
