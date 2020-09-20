import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Home = () => {
   const [joke, setJoke] = useState()

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
            }
        }
        finally {}
    }

    const copyClipboard = async () => {
        try{
            if(joke){
                navigator.clipboard.writeText(joke.joke)
            }
        }
        finally {}
    }

    return(
        <section>
            <div className="container">
                <h2>Home</h2>
                <div className="jokes-container">
                    <div className="joke-card">
                        <div className="joke-title">
                            <p>{joke ? joke.joke : "Loading Jokes"}</p>
                        </div>
                        <div className="joke-action-container">
                            <button onClick={fetchJoke}>new joke</button>
                            <button 
                                onClick={copyClipboard}
                            >share</button>
                            <button>favorite</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home