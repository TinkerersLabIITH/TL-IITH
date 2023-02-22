import React from 'react'
import cn from 'classnames'

export default function ProfileCard({ title, ImagePath, Domain, gradient }) {
  return (
    <div className={cn(
      'transform hover:scale-[1.01] transition-all',
      'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 m-4',
      gradient
    )}>
      <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4 items-center">
        <figure>
          <img src={ImagePath} alt={title} className='h-50 w-50 rounded-full ' />
        </figure>
        <p className='font-bold text-3xl p-2'>{title}</p>
        <p className='font-bold  color text-gray-500'>{Domain}</p>
      </div>

    </div>
  )
}
