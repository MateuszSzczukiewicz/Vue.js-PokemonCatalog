import get, { AxiosResponse } from "axios";
import { type Card } from "@/types/cart.type";

const API_URL = "https://api.pokemontcg.io/v2/cards";

type ApiResponse = {
  data: Card[];
};

export const getCards = async (): Promise<Card[] | undefined> => {
  try {
    const response: AxiosResponse<ApiResponse> = await get(API_URL);
    return response.data.data;
  } catch (err) {
    console.warn(`Error fetching cards: ${err}`);
  }
};
