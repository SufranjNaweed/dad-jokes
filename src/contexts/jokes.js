import React, {createContext, useState} from 'react'

export const JokesContext = createContext()

const JokesContextProvider = (props) => {
    const [jokes, setJokes] = useState([])

    const saveOneJoke = async (newJoke) => {
        try {
            console.log("saveOneJokes -> newJoke", newJoke)
            const isAlreadySaved = await jokes.filter(joke => joke.id === newJoke.id)
            if(!isAlreadySaved)
                return await setJokes([newJoke, ...jokes])
            else
                return -1
        }
        finally {}
    }

    const deleteAllJokes = async () => {
        setJokes([])
    }

    const deleteOneJokes = async (jokeToDelete) => {
        try {
            const newJokes = await jokes.filter(joke => joke.id !== jokeToDelete.id)
            await setJokes(newJokes)
        }
        finally {}
    }

    return(
        <JokesContext.Provider
            value={{
                jokes : jokes,
                saveOneJoke : saveOneJoke,
                deleteAllJokes : deleteAllJokes,
                deleteOneJokes : deleteOneJokes
            }}
        >
            {props.children}
        </JokesContext.Provider>
    )
}

export default JokesContextProvider