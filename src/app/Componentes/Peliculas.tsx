import React from 'react';
import '../css/peliculas.css';

interface PeliculasComponentProps {

}

const PeliculasComponent: React.FC<PeliculasComponentProps> = () => {
    return (
        <div className="Peliculas">
            <h2>Popular</h2>
            <div className="GrillaPeliculas">
                <div className="PeliculaContainer">
                    <img src="https://horizontes365.com/assets/img/imgnoticias/img_1720557839_5583.jpg" alt="Shrek 5" />
                    <h3>Shrek 5</h3>
                    <span>Rating: 9.0</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://pics.filmaffinity.com/Gladiator-331143379-large.jpg" alt="Gladiator" />
                    <h3>Gladiator</h3>
                    <span>Rating: 8.5</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://m.media-amazon.com/images/M/MV5BZmU1ZGMyYWQtNjg4Yi00ZGJlLWEyOGYtZTExZTNkMjA5YTNjXkEyXkFqcGc@._V1_.jpg?" alt="One Fast Movie" />
                    <h3>One Fast Movie</h3>
                    <span>Rating: 7.5</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://m.media-amazon.com/images/M/MV5BZjM2M2E3YzAtZDJjYy00MDhkLThiYmItOGZhNzQ3NTgyZmI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="Wild Robot" />
                    <h3>Wild Robot</h3>
                    <span>Rating: 8.0</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/tidalwave_payoff_poster_las_0a47c6a2.jpeg" alt="Deadpool Wolverine" />
                    <h3>Deadpool Wolverine</h3>
                    <span>Rating: 9.5</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/napoleaon-ok-652bad0c18878.jpg" alt="Napoleon" />
                    <h3>Napoleon</h3>
                    <span>Rating: 7.0</span>
                </div>
            </div>

            <h2>Now Paying</h2>
            <div className="GrillaPeliculas">
                <div className="PeliculaContainer">
                    <img src="https://m.media-amazon.com/images/M/MV5BNThlY2NkYmMtNTFhNi00MzBiLWJmNzEtZjk5MzYwYWU2MjllXkEyXkFqcGc@._V1_.jpg" alt="Lord of War" />
                    <h3>Lord of War</h3>
                    <span>Rating: 8.0</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://m.media-amazon.com/images/M/MV5BNDA4Nzg1NjQ2NV5BMl5BanBnXkFtZTcwMDYwNTgyMQ@@._V1_FMjpg_UX1000_.jpg" alt="House of Wax" />
                    <h3>House of Wax</h3>
                    <span>Rating: 5.0</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2NrOjxVJGEU7GieNjaPOsem9_j1VKZLTNQ&s" alt="Crash" />
                    <h3>Crash</h3>
                    <span>Rating: 3.0</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://www.lanaciondigital.es/wp-content/uploads/2022/06/bso-munich.jpg" alt="Munich" />
                    <h3>Munich</h3>
                    <span>Rating: 6.0</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://img.aullidos.com/imagenes/caratulas/another.jpg" alt="Another" />
                    <h3>Another</h3>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/el-especialista-poster-662ba91800a75.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Especialista" />
                    <h3>Especialista</h3>
                    <span>Rating: 2.0</span>
                </div>
            </div>

            <h2>Upcoming</h2>
            <div className="GrillaPeliculas">
                <div className="PeliculaContainer">
                    <img src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/2014/5/w1280/1t0FcqSsBs51PDhDkFd7EiEytU6.jpg" alt="Godzilla" />
                    <h3>Godzilla</h3>
                    <span>Rating: 8.0</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/H2DVBWCFAZGYDFWWN4TEASWRZI.jpg" alt="Oppenheimer" />
                    <h3>Oppenheimer</h3>
                    <span>Rating: 9.0</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://www.pantalla90.es/wp-content/uploads/2023/03/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" alt="John Wick" />
                    <h3>John Wick 4</h3>
                    <span>Rating: 9.0</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://es.web.img2.acsta.net/pictures/23/07/20/11/29/5479684.jpg" alt="Barbie" />
                    <h3>Barbie</h3>
                    <span>Rating: 2.0</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/46124-884878-20240522093651.jpg" alt="Furiosa" />
                    <h3>Furiosa</h3>
                    <span>Rating: 8.0</span>
                </div>
                <div className="PeliculaContainer">
                    <img src="https://pics.filmaffinity.com/Detonantes-916163719-large.jpg" alt="Trigger Warning" />
                    <h3>Trigger Warning</h3>
                    <span>Rating: 1.0</span>
                </div>
            </div>
        </div>

    );
}

export default PeliculasComponent;