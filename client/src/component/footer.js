import { FooterWrap, FooterList } from '../styled/styleFooter';
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineGithub,
} from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { openFailModal } from '../features/user/modal';
import { useDispatch } from 'react-redux';

function Footer() {
  const dispatch = useDispatch();
  return (
    <FooterWrap>
      <FooterList>
        <ul id='leftFooter'>
          <li>
            <h2>TodaysChef</h2>
            <p>© 2020 Team MouseGamza</p>
          </li>
          <li>
            <AiOutlineYoutube
              size={35}
              onClick={() =>
                dispatch(openFailModal({ message: '아직 준비중입니다.' }))
              }
            />
            <AiOutlineInstagram
              size={35}
              onClick={() =>
                dispatch(openFailModal({ message: '아직 준비중입니다.' }))
              }
            />
            <FiTwitter
              size={35}
              onClick={() =>
                dispatch(openFailModal({ message: '아직 준비중입니다.' }))
              }
            />
            <AiOutlineGithub
              size={35}
              onClick={() =>
                window.open(
                  `https://github.com/MouseGamza/Todays-Chef`,
                  '_blank'
                )
              }
            />
          </li>
        </ul>

        <ul id='rightFooter'>
          <li
            onClick={() =>
              window.open(`https://github.com/Youngseo-kangg`, '_blank')
            }
          >
            <AiOutlineGithub size={35} />
            <p>강영서</p>
          </li>
          <li
            onClick={() =>
              window.open(`https://github.com/Lee-Na-eun`, '_blank')
            }
          >
            <AiOutlineGithub size={35} />
            <p>이나은</p>
          </li>
        </ul>
      </FooterList>
    </FooterWrap>
  );
}

export default Footer;
