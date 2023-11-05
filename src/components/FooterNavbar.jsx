import React from 'react'
import Items from './Items';
const FooterNavbar = () => {
    const bottomMenu = [{ id: 5, link: '/', title: 'پروفایل', image: 'profile', activeimage: 'profile', value: 'profile', }, { id: 4, link: '/', title: 'لیگ ها', image: 'champions', activeimage: 'champions', value: 'champions', }, { id: 3, link: '/profile', title: 'فوتبال', image: 'goals', activeimage: 'goals', value: 'goals', }, { id: 2, link: '/profile', title: 'اکتشافات', image: 'ExploreIcon', activeimage: 'ExploreIcon', value: 'ExploreIcon', }, { id: 1, title: 'مسابقات', link: '/profile', image: 'matchs', activeimage: 'matchs', value: 'matchs', },];
  return (
      <div className='absolute bottom-0 left-auto h-10 w-full max-w-sm mx-auto'>
          <section className=' fixed bottom-0 right-auto h-20 max-w-md mx-auto w-full bg-Mpr-bgwhite z-50 items-center text-center justify-center bg-white'>
              <section className='grid grid-cols-5 gap-1'>
                  {bottomMenu?.map(menuItem => (
                      <div
                          key={menuItem.id}
                          className='cursor-pointer flex flex-col items-center'
                      >
                          {menuItem.value === 'Home' && (
                              <section className='w-full h-[1px] bg-Mpr-darckred'></section>
                          )}
                          <Items
                              title={menuItem.title}
                              classNames={`flex flex-col items-center ${menuItem.value === 'matchs'? ' text-sm text-green-800': 'text-gray-500 text-sm'}`}src={`${menuItem.value === 'Home'? menuItem.activeimage: menuItem.image}`}
                          />
                      </div>
                  ))}
              </section>
          </section>
      </div>
  )
}

export default FooterNavbar