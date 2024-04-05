import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    {
      id: 1,
      name: 'Ryu',
      rank: 'black',
      available: true,
      age: 33,
      description: 'Master of Hadou',
    },
    {
      id: 2,
      name: 'Ken',
      rank: 'black',
      available: true,
      age: 34,
      description: 'Master of Hadou with fire',
    },
    {
      id: 3,
      name: 'Chun Li',
      rank: 'yellow',
      available: false,
      age: 30,
      description: 'Master of Kikou',
    },
  ];

  getNinjas() {
    return this.ninjas;
  }

  getOneNinja(id: number) {
    return this.ninjas.find((ninja) => ninja.id === id);
  }

  createNinja(ninja) {
    this.ninjas.push(ninja);
    return this.ninjas;
  }

  updateNinja(id: number, ninja) {
    const index = this.ninjas.findIndex((ninja) => ninja.id === id);
    this.ninjas[index] = ninja;
    return this.ninjas;
  }

  deleteNinja(id: number) {
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
    return this.ninjas;
  }
}
