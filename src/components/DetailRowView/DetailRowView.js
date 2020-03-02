import React from 'react'

export const DetailRowView = ({person}) => {
  const {
    firstName,
    lastName,
    description,
    address: {streetAddress, city, state, zip}
  } = person

  return (
    <div>
      <p>
        Выбран пользователь{' '}
        <b>
          {firstName} {lastName}
        </b>
      </p>
      <p>
        Описание:
        <br />
        <textarea defaultValue={description} />
      </p>
      <p>
        Адрес проживания: <b>{streetAddress}</b>
      </p>
      <p>
        Город: <b>{city}</b>
      </p>
      <p>
        Провинция/штат: <b>{state}</b>
      </p>
      <p>
        Индекс: <b>{zip}</b>
      </p>
    </div>
  )
}
