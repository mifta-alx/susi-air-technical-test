// app/utils/time.ts

/**
 * Mendapatkan waktu UTC saat ini dengan format HH:MM
 */
// export const getFormattedUTCTime = (date: Date = new Date()): string => {
//   const hours = String(date.getUTCHours()).padStart(2, '0')
//   const minutes = String(date.getUTCMinutes()).padStart(2, '0')
//   return `${hours}:${minutes}`
// }

// /**
//  * Menghitung durasi penerbangan (dalam menit) antara ETD dan ETA (format HH:MM)
//  */
// export const calculateFlightDuration = (etd: string, eta: string): number => {
//   const [etdH, etdM] = etd.split(':').map(Number)
//   const [etaH, etaM] = eta.split(':').map(Number)
  
//   let duration = (etaH * 60 + etaM) - (etdH * 60 + etdM)
//   if (duration < 0) duration += 24 * 60 // Jika melewati tengah malam
  
//   return duration
// }