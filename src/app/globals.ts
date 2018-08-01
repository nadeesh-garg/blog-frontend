import { Injectable } from '@angular/core';

@Injectable()
export class Global{
	public static BACKEND_URL = "http://18.191.158.152:8000";
	someID: string = '';
}