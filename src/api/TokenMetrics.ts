import axios from "axios";
import TokenMetricsResponse from "./TokenMetricsResponse";
import { PricePrediction, Token } from "./TokenMetricsTypes";

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
			(response) =>
				new TokenMetricsResponse<typeof response.data.data>(
					response.config,
					response.headers,
					response.statusText,
					response.status,
					response.data.data,
					false,
					response.data.message
				),
			(error) =>
				new TokenMetricsResponse<null>(
					error.config,
					error.headers,
					error.statusText,
					error.status,
					null,
					true,
					error.message
				)
		);
	}

	public static getInstance(): TokenMetrics {
		if (!TokenMetrics.instance) {
			TokenMetrics.instance = new TokenMetrics();
		}

		return TokenMetrics.instance;
	}

	public async pricePrediction(tokenIds: number[]): Promise<TokenMetricsResponse<PricePrediction[]>> {
		return this.axios.get(this.buildUrl("/price-prediction"), {
			params: { tokens: tokenIds.join("%2C%20"), limit: 2, date: new Date().toISOString().split("T")[0] },
		});
	}

	public async tokens(symbols: string[]): Promise<TokenMetricsResponse<Token[]>> {
		return this.axios.get(this.buildUrl("/tokens"), {
			params: { token_symbols: symbols.join("%2C%20") },
		});
	}

	private buildUrl(path: string): string {
		return `${process.env.TOKEN_METRICS_API_URL}/v1${path}`;
	}
}

export default TokenMetrics;
