import './style.css'
import {useState} from "react";
import avatar from './assets/user.png'
import emptyStar from './assets/emptyStar.png'
import filledStar from './assets/filledStar.png'

export function CardInfo() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    let starIcon = contact.isFavorite ? filledStar : emptyStar

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    console.log(contact)
    return (
        <>
            <article className="card">
                <img className='avatar' src={avatar} alt="avatar"/>
                <div className='info'>
                    <button onClick={toggleFavorite}
                            aria-pressed={contact.isFavorite}
                            aria-label={contact.isFavorite ? 'Removed from favorites' : 'Added to favorites'}
                            className='favorite-button'>
                        <img src={starIcon}
                             alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                             className='favorite'/>
                    </button>
                    <h1 className='name'>
                        {contact.firstName} {contact.lastName}
                    </h1>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>
            </article>
        </>
    )
}