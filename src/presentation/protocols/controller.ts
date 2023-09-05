import { HttpRequest, HttpResponse } from "./http";

export interface Crontoller {
    handle(httpRequest: HttpRequest): HttpResponse
}