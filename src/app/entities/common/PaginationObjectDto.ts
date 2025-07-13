export class PaginationObjectDto {
  page: number;
  rowsPerPage: number;
  orderBy: string;
  sortDirection: string;

  constructor(
    page: number,
    rowsPerPage: number,
    orderBy: string,
    sortDirection: string
  ) {
    this.page = page;
    this.rowsPerPage = rowsPerPage;
    this.orderBy = orderBy;
    this.sortDirection = sortDirection;
  }
}
