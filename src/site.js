export const navigation = [
  { href: '#services', en: 'Coaching', ar: 'التدريب' },
  { href: '#about', en: 'About MEGO', ar: 'عن ميجو' },
  { href: '#certs', en: 'Credentials', ar: 'الشهادات' },
]

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/mohamed_abd_al_mageid/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@mego_1985' },
  { label: 'Snapchat', href: 'https://www.snapchat.com/@mado3mado3' },
]

export const phone = '+966 50 017 6066'

export function generalInquiry(t) {
  return bookingUrl(t(
    'Hi Coach MEGO, I’d like to talk about coaching and which program would fit my goals.',
    'مرحبًا كوتش ميجو، أود معرفة البرنامج التدريبي الأنسب لأهدافي.'
  ))
}

export function bookingUrl(message) {
  return 'https://wa.me/966500176066?text=' + encodeURIComponent(message)
}