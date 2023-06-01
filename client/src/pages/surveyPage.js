import SurveyMain from '../components/surveyCP/main';
import { useParams } from 'react-router-dom';

const SurveyPage = () => {
  const pageNum = useParams().num;
  console.log(pageNum);
  return <>{pageNum === 'profile' && <SurveyMain />}</>;
};
export default SurveyPage;
