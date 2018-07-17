import { Injectable } from '@angular/core';

@Injectable()
export class Global{
	public static BACKEND_URL = "http://localhost:8000";
	someID: string = '';
}