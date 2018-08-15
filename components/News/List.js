export default (props) => (
    <div className="row" style={{ minHeight: 100, backgroundColor: '#e3f2fd', padding: 10, marginBottom: 5 }}>
        <div className="col-md-2">
            <img src={props.data.urlToImage} alt="news image" className="img-thumbnail" style={{ maxHeight: 100 }} />
        </div>
        <div className="col-md-6 text-left">
            <a href={props.data.url} target="_blank">
                <h4>
                    {props.data.title}
                </h4>
            </a>
            <p className="lead">
                {props.data.description}
            </p>
            <footer className="blockquote-footer"><cite title="Source Title">{props.data.author}, {props.data.source.name}</cite></footer>
        </div>
        <div className="col-md-4">
            <p className="text-right">
                {props.data.publishedAt}
            </p>
        </div>
    </div>
)