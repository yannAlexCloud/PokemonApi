import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';

@Injectable()
export class ServiceService {
  constructor(private http:HttpClient) {
   }
  getPokemons():Pokemon[]{
    let listePokemon:Pokemon[]=[];
    let i:number=0;
    this.http.get<JSON>('https://pokeapi.co/api/v2/pokemon').subscribe(data => {
      let results:JSON[];
      results=data['results'];
      results.forEach(element => {
        i=i+1;

        listePokemon.push(new Pokemon(i,element['name'],this.getInfo(i)))
      });
    });;
    return listePokemon;
  }

  getInfo(id:number):string[]{
    let infos:string[]=[];
    this.http.get<JSON>('https://pokeapi.co/api/v2/pokemon/'+id).subscribe(data=>{
      let results:JSON[];
      results=data['stats'];
      results.forEach(element=>{
        let point:string=element['base_stat'];
        let stat:JSON=element['stat'];
        let statistique:string=stat['name']+": "+point;
        infos.push(statistique);
      });
    });
    return infos;
  }
}
