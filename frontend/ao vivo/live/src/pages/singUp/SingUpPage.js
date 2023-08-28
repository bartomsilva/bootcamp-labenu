import { useForm } from "../../hooks/useForm"
import { singUp } from "../../controller/Controller"

export default function SingUp() {
  const [form, onChange] = useForm({ name: "", email: "" })

  const registUser = (e) => {
    e.preventDefault()
    singUp(form.name,form.email)
  }

  return (
    <>
      <form onSubmit={registUser}>
        <input type="text"
          name='name'
          value={form.name}
          placeholder="digite seu nome"
          onChange={onChange}
          required />
        <input type="text"
          name='email'
          value={form.email}
          placeholder="digite seu email"
          onChange={onChange}
          required />
        <button>Cadastrar</button>
      </form>
    </>
  )
}