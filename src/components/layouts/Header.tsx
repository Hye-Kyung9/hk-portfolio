import logo from '../../assets/images/common/logo-blue.svg';

export default function Header() {
  return (
    <div style={{ display: 'flex' }}>
      <img src={logo} style={{ width: '200px' }} alt="logo" />
      헤더영역입니다
    </div>
  );
}
