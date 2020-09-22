import React, {createContext, useState, useEffect} from 'react'
import { toast } from 'react-toastify';

export const JokesContext = createContext()

const JokesContextProvider = (props) => {
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        if(jokes.length === 0){
            getLocalStorageJokes()
        }
    }, [])

    const getLocalStorageJokes = () => {
        let storage = localStorage.getItem("jokes")
        if(storage){
            storage = JSON.parse(storage)
            setJokes([...storage])
        }
        else{
            setJokes([])
        }
    }

    const saveOneJoke = async (newJoke) => {
        try {
            // check if is joke is already saved
            const isAlreadySaved = await jokes.filter(joke => joke.id === newJoke.id)
            if(isAlreadySaved.length === 0){
                // save into state
                await setJokes([newJoke, ...jokes])
                let storage = await localStorage.getItem('jokes')
                if(storage){
                    storage = JSON.parse(storage)
                    await localStorage.setItem("jokes", JSON.stringify([newJoke, ...storage]))
                    toast.success("🤣 OMEGALUL I'll keep it 💗")
                }
                else{
                    await localStorage.setItem("jokes", JSON.stringify([newJoke, ...jokes]))
                    toast.success("🤣 OMEGALUL I'll keep it 💗")
                }
                return 0
            }
            else
                return -1
        }
        finally {}
    }

    const deleteAllJokes = async () => {
        setJokes([])
        localStorage.setItem("jokes", JSON.stringify([]))
    }

    const deleteOneJokes = async (jokeToDelete) => {
        try {
            const newJokes = await jokes.filter(joke => joke.id !== jokeToDelete.id)
            await setJokes(newJokes)
            await localStorage.setItem("jokes", JSON.stringify([...jokes]))
            toast.warn("❌ It wasnt so funny after all ❌")
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