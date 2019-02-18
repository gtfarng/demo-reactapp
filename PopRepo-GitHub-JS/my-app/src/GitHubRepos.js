import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Repo = ({ repo, index }) =>
  <tr>
    <td>{index + 1}</td>
    <td className="repo-name">{repo.name}</td>
    <td>{repo.stargazers_count} Stars</td>
  </tr>;

export default class GitHubRepos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get(
        window.encodeURI(
          `https://api.github.com/search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories`,
        ),
      )
      .then(response => {
        const repos = response.data.items;
        this.setState({
          repos,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          error: error,
          loading: false,
        });
      });
  }

  renderLoading() {
    return (
      <div>
        Loading...
      </div>
    );
  }

  renderError() {
    return (
      <div>
        <div>
          Sorry, an error ocurred: {this.state.error.response.data.message}
        </div>
      </div>
    );
  }

  renderList() {
    const { error, repos } = this.state;

    if (error) {
      console.log(error);
      return this.renderError();
    }

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Repo Name</th>
            <th>Stars Count</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo, index) =>
            <Repo repo={repo} index={index} key={repo.id} />,
          )}
        </tbody>
      </table>
    );
  }

  render() {
    return this.state.loading ? this.renderLoading() : this.renderList();
  }
}
