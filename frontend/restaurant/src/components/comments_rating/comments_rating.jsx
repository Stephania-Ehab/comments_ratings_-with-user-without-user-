////////////////////////////////////////WITH USER//////////////////////////////////////////////
//
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// const ProductDetails = ({ match }) => {
//     const [product, setProduct] = useState(null);
//     const [newComment, setNewComment] = useState('');
//     const [rating, setRating] = useState(0);
//
//     useEffect(() => {
//         axios.get(`/api/products/${match.params.id}/`)
//             .then(response => {
//                 setProduct(response.data);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the product!", error);
//             });
//     }, [match.params.id]);
//
//     const handleCommentSubmit = () => {
//         axios.post(`/api/products/${match.params.id}/comments/`, { content: newComment })
//             .then(response => {
//                 setProduct(prev => ({ ...prev, comments: [...prev.comments, response.data] }));
//                 setNewComment('');
//             })
//             .catch(error => {
//                 console.error("There was an error posting the comment!", error);
//             });
//     };
//
//     const handleRatingSubmit = () => {
//         axios.post(`/api/products/${match.params.id}/ratings/`, { score: rating })
//             .then(response => {
//                 setProduct(prev => ({ ...prev, ratings: [...prev.ratings, response.data] }));
//                 setRating(0);
//             })
//             .catch(error => {
//                 console.error("There was an error submitting the rating!", error);
//             });
//     };
//
//     if (!product) return <p>Loading...</p>;
//
//     return (
//         <div>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//
//             <h3>Comments</h3>
//             <ul>
//                 {product.comments.map((comment, index) => (
//                     <li key={index}>
//                         <p>{comment.content} - <strong>{comment.user}</strong></p>
//                     </li>
//                 ))}
//             </ul>
//             <input
//                 type="text"
//                 value={newComment}
//                 onChange={(e) => setNewComment(e.target.value)}
//                 placeholder="Add a comment"
//             />
//             <button onClick={handleCommentSubmit}>Submit Comment</button>
//
//             <h3>Rate this product</h3>
//             <input
//                 type="number"
//                 value={rating}
//                 onChange={(e) => setRating(e.target.value)}
//                 max={5}
//                 min={1}
//             />
//             <button onClick={handleRatingSubmit}>Submit Rating</button>
//
//             <h3>Ratings</h3>
//             <ul>
//                 {product.ratings.map((rating, index) => (
//                     <li key={index}>
//                         <p>{rating.user}: {rating.score}/5</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export default ProductDetails;

////////////////////////////////////////WITHOUT USER//////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:9000/api/products/${id}/`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the product!", error);
            });
    }, [id]);

    const handleCommentSubmit = () => {
        axios.post(`http://localhost:9000/api/products/${id}/comments/`, { content: newComment })
            .then(response => {
                setProduct(prev => ({ ...prev, comments: [...prev.comments, response.data] }));
                setNewComment('');  // Clear the input after submitting
            })
            .catch(error => {
                console.error("There was an error posting the comment!", error);
            });
    };

    const handleRatingSubmit = () => {
        axios.post(`http://localhost:9000/api/products/${id}/ratings/`, { score: rating })
            .then(response => {
                setProduct(prev => ({ ...prev, ratings: [...prev.ratings, response.data] }));
                setRating(0);  // Reset rating input after submitting
            })
            .catch(error => {
                console.error("There was an error submitting the rating!", error);
            });
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>

            <h3>Comments</h3>
            <ul>
                {product.comments.map((comment, index) => (
                    <li key={index}>
                        <p>{comment.content}</p>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}  // Bind input to newComment
                placeholder="Add a comment"
            />
            <button onClick={handleCommentSubmit}>Submit Comment</button>

            <h3>Rate this product</h3>
            <input
                type="number"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}  // Bind input to rating
                max={5}
                min={1}
            />
            <button onClick={handleRatingSubmit}>Submit Rating</button>

            <h3>Ratings</h3>
            <ul>
                {product.ratings.map((rating, index) => (
                    <li key={index}>
                        <p>{rating.score}/5</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductDetails;

///////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
//
// const ProductDetails = () => {
//     const { id } = useParams(); // Accessing the product ID from the URL
//     const [product, setProduct] = useState(null);
//     const [newComment, setNewComment] = useState('');
//     const [rating, setRating] = useState(0);
//
//     useEffect(() => {
//         axios.get(`/api/products/${id}/`)
//             .then(response => {
//                 setProduct(response.data);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the product!", error);
//             });
//     }, [id]);
//
//     const handleCommentSubmit = () => {
//         axios.post(`/api/products/${id}/comments/`, { content: newComment })
//             .then(response => {
//                 setProduct(prev => ({ ...prev, comments: [...prev.comments, response.data] }));
//                 setNewComment('');
//             })
//             .catch(error => {
//                 console.error("There was an error posting the comment!", error);
//             });
//     };
//
//     const handleRatingSubmit = () => {
//         axios.post(`/api/products/${id}/ratings/`, { score: rating })
//             .then(response => {
//                 setProduct(prev => ({ ...prev, ratings: [...prev.ratings, response.data] }));
//                 setRating(0);
//             })
//             .catch(error => {
//                 console.error("There was an error submitting the rating!", error);
//             });
//     };
//
//     if (!product) return <p>Loading...</p>;
//
//     return (
//         <div>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//
//             <h3>Comments</h3>
//             <ul>
//                 {product.comments.map((comment, index) => (
//                     <li key={index}>
//                         <p>{comment.content}</p>
//                     </li>
//                 ))}
//             </ul>
//             <input
//                 type="text"
//                 value={newComment}
//                 onChange={(e) => setNewComment(e.target.value)}
//                 placeholder="Add a comment"
//             />
//             <button onClick={handleCommentSubmit}>Submit Comment</button>
//
//             <h3>Rate this product</h3>
//             <input
//                 type="number"
//                 value={rating}
//                 onChange={(e) => setRating(parseInt(e.target.value))}
//                 max={5}
//                 min={1}
//             />
//             <button onClick={handleRatingSubmit}>Submit Rating</button>
//
//             <h3>Ratings</h3>
//             <ul>
//                 {product.ratings.map((rating, index) => (
//                     <li key={index}>
//                         <p>{rating.score}/5</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export default ProductDetails;
//
