import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {

    const [articles,setArticles]=useState([]);
    const [loading,setLoading]=useState(true);
    const [page,setPage]=useState(1);
    const [totalResults,setTotalResults]=useState(0);
     
    const updateNews=async()=>{
      props.setProgress(10);
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=387a6570d2a34092adbc2518eb7a85e9&page=1&pageSize=${props.pageSize}`;
      setLoading(true);
      let data=await fetch(url);
      props.setProgress(30);
      let parsedData=await data.json();
      props.setProgress(70);

      setArticles(parsedData.articles);
      setLoading(false);
      setTotalResults(parsedData.totalResults);
      props.setProgress(100);
    }

     useEffect(()=>{
        updateNews();
    },[])


       const fetchMoreData = async () => {
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=387a6570d2a34092adbc2518eb7a85e9&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data=await fetch(url);
        let parsedData=await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
       };

  
    return (
      <>
            <h3 className="text-center" style={{margin:"35px 0px", marginTop:"90px"}}>NewsDaily - Top {props.category} Headlines</h3>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length!==totalResults}
                loader={<Spinner/>}
            >
            <div className="container">
            <div className="row my-4">
                {articles.map((element)=>{return(
                          <div className="col-md-4" key={element.url}>
                          <NewsItem  title={element.title?element.title:" "} description={element.description?element.description:" "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:""} date={element.publishedAt} source={element.source.name}/>
                          </div>
                )})}
            </div>  
            </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                <button type="button" disabled={page<=1} className="btn btn-info btn-dark" onClick={handlePrev}>&larr; Previous</button>
                <button type="button" disabled={page+1>Math.ceil(totalResults/props.pageSize)} className="btn btn-info btn-dark" onClick={handleNext}>Next &rarr;</button>
            </div> */}
        </>
    )
  
}


News.defaultProps={
  country:'in',
  pageSize:20,
}

News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}


export default News
