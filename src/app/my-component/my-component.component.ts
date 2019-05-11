import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ServiceService } from '../service.service';
import { PontService } from '../pont.service';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  filtre = '';
  choix:string;
  listePokemon:Pokemon[];
  constructor(private service:ServiceService,private intermediaire:PontService) { }
  ngOnInit() {
    this.listePokemon=this.service.getPokemons();
  }

  choixPokemon(choix:string){
    this.intermediaire.setName(choix);
  }
  
}
