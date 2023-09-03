/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable padded-blocks */
export class SignUpController {
    // eslint-disable-next-line @typescript-eslint/indent
    /* eslint-disable @typescript-eslint/indent */
    handle(httpRequest: any): any {
        return {
            statusCode: 400,
            body: new Error('Missing param: name')
        }
    }
}
