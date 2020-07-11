import { WSApi } from './lib/wsclient';
import { User, Token } from './models/';
import { SocketIOClient } from './@nexjs/wsclient';

console.log('create wsapi');
export const wsapi = new WSApi<User, Token>(new SocketIOClient());