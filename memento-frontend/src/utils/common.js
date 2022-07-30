import { Platform } from 'react-native'

const server = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.9:3000'

const = showError = (err) => alert('Ops! Ocorreu um problema.')
const = showSuccess = (msg) => alert(`Sucesso! ${msg}`) 

export {
	server,
	showSuccess,
	showError
}