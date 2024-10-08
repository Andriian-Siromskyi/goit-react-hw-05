import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../../getMovies";
import style from "./MovieReviews.module.css";
import { Circles } from "react-loader-spinner";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      setLoading(true);
      setError(null);
      try {
        const response = await getReviews(movieId);
        setReviews(response.data.results);
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2 className={style.title}>Movie Reviews</h2>
      {loading && (
        <div className={style.loader}>
          <Circles
            height="80"
            width="80"
            color="orangered"
            ariaLabel="circles-loading"
            visible={true}
          />
        </div>
      )}
      {error && <p className={style.error}>{error}</p>}{" "}
      {!loading && reviews.length > 0 && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id} style={{ marginBottom: "20px" }}>
              <h3>{review.author}</h3>
              <p className={style.description}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {!loading && reviews.length === 0 && !error && (
        <p className={style.descriptionMsg}>
          No reviews available for this movie.
        </p>
      )}
    </div>
  );
}
