import { Link } from 'react-router-dom';
import { NotFountWrapper } from './style';

const NotFountPage = () => {
  return (
    <NotFountWrapper>
      <h1>404</h1>
      <p>We can't find that page.</p>
      <Link to="/">
        <div>Home</div>
      </Link>
    </NotFountWrapper>
  );
};
export default NotFountPage;
