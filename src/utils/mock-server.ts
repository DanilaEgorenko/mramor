import data from './data'

import Filter from '../interfaces/filter'

const getData = async (): Promise<typeof data> => {
    return new Promise<typeof data>(res => setTimeout(() => res(data), Math.random() * 3 * 1000))
}

const getDataByName = async (name: string) => getData().then(data => {
    return data.find(item => item.name === name)
})

const getDataBySearch = async (search_query: string) => getData().then(data => {
    return data.filter(x => x.name.includes(search_query))
})

const getDataByFilter = async (filters: Omit<Filter, 'searchQuery' | 'priority'>) => getData().then(data => {
    for (let key in filters) {
        if (filters[key] !== 'all') {

        }
    }
})

const getDataByPriority = async (priority: Filter['priority']) => getData().then(data => {
    if (priority === 'default') return data
    if (priority === 'biggerPrice') return data.sort((a, b) => b.price - a.price)
    if (priority === 'lessPrice') return data.sort((a, b) => a.price - b.price)
    if (priority === 'nameA') return data.sort((a, b) => a.name >= b.name ? 1 : -1)
    if (priority === 'nameZ') return data.sort((a, b) => a.name < b.name ? 1 : -1)
})

export { getData, getDataByName, getDataBySearch, getDataByPriority }