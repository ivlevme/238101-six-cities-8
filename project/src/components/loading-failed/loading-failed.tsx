import type { LoadingFailedProps } from './types';

function LoadingFailed({ text }: LoadingFailedProps): JSX.Element {
  return (
    <div
      style={{
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center',
      }}
    >
      <span>{text}</span>
    </div>
  );
}

export default LoadingFailed;
