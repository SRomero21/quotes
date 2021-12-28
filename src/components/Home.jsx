import React,{useState} from 'react'
//components
import Quotes from "./Quotes"
//json
import quotes from "../quotes.json"
//styles
import "../styles/home.css"
const Home = () => {
    const colors = [
        "#08aeea",
        "#bde217a2",
        "#cd853f",
        "#b6580bbe",
        "#0292a5",
        "#b721ff",
        "#0081CF",
        "#d81c5ba2",
      ];
      const [getQuote, setGetQuote] = useState(quotes[getNumber(quotes.length)]);
      const [background, setBackground] = useState(
        colors[getNumber(colors.length)]
      );
      const handleQuote = () => {
        const index = getNumber(quotes.length);
        setGetQuote(quotes[index]);
        setBackground(colors[getNumber(colors.length)]);
      };
    return (
        <div className="App" style={{ background }}>
        <Quotes
          phrase={getQuote.quote}
          author={getQuote.author}
          handleQuote={handleQuote}
          background={background}
        />
      </div>
    )
}
const getNumber = (max) => Math.floor(Math.random() * max);
export default Home
