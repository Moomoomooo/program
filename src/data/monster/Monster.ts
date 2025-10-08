import { Entity } from '#data/Entity.ts';
import { MonsterSpecies } from '#data/Entity.ts';
import { Skill } from '#data/Skill.ts';

export class Monster extends Entity {

}


/* new Monster("Cacophony of the Holy")

cacophony.addDmgResist(DmgResistance.PHYSICAL, 0.5)
cacophony.addDmgResist(DmgResistance.FIRE, 0.75)
cacophony.addDmgResist(DmgResistance.ICE, 0.75)
cacophony.addDmgResist(DmgResistance.LIGHTNING, 0.75)

cacophony.addDmgResist(DmgResistance.HOLY, 1);

cacophony.addSkill("Song of the Secret", 3, SkillTarget.ALL_OTHERS, SkillPhase.ATTACK, [SkillFlags.HOLY, SkillFlags.DEBUFF, SKillFlags.DAMAGING], (target: Entity) => {
 inflicts 45-60 holy dmg
 inflicts confusion for 4 turns
 inflicts -.25 holy resistance
});

*/
