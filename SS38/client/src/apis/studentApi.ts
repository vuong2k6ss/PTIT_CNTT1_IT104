import axios from 'axios'
import type { Book } from '../interface/book'

const client = axios.create({
	baseURL: 'http://localhost:8080',
})

export type BookPayload = Omit<Book, 'id'>

export const fetchBooks = async (): Promise<Book[]> => {
	const response = await client.get<Book[]>('/books')
	return response.data
}

export const createBook = async (payload: BookPayload): Promise<Book> => {
	const response = await client.post<Book>('/books', payload)
	return response.data
}

export const updateBook = async (id: number, payload: BookPayload): Promise<Book> => {
	const response = await client.put<Book>(`/books/${id}`, payload)
	return response.data
}

export const deleteBook = async (id: number): Promise<void> => {
	await client.delete(`/books/${id}`)
}
