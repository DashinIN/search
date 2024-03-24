import { useState } from 'react'
import Search from 'antd/es/input/Search'
import './App.css'

const usersList = [
  {
      name: 'Петр',
      surname: 'Иванов',
      patronymic: 'Васильевич',
      email: 'ivanov@gmail.com'
  },
  {
      name: 'Андрей',
      surname: 'Новиков',
      patronymic: 'Алексеевич',
      email: 'andrew2002@gmail.com'
  },
  {
      name: 'Максим',
      surname: 'Соколов',
      patronymic: 'Николаевич',
      email: 'nax12@gmail.com'
  },
  {
      name: 'Кирилл',
      surname: 'Андреев',
      patronymic: 'Андреевич',
      email: 'gokirill@gmail.com'
  },
  {
      name: 'Иван',
      surname: 'Макаров',
      patronymic: 'Ильич',
      email: 'mmm@gmail.com'
  },
  {
      name: 'Алексей',
      surname: 'Иванов',
      patronymic: 'Васильевич',
      email: 'alex123@gmail.com'
  }
]


function App() {
  const [users, setUsers] = useState(usersList)

  const onSearch = (e) => {
    const searchText = e.target.value
    const searchWords = searchText.toLowerCase().split(' ').filter(value => value.length)

    const conditionUsers = usersList.filter(user => {
      if(!searchWords.length) return true
      const {name, surname, patronymic, email} = user
      const userData = [name.toLowerCase(), surname.toLowerCase(), patronymic.toLowerCase(), email.toLowerCase().split('@')[0]]
      console.log(userData)
      console.log(searchWords)
      for(let userDataItem of userData) {
        for(let searchWord of searchWords) {
          if(userDataItem.includes(searchWord)) {
            return true
          }
        }
      } 
    })
    
    setUsers(conditionUsers)
  }

  return (
    <>
      <h1>Умный фильтр пользователей</h1>
      <Search placeholder="Введите данные о пользователе" onChange={onSearch} enterButton />
      <h3>Результаты поиска:</h3>
      {
        users.map((user, index) => (
          <div key={index} className='users'>
            <div>{index+1}{')'} {user.name} {user.surname} {user.patronymic}</div>
            <div> {user.email}</div>
          </div>
        ))
      }
    </>
  )
}

export default App
