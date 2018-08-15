import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import List from '../components/News/List'

class News extends Component {
    
    static async getInitialProps({ pathname, query }) {
        return { pathname, query }
    }

    state = {
        newses: {},
        loaded: false
    }

    componentDidMount(){
        this.getData()
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.query.country != this.props.query.country) {
            this.setState({ loaded: false })   
        }
    }

    async getData(){
        await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.query.country}&apiKey=678a3681cdf74ed0877a9b95d127488a`)
            .then(res => res.json())
            .then(data => this.setState({ newses: data, loaded: true }))
    }

    loadData(){
        if (this.state.loaded) {
            return this.state.newses.articles.map(news => <List key={news.title} data={news} />)
        } else {
            this.getData()
            return <h4>Loading ...</h4>
        }
    }

    loadCountryName(){
        if (this.props.query.country == 'id') {
            return 'Indonesia'
        } else if (this.props.query.country == 'us'){
            return 'America'
        } else if (this.props.query.country == 'jp') {
            return 'Japan'
        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 style={{marginTop: 20}}>
                                News from {this.loadCountryName()}
                            </h3>
                        </div>
                    </div>
                    {this.loadData()}
                </div>
                <Footer />
            </div>
        );
    }
}

export default News;
