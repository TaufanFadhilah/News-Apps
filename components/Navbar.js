import Link from 'next/link'

export default () => (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <Link href="/">
                <a className="navbar-brand">News Apps</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href="/">
                            <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link prefetch href={{pathname: '/news', query: {country: 'id'}}}>
                            <a className="nav-link">Indonesia</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link prefetch href={{ pathname: '/news', query: { country: 'us' } }}>
                            <a className="nav-link">America</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link prefetch href={{ pathname: '/news', query: { country: 'jp' } }}>
                            <a className="nav-link">Japan</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)