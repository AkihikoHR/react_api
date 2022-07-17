import { useState, useEffect } from "react";

export const Booklist = ({ language, getData }) => {

    const [bookData, setBookData] = useState(null);

    console.log({ bookData });

    useEffect(() => {
        const result = getData?.(language).then((response) =>
            setBookData(response)
        );
    }, [language, getData]);

    return (
        <ul>
            {bookData === null ? (
                <p>now loading...</p>
            ) : (
                bookData.data.items.map((x, index) => (
                    <li key={index}>
                        <li>タイトル：{x.volumeInfo.title}</li>
                        <li>著者：{x.volumeInfo.authors}</li>
                        <img src={x.volumeInfo.imageLinks.thumbnail} />
                    </li>
                ))
            )}
        </ul>
    );
};