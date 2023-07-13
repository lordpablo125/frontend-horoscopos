import { GRID, LIST } from '@/services/conts'
import React, { useContext, useState } from 'react'

import HoroscopesContext from '@/store/horoscopes-context'

export default function Card({ horoscopes, layout }) {
  const { horoscopeOfDay, sortedBy } = useContext(HoroscopesContext)

  return (
    <>
      <section className="flex justify-center pb-4">
        <article
          key={horoscopeOfDay?.id}
          className="flex basis-[64%] shadow-md rounded bg-white border-solid border-gray-500 border-8"
        >
          <div className="p-4">
            <img
              src={horoscopeOfDay?.urlImage}
              alt={horoscopeOfDay?.image}
              className="w-full rounded-t shadow-md w-36"
            />
          </div>
          <div className="w-2/3 py-4 pr-4">
            <h3 className="text-3xl font-bold ">{horoscopeOfDay?.name}</h3>
            <p>{horoscopeOfDay?.prediction}</p>
          </div>
        </article>
      </section>
      {horoscopes.length > 0 ? (
        <section
          role="cards"
          className="flex flex-wrap justify-around gap-y-10"
        >
          {horoscopes.map((horocope) => (
            <article
              onClick={() => handleClick(horocope?.id)}
              key={horocope?.id}
              className={`flex shadow-md rounded  border-solid border-gray-400 border-4 ${
                layout === GRID ? 'basis-[31%]' : 'w-full'
              }  ${sortedBy ? 'bg-white' : ''}`}
            >
              <div className="p-4">
                {layout === GRID ? (
                  <h3 className="flex justify-center text-2xl font-bold mb-4 ">
                    {horocope?.name}
                  </h3>
                ) : (
                  ''
                )}
                <img
                  src={horocope?.urlImage}
                  alt={horocope?.image}
                  className="w-full rounded-t shadow-md w-36"
                />
              </div>
              <div className="w-2/3 py-4 pr-4">
                {layout === LIST ? (
                  <h3 className="text-2xl font-bold mx-4 mb-4 pl-4">
                    {horocope?.name}
                  </h3>
                ) : (
                  ''
                )}
                <p>{horocope.prediction}</p>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <p>No horoscopes</p>
      )}
    </>
  )
}

/*
      id: 0,
      name: 'Tauro',
      init_date: '20-04',
      end_date: '21-05',
      prediction:
        'La introspección no es algo difícil para Tauro. El cierre de la semana les permitirá lograr una proyección de toda su introspección y equilibrio. Los cambios y decisiones de la semana anterior no fueron en vano y, superar ese desafío, no hará más que fortalecerlos.',
      image: 'tauro.jpg'
*/
