export interface ProfileLink {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  iconType: 'whatsapp' | 'whatsapp-channel' | 'persib' | 'digital' | 'tiktok';
  badge?: string;
  accentColor: string;
  glowColor: string;
}

export interface MiniStatItem {
  id: string;
  headline: string;
  subheadline: string;
  detail: string;
  iconName: string;
  accent: string;
}
