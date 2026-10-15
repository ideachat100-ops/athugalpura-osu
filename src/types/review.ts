export interface Review {
  id: string;
  nameSi: string;
  nameEn: string;
  locationSi: string;
  locationEn: string;
  rating: number; // 1-5 Kandyan blossoms
  commentSi: string;
  commentEn: string;
  date: string;
  verifiedArtifact: string;
  certificateId: string;
}
