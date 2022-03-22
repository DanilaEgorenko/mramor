import React, { useState } from 'react'

import Filter from '../interfaces/filter'

const FilterGoods: React.FC = () => {
    const [filter, setFilter] = useState<Filter>({
        searchQuery: '',
        countries: 'all',
        thickness: 'all',
        color: 'all',
        size: 'all',
        priority: 'defualt'
    })
    return (
        <section className='filter'>
            <select
                className='filter__wrapper filter__wrapper_country'
                name='selectByCountry'
                defaultValue={'all'}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFilter(lastData => {
                        return { ...lastData, thickness: e.target.value }
                    })
                }}>
                <option value='all'>Все страны</option>
                <option value='Egypt'>Египет</option>
                <option value='India'>Индия</option>
                <option value='Poland'>Польша</option>
            </select>
            <select
                className='filter__wrapper filter__wrapper_thickness'
                name='selectByThickness'
                defaultValue={'allThickness'}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFilter(lastData => {
                        return { ...lastData, thickness: e.target.value }
                    })
                }}
            >
                <option value='all'>Любая толщина</option>
                <option value='16'>16мм</option>
                <option value='20'>20мм</option>
                <option value='22'>22мм</option>
            </select>
            <select
                className='filter__wrapper filter__wrapper_color'
                name='selectByColor'
                defaultValue={'all'}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFilter(lastData => {
                        return { ...lastData, color: e.target.value }
                    })
                }}
            >
                <option value='all'>Все цвета</option>
                <option value='white'>white</option>
                <option value='green'>green</option>
                <option value='brown'>brown</option>
                <option value='blue'>blue</option>
                <option value='orange'>orange</option>
                <option value='pink'>pink</option>
                <option value='grey'>grey</option>
                <option value='black'>black</option>
                <option value='violet'>violet</option>
            </select>
            <select
                className='filter__wrapper filter__wrapper_size'
                name='selectBySize'
                defaultValue={'all'}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFilter(lastData => {
                        return { ...lastData, size: e.target.value }
                    })
                }}
            >
                <option value='all'>Все размеры</option>
                <option value='200'>200x200</option>
                <option value='300'>300x300</option>
                <option value='500'>500x500</option>
            </select>

            <input
                className='filter__input'
                type='search'
                placeholder='Поиск'
                value={filter.searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFilter(lastData => {
                        return { ...lastData, searchQuery: e.target.value }
                    })
                }}
            />

            <select
                className='filter__order'
                name='orderFilter'
                defaultValue={'default'}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFilter(lastData => {
                        return { ...lastData, priority: e.target.value }
                    })
                }}
            >
                <option value='default'>По умолчанию</option>
                <option value='biggerPrice'>Дороже</option>
                <option value='lessPrice'>Дешевле</option>
                <option value='nameA'>А-Я</option>
                <option value='nameZ'>Я-А</option>
            </select>
        </section >
    )
}

export default FilterGoods;