import { keyframes } from "styled-components";

//-----------------------------------------//

export const FadeIn = keyframes`
  from {
    transform: scaleY(0);
    transform-origin: bottom;
  }

 to {
    transform: scaleY(1);
    transform-origin: bottom;
 }
`;

export const FadeOut = keyframes`
    from {
    transform: scaleY(1);
  }

 to {
    transform: scaleY(0);
 }
`;

//-----------------------------------------//

export const HeaderFadeIn = keyframes`
 from {
    transform: scaleY(0);
    transform-origin: top;
  }

 to {
    transform: scaleY(1);
    transform-origin: top;
 }
`;

export const HeaderFadeOut = keyframes`
  from {
    transform: scaleY(1);
  }

 to {
    transform: scaleY(0);
     }
`;

//-----------------------------------------//

export const MenuFadeIn = keyframes`
  from {
    transform: scaleX(0);
    transform-origin: right;
  }

 to {
    transform: scaleX(1);
    transform-origin: right;
     }
`;

export const MenuFadeOut = keyframes`
  from {
    transform: scaleX(1);
  }

 to {
    transform: scaleX(0);
     }
`;

//-----------------------------------------//

export const BorderBottomIn = keyframes`
  from {
    transform: scaleX(0);
    transform-origin: left;
    
  }
  to {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export const BorderBottomOut = keyframes`
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
`;

//-----------------------------------------//
