import React, {useState, useEffect} from 'react';
import '../stylesheets/image.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ImageAPI from '../api/ImageAPI';

const Image = () => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const getImages = async () => {
            const data = await ImageAPI(query);
            setImages(data);
        };
        getImages();
    }, [query]);

    const handleSearch = (query) => {
        setQuery(query);
    }

    const handleInputKeydown = (e) => {
        if (e.keyCode === 13){
            const enter = e.target.value;
            handleSearch(enter);
        }
    };

    const handleSearchIconClick = () => {
        const click = document.querySelector('input[name="search"]').value;
        handleSearch(click);
    };

    return (
        <>
            <div className="main-container">
                <div className='container'>
                    <h1>Image API</h1>
                    <div className="search">
                        <div className="input-container">
                            <input type="text" name="search" placeholder='Search' onKeyDown={handleInputKeydown} />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' onClick={handleSearchIconClick} />
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    {images.map((image) => (
                        <div className="image" key={image.id}>
                            <img src={image.urls.regular} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Image