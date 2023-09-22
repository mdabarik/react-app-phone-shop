import { useEffect, useState } from "react";
import Favorite from "../../components/Favorite/Favorite";

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [notFound, setFound] = useState(false);
    const [show, setShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorite'));
        if (favoriteItems) {
            setFavorites(favoriteItems)
            const total = favoriteItems.reduce((preValue, currItem) => preValue + currItem.price, 0);
            setTotalPrice(total.toFixed(2));
        } else {
            setFound(!notFound);
        }
    }, [])

    const handleDelete = () => {
        localStorage.clear();
        setFavorites([]);
        setFound('No data found')
        setTotalPrice(0);
    }

    const handleShow = () => {
        if (favorites.length > 4) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    return (
        <div>
            <h2>Favorites: {favorites.length}</h2>
            {
                favorites.length > 0 && <button onClick={handleDelete} className="px-5 bg-green-200 block mx-auto">Delete All Favorite</button>
            }

            <h3 className="text-2xl text-red-300 font-semibold">
                Total Price:
                {
                    totalPrice
                }
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    notFound ?
                        <h2 className="text-2xl text-red-500 font-bold"> No data found</h2>
                        :
                        show ? favorites.map(favorite => <Favorite key={favorite.id} favorite={favorite}></Favorite>)
                        : favorites.slice(0,2).map(favorite => <Favorite key={favorite.id} favorite={favorite}></Favorite>)
                }
            </div>

            {
                favorites.length < 2 ? "" :
                show ? <button onClick={() => setShow(!show)} className="px-5 bg-green-200 block mx-auto">See less button</button> :
                <button onClick={() => setShow(!show)} className="px-5 bg-green-200 block mx-auto">See more button</button>

            }

        </div>
    );
};

export default Favorites;