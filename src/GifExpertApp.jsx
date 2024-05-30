import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one pouch'])

    const onAddCategory = (onNewCategory) => {

        setCategories([onNewCategory, ...categories])
    }

    return (
        <>
            <h1>GifexpoerApp</h1>
            <AddCategory
                /*  setCategories={setCategories} */

                onNewCategory={(value) => onAddCategory(value)}

            ></AddCategory>


            {
                categories.map(category => (


                    <GifGrid key={category}
                        category={category}
                    />
                ))



            }
        </>
    )
}
