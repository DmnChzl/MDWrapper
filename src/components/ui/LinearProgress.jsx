import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { bool, number } from 'prop-types';
import { MDCLinearProgress } from '@material/linear-progress/dist/mdc.linearProgress';
import '@material/linear-progress/dist/mdc.linear-progress.css';

/**
 * MD Component: LinearProgress
 *
 * @param {Boolean} buffered Buffered Style
 * @param {Boolean} indeterminate Indeterminate Style
 * @param {Boolean} reversed Reversed Style
 * @param {Number} value Current Value
 */
class LinearProgress extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCLinearProgress(this.mdLinearProgress);
    this.syncProgress();
  }

  componentDidUpdate() {
    this.syncProgress();
  }

  syncProgress = () => {
    const { buffered, value } = this.props;

    this.mdComponent.progress = value / 100;
    const buffer = (((100 - value) / 2) + value) / 100;
    this.mdComponent.buffer = buffered ? buffer : 100;
  }

  render() {
    const { buffered, indeterminate, reversed } = this.props;

    // Class(es)
    const mdcIndeterminate = 'mdc-linear-progress--indeterminate';
    const mdcReversed = 'mdc-linear-progress--reversed';

    return (
      <div
        ref={element => { this.mdLinearProgress = element }}
        className={classNames('mdc-linear-progress',
          { [mdcIndeterminate]: indeterminate },
          { [mdcReversed]: reversed })}
        role="progressbar">
        {buffered &&
          <div className="mdc-linear-progress__buffering-dots"></div>}
        <div className="mdc-linear-progress__buffer"></div>
        <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span className="mdc-linear-progress__bar-inner"></span>
        </div>
        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span className="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>
    );
  }
}

LinearProgress.defaultProps = {
  buffered: false,
  indeterminate: false,
  reversed: false,
  value: 50
};

LinearProgress.propTypes = {
  buffered: bool,
  indeterminate: bool,
  reversed: bool,
  value: number
};

export default LinearProgress;
