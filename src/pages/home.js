import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

import {JokesContext} from '../contexts/jokes'
import JokeCard from '../components/JokeCard'

const Home = () => {
   const [joke, setJoke] = useState({})
   const {saveOneJoke} = useContext(JokesContext)

    useEffect(() => {
        fetchJoke()
    }, [])

    const fetchJoke = async () => {
        try {
            setJoke({})
            const header = {
                "Accept": "application/json"
            }
            const res =  await axios.get('https://icanhazdadjoke.com/', {headers: header})
            if (res.data){
                console.log(res.data)
                setJoke(res.data)
                toast("🎁 Gotta new joke for you 🤣")
            }
        }
        finally {}
    }

    return(
        <section>
            <div className="container">
                <h2 className="page-title">Dad Joke</h2>
                <div className="jokes-container">
                    <JokeCard 
                        joke={joke}
                        saveOneJoke={saveOneJoke}
                        fetchJoke={fetchJoke} 
                    />
                </div>
                <ToastContainer position="bottom-center" />
            </div>
        </section>
    )
}

export default Home