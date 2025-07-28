import * as CryptoJS from 'crypto-js'

export async function encryptData(text: string, secretKey: string) {
  const encoder = new TextEncoder()

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secretKey),
    {
      name: 'AES-GCM',
    },
    false,
    ['encrypt']
  )

  const iv = crypto.getRandomValues(new Uint8Array(12))

  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES_GCM', iv: iv },
    key,
    encoder.encode(text)
  )

  return {
    iv: Array.from(iv), // Converter para array para facilitar armazenamento
    encrypted: btoa(String.fromCharCode(...new Uint8Array(encrypted))),
  }
}

export async function decryptData(
  encryptData: { iv: number[]; encrypted: string },
  secretKey: string
) {
  const decoder = new TextDecoder()

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secretKey.padEnd(32, ' ')),
    { name: 'AES_GCM' },
    false,
    ['decrypt']
  )

  const iv = new Uint8Array(encryptData.iv)
  const encryptBytes = Uint8Array.from(Buffer.from(encryptData.encrypted, 'base64'))

  const decrypted = await crypto.subtle.decrypt({ name: 'AES_GCM', iv: iv }, key, encryptBytes)

  return decoder.decode(decrypted)
}

export function encrypt(text: string, key: string): string {
  return CryptoJS.AES.encrypt(text, key).toString()
}

export function decrypt(ciphertext: string, key: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key)
  return bytes.toString(CryptoJS.enc.Utf8)
}
