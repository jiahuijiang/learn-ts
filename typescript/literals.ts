declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req1 = {
    url: "https://example.com",
    method: "GET" as "GET"
}

const req2 = {
    url: "https://example.com",
    method: "GET"
} as const

const non_literal_req = {
    url: "https://example.com",
    method: "GET"
}

handleRequest(req1.url, req1.method);
handleRequest(req2.url, req2.method);
// this has an error
// handleRequest(non_literal_req.url, non_literal_req.method);

