import { baseURL, chatId, validator } from './urls'

const sendInTg = async (msg) => {
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
        throw new Error('Network response was not ok')
      }
      return response
    })
    .catch((error) => {
      console.error('Помилка при виконанні запиту:', error)
    })
}

const getUTMParams = () => {
  const urlParams = new URLSearchParams(window.location.search)
  return {
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_term: urlParams.get('utm_term') || '',
    utm_content: urlParams.get('utm_content') || '',
  }
}

export { sendInTg, getUTMParams }
