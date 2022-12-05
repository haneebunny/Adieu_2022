const Login = () => {
  // 등록한 redirectUri를 매개변수로 넣어준다.
  function kakaoLogin() {
    window.Kakao.Auth?.authorize({
      redirectUri: "http://localhost:3000/",
    });
  }

  console.log(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  console.log(process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
  return (
    <div>
      <button onClick={kakaoLogin}>카카오 로그인</button>
    </div>
  );
};

export default Login;
