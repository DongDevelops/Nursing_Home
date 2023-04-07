import React from 'react';
import { useEffect, useState } from "react";
import Navbar from '../../components/Navbar'

export default function ToLogin() {
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const { Kakao } = window;
    const initKakao = async () => {
      const jsKey = "8b31b705fbb8f473ea67400296a2f266";
      if (Kakao && !Kakao.isInitialized()) {
        await Kakao.init(jsKey);
        console.log(`kakao 초기화 ${Kakao.isInitialized()}`);
      }
    };
    const kakaoLogin = async () => {
        await Kakao.Auth.login({
            success(res) {
                console.log(res);
                Kakao.Auth.setAccessToken(res.access_token);
                console.log("카카오 로그인 성공");
                Kakao.API.request({
                    url: "/v2/user/me",
                    success(res) {
                        console.log("카카오 인가 요청 성공");
                        setIsLogin(true);
                        const kakaoAccount = res.kakao_account;
                        localStorage.setItem("email", kakaoAccount.email);
                        localStorage.setItem(
                            "profileImg",
                            kakaoAccount.profile.profile_image_url
                        );
                        localStorage.setItem("nickname", kakaoAccount.profile.nickname);
                    },
                    fail(error) {
                        console.log(error);
                    },
                });
            },
            fail(error) {
                console.log(error);
            },
        });
    };
  
    const kakaoLogout = () => {
      Kakao.Auth.logout((res) => {
        console.log(Kakao.Auth.getAccessToken());
        console.log(res);
        localStorage.removeItem("email");
        localStorage.removeItem("profileImg");
        localStorage.removeItem("nickname");
        setUser(null);
      });
    };
  
    useEffect(() => {
      initKakao();
      Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false);
    }, []);
  
    useEffect(() => {
      console.log(isLogin);
      if (isLogin) {
        setUser({
          email: localStorage.getItem("email"),
          profileImg: localStorage.getItem("profileImg"),
          nickname: localStorage.getItem("nickname"),
        });
      }
    }, [isLogin]);
  
  
    return (
        <div>
            <Navbar></Navbar>
        
            <div className="App">
                {user ? (
                    <div>
                    <button onClick={kakaoLogout}>로그아웃</button>
                    <h4>카카오 로그인 성공!</h4>
                    <h4>카카오 닉네임: "{user.nickname}"</h4>
                    </div>
                ) : (
                    <button onClick={kakaoLogin}>
                    <img
                        src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
                        width="222"
                        alt="카카오 로그인 버튼"
                    />
                    </button>
                )}
            </div>
        </div>
    );
}
