import { create } from 'zustand'

const popUpStore = create((set) => ({
  show: false,
  handleClose: () => set({ show: false }),
  handleShow: () => set({ show: true }),
}))

export { popUpStore }
