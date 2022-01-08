export interface I_pagination {
  total_data: number,
  total_pages: number,
  previous: string | null,
  next: string | null,
  limit: number,
  results: Object[];
}