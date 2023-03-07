type PricePrediction = {
	TOKEN_ID: number;
	NAME: string;
	SYMBOL: string;
	FORECAST_DATE: number;
	FORECAST: number;
	FORECAST_LOWER: number;
	FORECAST_UPPER: number;
	DATE: string;
};

type Token = {
	TOKEN_ID: number;
	SYMBOL: string;
	NAME: string;
};

export { PricePrediction, Token };
