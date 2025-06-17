"use client";

import { useRouter } from "next/navigation";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const router = useRouter();
  const lastScrollPos = useRef(0);

  const [state, setState] = useState({
    setLogoVisible: true,
    setBackgroundVisible: false,
  });

  const handleClick = () => {
    router.push("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (lastScrollPos.current < window.scrollY) {
        setState((prev) => ({ ...prev, setLogoVisible: false }));
      } else {
        setState((prev) => ({ ...prev, setLogoVisible: true }));
      }

      lastScrollPos.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Header
      style={{
        opacity: state.setLogoVisible ? "1" : "0",
      }}
    >
      <S.Container>
        <S.Logo
          onClick={handleClick}
          alt="SpaceX logo"
          src={"/images/spacexLogo.png"}
        />

        <S.LinkList>
          <S.Link
            target="_blank"
            href="https://www.spacex.com/vehicles/falcon-9/"
          >
            FALCON 9
          </S.Link>
          <S.Link
            target="blank"
            href="https://www.spacex.com/vehicles/falcon-heavy/"
          >
            FALCON HEAVY
          </S.Link>
          <S.Link
            target="_blank"
            href="https://www.spacex.com/vehicles/dragon/"
          >
            DRAGON
          </S.Link>
          <S.Link
            target="_blank"
            href="https://www.spacex.com/vehicles/starship/"
          >
            STARSHIP
          </S.Link>
          <S.Link
            target="_blank"
            href="https://www.spacex.com/humanspaceflight/"
          >
            HUMAN SPACEFLIGHT
          </S.Link>
          <S.Link target="_blank" href="https://www.spacex.com/rideshare/">
            RIDESHARE
          </S.Link>
          <S.Link target="_blank" href="https://www.spacex.com/starshield/">
            STARSHIELD
          </S.Link>
          <S.Link target="_blank" href="https://www.starlink.com/">
            STARLINK
          </S.Link>
        </S.LinkList>
      </S.Container>
      <div>
        <S.ShopButton target="_blank" href="https://shop.spacex.com/">
          SHOP
        </S.ShopButton>
        <S.MenuButton>
          <S.HamburgerPiece className="opened" />
          <S.HamburgerPiece className="opened" />
          <S.HamburgerPiece className="opened" />
        </S.MenuButton>
      </div>
    </S.Header>
  );
}
