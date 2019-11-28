import {environment} from '../environments/environment';
import {InjectionToken} from '@angular/core';

export const GIT_URL = environment.gitUrl;
export const GIT_URL_TOKEN = new InjectionToken(GIT_URL);
