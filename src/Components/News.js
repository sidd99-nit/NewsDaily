import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaultProps={
        country:'in',
        pageSize:20,
    }

    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }


    articles=[]
    
    constructor(props){
        super(props);
        console.log("Hello I'm a Constructor from News Component");
        this.state={
            articles:this.articles,
            loading:true,
            page:1 ,
            totalResults:0
        }

        document.title=this.props.category+" - NewsDaily";
        }

      async componentDidMount(){
        this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=387a6570d2a34092adbc2518eb7a85e9&page=2&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        this.props.setProgress(30);
        let parsedData=await data.json();
        this.props.setProgress(70);
        this.setState({articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
        })
        this.props.setProgress(100);
      }

    //    handleNext=async ()=>{
        
    //     if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

    //     }else{
    //         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&&apiKey=387a6570d2a34092adbc2518eb7a85e9&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //         this.setState({loading:true});
    //         let data=await fetch(url);
    //         let parsedData=await data.json();
    //         this.setState({loading:false});
    //             this.setState({
    //             page:this.state.page+1,
    //             articles:parsedData.articles,
    //             totalResults:parsedData.totalResults,

    //             })
    //     }
       
    //     }

    //    handlePrev=async ()=>{

    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=387a6570d2a34092adbc2518eb7a85e9&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true});
    //     let data=await fetch(url);
    //     let parsedData=await data.json();
    //     this.setState({loading:false});
    //     this.setState({
    //         page:this.state.page-1,
    //         articles:parsedData.articles,
    //         totalResults:parsedData.totalResults,

    //         })
    //     }

        fetchMoreData = async () => {
        this.setState({page:this.state.page+1});
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=387a6570d2a34092adbc2518eb7a85e9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults
        })
        
      };

    

  render() {
    return (
      <>
            <h3 className="text-center" style={{margin:"35px 0px"}}>NewsDaily - Top {this.props.category} Headlines</h3>
            {this.state.loading && <Spinner/>}
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length!==this.state.totalResults}
                loader={<Spinner/>}
            >
            <div className="container">
            <div className="row my-4">
                {this.state.articles.map((element)=>{return(
                          <div className="col-md-4" key={element.url}>
                          <NewsItem  title={element.title?element.title:" "} description={element.description?element.description:" "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:""} date={element.publishedAt} source={element.source.name}/>
                          </div>
                )})}
            </div>  
            </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} className="btn btn-info btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
                <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-info btn-dark" onClick={this.handleNext}>Next &rarr;</button>
            </div> */}
        </>
    )
  }
}

export default News
