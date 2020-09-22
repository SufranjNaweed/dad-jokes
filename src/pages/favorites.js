import React, {useContext} from 'react'
import {JokesContext} from '../contexts/jokes'
import JokeCard from '../components/JokeCard'
import { ToastContainer } from 'react-toastify';

const Favorites = () => {
    const {jokes, deleteOneJokes } = useContext(JokesContext)
    return(
        <section>
            <div className="container">
                <h2 className="page-title">Your favorites jokes</h2>
                <div className="jokes-container">
                    {
                        jokes.map((joke) => (
                            <JokeCard 
                                key={joke.id}
                                joke={joke} 
                                deleteOneJokes={deleteOneJokes}
                            />
                        ))
                    }
                </div>
                <ToastContainer position="bottom-center" />
            </div>
        </section>
    )
}

export default Favorites