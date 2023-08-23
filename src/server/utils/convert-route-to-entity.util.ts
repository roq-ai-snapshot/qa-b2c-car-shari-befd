const mapping: Record<string, string> = {
  billings: 'billing',
  bookings: 'booking',
  cars: 'car',
  companies: 'company',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
