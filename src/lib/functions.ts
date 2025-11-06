import { baseURL, chatId, validator } from '@/Constants/urls'

export const sendInTg = async (msg: string): Promise<Response> => {
  return await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      validator: validator,
      chat_id: chatId,
      message: msg,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        console.error('Network response was not ok')
      }
      return response
    })
    .catch((error) => {
      console.error('Error:', error)
      return new Response(null, { status: 500 })
    })
}

export const getUTMParams = () => {
  if (typeof window === 'undefined') {
    return {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
    }
  }

  const urlParams = new URLSearchParams(window.location.search)
  return {
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_term: urlParams.get('utm_term') || '',
    utm_content: urlParams.get('utm_content') || '',
  }
}
