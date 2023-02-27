const Author = ({phraseData}) => {
    return (
        <div className="author__container">
            <p>~{phraseData.author}</p>
        </div>
    )
}

export default Author;