import { AllyId } from '#enums/AllyId.ts'

export class NPC {
  allyId?: AllyId;

  constructor(allyId?: AllyId) {
    if (allyId !== undefined) {
      this.allyId = allyId;
    }
  }

  public isAlly(): boolean {
    if (this.allyId !== undefined) {
      return true;
    }
    return false;
  }

  
}
