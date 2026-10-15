export interface Service {
  id: string;
  slug: string;
  titleSi: string;
  titleEn: string;
  subtitleSi: string;
  subtitleEn: string;
  descriptionSi: string;
  descriptionEn: string;
  durationSi: string;
  durationEn: string;
  priceLKR: number;
  priceUSD: number;
  image: string;
  consecrationDetailsSi: string[];
  consecrationDetailsEn: string[];
  ritualProcessSi: string[];
  ritualProcessEn: string[];
  auspiciousRequirementsSi: string[];
  auspiciousRequirementsEn: string[];
}

export interface BookingAppointment {
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  birthStar?: string; // ලග්නය / නැකත
  auspiciousTimeSlot: string;
  notes?: string;
  currency: 'LKR' | 'USD';
}
