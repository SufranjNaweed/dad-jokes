import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JokeCard = ({joke, saveOneJoke, fetchJoke, deleteOneJokes}) => {
    const copyClipboard = async (joke) => {
        if(joke){
            navigator.clipboard.writeText(joke.joke)
            toast.info('📎 Link is in your paste bin')
        }
    }
    
    return(
        <>
            <div className="joke-card">
                <div className="joke-title">
                    <p>{joke ? joke.joke : "Loading Jokes"}</p>
                </div>
                {
                    deleteOneJokes ?
                    <div className="joke-action-container">
                        <button className="share"  onClick={() => copyClipboard(joke)}>share</button>
                        <button className="save" onClick={() => { joke.joke ? deleteOneJokes(joke) : console.log("nothing to save") }}>remove favorites</button>
                    </div>
                    :
                    <div className="joke-action-container">
                        <button className="new" onClick={fetchJoke}>new joke</button>
                        <button className="share" onClick={() => copyClipboard(joke)}>share</button>
                        <button className="save" onClick={() => { joke.joke ? saveOneJoke(joke) : console.log("nothing to save") }}>favorite</button>
                    </div>
                }
            </div>
        </>
    )
}

export default JokeCard