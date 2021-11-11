import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import type { SpinnerProps } from './types';

function Spinner({ text }: SpinnerProps): JSX.Element {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
        />
        <span>{text}</span>
      </div>
    </div>
  );
}

export default Spinner;
