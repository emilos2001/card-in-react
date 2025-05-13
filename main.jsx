import {createRoot} from "react-dom/client";
import {useState} from "react";
// import {ChefClaude} from "./ChefClaude/Header.jsx";
import {CardInfo} from "./card.jsx";
//
// function click(){
//     console.log("I was clicked!")
// }
// function onMouseOver(){
//     console.log("I was hovered!")
// }
// function App(){
//     return(
//         <main className="container">
//             <img
//                 onMouseOver={onMouseOver}
//                 src="https://picsum.photos/640/360"
//                 alt="Placeholder image from Picsum"
//             />
//             <button onClick={click}>Click me</button>
//         </main>
//     )
// }
function App() {
    const [myFavoriteThings, setMyFavoriteThings] = useState([]);
    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)
    function addFavoriteThing(){
        setMyFavoriteThings(prevState => [...prevState, allFavoriteThings[prevState.length]]);
    }
    return (
        <main>
            <button onClick={addFavoriteThing} className="value">Add Items</button>
            <section aria-label='add items'>
                {thingsElements}
            </section>
        </main>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(
    <>
        <CardInfo/>
        {/*<App/>*/}
        {/*<ChefClaude/>*/}
        {/*<HeaderApp/>*/}
        {/*<App/>*/}
        {/*<Challenge/>*/}
        {/*{<NinjaTurtle/>}*/}
    </>
)