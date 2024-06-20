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
    // .then((data) => {
    //   console.log(data)
    // })
    .catch((error) => {
      console.error('Помилка при виконанні запиту:', error)
    })
}
export { sendInTg }
