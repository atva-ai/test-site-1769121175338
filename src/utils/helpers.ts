export function formatPhoneNumber(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}
