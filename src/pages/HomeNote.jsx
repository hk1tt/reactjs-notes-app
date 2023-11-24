import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearchHeart, BsPlusLg } from "react-icons/bs";
import trialNotes from '../trialNotes';
import AddedNotes from '../components/AddedNotes';

const HomeNote = () => {
  return (
    <section>
        <header className="notes__header">
            <h2>My Notes</h2>
            <input type="text " autoFocus placeholder='Keyword...' />
            <button className="btn ">
                {/* <CiSearch /> */}
                <BsSearchHeart />
            </button>

        </header>

        <div className="notes__container">
            {
                trialNotes.map(note => <AddedNotes note={note} key={note.id} />)
            }
        </div>

        <Link className="btn add__btn">
            <BsPlusLg />
        </Link>

    </section>
  )
}

export default HomeNote