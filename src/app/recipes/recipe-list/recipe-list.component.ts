import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	
	recipes: Recipe[] = [
		new Recipe( 'A Test recipe ', 'This is a test', 'http://www.clubnoor.com/uploads/recipes/7e20d8583a374b1490b859b8223f373e.png' )
	];

	constructor() { }
	
	ngOnInit() {
	}
	
}
