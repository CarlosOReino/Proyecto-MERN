import React from 'react';


const Cards = ({ reviews }) => {
    return (
        <div className="cards mt-5 mb-5 d-flex justify-content-center">
            {reviews.map((review, index) => (
                <div className="card" key={index}>
                    <img src={review.photo} alt="Review" className="card-photo" />
                    <div className="card-content">
                        <div className="card-stars">
                            {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
                        </div>
                        <p className="card-text">{review.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;