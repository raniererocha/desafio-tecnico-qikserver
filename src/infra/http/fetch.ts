import { HttpFetchContract } from "./contracts";

export default class HttpFetch implements HttpFetchContract {
    async exec<TResponse=unknown, TBody=unknown>(url: string, method: any = "GET" , body?: TBody): Promise<TResponse> {
        const promiseResponse = await fetch(url, {
            method: method,
            body: JSON.stringify(body) || undefined
        }) 
        const response = await promiseResponse.json()
        return response as TResponse
    }
}