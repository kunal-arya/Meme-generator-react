import React from "react"

export default function Main() {
    
    // handling input states using React Hook - useState

    const [formData, setFormData] = React.useState({
        topText : "",
        bottomText : "",
        memeImage : "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const {name,value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name] : value
        }))
    }

    // getting memeImage from an Api using React Hook - useEffect

    const [memesArray, setMemesArray] = React.useState({})

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemesArray(data.data.memes))
    },[])


    // A New Meme Image come when someone tries to submit the form by clicking the button

    function getRandomImage() {
        let random = Math.floor(Math.random() * memesArray.length)
        return memesArray[random].url
    }

    function submitFormHandler(event) {
        event.preventDefault()
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                memeImage : getRandomImage()
            }
        })
    }

    return (
        <main className="main">
            <form className="form" onSubmit={submitFormHandler}>
                
                <input 
                    placeholder="Top Text"
                    className="form--up" 
                    type="text"
                    name="topText"
                    onChange={handleChange}    
                    value = {formData.topText}
                />
                
                <input 
                    placeholder="Bottom Text"
                    className="form--down" 
                    type="text" 
                    name="bottomText"
                    onChange={handleChange}
                    value = {formData.bottomText}
                />
                
                <button
                    className="form--btn"
                >Get a new meme image 🖼</button>

            </form>

            <div className="meme">
                <img 
                    src={formData.memeImage}
                    className="meme-img" 
                />
                <h2 className="meme--text top">{formData.topText}</h2>
                <h2 className="meme--text bottom">{formData.bottomText}</h2>
            </div>

        </main>
        
    )
}