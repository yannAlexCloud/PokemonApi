export class Pokemon {
    constructor(public id: number= 0, public name: string= '', public stats: string[]= []) {

    }
    toString(): string {
        return this.name;
      }

    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getStats(): string[] {
        return this.stats;
    }
}
