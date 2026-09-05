import { ProfileLink, MiniStatItem } from '../types';

export const PROFILE_INFO = {
  name: "PROFIL AZRYL",
  handle: "AZRYL OFFICIAL",
  statusBadge: "ONLINE • ACTIVE",
  tagline: "Welcome to my official profile",
  avatarUrl: "https://cdn.phototourl.com/free/2026-09-05-19f3cbdf-dc78-4ebd-bae5-fb9cf4ce23ad.jpg",
  avatarFallback: "https://cdn.phototourl.com/free/2026-09-05-19f3cbdf-dc78-4ebd-bae5-fb9cf4ce23ad.jpg",
  bio: "Creator • Digital Content • Community Leader",
  location: "Indonesia",
  verified: true,
};

export const PROFILE_LINKS: ProfileLink[] = [
  {
    id: "grup-jb",
    title: "GRUP JB",
    subtitle: "Komunitas Jual Beli Resmi & Terpercaya",
    url: "https://chat.whatsapp.com/K5st3ZryFu4D4CFTHfT88y",
    iconType: "whatsapp",
    badge: "Official Group",
    accentColor: "from-emerald-500 to-green-600",
    glowColor: "rgba(16, 185, 129, 0.35)",
  },
  {
    id: "saluran-jb",
    title: "SALURAN JB",
    subtitle: "Update Info, Stok & Pemberitahuan Cepat",
    url: "https://whatsapp.com/channel/0029Vb6f6rd7IUYaIsu96h2E",
    iconType: "whatsapp-channel",
    badge: "Channel",
    accentColor: "from-teal-500 to-emerald-600",
    glowColor: "rgba(20, 184, 166, 0.35)",
  },
  {
    id: "sl-clips-persib",
    title: "SL CLIPS PERSIB AZRYL",
    subtitle: "Cuplikan Eksklusif & Highlight Pertandingan Persib",
    url: "https://whatsapp.com/channel/0029Vb8pwZr9xVJhzHrK2x3W",
    iconType: "persib",
    badge: "Persib Fans",
    accentColor: "from-emerald-600 to-teal-700",
    glowColor: "rgba(5, 150, 105, 0.35)",
  },
  {
    id: "am-prem-300p",
    title: "AM PREM 300P",
    subtitle: "Akses Layanan Preset & Akun Premium Alight Motion",
    url: "https://azrylamprem-ybpq.vercel.app/",
    iconType: "digital",
    badge: "Premium VIP",
    accentColor: "from-emerald-500 via-teal-500 to-green-600",
    glowColor: "rgba(16, 185, 129, 0.35)",
  },
  {
    id: "tiktok-azryl",
    title: "TIKTOK AZRYL",
    subtitle: "@ax_zryl • Tonton konten & update video terbaru",
    url: "https://tiktok.com/@ax_zryl",
    iconType: "tiktok",
    badge: "@ax_zryl",
    accentColor: "from-emerald-600 via-emerald-700 to-teal-800",
    glowColor: "rgba(16, 185, 129, 0.35)",
  },
];

export const MINI_STATS: MiniStatItem[] = [
  {
    id: "stat-jb",
    headline: "JB",
    subheadline: "Community",
    detail: "Komunitas Transaksi",
    iconName: "Users",
    accent: "emerald",
  },
  {
    id: "stat-content",
    headline: "CONTENT",
    subheadline: "Persib Clips",
    detail: "Cuplikan & Highlight",
    iconName: "Clapperboard",
    accent: "blue",
  },
  {
    id: "stat-digital",
    headline: "DIGITAL",
    subheadline: "AM Premium",
    detail: "Preset & Editing",
    iconName: "Sparkles",
    accent: "cyan",
  },
];
