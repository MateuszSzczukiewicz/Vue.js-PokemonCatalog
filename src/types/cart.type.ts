export interface Card {
	id: string;
	name: string;
	nationalPokedexNumbers: number[];
	images: {
		small: string;
		large: string;
	};
	supertype: string;
	subtypes: string[];
	rarity: string;
}
