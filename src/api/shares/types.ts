export interface IShare {
  count: number;
  weekendDays: number | null;
  reservedDays: number | null;
  carId: number | null;
  applicationId: number | null;
  availableDays: number | null;
  ownerId: number;
}