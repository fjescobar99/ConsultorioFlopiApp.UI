export class ApiResponse<T> {
    items: T[];
    status: string;
    exceptionMessage: string;
    constructor(data: T[], message: string, status: string) {
        this.items= data;
        this.exceptionMessage = message;
        this.status = status;
    }
}