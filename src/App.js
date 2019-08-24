import React, { useState } from 'react'
// import cx from 'classnames'
import useApp from './useApp'
import female from './images/female.png'
import male from './images/male.png'

const FriendBox = ({ gender, ...props }) => (
  <div className={`${gender}-border`}
    // className={cx('box', {
    //   'teal-border': gender === 'Male',
    //   'hotpink-border': gender === 'Female',
    // })}
    {...props}
  />
)

const App = () => {
  const { onSubmit, friends, undo, history, theme, onThemeChange, reset } = useApp();

  const [name, setName] = useState('')
  const [gender, setGender] = useState('male')
  const onNameChange = e => setName(e.target.value)
  const onGenderChange = e => setGender(e.target.value)

  const resetValues = () => {
    setName('')
    setGender('male')
  }
  console.log(history)

  return (
      <div className={`theme-${theme}`}>
        <div>
          <h3>What theme would you like to display?</h3>
          <div>
            <select onChange={onThemeChange} name="theme" value={theme}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
        <h3>Add a friend</h3>
        <form
          className="form"
          onSubmit={
            onSubmit({ name, gender }, resetValues)
          }
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
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <h3>Made a mistake?</h3>
        <div className="undo-actions">
          <div>
            <button type="button" onClick={undo}>
              Undo
            </button>
          </div>
          <div>
            <button type="button" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
        <div className="boxes">
          {friends.map(({ name, gender }, index) => (
            <FriendBox key={`friend_${index}`} gender={gender}>
              <div className="box-name">Name: {name}</div>
              <div className="gender-container">
                <img src={gender === 'female' ? female : male} alt="" />
              </div>
            </FriendBox>
          ))}
        </div>
      </div>
    )
  }

export default App