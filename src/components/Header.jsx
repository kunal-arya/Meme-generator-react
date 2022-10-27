import trollFace from "../assets/images/troll-face.png"


export default function Header() {

    return (
        <header className="header">
            <img className="header--img" src={trollFace} alt="Troll Face" />
            <h2 className="header--title">Meme Generator</h2>
            <p className="header--subtitle">React Project</p>
        </header>
    )
}