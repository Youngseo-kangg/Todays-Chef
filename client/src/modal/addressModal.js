import { ModalBackground, DaumPostCodeWrapper } from '../styled/styledModal';
import DaumPostCode from 'react-daum-postcode';

function AddressModal({
  setSearchAddress,
  setAddress,
  setPostal,
  setAddressErr,
}) {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''; //fullAddress -> 전체 주소반환
      setAddress(fullAddress); // 도로명주소값 넣기
      setPostal(data.zonecode); // 우편주소 넣기
      setAddressErr(true);
      setSearchAddress(false); // modal끄기
    }
  }; // 다음 주소 검색 API
  const postCodeStyle = {
    width: '100%',
    height: '400px',
  };
  return (
    <>
      <ModalBackground onClick={() => setSearchAddress(false)}>
        <DaumPostCodeWrapper>
          <DaumPostCode
            onComplete={handleComplete}
            setAddress={setAddress}
            style={postCodeStyle}
          />
        </DaumPostCodeWrapper>
      </ModalBackground>
    </>
  );
}

export default AddressModal;
