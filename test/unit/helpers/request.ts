import request from 'supertest';
// import { Application } from 'express';

export default class Request {
    private _app: any;

    constructor(app: any) {
        this._app = app
    }

    _request(method: string, url: string, status: number = 200, body: object = {}) {
        return (request(this._app) as any)[method](`/${url}`).send(body).expect(status);
    }

    get(url: string, status: number = 200) {
        return this._request('get', url, status, {})
    }

    post(url: string, status: number = 200, body: object = {}) {
        return this._request('post', url, status, body)
    }
}
