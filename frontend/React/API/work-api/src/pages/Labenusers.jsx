import { useState } from 'react'
import axios from 'axios'


export default function Labnusers(){

    const [user, setUser] = useState({ name: "", email: "" })
    const [students, setStudents] = useState([])
  
    function saveUser() {
  
      const body = {
        name: user.name,
        email: user.email,
      }
  
      axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
        headers: {
          "Authorization": 'bart-silva-ozemela'
        }
      }).then((response) => {
        setStudents([...students, {name: user.name}  ])
        console.log(response)
      }).catch((error) => {
        console.log(error.response.data)
      })
  
  
    }
  
    function deleteUser(uid) {
  
      axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' + uid, {
        headers: {
          "Authorization": 'bart-silva-ozemela'
        }
      }).then((response) => {
        const copyStudents = students.filter((std) => std.id != uid)
        setStudents(copyStudents)
        console.log(response)
      }).catch((error) => {
        console.log(error.response)
      })
  
    }
  
    function editUser(uid) {
  
      const body = {
        name: user.name,
      }
      if (!user.name.length) return
  
      axios.put('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' + uid, body, {
        headers: {
          "Authorization": 'bart-silva-ozemela'
        }
      }).then((response) => {
        console.log(response)
        const copyStudents = students.map((std) => {
          if (std.id === uid) {
            std.name = user.name
          }
          return std
        })
        setStudents(copyStudents)
      }).catch((error) => {
        console.log(error.response)
      })
    }
  
  
    function loadUser() {
  
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers: {
          "Authorization": 'bart-silva-ozemela'
        }
      })
        .then((response) => {
          setStudents(response.data)
          console.log(response)
        })
        .catch((error) => {
          console.log("deu ruim....",error)
        })
  
    }
  
  
    // manipula os inputs ( onchange )
    function handleOnChange(e) {
      const { name, value } = e.target
      setUser({ ...user, [name]: value })
  
    }
    return(
        <div>

      <label>
        Nome:
        <input type="text" name='name' value={user.name} onChange={handleOnChange} />
      </label>
      <label>
        e-mail:
        <input type="text" name='email' value={user.email} onChange={handleOnChange} />
      </label>
      <button onClick={saveUser}>Salvar no Back</button>
      <button onClick={loadUser}>Ler do Back...</button>
      <hr />
      {
        students?.map((std, idx) =>
          <div key={idx}>
            <p>{std.id}</p>
            <p>{std.name}</p>
            <p>{std.email}</p>
            <button onClick={() => deleteUser(std.id, idx)}>Excluir</button>
            <button onClick={() => editUser(std.id, idx)}>Editar</button>
            <hr />
          </div>
        )
      }
    </div>

    )
}