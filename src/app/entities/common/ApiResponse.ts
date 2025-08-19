export class ApiResponse<T> {
    items: T[];
    status: string;
    exceptionMessage: string;
    numberOfItems: number;
    constructor(data: T[], message: string, status: string, numberOfItems: number) {
        this.items= data;
        this.exceptionMessage = message;
        this.status = status;
        this.numberOfItems = numberOfItems;
    }
}