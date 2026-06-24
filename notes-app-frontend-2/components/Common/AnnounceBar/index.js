import React, { Component } from 'react';
import Link from 'next/link';
import styles from './AnnounceBar.module.scss';
import getBaseURL from '../../../lib/utils/storage';

class AnnounceBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      host: '/',
    };
  }

  componentDidMount() {
    this.setState({ host: getBaseURL() });
  }

  render() {
    const { host } = this.state;

    return (
      <div className={styles.announce_bar}>
        <p>
          Web Server API:
          {' '}
          <Link
            href={host}
            target="__blank"
          >
            {host}
          </Link>
        </p>
      </div>
    );
  }
}

export default AnnounceBar;
