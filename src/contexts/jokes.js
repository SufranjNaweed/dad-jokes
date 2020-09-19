import React, {createContext, useState} from 'react'

export const JokesContext = createContext()

const JokesContextProvider = (props) => {
    const [JokesSaved, saveJokes] = useState([])

    const deleteOneJokes = async (jokeToDelete) => {
        try {
            const newJokes = await JokesSaved.filter(joke => joke.id !== jokeToDelete.id)
            await saveJokes(newJokes)
        }
        finally {}
    }

    const deleteAllJokes = async () => {
        saveJokes()
    }

    const saveOneJokes = async (newJoke) => {
        try {
            const isAlreadySaved = await JokesSaved.filter(joke => joke.id === newJoke.id)
            if(!isAlreadySaved)
                return await saveJokes([newJoke,...JokesSaved])
            else
                return -1
        }
        finally {}
    }

    return(
        <JokesContext.Provider
            value= {{
                JokesSaved : JokesSaved,
                saveOneJokes : saveOneJokes,
                deleteOneJokes : deleteOneJokes,
                deleteAllJokes : deleteAllJokes
            }}
        >
            {props.children}
        </JokesContext.Provider>
    )
}

export default JokesContextProvider