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
    scrollHeight: 0,
  });

  const handleClick = () => {
    router.push("/");
  };

  const handleMenuClick = () => {
    setState((prev) => ({ ...prev, isMenuOpen: !prev.isMenuOpen }));
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log("a");
      if (lastScrollPos.current < window.scrollY) {
        setState((prev) => ({ ...prev, setLogoVisible: false }));
        setState((prev) => ({ ...prev, isMenuOpen: false }));
      } else {
        setState((prev) => ({ ...prev, setLogoVisible: true }));
        setState((prev) => ({ ...prev, isMenuOpen: false }));
      }

      lastScrollPos.current = window.scrollY;
      setState((prev) => ({ ...prev, scrollHeight: window.scrollY }));
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
        isvisible={state.isMenuOpen && window.scrollY === lastScrollPos.current}
        onClick={() => setState((prev) => ({ ...prev, isMenuOpen: false }))}
      />
      <S.Header
        isvisible={state.setLogoVisible}
        scrollheight={state.scrollHeight}
        style={{ opacity: state.isPageLoaded ? 1 : 0 }}
      >
        <S.Container
          isvisible={state.setLogoVisible}
          style={{
            opacity: state.setLogoVisible ? "1" : "0",
          }}
        >
          <S.Logo
            isvisible={state.setLogoVisible}
            onClick={handleClick}
            alt="SpaceX logo"
            src={"/images/spacexLogo.webp"}
          />

          <S.LinkList isvisible={state.setLogoVisible}>
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
          <S.ShopButton
            aria-label='Click to go to spaceX"s shop page'
            target="_blank"
            href="https://shop.spacex.com/"
          >
            SHOP
          </S.ShopButton>
          <div
            style={{
              zIndex: "5",
              position: "absolute",
              right: "50px",
            }}
          >
            <S.MenuButton
              toggled={state.isMenuOpen}
              toggle={handleMenuClick}
              size={17}
              direction={"right"}
              label="Click to open the menu"
            />
          </div>
        </S.ShopNMenu>

        <S.Menu
          isvisible={
            state.setLogoVisible &&
            state.isMenuOpen &&
            window.scrollY === lastScrollPos.current
              ? true
              : false
          }
          style={{
            pointerEvents:
              state.setLogoVisible && state.isMenuOpen ? "all" : "none",
          }}
        >
          <S.MenuLinkList
            isvisible={
              state.setLogoVisible &&
              state.isMenuOpen &&
              window.scrollY === lastScrollPos.current
                ? true
                : false
            }
          >
            <div>
              <div>
                <S.MenuLink
                  target="blank"
                  href="https://www.spacex.com/vehicles/falcon-9/"
                >
                  FALCON 9
                </S.MenuLink>
              </div>
              <div>
                <S.MenuLink
                  target="blank"
                  href="https://www.spacex.com/vehicles/falcon-heavy/"
                >
                  FALCON HEAVY
                </S.MenuLink>
              </div>
              <div>
                <S.MenuLink
                  target="blank"
                  href="https://www.spacex.com/vehicles/dragon/"
                >
                  DRAGON
                </S.MenuLink>
              </div>
              <div>
                <S.MenuLink
                  target="blank"
                  href="https://www.spacex.com/vehicles/starship/"
                >
                  STARSHIP
                </S.MenuLink>
              </div>
              <div>
                <S.MenuLink
                  target="blank"
                  href="https://www.spacex.com/humanspaceflight/"
                >
                  HUMAN SPACEFLIGHT
                </S.MenuLink>
              </div>
              <div>
                <S.MenuLink
                  target="blank"
                  href="https://www.spacex.com/rideshare/"
                >
                  RIDESHARE
                </S.MenuLink>
              </div>
              <div>
                <S.MenuLink
                  target="blank"
                  href="https://www.spacex.com/starshield/"
                >
                  STARSHIELD
                </S.MenuLink>
              </div>
              <div>
                <S.MenuLink target="blank" href="https://www.starlink.com/">
                  STARLINK
                </S.MenuLink>
              </div>
              <div>
                <S.MenuLink
                  target="blank"
                  href="https://www.spacex.com/mission/"
                >
                  MISSION
                </S.MenuLink>
              </div>
              <div>
                <S.MenuLink
                  target="blank"
                  href="https://www.spacex.com/launches/"
                >
                  LAUNCHES
                </S.MenuLink>
              </div>
              <div>
                <S.MenuLink
                  target="blank"
                  href="https://www.spacex.com/careers/"
                >
                  CAREERS
                </S.MenuLink>
              </div>
              <div>
                <S.MenuLink
                  target="blank"
                  href="https://www.spacex.com/updates/"
                >
                  UPDATES
                </S.MenuLink>
              </div>
              <div>
                <S.MenuLink target="blank" href="https://shop.spacex.com/">
                  SHOP
                </S.MenuLink>
              </div>
            </div>
          </S.MenuLinkList>
        </S.Menu>
      </S.Header>
    </>
  );
}
