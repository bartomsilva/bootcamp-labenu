import { useState } from 'react'

export default function useForms(initialState) {
    const [form, setForm] = useState(initialState)

    const onChange = (e) =>{
        const {value, name} = e.target
        setForm({...form, [name]: value})
    }

    const resetForm = () =>{
      setForm(initialState)
    }
  return {form, onChange, resetForm}
}
