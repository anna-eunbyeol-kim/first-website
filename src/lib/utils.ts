type Response<T> = {
	error: string
	result: T
}

export const post = async <T>(endpoint: string, data: object): Promise<Response<T>> => {
	return fetch(endpoint, {
		method: "POST",
		credentials: "include",
		body: JSON.stringify(data ?? {}),
		headers: {
			"Content-Type": "application/json"
		}
	}).then((r) => r.json())
}

export const pipe: <T>(...fncs: ((v) => any)[]) => T = (...fns) => fns.reduce((v, f) => f(v), null)
