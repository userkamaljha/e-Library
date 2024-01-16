import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ books, getFavorites }) {
  let placeholder = "https://houseofit.ph/assets/img/no-image.png";
  let navigate = useNavigate();

  ////////////////////// favorites feature code start //////////////////////////
  let [favorites, setfavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setfavorites(storedFavorites);
    }
  }, []);

  let favCheck = (id) => {
    let flag = favorites.some((book) => book.id === id);
    return flag;
  };

  let addFavorites = (book) => {
    let oldFav = [...favorites];
    let newFav = oldFav.concat(book);
    setfavorites(newFav);
    // Update local storage with the new favorites array
    localStorage.setItem("favorites", JSON.stringify(newFav));
  };

  // send to app.jsx
  getFavorites(favorites);

  let removeFavorites = (id) => {
    const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
   const updatedFavorites = currentFavorites.filter((favorite) => favorite.id !== id);
    setfavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

  };

  ////////////////////// favorites feature code ends //////////////////////////


  return (
    <>
      {books?.map((book) => (
        <div
          className={` flex flex-col px-3 lg:px-0 items-center lg:block`}
          key={book.id}
        >
          <div className=" relative hover:scale-110   transition duration-400 cursor-pointer bg-green-100 rounded-lg  object-center h-40 w-full   lg:h-36  text-center my-6">
            <img
              onClick={() => navigate(`/books/${book.id}`)}
              className=" h-full w-full  rounded-lg"
              title={book.volumeInfo.title}
              src={book.volumeInfo.imageLinks?.smallThumbnail || placeholder}
              alt="cover img"
            />
          </div>
          <div className="w-full">
            <h2
              className="truncate capitalize font-semibold"
              title={book.volumeInfo.title}
            >
              {book.volumeInfo.title}
            </h2>
            <p className="truncate cursor-pointer">
              by{" "}
              <span className="text-[#003de7] hover:underline">
                {book.volumeInfo.authors || "not found"}
              </span>{" "}
            </p>
            {favCheck(book.id) ? (
              <button
                className="p-2 bg-gray-100 rounded-md my-2"
                onClick={() => removeFavorites(book.id)}
              >
                {" "}
                Remove Favorites
              </button>
            ) : (
              <button
                className="p-2 bg-gray-100 rounded-md my-2"
                onClick={() => addFavorites(book)}
              >
                {" "}
                Add to Favorites
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
