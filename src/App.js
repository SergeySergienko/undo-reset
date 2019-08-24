import React, { useState } from 'react'
// import cx from 'classnames'
import useApp from './useApp'
import female from './images/female.jpg'
import male from './images/male.png'

const FriendBox = ({ gender, ...props }) => (
  <div className='box'
    // className={cx('box', {
    //   'teal-border': gender === 'Male',
    //   'hotpink-border': gender === 'Female',
    // })}
    {...props}
  />
)

const App = () => {
  const { onSubmit, friends,undo } = useApp();
  const [name, setName] = useState('')
  const [gender, setGender] = useState('Male')
  const onNameChange = e => setName(e.target.value)
  const onGenderChange = e => setGender(e.target.value)
  return (
      <div>
        <form
          className="form"
          onSubmit={onSubmit({ name, gender})}
        >
          <div>
            <input
              onChange={onNameChange}
              value={name}
              type="text"
              name="name"
              placeholder="Friend's Name"
            />
          </div>
          <div>
            <select
              onChange={onGenderChange}
              name="gender"
              value={gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <div className="boxes">
          {friends.map(({ name, gender }, index) => (
            <FriendBox key={`friend_${index}`} gender={gender}>
              <div className="box-name">Name: {name}</div>
              <div className="gender-container">
                <img src={gender === 'Female' ? female : male} alt="" />
              </div>
            </FriendBox>
          ))}
        </div>
      </div>
    )
  }

export default App