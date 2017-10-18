import { ErrorHandler } from '@angular/core';
export default class CustomErrorHandler implements ErrorHandler {
	handleError(error) {
		location.href = "error.html"; 
	}
}
