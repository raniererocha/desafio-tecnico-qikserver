export interface HttpFetchContract {
    exec: <TResponse=unknown, TBody=unknown>(url: string, method?: string, body?: TBody) => Promise<TResponse>
}
