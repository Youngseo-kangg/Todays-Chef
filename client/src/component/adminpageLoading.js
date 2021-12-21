import { Loading } from '../styled/styleAdminpage';
function LoadingIndicator() {
  return (
    <Loading>
      <div class='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Loading>
  );
}

export default LoadingIndicator;
