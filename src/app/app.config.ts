import {InjectionToken} from "@angular/core";
import {environment} from "../environments/environment";

export const IS_PRODUCTION = environment.production;
export const IS_PRODUCTION_TOKEN = new InjectionToken('IS_PRODUCTION');

export const API_URL = environment.apiUrl;
export const API_URL_TOKEN = new InjectionToken('API_URL');
