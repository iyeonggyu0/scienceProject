import { useState } from 'react';
import { MainStyle } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const SurveyMain = () => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  const clickButtonHandler = () => {
    console.log(studentId);
    console.log(name);
    console.log(gender);
  };

  return (
    <MainStyle className="flexCenter" gender={gender}>
      <div className="flexWidthCenter">
        <div className="flexHeightCenter">
          <span>이름</span>
          <input
            type="text"
            value={name || ''}
            onChange={(e) =>
              setName(
                e.target.value.length < 5 ? e.target.value.replace(/[^ㄱ-ㅎ가-힣]/g, '') : name,
              )
            }
          />
        </div>
        <div className="flexHeightCenter">
          <span>학번</span>
          <input
            type="text"
            value={studentId || ''}
            onChange={(e) =>
              setStudentId(
                e.target.value.length < 6 ? e.target.value.replace(/[^0-9]/g, '') : studentId,
              )
            }
          />
        </div>
        <div className="flexHeightCenter">
          <span>성별</span>
          <div className="flexHeightCenter">
            {/* 남성 */}
            <span
              onClick={() => setGender('남')}
              style={{ border: gender === '남' ? '2px solid #6b96a9' : '1px solid #6b96a9' }}
            >
              남 <FontAwesomeIcon icon={solid('mars')} />
            </span>
            {/* 여성 */}
            <span
              onClick={() => setGender('여')}
              style={{ border: gender === '여' ? '2px solid #6b96a9' : '1px solid #6b96a9' }}
            >
              여 <FontAwesomeIcon icon={solid('venus')} />
            </span>
          </div>
        </div>
        <div className="flexCenter" onClick={clickButtonHandler}>
          다음
        </div>
      </div>
    </MainStyle>
  );
};
export default SurveyMain;
