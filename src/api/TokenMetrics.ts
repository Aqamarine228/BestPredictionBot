import axios from "axios";
import PricePrediction from "./TokenMetricsTypes";

class TokenMetrics {
	public axios;

	// eslint-disable-next-line no-use-before-define
	private static instance: TokenMetrics;

	constructor() {
		this.axios = axios.create({
			headers: {
				Accept: "application/json",
				api_key: process.env.TOKEN_METRICS_API_KEY,
			},
		});

		this.axios.interceptors.response.use(
			(response) => response.data,
			(error) => {
				throw new Error(error);
			}
		);
	}

	public static getInstance(): TokenMetrics {
		if (!TokenMetrics.instance) {
			TokenMetrics.instance = new TokenMetrics();
		}

		return TokenMetrics.instance;
	}

	public async getPricePrediction(tokenId: number): Promise<PricePrediction> {
		const response = await this.axios.get(this.buildUrl("/price-prediction"), {
			params: { tokens: tokenId, limit: 2, date: new Date().toISOString().split("T")[0] },
		});
		return response.data[1];
	}

	public async getTokenId(symbol: string): Promise<number> {
		const response = await this.axios.get(this.buildUrl("/tokens"), {
			params: { token_symbols: symbol },
		});

		return response.data[0].TOKEN_ID;
	}

	private buildUrl(path: string): string {
		return `${process.env.TOKEN_METRICS_API_URL}/v1${path}`;
	}
}

export default TokenMetrics;
