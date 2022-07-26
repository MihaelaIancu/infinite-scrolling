import React from "react";
import "./App.css";
import RedditListContainer from "./components/RedditListContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      limit: 25,
      isFetching: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.fetchMoreItems = this.fetchMoreItems.bind(this);
    this.fetchItems = this.fetchItems.bind(this);
  }

  handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    this.fetchMoreItems();
    console.log("Fetch more reddit posts");
  }

  fetchMoreItems() {
    setTimeout(
      this.setState(
        (prevState) => ({
          isFetching: true,
          limit: prevState.limit + 25,
        }),
        this.fetchItems
      ),
      2000
    );
  }

  fetchItems() {
    fetch(`https://www.reddit.com/r/aww/top.json?limit=${this.state.limit}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data.data.children });
        console.log(data);
      });
  }

  componentDidMount() {
    this.fetchItems();
    window.addEventListener("scroll", this.handleScroll);
    return () => window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="App">
        <RedditListContainer posts={this.state.posts} />
        <div className="loading">
          {this.state.isFetching && this.state.limit <= 100 && "Loading..."}
        </div>
      </div>
    );
  }
}

export default App;
