const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json;charset=UTF-8',
};

const fetchRequest = <TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> =>
    fetch(url, config)
      .then((response) => response.json())
      .then((data) => data as TResponse);

const request = {
    get: <TResponse>(url: string) =>
        fetchRequest<TResponse>(url, { method: 'GET', headers: defaultHeaders }),
}

export default request;