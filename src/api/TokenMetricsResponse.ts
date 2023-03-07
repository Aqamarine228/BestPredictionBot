import { AxiosResponse, AxiosResponseHeaders, InternalAxiosRequestConfig, RawAxiosResponseHeaders } from "axios";

export default class TokenMetricsResponse<Type> implements AxiosResponse {
	public data: Type;

	public error: boolean;

	public message = "";

	constructor(
		config: InternalAxiosRequestConfig,
		headers: RawAxiosResponseHeaders | AxiosResponseHeaders,
		statusText: string,
		status: number,
		data: Type,
		error = false,
		message = ""
	) {
		this.status = status;
		this.statusText = message;
		this.config = config;
		this.headers = headers;

		if (error) {
			this.error = true;
			this.message = message;
			this.data = data;
			return;
		}

		this.error = false;
		this.data = data;
	}

	request?: never;

	config: InternalAxiosRequestConfig;

	headers: RawAxiosResponseHeaders | AxiosResponseHeaders;

	status: number;

	statusText: string;
}
