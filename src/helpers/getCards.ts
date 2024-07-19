import get, { AxiosResponse } from 'axios';
import { type Card } from '@/types/cart.type';
import { type Page } from '@/types/page.type';

const API_URL = `https://api.pokemontcg.io/v2/cards`;

type ApiResponse = {
	data: Card[];
};

export const getCards = async ({
	page,
	pageSize,
}: Page): Promise<Card[] | undefined> => {
	try {
		const response: AxiosResponse<ApiResponse> = await get(
			API_URL + `?page=${page}&pageSize=${pageSize}`
		);
		return response.data.data as Card[];
	} catch (err) {
		console.warn(`Error fetching cards: ${err}`);
	}
};
