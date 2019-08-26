import Request from './request';
import MockKnex from 'mock-knex';
import { Application } from 'express';
var App = require('@/App');


export const app = App as Application;

export const req = new Request(app);

export const tracker = MockKnex.getTracker();

beforeEach(() => {
    tracker.install()
})

afterEach(() => {
    tracker.uninstall()
})
