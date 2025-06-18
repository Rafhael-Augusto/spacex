"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import * as S from "./styles";

export default function Header() {
  const router = useRouter();
  const lastScrollPos = useRef(0);

  const [state, setState] = useState({
    setLogoVisible: true,
    isMenuOpen: false,
    isPageLoaded: false,
  });

  const handleClick = () => {
    router.push("/");
  };

  const handleMenuClick = () => {
    setState((prev) => ({ ...prev, isMenuOpen: !prev.isMenuOpen }));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (lastScrollPos.current < window.scrollY) {
        setState((prev) => ({ ...prev, setLogoVisible: false }));
        setState((prev) => ({ ...prev, isMenuOpen: false }));
      } else {
        setState((prev) => ({ ...prev, setLogoVisible: true }));
        setState((prev) => ({ ...prev, isMenuOpen: false }));
      }

      lastScrollPos.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setState((prev) => ({ ...prev, isPageLoaded: true }));
  }, []);

  return (
    <>
      <S.CloseUis
        onClick={() => setState((prev) => ({ ...prev, isMenuOpen: false }))}
        style={{
          display: state.isMenuOpen ? "block" : "none",
        }}
      />
      <S.Header
        isvisible={state.setLogoVisible}
        style={{ opacity: state.isPageLoaded ? 1 : 0 }}
      >
        <S.Container
          isvisible={state.setLogoVisible}
          style={{
            opacity: state.setLogoVisible ? "1" : "0",
          }}
        >
          <S.Logo
            onClick={handleClick}
            alt="SpaceX logo"
            src={"/images/spacexLogo.webp"}
          />

          <S.LinkList>
            <div>
              <S.Link
                target="_blank"
                href="https://www.spacex.com/vehicles/falcon-9/"
              >
                FALCON 9
              </S.Link>
            </div>
            <div>
              <S.Link
                target="blank"
                href="https://www.spacex.com/vehicles/falcon-heavy/"
              >
                FALCON HEAVY
              </S.Link>
            </div>
            <div>
              <S.Link
                target="_blank"
                href="https://www.spacex.com/vehicles/dragon/"
              >
                DRAGON
              </S.Link>
            </div>
            <div>
              {" "}
              <S.Link
                target="_blank"
                href="https://www.spacex.com/vehicles/starship/"
              >
                STARSHIP
              </S.Link>
            </div>
            <div>
              <S.Link
                target="_blank"
                href="https://www.spacex.com/humanspaceflight/"
              >
                HUMAN SPACEFLIGHT
              </S.Link>
            </div>
            <div>
              <S.Link target="_blank" href="https://www.spacex.com/rideshare/">
                RIDESHARE
              </S.Link>
            </div>
            <div>
              <S.Link target="_blank" href="https://www.spacex.com/starshield/">
                STARSHIELD
              </S.Link>
            </div>
            <div>
              <S.Link target="_blank" href="https://www.starlink.com/">
                STARLINK
              </S.Link>
            </div>
          </S.LinkList>
        </S.Container>
        <S.ShopNMenu
          isvisible={state.setLogoVisible}
          style={{
            opacity: state.setLogoVisible ? "1" : "0",
          }}
        >
          <S.ShopButton target="_blank" href="https://shop.spacex.com/">
            SHOP
          </S.ShopButton>
          <div style={{ zIndex: "5" }}>
            <S.MenuButton
              toggled={state.isMenuOpen}
              toggle={handleMenuClick}
              size={17}
              direction={"right"}
            />
          </div>
        </S.ShopNMenu>

        <S.Menu
          isvisible={state.setLogoVisible && state.isMenuOpen ? true : false}
        >
          <span> </span>
        </S.Menu>
      </S.Header>
    </>
  );
}
