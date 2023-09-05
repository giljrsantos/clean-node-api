import { HttpRequest, HttpResponse } from "../protocols/http";

import { Crontoller } from '../protocols/controller';
import { MissingParamError } from './../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';

/* eslint-disable padded-blocks */
export class SignUpController implements Crontoller {
    handle(httpRequest: HttpRequest): HttpResponse {

        const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

        for (const field of requiredFields) {

            if (!httpRequest.body[field]) {
                return badRequest(new MissingParamError(field))
            }

        }
    }
}
