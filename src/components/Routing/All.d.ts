export interface i_view {
  path: string;
  component: () => JSX.Element;
  showFoot: boolean;
  showNav: boolean;
  isProtected: boolean;
}

export const VIEWS: Array<i_view>